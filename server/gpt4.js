const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.argv[2],
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "what are the new features gpt-4 added that gpt 3.5 does not have?" },
    ],
    model: "gpt-4-turbo-preview",
  });

  console.log(completion.choices[0]);
}
main();

// console.log(process.argv[2]);
