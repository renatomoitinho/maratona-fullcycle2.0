const express = require('express');

const app = express();
const server = app.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0');

app.get("/", (_, res) => {
    res.send('Maratona Full Cycle 2.0');
});

server.on("listening", () => {
    console.log(`Listening in ${server.address().address} and ${server.address().port}`);
});

server.on("close", () => {
    console.log(`Closing in ${server.address().address} and ${server.address().port}`);
});
