import { Badge } from '../../components/ui/Badge';
import { StoryMeta } from './StoryMeta';

export function StoryCardCompact({ story, featured = false }) {
  return (
    <article
      className={`rounded-2xl border bg-white ${
        featured ? 'p-8' : 'p-6'
      }`}
    >
      {story.category && <Badge>{story.category}</Badge>}

      <h3
        className={`mt-4 font-semibold ${
          featured ? 'text-2xl' : 'text-lg'
        }`}
      >
        {story.title}
      </h3>

      <p className="text-sm text-gray-700 mt-3 leading-relaxed">
        {story.excerpt}
      </p>

      <div className="mt-6">
        <StoryMeta
          date={story.date}
          readingTime={story.readingTime}
        />
      </div>
    </article>
  );
}
