import { AuthBtn } from "@/components/btns/auth-btn";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LockClosedIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen p-4">
      <Alert variant={"destructive"}>
        <LockClosedIcon className="w-4 h-4" />
        <AlertTitle>Unauthorized!</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <div>Sorry, you are not authorized to access this page.</div>
          <AuthBtn callbackUrl="/dashboard" />
        </AlertDescription>
      </Alert>
    </main>
  );
}
