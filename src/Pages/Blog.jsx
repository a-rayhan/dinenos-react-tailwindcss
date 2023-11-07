import { useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <Helmet>
                <title> Dinenos - Blog</title>
            </Helmet>
            <div className="grid gap-6">
                {
                    blogs.map(blog => <BlogCard key={blog} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;