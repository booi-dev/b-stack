import { googleColorIcon } from "@/assets/svg";
import Image from "next/image";
import { auth, signIn } from "../../server/auth";
import { Button } from "../ui/button";

export const GoogleAuth = async () => {
  // This function is called when the user clicks the "Sign In" button

  const session = await auth();

  const setAuth = async () => {
    "use server";
    await signIn("google", { redirectTo: "/" });
  };

  return (
    <div>
      <form className="mt-2" action={setAuth}>
        <Button className="w-full space-x-2 font-semibold tracking-wide">
          <Image
            src={googleColorIcon}
            alt="bango facebook auth"
            width={25}
            height={25}
          />{" "}
          <span> Join With Google </span>
        </Button>
      </form>
    </div>
  );
};
