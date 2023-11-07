import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {

    const [blog, setBlog] = useState([]);

    const blogs = useLoaderData();

    const { blogId } = useParams();

    useEffect(() => {
        const findBlogId = blogs.find(blog => blog._id == blogId);
        setBlog(findBlogId);
    }, [blogId, blogs]);


    return (
        <div className="max-w-7xl mx-auto px-5 py-24" data-aos="fade-up"
        data-aos-duration="1000">
            <Helmet>
                <title> Dinenos - Blog details</title>
            </Helmet>
            <div className="max-w-[1000px] h-[500px] mx-auto rounded-2xl">
                <img src={blog.img} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="max-w-[1000px] mx-auto py-8">
                <h2 className="text-3xl font-semibold mb-5">
                    {blog.title}
                </h2>

                <p className="text-lg">
                    {blog.description}
                </p>
            </div>
        </div>
    );
};

export default BlogDetails;