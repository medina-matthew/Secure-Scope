// Starting the server

import app from './app';

const PORT = process.env.Port || 4000;

app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`);
});