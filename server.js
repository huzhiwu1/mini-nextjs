import express from "express";
import { renderToString } from "react-dom/server";

const app = express();
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const file = await import("./pages/index.js");
  const { default: Page, getServerSideProps } = file;
  let propsObj = {};
  if (getServerSideProps) {
    const props = await getServerSideProps({ query: req.query });
    propsObj = props.props || {};
  }
  const content = renderToString(<Page {...propsObj} />);

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
            <script>
              window.__DATA__ = ${JSON.stringify(propsObj)}            
            </script>
            <script src="/client.bundle.js"></script>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
  console.log("ssr server is running on port 3000");
});
