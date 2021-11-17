import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import ExecJWT from "./middlewares/ExecJWT.mjs";
import isAuth from "./middlewares/isAuth.mjs";
import Auth from "./controllers/AuthController.mjs";
import UserController from "./controllers/UserController.mjs";
import SusController from "./controllers/SusController.mjs";
import MdtController from "./controllers/MdtController.mjs";
import PssuqController from "./controllers/PssuqController.mjs";
import AcController from "./controllers/AcController.mjs";
import DcController from "./controllers/DcController.mjs";
import AnxietyController from "./controllers/AnxietyController.mjs";
const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());
app.use(ExecJWT);

app.use("/api/auth", Auth);
app.use("/api/users", isAuth, UserController);
app.use("/api/sus", isAuth, SusController);
app.use("/api/mdt", isAuth, MdtController);
app.use("/api/pssuq", isAuth, PssuqController);
app.use("/api/ac", isAuth, AcController);
app.use("/api/dc", isAuth, DcController);
app.use("/api/anxiety", isAuth, AnxietyController);

export default app;
