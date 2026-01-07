import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="min-h-screen flex flex-col bg-white lg:hidden">
        {/* IMAGE SECTION */}
        <div
          className="relative h-[45vh] bg-cover bg-center rounded-bl-[80px] overflow-hidden"
          style={{ backgroundImage: "url(/login/login_background.png)" }}
        >
          {/* Back button */}
          <button className="absolute top-4 left-4 text-xs text-gray-600 z-10">
            ← Back to dashboard
          </button>

          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/login/login_logo.png"
              alt="ImpactLens"
              className="max-w-65 w-full"
            />
          </div>
        </div>

        {/* FORM */}
        <div className="flex-1 flex items-start justify-center px-8 pt-6 pb-0">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>

        {/* MOBILE FOOTER */}
        <div className="mt-8 flex justify-between px-6 text-[10px] text-gray-400">
          <span>Made with ❤️ by tanX Innovations</span>
          <div className="flex gap-4 text-black">
            <span>License</span>
            <span>Terms of Use</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="min-h-screen hidden lg:flex bg-white">
        {/* LEFT SECTION */}
        <div className="w-1/2 relative flex items-center justify-center px-6 bg-white z-10">
          <LoginForm />

          {/* LEFT FOOTER */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">
            Made with ❤️ by tanX Innovations
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="w-1/2 relative bg-cover bg-center rounded-bl-[180px]"
          style={{ backgroundImage: "url(/login/login_background.png)" }}
        >
          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/login/login_logo.png"
              alt="ImpactLens"
              className="max-w-105 w-full"
            />
          </div>

          {/* RIGHT FOOTER */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-black space-x-6">
            <span>License</span>
            <span>Terms of Use</span>
            <span>Blog</span>
          </div>
        </div>
      </div>
    </>
  );
}
