import { NextResponse } from "next/server";
import TotalSuspendedSolidTest from "@/app/(models)/TotalSuspendedSolidsTest";
export async function POST(req) {
  try {
    const body = await req.json();
    const tssReportData = body.testData;
    console.log(body.testData);
    await TotalSuspendedSolidTest.create(tssReportData);

    return NextResponse.json({ message: "Report Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tssReports = await TotalSuspendedSolidTest.find();
    return NextResponse.json({ tssReports }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
