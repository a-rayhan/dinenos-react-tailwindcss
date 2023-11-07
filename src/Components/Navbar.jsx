import { NavLink, useNavigate } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { ImSpoonKnife } from "react-icons/im";
import { useContext, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="shadow-lg">
            <div className="max-w-7xl mx-auto">
                <nav className="px-6 py-7 flex justify-between items-center">
                    <div className="flex items-center cursor-pointer">
                        <ImSpoonKnife className="text-4xl text-[#fa8507]" />
                        <NavLink to='/' className='text-3xl font-bold'>
                            Dinenos
                        </NavLink>
                    </div>

                    <ul className="hidden lg:flex justify-between items-center gap-8 text-lg font-medium z-50">
                        <li>
                            <NavLink to='/' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#fa8507]" : ""}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/allfoods' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#fa8507]" : ""}>
                                All Foods
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#fa8507]" : ""}>
                                Blog
                            </NavLink>
                        </li>

                        <div className="flex items-center">

                            {
                                user ?
                                    <>
                                        <div className="dropdown inline-flex cursor-pointer">
                                            <div className="dropdown dropdown-end inline-flex">
                                                <div tabIndex={0} className="avatar">
                                                    <div className="w-10 h-10 rounded-full ring ring-[#fa8507] ring-offset-base-100 ring-offset-2">
                                                        <img src={user?.photoURL} />
                                                    </div>
                                                </div>

                                                <div tabIndex={0} className="dropdown-content z-[1] bg-base-200 py-8 rounded-xl w-96 mt-14">

                                                    <div className="mb-8">
                                                        <p className="text-center text-xl font-medium">
                                                            {user?.displayName}
                                                        </p>

                                                        <p className="text-center">
                                                            {user?.email}
                                                        </p>
                                                    </div>

                                                    <ul className="w-full px-10">
                                                        <li className='hover:bg-slate-300 p-3 '><NavLink to='/addnew'> Add new food</NavLink></li>
                                                        <hr />

                                                        <li className='hover:bg-slate-300 p-3'><NavLink to='/addedfoods'>My added foods</NavLink></li>
                                                        <hr />

                                                        <li className='hover:bg-slate-300 p-3 '><NavLink to='/orderedfoods'> My ordered items</NavLink></li>
                                                        <hr />

                                                        <li className='hover:bg-slate-300 p-3 text-[#fa8507] '>
                                                            <NavLink onClick={handleLogOut} to='/'>
                                                                Logout
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </> :
                                    <>
                                        <li>
                                            <NavLink to='/login' className='py-2 px-8 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-2xl font-medium'>
                                                Login
                                            </NavLink>
                                        </li>
                                    </>
                            }
                        </div>
                    </ul>

                    <div className="lg:hidden flex items-center gap-x-4 z-50">
                        {
                            user &&
                            <>
                                <div className="dropdown inline-flex cursor-pointer">
                                    <div className="dropdown dropdown-end inline-flex">
                                        <div tabIndex={0} className="avatar">
                                            <div className="w-10 h-10 rounded-full ring ring-[#fa8507] ring-offset-2">
                                                <img src={user?.photoURL} className="w-full h-full rounded-full object-cover" />
                                            </div>
                                        </div>

                                        <div tabIndex={0} className="dropdown-content z-[1] bg-base-200 py-8 rounded-xl px-8 mt-14">

                                            <div className="mb-8">
                                                <p className="text-center text-xl font-medium">
                                                    {user?.displayName}
                                                </p>

                                                <p className="text-center">
                                                    {user?.email}
                                                </p>
                                            </div>

                                            <ul className="w-full cursor-pointer">
                                                <li className='hover:bg-slate-300 p-3'>
                                                    <NavLink to='/addedfoods'>
                                                        My added foods
                                                    </NavLink>
                                                </li>

                                                <hr />

                                                <li className='hover:bg-slate-300 p-3'>
                                                    <NavLink to='/addnew'>
                                                        Add new food
                                                    </NavLink>
                                                </li>

                                                <hr />

                                                <li className='hover:bg-slate-300 p-3'>
                                                    <NavLink to='/orderedfoods'>
                                                        My ordered items
                                                    </NavLink>
                                                </li>

                                                <hr />

                                                <li className='hover:bg-slate-300 p-3 text-[#fa8507] cursor-pointer'>
                                                    <NavLink onClick={handleLogOut} to='/'>
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }


                        <div
                            onClick={() => setToggleMenu(!toggleMenu)}
                            className="lg:hidden">

                            {
                                toggleMenu === true ?
                                    <FiGrid className="lg:hidden text-3xl cursor-pointer" /> :
                                    <FiGrid className="lg:hidden text-3xl cursor-pointer" />
                            }

                            <ul
                                className={`absolute w-full h-[600px] top-1/3 right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#ebe8fc] p-8 z-50 flex flex-col items-center pt-36 gap-y-6 text-2xl font-medium lg:hidden ${toggleMenu ? 'hidden' : ''}`}>
                                <li>
                                    <NavLink
                                        to='/'
                                        className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#fa8507]" : ""}>
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/allfoods' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#fa8507]" : ""}>
                                        All Foods
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#fa8507]" : ""}>
                                        Blog
                                    </NavLink>
                                </li>

                                <div className="">
                                    {
                                        user ?
                                            <>
                                                <li className='text-[#fa8507] '>
                                                    <NavLink onClick={handleLogOut} to='/'>
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </> :
                                            <>
                                                <li className="list-none">
                                                    <NavLink to='/login' className='py-2 px-8 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-2xl font-medium'>
                                                        Login
                                                    </NavLink>
                                                </li>
                                            </>
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;