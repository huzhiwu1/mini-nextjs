import express from "express";
import { renderToString } from "react-dom/server";
import App from "../client/App";

const app = express();
app.use(express.static("public"));
const content = renderToString(<App />);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/client.bundle.js"></script>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
  console.log("ssr server is running on port 3000");
});
