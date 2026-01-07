import { X } from "lucide-react";

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
          <h2 className="text-2xl font-semibold text-gray-900">
            {blog.title}
          </h2>

          <p className="text-sm text-gray-600 mt-2">
            {blog.description ||
              "Exploring the advancements in renewable energy shaping our future."}
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-6 text-sm">
            <Stat label="Total Likes" value="1.2K" />
            <Stat label="Total Shares" value="428" />
            <Stat label="Total Views" value="15.7K" />
          </div>

          {/* Comments */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Comments (3)</h3>

            <Comment
              name="Jane Doe"
              text="This is such an insightful article! Great to see positive news."
              time="2 days ago"
            />
            <Comment
              name="Alex Smith"
              text="Wind turbine technology has come so far. Thanks for sharing!"
              time="1 day ago"
            />
            <Comment
              name="Emily White"
              text="Really well-written and informative."
              time="5 hours ago"
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

function Comment({ name, text, time }) {
  return (
    <div className="text-sm">
      <p className="font-medium">{name}</p>
      <p className="text-gray-600">{text}</p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  );
}
