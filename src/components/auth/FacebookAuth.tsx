import { facebookColorIcon } from "@/assets/svg";
import Image from "next/image";
import { auth, signIn } from "../../server/auth";
import { Button } from "../ui/button";

export const FacebookAuth = async () => {
  // This function is called when the user clicks the "Sign In" button

  const session = await auth();
  console.log("-------->", session);

  const setAuth = async () => {
    "use server";
    await signIn("facebook", { redirectTo: "/" });
  };

  return (
    <div className="mt-8">
      <form className="mt-2" action={setAuth}>
        <Button className="w-full space-x-2 rounded-xl bg-app-accent-clr-1 p-4 py-6 font-semibold tracking-wide">
          <Image
            src={facebookColorIcon}
            alt="bango facebook auth"
            width={23}
            height={23}
          />{" "}
          <span> with you facebook account</span>
        </Button>
      </form>
    </div>
  );
};
