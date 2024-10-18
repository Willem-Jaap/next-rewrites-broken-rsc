import Link from "next/link";
import { getBlogs } from "~/data/get-blog";

const Page = async () => {
    const blogs = await getBlogs();
    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col gap-6 row-start-2 items-center sm:items-start'>
                <h1 className='text-4xl font-bold text-center sm:text-left'>Broken RSC prerendering with rewrites</h1>
                <p className='text-gray-600'>
                    I'm not sure what's going on here, but it seems like the rewrites are breaking the RSC prerendering.
                </p>
                <p className='text-gray-600 max-w-3xl'>
                    Next.js 15 RC 2 mentiones faster generation of static pages:{" "}
                    <i>
                        once to generate data for client-side navigation and a second time to render the HTML for the
                        initial page visit. Now, we reuse the first render, cutting out the second pass, reducing
                        workload and build times. Maybe this is related?
                    </i>
                </p>
                <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
                    <li className='mb-2'>
                        Click on one of the following buttons and see the page hard refresh because there is a 404 on
                        the RSC client side navigation:
                        <div className='flex flex-wrap gap-1 mt-2'>
                            {blogs.map((blog) => (
                                <Link
                                    key={blog.id}
                                    href={`/blog/${blog.slug}`}
                                    className='inline-block px-2 py-1 text-sm text-white bg-blue-500 rounded-md'
                                >
                                    {blog.title}
                                </Link>
                            ))}
                        </div>
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>
            </main>
        </div>
    );
};

export default Page;
