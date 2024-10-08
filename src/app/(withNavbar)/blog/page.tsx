import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";

// Async function to fetch blogs from API (runs on the server-side in App Router)
async function getBlogs() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getblogs`, {
        cache: 'no-store' // Ensures fresh data on every request
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const blogs = await response.json();
    return blogs;
}

export default async function Blog() {
    let blogs = [];
    try {
        blogs = await getBlogs(); // Fetch blogs data on the server-side
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }

    // Function to slice text with proper word separation
    const sliceText = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-black text-white p-4 pt-10 h-fit">
            {blogs.length === 0 ? (
                <div className="col-span-full text-center text-red-500">No blogs found or failed to load blogs.</div>
            ) : (
                blogs.map((blog: any) => (
                    <CardContainer className="inter-var bg-[#18191B] rounded-md" key={blog._id}>
                        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                            {/* Blog Title */}
                            <CardItem
                                translateZ="50"
                                className="text-3xl font-bold dark:text-white text-[#AFB5AD]"
                            >
                                {blog.title}
                            </CardItem>

                            {/* Blog Description (shortened) */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {sliceText(blog.description, 10)} {/* Limits the description to 10 words */}
                            </CardItem>

                            {/* Blog Image */}
                            <CardItem translateZ="100" className="w-full mt-4">
                                {blog.image ? (
                                    <Image
                                        src={blog.image} // Ensure the URL is correctly formatted (absolute path or full URL)
                                        height={1000}
                                        width={1000}
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={blog.title}
                                    />
                                ) : (
                                    <Image
                                        src="/fallback-image.png" // Replace with your fallback image path
                                        height={1000}
                                        width={1000}
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="fallback image"
                                    />
                                )}
                            </CardItem>

                            {/* Read More Button */}
                            <div className="flex justify-between items-center mt-10">
                                <Link href={`/blog/${blog._id}`}>
                                    <CardItem
                                        translateZ={20}
                                        className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white"
                                    >
                                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                                Read More
                                            </span>
                                        </button>
                                    </CardItem>
                                </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))
            )}
        </div>
    );
}
