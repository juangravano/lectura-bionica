const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function highlightFirstSyllable(text) {
  const prompt = `Toma el siguiente texto y resalta las sílabas necesarias para convertirlo al método lectura biónica. Texto a procesar: "${text}". Ejemplo de procesamiento: <strong>Es</strong>to <strong>es</strong> <strong>un</strong> <strong>ejem</strong>plo.`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 1024,
  });

  const generatedText = response.data.choices[0].text.trim();
  console.log(generatedText);
  return generatedText;
}

module.exports = {
  highlightFirstSyllable,
};


