import SettleometerTest from "@/app/(models)/SettleometerTest";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const testData = body.formData;
    console.log(body.testData);
    await SettleometerTest.create(testData);

    return NextResponse.json({ message: "Report Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const testReport = await SettleometerTest.find();
    return NextResponse.json({ testReport }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
