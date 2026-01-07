import { Button } from "../../components/ui/Button";

export default function SocialLoginButton() {
  return (
    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
      <img src="/login/google.svg" alt="Google" className="h-4" />
      Sign in with Google
    </Button>
  );
}
