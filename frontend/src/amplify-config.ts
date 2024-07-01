import type { ResourcesConfig } from "@aws-amplify/core";

// https://docs.amplify.aws/javascript/build-a-backend/auth/use-existing-cognito-resources
const config: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: "ap-northeast-1_XeF1IhZk4",
      userPoolClientId: "15g71dfccf6u3ufikpglti93hg",
      // identityPoolId: "<your-cognito-identity-pool-id>",
    },
  },
};

export default config;
