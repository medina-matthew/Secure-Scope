import { Request, Response } from 'express';
import { exec } from 'child_process';

export const runNetworkScan = (req: Request, res: Response) => {
    const { ip } = req.body;  // Make sure you are extracting 'ip' from req.body

    if (!ip) {
        return res.status(400).send({ error: 'IP address is required' });  // Handle missing IP
    }

    // Execute the Python script with the IP address
    exec(`python3 ./src/services/NetworkScanService.py ${ip}`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send({ error: stderr });
        }
        try {
            const result = JSON.parse(stdout);  // Parse JSON output from Python
            res.json({ result });
        } catch (err) {
            res.status(500).send({ error: 'Error parsing scan result' });
        }
    });
};