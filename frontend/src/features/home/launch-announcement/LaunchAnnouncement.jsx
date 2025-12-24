import { launchContent } from './launchContent';

export default function LaunchAnnouncement() {
  return (
    <section className="w-full  py-6 md:py-10 flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-6">
        <div
          className="
            flex items-center
            gap-4 md:gap-8
            
            rounded-2xl
            p-4 md:p-6
            bg-white
          "
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="./launch/launch.jpg"
              alt="YEFI Launch"
              className="
                w-[110px] h-[90px]
                md:w-[260px] md:h-[180px]
                object-cover
                rounded-xl
              "
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2
              className="
                font-serif
                text-base md:text-3xl
                leading-snug
                text-black
              "
            >
              {launchContent.title}
              <br />
              {launchContent.subtitle}

              {/* Arrow */}
              {/* <span className="inline-flex items-center ml-2 md:ml-3">
                <span className="h-[2px] w-4 md:w-8 bg-black mr-2"></span>
                <span className="text-sm md:text-xl">→</span>
              </span> */}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
