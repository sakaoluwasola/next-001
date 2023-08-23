import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";



export const GET = async (request) => {

    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try {
        // Connect to the database
        await connect();

        // Fetch posts using the Post model
        const posts = await Post.find(username && { username });

        // Return the fetched posts as a JSON response
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        // Handle database errors by returning a 500 status response
        return new NextResponse("Database Error", { status: 500 });
    }
};


export const POST = async (request) => {
    const body = await request.JSON();

    const newPost = new Post(body);

    try {
        await connect();

        await newPost.save();


        return new NextResponse("Post has been created", { status: 201 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
};





