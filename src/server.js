const express = require('express');
const textProcessorRoute = require('./routes/textProcessor');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api', textProcessorRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});