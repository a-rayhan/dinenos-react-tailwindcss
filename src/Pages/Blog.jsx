import BlogCard from "../Components/BlogCard";

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="grid gap-6">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};

export default Blog;