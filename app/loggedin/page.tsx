import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1>Login</h1>
      {/* <Tasks /> */}
      <form action={signInAction}>
        <Button>Log In</Button>
      </form>
    </div>
  );
}
