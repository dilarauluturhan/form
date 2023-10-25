import { FC, ReactNode } from "react";
import { Button } from "./ui/button";

interface GoogleLoginButtonProps {
  children: ReactNode;
}

const GoogleLogin: FC<GoogleLoginButtonProps> = ({ children }) => {
  const loginWithGoogle = () => {
    console.log("Login with Google!");
    
  };

  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleLogin;
