const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.argv[2],
});

async function textChat(newMessage) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: newMessage },
    ],
    model: "gpt-4-turbo-preview",
  });

  console.log(completion.choices[0]);
}
// textChat('what is it like in space?');

// console.log(process.argv[2]);
module.exports = {textChat}