import Report from "@/app/(models)/Report";
import SettleometerTest from "@/app/(models)/SettleometerTest";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundReport = await SettleometerTest.findOne({ _id: id });

    return NextResponse.json({ foundReport }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Report.findByIdAndDelete(id);
    return NextResponse.json({ message: "Report Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
