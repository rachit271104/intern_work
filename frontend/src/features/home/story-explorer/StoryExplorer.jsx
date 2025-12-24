import { storyExplorerContent } from './storyExplorerContent';

export default function StoryExplorer() {
  return (
    <section className="w-full bg-[#FFFCE8] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= DESKTOP VERSION ================= */}
        <div
          className="
            hidden md:flex
            items-center
            gap-8
            rounded-3xl
            
            
          "
          style={{ background: 'rgba(255, 221, 0, 0.69)' }}
        >
          {/* IMAGE */}
          <div className="w-[35%]">
            <img
              src="/story-explorer/wordcloud.jpg"
              alt="Story Explorer"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-[65%]">
            <p className="text-lg text-black leading-relaxed mb-3">
              {storyExplorerContent.description}
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition">
              Explore Stories
            </button>
          </div>
        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div
          className="
            md:hidden
            rounded-3xl
            overflow-hidden
          "
          style={{ background: 'rgba(255, 221, 0, 0.69)' }}
        >
          {/* IMAGE */}
          <img
            src="/story-explorer/wordcloud.jpg"
            alt="Story Explorer"
            className="w-full h-auto rounded-3xl object-cover"
          />

          {/* CONTENT */}
          <div className="px-6 py-6">
            <p className="text-sm text-black leading-relaxed mb-4">
              {storyExplorerContent.description}
            </p>

            <button className="bg-black text-white px-5 py-2 rounded-md text-sm hover:opacity-90 transition">
              Explore Stories
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
