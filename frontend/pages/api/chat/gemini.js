import getJeeviAIPrompt from "./prompt";
import "dotenv/config";

export default function postGemini(req, res) {
    const prompt = getJeeviAIPrompt();
    return prompt;
}