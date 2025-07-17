export const runtime = "edge";
import getJeeviAIPrompt from "./prompt";
import { NextResponse } from "next/server";

export async function GET() {
  const jeeviPrompt = getJeeviAIPrompt();
  return NextResponse.json({ message: jeeviPrompt });
}