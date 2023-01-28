import Sdk from "casdoor-js-sdk";

export const ServerUrl = "http://localhost:8080";

const sdkConfig = {
  serverUrl: "http://localhost:8000",
  clientId: "33888483ade5ee339539",
  appName: "react-test",
  organizationName: "dawnseeker",
  redirectPath: "/callback",
};

export const CasdoorSDK = new Sdk(sdkConfig);
