import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function callOPENAIAPI() {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "user",
                    "content": "Generate a description to insert in the sale advert on Vinted of a black Prada sweater, size S"
                }
            ],
            temperature: 0.5,
            max_tokens: 50,
            top_p: 1,
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error('Errore nella chiamata', error);
        return;
    }
}


