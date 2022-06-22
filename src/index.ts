import express from "express";
import cors from "cors";

import registeredRouters from "./routes/register-routing-files";
const app = express();
const port = process.env.PORT || 5000; // default port to listen
// define a route handler for the default home page
app.use(express.json({limit: '50mb'})); // support json encoded bodies
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // support encoded bodies
app.use(cors());

app.use(express.static("uploaded-image"));
app.use("/", registeredRouters);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
