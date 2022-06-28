import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/emplyee", async (_req: Request, res: Response) => {
  return res.status(200).send({
    emplyeeInfos: [
      {
        id: "0",
        name: "豊田太郎",
        age: 84,
      },
      {
        id: "1",
        name: "佐藤太郎",
        age: 85,
      },
      {
        id: "2",
        name: "豊田太郎",
        age: 86,
      },
      {
        id: "3",
        name: "豊田太郎",
        age: 87,
      },
    ],
  });
});

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
