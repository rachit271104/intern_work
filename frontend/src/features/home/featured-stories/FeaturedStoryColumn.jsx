export default function FeaturedStoryColumn({ story, reverse }) {
  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden md:flex flex-col gap-4">
        {reverse ? (
          <>
            <div>
              <h3 className="font-serif text-lg font-semibold leading-snug text-black mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {story.description}
              </p>
            </div>

            <img
              src={story.image}
              alt={story.title}
              className="w-full h-[240px] object-cover rounded-md"
            />
          </>
        ) : (
          <>
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-[240px] object-cover rounded-md"
            />

            <div>
              <h3 className="font-serif text-lg font-semibold leading-snug text-black mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {story.description}
              </p>
            </div>
          </>
        )}
      </div>

      {/* ================= MOBILE VERSION ================= */}
      <div className="flex md:hidden flex-row gap-4 items-stretch">
        {/* IMAGE */}
        <div
          className={`
            w-[40%]
            flex
            ${reverse ? 'order-2' : 'order-1'}
          `}
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover rounded-md block"
          />
        </div>

        {/* TEXT */}
        <div
          className={`
            w-[60%]
            flex
            flex-col
            justify-start
            ${reverse ? 'order-1' : 'order-2'}
          `}
        >
          <h3 className="font-serif text-sm font-semibold leading-snug text-black mb-1">
            {story.title}
          </h3>

          <p className="text-xs text-gray-700 leading-relaxed">
            {story.description}
          </p>
        </div>
      </div>
    </>
  );
}
