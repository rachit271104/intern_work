import { useState } from "react";
import BlogHeader from "../components/BlogHeader";
import BlogTable from "../components/BlogTable";
import BlogPreviewModal from "../components/BlogPreviewModal";
import { blogsData } from "../data/blogsData";

export default function BlogPage1() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="bg-slate-100">
      <BlogHeader />

      <div className="bg-white rounded-2xl shadow-sm mt-2 pt-1 ">

        <BlogTable
          data={blogsData}
          onView={(blog) => setSelectedBlog(blog)}
        />
      </div>


      {selectedBlog && (
        <BlogPreviewModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </div>
  );
}


