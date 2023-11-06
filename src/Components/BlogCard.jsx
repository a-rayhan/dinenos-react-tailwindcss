import { NavLink } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="h-[300px] flex items-center gap-14 bg-slate-300 rounded-xl">
            <img src="https://images.unsplash.com/photo-1635685296916-95acaf58471f?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-[350px] object-cover rounded-xl" />

            <div className="flex-1">
                <h2 className="text-4xl font-semibold mb-6 pe-32">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus.
                </h2>

                <NavLink to='/blogdetails' className="py-2 px-4 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium">
                    Read more
                </NavLink>
            </div>
        </div>
    );
};

export default BlogCard;