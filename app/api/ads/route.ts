import { NextResponse } from "next/server";
import { ADS } from "../../data/ads";

export async function GET() {
  return NextResponse.json({ ads: ADS });
}
