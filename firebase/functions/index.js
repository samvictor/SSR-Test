const functions = require("firebase-functions");
const {default: next} = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev: dev,
  conf: {distDir: ".next"},
});

const handle = app.getRequestHandler();
exports.nextSsrServer = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
