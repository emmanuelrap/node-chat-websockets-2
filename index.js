const app = require("./src/app");
const port = process.env.PORT || 4000;

app.listen(port);
console.log("Escuchando por el Puerto:", port);
