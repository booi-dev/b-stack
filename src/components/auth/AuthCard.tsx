import { GoogleAuth } from "@/components/auth/GoogleAuth";
import { AppContainer, PageContainer } from "@/components/scafold";
import { cn } from "@/lib/utils";
import BottomActions from "./BottomActions";
import { EmailAuth } from "./EmailAuth";
import { FormDivider } from "./FormDivider";

const AuthCard = () => {
  return (
    <PageContainer className="bg-app-accent-clr-1/10 p-0">
      <AppContainer
        className={cn("flex min-h-svh items-center justify-center px-4 ")}
      >
        <div className="mx-auto w-full bg-teal-400/40 p-4 max-w-[400px] overflow-y-auto rounded-md py-2">
          <div className="flex items-center justify-center gap-2 text-center"></div>
          <div className="mt-4 flex w-full flex-1 flex-col justify-center gap-2 sm:max-w-md">
            <h2 className="my-4 text-center font-luckiest-guy text-xl text-app-dark-clr underline">
              Welcome to My Site
            </h2>

            <EmailAuth />
            <FormDivider />
            <GoogleAuth />
          </div>
          <BottomActions />
        </div>
      </AppContainer>
    </PageContainer>
  );
};

export default AuthCard;
