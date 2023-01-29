import { AuthCallback } from "casdoor-react-sdk";
import { useNavigate } from "react-router-dom";
import * as Setting from "../setting";

interface TokenResponse {
  status: string;
  message: string;
  user: unknown;
}

const Callback = () => {
  const nav = useNavigate();

  return (
    <AuthCallback
      sdk={Setting.CasdoorSDK}
      serverUrl={Setting.ServerUrl}
      saveTokenFromResponse={(res: unknown) => {
        // save token
        // determine whether the `token` is successfully obtained through `code` and `state`.
        const tResponse = res as TokenResponse;
        localStorage.setItem("user", JSON.stringify(tResponse.user));
        nav("/", { replace: true });
      }}
      isGetTokenSuccessful={(res: unknown) => {
        // according to the data returned by the server,
        // determine whether the `token` is successfully obtained through `code` and `state`.
        const tResponse = res as TokenResponse;
        if (tResponse.status === "ok") {
          return true;
        } else {
          localStorage.removeItem("user");
          return false;
        }
      }}
    />
  );
};

export default Callback;
