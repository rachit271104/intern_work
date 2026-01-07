import { Eye, Edit, Trash } from "lucide-react";

export default function BlogTable({ data = [], onView }) {
  return (
    <div className="px-6 mt-6">
      {/* Table Header */}
      <div className="grid grid-cols-[80px_1.5fr_2.5fr_140px_120px] bg-[#FFDD00] text-xs font-semibold rounded-t-xl px-4 py-3">
        <div>IMAGE</div>
        <div>TITLE</div>
        <div>DESCRIPTION</div>
        <div>DATE</div>
        <div className="text-center">ACTION</div>
      </div>

      {/* Scrollable Table Body */}
      <div className="max-h-[520px] overflow-y-auto">
        {data.map((blog) => (
          <div
            key={blog.id}
            className="grid grid-cols-[80px_1.5fr_2.5fr_140px_120px] items-center px-4 py-4 border-b border-gray-200 bg-white last:border-b-0"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-10 h-10 rounded-lg object-cover"
            />

            {/* Title */}
            <div className="text-sm font-medium text-gray-900">
              {blog.title}
            </div>

            {/* Description */}
            <div className="text-sm text-gray-500 truncate">
              {blog.description || "-"}
            </div>

            {/* Date */}
            <div className="text-sm text-gray-500">
              {blog.date || "-"}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <Eye
                size={18}
                className="cursor-pointer text-gray-500 hover:text-black"
                onClick={() => onView(blog)}
              />
              <Edit
                size={18}
                className="cursor-pointer text-gray-500 hover:text-black"
              />
              <Trash
                size={18}
                className="cursor-pointer text-gray-500 hover:text-black"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
