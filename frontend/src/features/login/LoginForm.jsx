import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Checkbox } from "../../components/ui/Checkbox";
import SocialLoginButton from "./SocialLoginButton";

export default function LoginForm() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E3192]">Sign In</h1>
        <p className="text-sm text-gray-500 mt-1">
          Enter your email and password to sign in!
        </p>
      </div>


      <div className="space-y-4">
        <Input type="email" placeholder="mail@simmmple.com" />
        <Input type="password" placeholder="Min. 8 characters" />
      </div>

      <div className="flex items-center justify-between text-xs">
        <Checkbox label="Keep me logged in" />
        <button className="text-gray-500 hover:underline">
          Forgot password?
        </button>
      </div>

      <Button variant="yellow" className="w-full">
        Sign In
      </Button>

      <p className="text-xs text-center text-gray-500">
        Not registered yet?{" "}
        <span className="font-medium text-[#FFDD00] cursor-pointer">
          Create an Account
        </span>
      </p>
    </div>
  );
}
