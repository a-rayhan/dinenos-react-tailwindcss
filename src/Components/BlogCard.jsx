import { NavLink, useParams } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const { _id, title, img } = blog;

    const { blogId } = useParams();

    return (
        <div className="h-[300px] flex items-center gap-14 bg-slate-300 rounded-xl">
            <img src={img} alt="" className="h-full w-[350px] object-cover rounded-xl" />

            <div className="flex-1">
                <h2 className="text-4xl font-semibold mb-6 pe-32">
                    {title}
                </h2>

                <NavLink to={`/blogdetails/${_id}`} className="py-2 px-4 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium">
                    Read more
                </NavLink>
            </div>
        </div>
    );
};

export default BlogCard;