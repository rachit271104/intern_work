import { X } from "lucide-react";
import { ThumbsUp, Share2, Eye } from "lucide-react";
import IconInPopup from "./IconInPopup";
import Comments from "./Comments";



export default function BlogPreviewModal({ blog, onClose }) {
    if (!blog) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            {/* Modal Card */}
            <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[95vh] overflow-hidden shadow-xl">

                {/* Image Section */}
                <div className="relative">
                    <img
                        src="/blogpage/treephoto.png"
                        alt={blog.title}
                        className="w-full h-64 object-cover"
                    />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(85vh-16rem)]">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        {blog.title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-2">
                        {blog.description ||
                            "Exploring the advancements in renewable energy shaping our future."}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-30 border-t border-b border-gray-200 py-4 mt-6">
                        <IconInPopup icon={ThumbsUp} value="1.2K" label="Total Likes" />
                        <IconInPopup icon={Share2} value="428" label="Total Shares" />
                        <IconInPopup icon={Eye} value="15.7K" label="Total Views" />
                    </div>



                    {/* Comments */}
                    <div className="mt-8">
                        <h3 className="font-semibold text-lg mb-4">Comments (3)</h3>

                        <Comments
                            name="Jane Doe"
                            text="This is such an insightful article! Great to see positive news about renewable energy."
                            time="2 days ago"
                            avatar="https://i.pravatar.cc/40?img=1"
                        />

                        <Comments
                            name="Alex Smith"
                            text="I had no idea wind turbine technology had come this far. Thanks for sharing!"
                            time="1 day ago"
                            avatar="https://i.pravatar.cc/40?img=2"
                        />

                        <Comments
                            name="Emily White"
                            text="Really well-written and informative. Looking forward to more posts like this one."
                            time="5 hours ago"
                            avatar="https://i.pravatar.cc/40?img=3"
                        />
                    </div>


                </div>
            </div>
        </div>
    );
}

/* Helper Components */

function Stat({ label, value }) {
    return (
        <div>
            <p className="font-semibold">{value}</p>
            <p className="text-gray-500 text-sm">{label}</p>
        </div>
    );
}

