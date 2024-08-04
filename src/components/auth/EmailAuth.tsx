import { signIn } from "../../server/auth";
import { Input } from "../ui/input";
import { SubmitButton } from "./SubmitButton";

export const EmailAuth = () => {
  const authEmail = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    await signIn("nodemailer", { email });
  };

  return (
    <div>
      <form className="text-foreground mt-2 flex w-full flex-1 flex-col justify-center gap-2 animate-in">
        <Input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="Your Email"
          required
        />
        <SubmitButton
          formAction={authEmail}
          className="text-foreground mb-2 rounded-md bg-green-700 px-4 py-2"
          pendingText="Signing In..."
        >
          Get Link
        </SubmitButton>
      </form>
    </div>
  );
};
