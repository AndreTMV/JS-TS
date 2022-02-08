// Example: node badge-maker.js -i badge.svg --name "Jamal Richards" --title "Product Manager" --organization "Galaxy Technologies" -o JamalRichards.svg

// Command line argument flags
const LONG_INPUT = "--input";
const SHORT_INPUT = "-i";

const LONG_CSV = "--csv";
const SHORT_CSV = "-c";

const LONG_NAME = "--name";
const SHORT_NAME = "-n";
const LONG_TITLE = "--title";
const SHORT_TITLE = "-t";
const LONG_ORG = "--organization";
const SHORT_ORG = "-g";

const LONG_OUTPUT = "--output";
const SHORT_OUTPUT = "-o";

// Command line arguments
const ARGS = process.argv;

var badgeFilename;
var csvFilename;

var fullName;
var title;
var organization;

var outputFilename;

// TODO 1: Complete the function to parse the command line flags and arguments
function parseArgs() {
  for (let i = 2; i < ARGS.length; i++) {
    let arg = ARGS[i];

    if (arg == LONG_CSV || arg == SHORT_CSV) {
      i = i + 1;
      csvFilename = ARGS[i];
    } else if (arg == LONG_INPUT || arg == SHORT_INPUT) {
      i = i + 1;
      badgeFilename = ARGS[i];
    } else if (arg == LONG_NAME || arg == SHORT_NAME) {
      i = i + 1;
      fullName = ARGS[i];
    } else if (arg == LONG_TITLE || arg == SHORT_TITLE) {
      i = i + 1;
      title = ARGS[i];
    } else if (arg == LONG_ORG || arg == SHORT_ORG) {
      i = i + 1;
      organization = ARGS[i];
    } else if (arg == LONG_OUTPUT || arg == SHORT_OUTPUT) {
      i = i + 1;
      outputFilename = ARGS[i];
    } else {
      console.error("unknown argument: ", arg);
      process.exit(1);
    }
  }

  validateArgs();
}

// TODO 2: Complete the function to check that we have all the values we need to make a badge
function validateArgs() {
  // badge svg is always needed
  if (!badgeFilename) {
    console.error("missing badge filename argument");
    process.exit(1);
  }

  // csv argument (batch mode) takes precedence over single badge mode
  if (csvFilename) {
    // output file name is always required
    if (!outputFilename) {
      console.error("missing output filename argument");
      process.exit(1);
    }
    // ingored argumetns
    if (fullName) {
      console.error("warning: full name argument ignored");
    }
    if (title) {
      console.error("warning: title argument ignored");
    }
    if (organization) {
      console.error("warning: organization argument ignored");
    }
  } else {
    //badge mode
    if (!fullName) {
      console.error("missing full name argument");
      process.exit(1);
    } else if (!title) {
      console.error("missing title argument");
      process.exit(1);
    } else if (!organization) {
      console.error("missing organization argument");
      process.exit(1);
    } else if (!outputFilename) {
      console.error("missing output filename argument");
      process.exit(1);
    }
  }
}

// Function: Creates the badge
function makeBadge(badgeFile, name, title, organization, outputFile) {
  const fs = require("fs");

  let svg = fs.readFileSync(badgeFile, "utf-8");

  // TODO 3: Replace the appropriate fields in the svg with the arguments provided
  svg = svg.replace("Full Name", name);
  svg = svg.replace("Title", title);
  svg = svg.replace("Organization", organization);

  fs.writeFileSync(outputFile, svg);
}

function makeBadges(csvFilePath, badgeFile, outputDir) {
  // create the output dir if it doesn't exits
  const fs = require("fs");
  fs.mkdirSync(outputDir, { recursive: true });
  const csv = require("csvtojson");
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      jsonObj.forEach((attendee) => {
        let outputFilename = outputDir + "/" + attendee["name"] + ".svg";
        makeBadge(
          badgeFile,
          attendee["name"],
          attendee["title"],
          attendee["organization"],
          outputFilename
        );
      });
    });
}

parseArgs();
if (csvFilename) {
  // batch mode
  makeBadges(csvFilename, badgeFilename, outputFilename);
} else {
  // single badge mode
  makeBadge(badgeFilename, fullName, title, organization, outputFilename);
}
