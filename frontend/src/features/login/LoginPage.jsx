import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left section (50%) */}
      <div className="w-1/2 relative flex items-center justify-center px-6 bg-white z-10">
        <LoginForm />

        {/* Left footer */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">
          Made with ❤️ by tanX Innovations
        </div>
      </div>

      {/* Right section (50%) */}
      <div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center rounded-bl-[180px]"
        style={{ backgroundImage: "url(/login/login_background.png)" }}
      >
        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/login/login_logo.png"
            alt="ImpactLens"
            className="max-w-[420px] w-full"
          />
        </div>

        {/* Right footer */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-black space-x-6">
          <span>License</span>
          <span>Terms of Use</span>
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
}
