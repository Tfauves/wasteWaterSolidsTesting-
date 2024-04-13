import Report from "@/app/(models)/Report";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const reportData = body.formData;
    console.log(body.formData);
    await Report.create(reportData);

    return NextResponse.json({ message: "Report Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const reports = await Report.find();
    return NextResponse.json({ reports }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
