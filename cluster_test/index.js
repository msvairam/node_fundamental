const express = require('express');
const { readFile }  = require('node:fs/promises');

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/read-content', async (req, res) => {
    try {
        const data = await readFile('content.txt', 'utf-8');
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`(PID) ${process.pid} Server 8080 started successfully`);
});


// Test concurrent Users
// npx autocannon -d 10 --renderStatusCodes http://localhost:3000/read-content