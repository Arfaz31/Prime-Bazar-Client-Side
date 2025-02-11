import { cn } from "@/lib/utils";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TProps) => {
  return (
    <div className={cn("w-full max-w-[1600px] mx-auto px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;
