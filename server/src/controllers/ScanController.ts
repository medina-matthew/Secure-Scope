import { Request, Response } from 'express';
import { exec } from 'child_process';

export const runNetworkScan = (req: Request, res: Response) => {
    const { ip } = req.body; // Access the IP address from the request body

    // Execute Python script with the provided IP address
    exec(`python3 ./src/services/NetworkScanService.py ${ip}`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send({ error: stderr });
        }
        res.send({ result: stdout });
    });
};