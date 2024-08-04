import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut } from "../../server/auth";
import { Button } from "../ui/button";

type TProps = {
  variant?: "main" | "secondary" | "tertiary";
  className?: string;
};

export default async function MyAccount(props: TProps) {
  const { variant = "main", className } = props;
  const session = await auth();
  const user = session?.user;

  const AUTH_PAGE = "/auth";

  console.log("user", user);

  return (
    <div
      className={cn(
        "rounded-r-sm text-lg text-app-light-clr md:bg-app-secondary-clr md:p-2",
        variant === "secondary" &&
          "bg-transparent text-app-dark-clr md:bg-transparent"
      )}
    >
      <div className="hidden items-center  gap-2 md:flex">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              {user.name && <div> {user.name}!</div>}

              {user.image && (
                <Image
                  src={user.image}
                  alt="bango avatar"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              )}

              <Link href="/dashboard">
                <Button
                  size="sm"
                  className={cn(
                    variant === "secondary" &&
                      "hover:bg-  bg-app-secondary-clr text-app-light-clr"
                  )}
                >
                  Dashboard
                </Button>
              </Link>
            </div>

            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button size="sm" className={cn("text-app-dark-clr")}>
                Logout
              </Button>
            </form>
          </>
        ) : (
          <Link href={AUTH_PAGE}>
            <Button size="sm" className="text-app-dark-clr">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
