// Setting up a basic express server with a simple route to make sure the server is running


import express from 'express';
import { runNetworkScan } from './controllers/ScanController';  // Ensure this import is correct

const app = express();
app.use(express.json());  // Ensure the server can parse JSON

// Define the POST route
app.post('/api/scan/network', runNetworkScan);  // POST route to handle network scan

export default app;