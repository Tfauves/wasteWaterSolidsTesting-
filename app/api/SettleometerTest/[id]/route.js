import SettleometerTest from "@/app/(models)/SettleometerTest";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTest = await SettleometerTest.findOne({ _id: id });

    return NextResponse.json({ foundTest }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await SettleometerTest.findByIdAndDelete(id);
    return NextResponse.json({ message: "Report Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
