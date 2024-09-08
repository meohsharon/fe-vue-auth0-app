import { Auth0VueClient } from "@auth0/auth0-vue";
import { authorizationParams } from "@helpers/lovs";

export const handleLogin = (avatarIndex?: number, auth0?: Auth0VueClient) => {
  const loginWithRedirect = auth0?.loginWithRedirect;
  const tree_location = localStorage.getItem("treeLocation");
  localStorage.setItem("avatar", avatarIndex?.toString());
  console.log({ ...authorizationParams, avatar: avatarIndex, tree_location });

  loginWithRedirect({
    appState: {
      target: "/home",
    },
    authorizationParams: {
      ...authorizationParams,
      avatar: avatarIndex,
      tree_location,
    },
  });
};
