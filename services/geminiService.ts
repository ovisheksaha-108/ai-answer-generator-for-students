
import { GoogleGenAI } from "@google/genai";
import { PROMPTS } from "../constants";
import { AnswerType } from "../types";

export async function generateStudentAnswer(question: string, type: AnswerType): Promise<string> {
  if (!question.trim()) return "Please enter a question or topic first.";

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const systemInstruction = PROMPTS[type];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't generate an answer at this moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
      // Handle potential key/model issues if needed
    }
    return "An error occurred while connecting to the academic engine. Please check your connection and try again.";
  }
}
