import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, getBlogs } from "~/data/get-blog";

interface Props {
    params: Promise<{ slug: string }>;
}

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const segmentParams = await params;
    if (!segmentParams?.slug) return notFound();
    const blog = await getBlog(segmentParams.slug);
    if (!blog) return notFound();

    return {
        title: blog.title,
        description: blog.content,
    };
};

const generateStaticParams = async () => {
    const blogs = await getBlogs();
    return blogs.map((blog) => {
        if (!blog) return null;
        return {
            slug: blog.slug,
        };
    });
};

const Page = async ({ params }: Props) => {
    const segmentParams = await params;
    if (!segmentParams?.slug) return notFound();

    const blog = await getBlog(segmentParams.slug);
    if (!blog) return notFound();

    const { title, content } = blog;

    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col row-start-2 w-full items-center sm:items-start'>
                <div className='mb-4 pt-12 md:pt-24 lg:pt-40'>
                    <h1 className='text-4xl font-medium'>{title}</h1>
                </div>
                <div className='pb-12 w-full max-w-3xl'>{content}</div>
                <Link href='/' className='inline-block px-2 py-1 text-sm text-white bg-blue-500 rounded-md'>
                    Back to home
                </Link>
            </main>
        </div>
    );
};

export { generateMetadata, generateStaticParams };
export default Page;
