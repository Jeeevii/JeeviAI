// export const runtime = "edge"; - gemini requries nodejs modules
export const runtime = "nodejs"; // for gemini SDK 

import getJeeviAIPrompt from "./prompt";
import { NextResponse } from "next/server";

export async function GET() {
  const jeeviPrompt = getJeeviAIPrompt();
  return NextResponse.json({ message: jeeviPrompt });
}