
import { AnswerType } from './types';

export const PROMPTS: Record<string, string> = {
  [AnswerType.SHORT]: "Provide a direct, concise, and academically professional answer to the following student query. Limit the response to one or two well-crafted paragraphs. Do not include any introductory remarks like 'Here is your answer' or 'Based on the context'. Focus purely on factual accuracy and clarity.",
  [AnswerType.LONG]: "Write a comprehensive and detailed academic essay-style response to the following topic. Use clear headings to separate major sections. Ensure the tone is scholarly yet accessible. Include an introduction, supporting arguments with evidence-based reasoning, and a synthesis. No meta-talk or AI references.",
  [AnswerType.BULLETS]: "Condense the following academic topic or question into a structured and logical set of bullet points. Use bold text for key terms. Organize the notes hierarchically if necessary to show relationships between concepts. Perfect for quick study revision.",
  [AnswerType.SIMPLE]: "Explain the following academic concept as if you were talking to a bright 12-year-old student. Use simple analogies, avoid complex jargon unless you explain it immediately, and keep sentences straightforward. Focus on the core 'why' and 'how' of the topic.",
  [AnswerType.EXAM]: "Construct a high-scoring, model exam answer for the following question. Include a precise definition of terms, 3-4 distinct points of analysis, specific examples that a student would use to gain marks, and a strong evaluative conclusion. Follow standard marking criteria conventions for clarity and depth."
};

export const FAQ_DATA = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, the AI Answer Generator for Students is completely free for all learners. We believe in democratizing access to high-quality educational support without the barrier of costs or subscriptions."
  },
  {
    question: "Do I need to create an account or sign up?",
    answer: "No registration is required. We value your time and privacy. You can start generating answers immediately by entering your question in the input field above."
  },
  {
    question: "Can I use these answers for my exams?",
    answer: "This tool is designed as a study aid to help you understand complex topics and learn how to structure your own work. While the information is highly accurate, we always recommend using the generated content as a reference or template and verifying key facts with your official textbooks."
  },
  {
    question: "Is the content generated plagiarism-free?",
    answer: "Our engine creates original, unique wording for every query. However, since it discusses factual academic topics, we encourage students to use the tool to learn concepts and then express them in their own unique voice when submitting assignments."
  },
  {
    question: "How should students best use the generated answers?",
    answer: "The best way to use this tool is for 'active learning.' Generate an answer to a topic you are struggling with, read it to understand the structure and key points, and then try to rewrite the answer yourself without looking. It is also excellent for creating quick revision notes."
  }
];
