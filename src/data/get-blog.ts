interface Blog {
    id: number;
    slug: string;
    title: string;
    content: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        slug: "blog-1",
        title: "Blog 1",
        content: "Content of blog 1",
    },
    {
        id: 2,
        slug: "blog-2",
        title: "Blog 2",
        content: "Content of blog 2",
    },
    {
        id: 3,
        slug: "blog-3",
        title: "Blog 3",
        content: "Content of blog 3",
    },
] as const;

const getBlog = async (slug: string): Promise<Blog | undefined> => {
    // Fake promise to simulate fetching data from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            const blog = blogs.find((blog) => blog.slug === slug);
            resolve(blog);
        }, 1000);
    });
};

const getBlogs = async (): Promise<Blog[]> => {
    // Fake promise to simulate fetching data from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blogs);
        }, 1000);
    });
};

export type { Blog };
export { getBlog, getBlogs };
