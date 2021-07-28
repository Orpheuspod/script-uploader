const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors);

const port = process.env.PORT || 4000;

const transcriptRouter = require('../routes/transcript');

app.use('/transcript', transcriptRouter);

app.listen(port, () => console.log(`Started server on port ${port}`));
