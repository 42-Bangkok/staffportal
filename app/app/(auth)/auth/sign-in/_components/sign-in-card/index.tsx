import { AuthBtn } from "@/components/btns/auth-btn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignInCard() {
  return (
    <Card className="w-full max-w-md mx-auto min-w-[400px]">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
        <CardDescription>Sign in with your intra account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <AuthBtn callbackUrl="/dashboard" className="w-full" />
      </CardContent>
      <CardFooter className="text-sm text-center"></CardFooter>
    </Card>
  );
}
