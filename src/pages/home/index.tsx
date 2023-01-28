import * as Setting from "../../setting";
import { SilentSignin, isSilentSigninRequired } from "casdoor-react-sdk";
import { useEffect, useState } from "react";

interface LoginUser {
  name: string;
}

function HomePage() {
  const [user, setUser] = useState<LoginUser>({ name: "" });

  useEffect(() => {
    const json = localStorage.getItem("user");
    if (json != null) {
      const u = JSON.parse(json);
      if (u != null) {
        setUser(u);
      }
    }
  }, []);
  const isLoggedIn = () => {
    return localStorage.getItem("user") != null;
  };

  if (isSilentSigninRequired()) {
    // if the `silentSignin` parameter exists, perform silent login processing
    return (
      <SilentSignin
        sdk={Setting.CasdoorSDK}
        isLoggedIn={isLoggedIn}
        handleReceivedSilentSigninSuccessEvent={() => {
          // jump to the home page here and clear silentSignin parameter
          window.location.href = "/home";
        }}
        handleReceivedSilentSigninFailureEvent={() => {
          // prompt the user to log in failed here
          alert("login failed");
        }}
      />
    );
  }

  const renderContent = () => {
    if (isLoggedIn()) {
      return <div>Hello {user.name}!</div>;
    } else {
      return (
        <div>
          <a href={Setting.CasdoorSDK.getSigninUrl()} className="top">
            Signin
          </a>
        </div>
      );
    }
  };

  return renderContent();
}

export default HomePage;
