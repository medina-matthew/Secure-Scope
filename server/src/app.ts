// Setting up a basic express server with a simple route to make sure the server is running

import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/status', (req, res) => {
    res.send({ message: 'Server is running!' });
});

export default app;
