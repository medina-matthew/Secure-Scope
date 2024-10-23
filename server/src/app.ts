// Setting up a basic express server with a simple route to make sure the server is running


import express from 'express';
import { runNetworkScan } from './controllers/ScanController';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define the route for network scanning
app.post('/api/scan/network', runNetworkScan);

export default app;