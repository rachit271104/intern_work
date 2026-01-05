import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Checkbox } from "../../components/ui/Checkbox";
import SocialLoginButton from "./SocialLoginButton";

export default function LoginForm() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="text-sm text-gray-500 mt-1">
          Enter your credentials to continue
        </p>
      </div>

      

      

      <div className="space-y-4">
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
      </div>

      <div className="flex items-center justify-between">
        <Checkbox label="Keep me logged in" />
        <button className="text-sm text-gray-500 hover:underline">
          Forgot password?
        </button>
      </div>

      <Button variant="yellow" className="w-full">
        Sign in
      </Button>

      <p className="text-sm text-center text-gray-500">
        Don’t have an account?{" "}
        <span className="font-medium text-black cursor-pointer">
          Create one
        </span>
      </p>
    </div>
  );
}
