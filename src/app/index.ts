import express from "express";

import * as dotenv from "dotenv";

import { route } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

route(app);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
