import bodyParser from "body-parser";
import cors from "cors";
import hpp from "hpp";
import "dotenv/config";
import express from "express";
import ayurvedaRouter from "./src/routes/ayurveda";
import discoveryRouter from "./src/routes/discovery";
import errorHandler from "./src/controllers/error";
import existingRouter from "./src/routes/existing";
import greetRouter from "./src/routes/greet";

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://drugxplore.web.app",
  ],
  optionsSuccessStatus: 200,
};

app.use(hpp());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(ayurvedaRouter);
app.use(discoveryRouter);
app.use(existingRouter);
app.use(greetRouter);
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
