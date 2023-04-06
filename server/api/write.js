import fs from 'fs';

import { readBody } from 'h3'

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

export default defineEventHandler(async (event) => {
    const openai = new OpenAIApi(configuration);
    const { slug, topic } = await readBody(event)

    console.log(topic, slug);
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "assistant",
                    content: "You are a technical writer, that writes concise and factual blog articles"
                },
                {
                    role: "user",
                    content: `write an article for the topic: "${topic}" in markdown format with a total of ${1000} words, showing proper heading structure. Also add occasional resource links`
                },
            ],
            temperature: 0,
        });

        let generatedTxt = response.data.choices[0].message?.content
        let inputData = `--- \n title: "${topic}" \n description: "AI generated text for the topic: ${topic}" \n--- \n<!--Content of the page-->\n${generatedTxt}`;
        fs.writeFile(`content/blog/${slug}.md`, inputData, (err) => { console.error(err); })

        return {
            api: generatedTxt
        }

    } catch (error) {
        console.error(error.response.data.error.code);
    }
})
