import { cn } from "@/lib/utils";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppContainer = (props: TProps) => {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "borderr border-app-accent-4/50 bg-app-main/40 mx-auto w-full max-w-5xl rounded-md px-4 md:px-12",
        className && className,
      )}
    >
      {children}
    </div>
  );
};
