

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "AIzaSyAE23bsXE4RH5qEhviJkEAoycdBLPw-1rg",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const response = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Explain to me how AI works",
        },
    ],
});

console.log(response.choices[0].message);