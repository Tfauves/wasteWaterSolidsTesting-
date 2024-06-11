import NewReport from "@/app/(models)/SolidsReport";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const testData = body.formData;
    console.log(testData);
    await NewReport.create(testData);

    return NextResponse.json({ message: "Report Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const Report = await NewReport.find();
    return NextResponse.json({ Report }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
