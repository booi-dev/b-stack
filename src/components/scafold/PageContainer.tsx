import { cn } from "@/lib/utils";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageContainer = (props: TProps) => {
  const { children, className } = props;

  return <div className={cn("py-8", className && className)}>{children}</div>;
};
