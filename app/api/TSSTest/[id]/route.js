import TotalSusSolidsTest from "@/app/(models)/TotalSusSolidsTest";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTssReport = await TotalSusSolidsTest.findOne({ _id: id });

    return NextResponse.json({ foundTssReport }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await TotalSusSolidsTest.findByIdAndDelete(id);
    return NextResponse.json({ message: "Report Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
