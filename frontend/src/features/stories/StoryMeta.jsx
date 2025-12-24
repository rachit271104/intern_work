export function StoryMeta({ date, readingTime }) {
  return (
    <div className="text-xs text-gray-500">
      {date && <span>{date}</span>}
      {date && readingTime && <span> · </span>}
      {readingTime && <span>{readingTime} min read</span>}
    </div>
  );
}
