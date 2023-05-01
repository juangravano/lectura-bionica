const express = require('express');
const router = express.Router();
const { highlightFirstSyllable } = require('../utils/textProcessing');

router.post('/process-text', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const processedText = await highlightFirstSyllable(text);
  res.json({ processedText });
});

module.exports = router;
