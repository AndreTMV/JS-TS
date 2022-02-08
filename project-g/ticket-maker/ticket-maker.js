// Example: node ticket-maker.js -i ticket.svg --name "Kyle Harms" --admissionTime "1:30 PM" --row "A" --seat "5" -o kyle_harms.svg

// Provided: Command Line Argument Flags
const LONG_INPUT = "--input";
const SHORT_INPUT = "-i";

const LONG_NAME = "--name";
const SHORT_NAME = "-n";

const LONG_ADMISSION = "--admissionTime";
const SHORT_ADMISSION = "-aT";

const LONG_ROW = "--row";
const SHORT_ROW = "-r";

const LONG_SEAT = "--seat";
const SHORT_SEAT = "-s";

const LONG_OUTPUT = "--output";
const SHORT_OUTPUT = "-o";

// Provided: Command Line Arguments
const ARGS = process.argv;

// Provided: Variables to store Command Line Arguments (after parsing)
var ticketFilename;
var fullName;
var admissionTime;
var row;
var seat;
var outputFilename;

// (TODO 1) Function: Parse the passed-in command line arguments and store them in the appropiate variable.
function parseArgs() {
  for (let i = 2; i < ARGS.length; i++) {
    let arg = ARGS[i];

    if (arg == LONG_INPUT || arg == SHORT_INPUT) {
      i = i + 1;
      ticketFilename = ARGS[i];
    }
    // else if (arg == LONG_CSV || arg == SHORT_CSV ) {
    //   i = i + 1;
    //   csvPath = ARGS[i];
    // }
    else if (arg == LONG_NAME || arg == SHORT_NAME) {
      i = i + 1;
      fullName = ARGS[i];
    } else if (arg == LONG_ADMISSION || arg == SHORT_ADMISSION) {
      i = i + 1;
      admissionTime = ARGS[i];
    } else if (arg == LONG_SEAT || arg == SHORT_SEAT) {
      i = i + 1;
      seat = ARGS[i];
    } else if (arg == LONG_ROW || arg == SHORT_ROW) {
      i = i + 1;
      row = ARGS[i];
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

function validateArgs() {
  if (!ticketFilename) {
    console.error("missing ticket filename argument");
    process.exit(1);
  }
  //   else if (!csvPath) {
  //     console.error("missing csv path argument");
  //     process.exit(1);
  //   }
  else if (!fullName) {
    console.error("missing full name argument");
    process.exit(1);
  } else if (!seat) {
    console.error("missing seat argument");
    process.exit(1);
  } else if (!row) {
    console.error("missing row argument");
    process.exit(1);
  } else if (!admissionTime) {
    console.error("missing admission time argument");
    process.exit(1);
  } else if (!outputFilename) {
    console.error("missing output filename argument");
    process.exit(1);
  }
}

// (TODO 2) Function: Check that we have all the values we need to make a ticket.

// Function: Create the ticket from the passed-in arguments.
function makeTicket(ticketFile, name, admissionTime, row, seat, outputFile) {
  const fs = require("fs");
  let svg = fs.readFileSync(ticketFile, "utf-8");

  // TODO: Replace the appropriate fields in the ticket file.
  svg = svg.replace("Full Name", name);
  svg = svg.replace("XX:XX XX", admissionTime);
  svg = svg.replace("ROW", row);
  svg = svg.replace("SEAT", seat);

  fs.writeFileSync(outputFile, svg);
}

// TODO: Make the function calls to parse the arguments and make the ticket.
parseArgs();
makeTicket(ticketFilename, fullName, admissionTime, row, seat, outputFilename);
