import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-2/5 flex items-center justify-center px-6">
        <LoginForm />
      </div>

      <div className="hidden lg:flex w-3/5 relative bg-gray-50">
        <div className="absolute inset-0 flex items-center px-20">
          <h1 className="text-6xl font-bold">
            <span className="text-yellow-400">impact</span>
            <span className="text-black">lens.in</span>
          </h1>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 max-w-xs text-right text-sm text-gray-600">
          Discover impactful stories and insights shaping the future.
        </div>

        <div className="absolute bottom-6 right-10 text-sm text-gray-400 space-x-4">
          <span>License</span>
          <span>Terms</span>
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
}
