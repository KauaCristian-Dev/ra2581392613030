const path = require("path");
const dotenv = require("dotenv");

// configurando o dotenv, aqui ele le o arquivo de variaveis de ambiente.
dotenv.config({ 
    quiet: true,
    path: path.resolve(__dirname, "..", "..", ".env"),
})

const express = require("express");

const PORT = process.env.PORT;
const publicPath = path.resolve(__dirname, "..", "public");
const indexPath = path.join(publicPath, "pages", "index.html");
const assetsPath = path.resolve (publicPath, "assets", "css", "main.css");

const app = express();

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, function () {
  console.log(`Rodando em: http://localhost:${PORT}`);
});
