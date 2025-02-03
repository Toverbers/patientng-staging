import Header from "./header";
import { cn } from "@/lib/utils";

export const AppLayout = ({children, showHeader=true, loggedIn, className}) => {
    return (
      <div className={cn('h-screen w-full bg-gray-50 box-border overflow-x-hidden', className)}>
       {showHeader && 
       <Header isLoggedIn={loggedIn} />
       }
          <div className="pt-16">
            {children}
          </div>
        </div>
    );
};