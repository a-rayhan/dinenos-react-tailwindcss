import { useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="grid gap-6">
                {
                    blogs.map(blog => <BlogCard key={blog} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;