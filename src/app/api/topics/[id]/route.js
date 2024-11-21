import connectMongoDB from "@/lib/db";
import Topic from "@/models/topicModel";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "Topic updated"}, {status: 200});
}
export async function GET(request,{ params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });

  if (topic) {
    return NextResponse.json({ topic }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Topic not found' }, { status: 404 });
  }
}