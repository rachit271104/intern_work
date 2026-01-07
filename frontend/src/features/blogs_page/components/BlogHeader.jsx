import { Plus, Search, Bell, Moon, Info } from "lucide-react";

export default function BlogHeader() {
    return (
        <div className="w-full bg-slate-100 flex items-center justify-between px-6 py-4">
            {/* Left section */}
            <div>
                <p className="text-sm text-gray-500">Pages / Blogs</p>
                <h1 className="text-2xl font-semibold text-[#1F2A6D]">
                    Manage Blog Posts
                </h1>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
                {/* View toggle */}
                <div className="flex items-center bg-white rounded-full p-1 shadow-sm">
                    {/* Table view (active) */}
                    <button className="flex items-center justify-center w-12 h-10 rounded-full bg-gray-100">
                        <img
                            src="/blogpage/Table.png"
                            alt="Table view"
                            className="w-5 h-5"
                        />
                    </button>

                    {/* Grid view */}
                    <button className="flex items-center justify-center w-12 h-10 rounded-full">
                        <img
                            src="/blogpage/Grid.png"
                            alt="Grid view"
                            className="w-5 h-5"
                        />
                    </button>
                </div>


                {/* Add new blog */}
                <button className="flex items-center gap-2 bg-[#FFDD00] hover:bg-[#E6C700] text-black font-medium px-5 py-2 rounded-full">

                    Add New Blog
                </button>

                {/* Search + Icons + Avatar (single pill) */}
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
                    {/* Search */}
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                        <Search size={14} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm w-32 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Icons */}
                    <Bell size={18} className="text-gray-500 cursor-pointer" />
                    <Moon size={18} className="text-gray-500 cursor-pointer" />
                    <Info size={18} className="text-gray-500 cursor-pointer" />

                    {/* Avatar */}
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
