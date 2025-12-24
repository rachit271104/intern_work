export function HeroSection() {
  return (
    <section className="w-full flex justify-center">

      {/* ================= DESKTOP HERO (UNCHANGED) ================= */}
      <div className="hidden md:block w-full">
        <div className="relative w-full max-w h-[460px] overflow-hidden rounded-b-[48px]">

          <img
            src="./hero_sec/hero_desk.jpg"
            alt="Impact Lens Hero"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          <div className="absolute bottom-0 left-0 w-auto">
            <div
              className="px-12 py-6 rounded-tr-[36px]"
              style={{ background: 'rgba(255, 221, 0, 0.69)' }}
            >
              <h1 className="text-3xl font-serif font-semibold text-black">
                Stories That Inspire Change
              </h1>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE HERO (FIXED) ================= */}
      <div className="md:hidden w-full  py-6">
        <div className="bg-[#FFEE6A] rounded-[32px] overflow-hidden">
          {/* Text Section */}
          <div className="px-6 pt-8 pb-4">
            <h1 className="text-2xl font-serif font-semibold text-black leading-tight">
              Stories That<br />
              Inspire Change
            </h1>
          </div>

          {/* Image Section - Full width, no negative margin */}
          <div className="w-full">
            <img
              src="./hero_sec/hero_phone.png"
              alt="Impact Lens Hero"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </div>

    </section>
  );
}