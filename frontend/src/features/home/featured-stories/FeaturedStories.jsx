import { featuredStoriesContent } from './featuredStoriesContent';
import FeaturedStoryColumn from './FeaturedStoryColumn';

export default function FeaturedStories() {
  const { heading, stories } = featuredStoriesContent;

  return (
    <section className="w-full bg-[#FFFBEA] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center font-serif text-2xl tracking-wide text-black mb-12">
          {heading}
        </h2>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-4 gap-10">
          <FeaturedStoryColumn story={stories[0]} />
          <FeaturedStoryColumn story={stories[1]} reverse />
          <FeaturedStoryColumn story={stories[2]} />
          <FeaturedStoryColumn story={stories[3]} reverse />
        </div>

        {/* Mobile fallback (simple stack, already approved earlier) */}
        <div className="md:hidden flex flex-col gap-10">
          {stories.map((story, index) => (
            <FeaturedStoryColumn
              key={story.id}
              story={story}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
