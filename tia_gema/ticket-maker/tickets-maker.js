// Example: node ticket-maker.js -i "ticket.svg" -c "attendees.csv" -o "tickets"

const LONG_INPUT = "--input";
const SHORT_INPUT = "-i";

const LONG_CSV = "--csv";
const SHORT_CSV = "-c";

const LONG_OUTPUT = "--output";
const SHORT_OUTPUT = "-o";

const ARGS = process.argv;

var ticketFilename;
var csvPath;
var outputFilename;

function parseArgs() {
  for (let i = 2; i < ARGS.length; i++) {
    let arg = ARGS[i];

    if (arg == LONG_INPUT || arg == SHORT_INPUT) {
      i = i + 1;
      ticketFilename = ARGS[i];
    } else if (arg == LONG_CSV || arg == SHORT_CSV ) {
      i = i + 1;
      csvPath = ARGS[i];
    } else if (arg == LONG_OUTPUT || arg == SHORT_OUTPUT ) {
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
  } else if (!csvPath) {
    console.error("missing csv path argument");
    process.exit(1);
  } else if (!outputFilename) {
    console.error("missing output filename argument");
    process.exit(1);
  }
}

// TODO 1: Implement the makeTickets() Function: Reads in a CSV and makes a ticket for each attendee.
function makeTickets(csvFilePath, ticketFile, outputDir){
  // create the output dir if it doesn't exits
  const fs = require('fs');
  fs.mkdirSync(outputDir, {recursive: true});
  const csv = require('csvtojson');
  csv().fromFile(csvFilePath).then((jsonObj) =>{
    jsonObj.forEach(attendee => {
        let outputFile = outputDir + "/" + attendee['name'] + ".svg";
        makeTicket(ticketFile, attendee['name'], attendee['admissionTime'], attendee['row'], attendee['seat'], attendee['id'],outputFile);
    });
  });
}

// TODO 2: Modify the makeTicket() function to include a QR code on each ticket.
function makeTicket(ticketFile, name, admissionTime, row, seat, id, outputFile) {
  // Load Libraries
  const fs = require('fs');
  const QRCode = require('qrcode-svg');

  const QR_PLACEHOLDER = '<svg id="barcode"></svg>';
  let svg = fs.readFileSync(ticketFile, 'utf-8');

  // TODO 2.1: Generate the QR code & store it in a variable
  let qrCode = new QRCode({
    xmlDeclaration: false,
    content:id
  });

  // TODO 2.2: Call the .svg function on the generated QR code.
  let svgQR = qrCode.svg();
  svg = svg.replace("Full Name", name);
  svg = svg.replace("XX:XX XX", admissionTime);
  svg = svg.replace("ROW", row);
  svg = svg.replace("SEAT", seat);
  svg = svg.replace(QR_PLACEHOLDER, svgQR)

  fs.writeFileSync(outputFile, svg);
}

parseArgs();
makeTickets(csvPath, ticketFilename, outputFilename);

// Example: node ticket-maker.js -i "ticket.svg" -c "attendees.csv" -o "tickets"

// const LONG_INPUT = "--input";
// const SHORT_INPUT = "-i";

// const LONG_CSV = "--csv";
// const SHORT_CSV = "-c";

// const LONG_OUTPUT = "--output";
// const SHORT_OUTPUT = "-o";

// const ARGS = process.argv;

// var ticketFilename;
// var csvPath;
// var outputFilename;

// function parseArgs() {
//   for (let i = 2; i < ARGS.length; i++) {
//     let arg = ARGS[i];

//     if (arg == LONG_INPUT || arg == SHORT_INPUT) {
//       i = i + 1;
//       ticketFilename = ARGS[i];
//     } else if (arg == LONG_CSV || arg == SHORT_CSV ) {
//       i = i + 1;
//       csvPath = ARGS[i];
//     } else if (arg == LONG_OUTPUT || arg == SHORT_OUTPUT ) {
//       i = i + 1;
//       outputFilename = ARGS[i];
//     } else {
//       console.error("unknown argument: ", arg);
//       process.exit(1);
//     }
//   }

//   validateArgs();
// }

// function validateArgs() {
//   if (!ticketFilename) {
//     console.error("missing ticket filename argument");
//     process.exit(1);
//   } else if (!csvPath) {
//     console.error("missing csv path argument");
//     process.exit(1);
//   } else if (!outputFilename) {
//     console.error("missing output filename argument");
//     process.exit(1);
//   }
// }

// // TODO 1: Implement the makeTickets() Function: Reads in a CSV and makes a ticket for each attendee.



// // TODO 2: Modify the makeTicket() function to include a QR code on each ticket.
// function makeTicket(ticketFile, name, admissionTime, row, seat, id, outputFile) {
//   // Load Libraries
//   const fs = require('fs');
//   const QRCode = require('qrcode-svg');

//   const QR_PLACEHOLDER = '<svg id="barcode"></svg>';
//   let svg = fs.readFileSync(ticketFile, 'utf-8');

//   // TODO 2.1: Generate the QR code & store it in a variable
//   let qrCode =

//   // TODO 2.2: Call the .svg function on the generated QR code.
//   let svgQR = 

//   svg = svg.replace("Full Name", name);
//   svg = svg.replace("XX:XX XX", admissionTime);
//   svg = svg.replace("ROW", row);
//   svg = svg.replace("SEAT", seat);
//   svg = svg.replace(QR_PLACEHOLDER, svgQR)

//   fs.writeFileSync(outputFile, svg);
// }

// parseArgs();
// makeTickets(csvPath, ticketFilename, outputFilename);