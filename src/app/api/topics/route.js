import connectMongoDB from "@/lib/db";
import Topic from "@/models/topicModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title,description} = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({
        message: "Topic created"
    },{status:201})
}
export async function GET(request) {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({
        topics
    },{status:200})
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({
        message: "Topic deleted"
    },{status:200})
}







// import connectMongoDB from "@/lib/db";
// import Topic from '@/models/topicModel'
// import { NextResponse } from "next/server";

// export async function POST(request) {
//     const {title,description} = await request.json();
//     await connectMongoDB();
//     const newTopic = await Topic.create({title, description});
//     return NextResponse.json(newTopic,{message: "Topic Create"})
// }
// export async function GET(request) {
//     await connectMongoDB();
//     const getTopic = await Topic.find();
//     return NextResponse.json(getTopic,{message: "Topics Recive"})
// }
// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get('id')
//     await connectMongoDB();
//     const topicDelete = await Topic.findByIdAndDelete(id)
    
//     return NextResponse.json(topicDelete,{message: "Topic Delete"})
// }