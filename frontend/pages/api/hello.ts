export const runtime = 'edge';
import { NextResponse } from "next/server";

export default function GET() {
  return NextResponse.json({ message: "Hello from JeeviAI!" });
}
