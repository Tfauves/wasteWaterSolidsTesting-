import TotalSolidsTest from "@/app/(models)/TotalSolidsTest";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const tssReportData = body.tssFormData;
    console.log(body.tssFormData);
    await TotalSolidsTest.create(tssReportData);

    return NextResponse.json({ message: "Report Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tssReports = await TotalSolidsTest.find();
    return NextResponse.json({ tssReports }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
