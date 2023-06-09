const cors = require('cors');
const express = require('express');
const textProcessorRoute = require('./routes/textProcessor');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use('/api', textProcessorRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

