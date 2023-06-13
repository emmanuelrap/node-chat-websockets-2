const express = require("express");
const { Server } = require("ws");

const app = express();
const server = app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

const wss = new Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    // Procesa el mensaje recibido y transmítelo a todos los clientes conectados
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// Ruta de prueba para verificar que el servidor está funcionando
app.get("/", (req, res) => {
  res.send("Servidor WebSocket en funcionamiento");
});
