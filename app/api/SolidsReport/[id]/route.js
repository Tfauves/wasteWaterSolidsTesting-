import { NextResponse } from "next/server";
import NewReport from "@/app/(models)/SolidsReport";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundReport = await NewReport.findOne({ _id: id });

    return NextResponse.json({ foundReport }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await NewReport.findByIdAndDelete(id);
    return NextResponse.json({ message: "Report Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const reportData = body.formData;

    const updateReportData = await NewReport.findByIdAndUpdate(id, {
      ...reportData,
    });

    console.log("put run", updateReportData);
    return NextResponse.json({ message: "Report Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
