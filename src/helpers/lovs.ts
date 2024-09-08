import { AuthorizationParams } from "@auth0/auth0-vue";

export const topNavigation = [
  {
    text: "Home",
    name: "Home",
    target: "/home",
  },
  {
    text: "Onboarding",
    name: "Onboarding",
    target: "/onboarding",
  },
  {
    text: "IPFS",
    name: "FileManager",
    target: "/file-manager",
  },
  {
    text: "My Tree",
    name: "MyTree",
    target: "/my-tree",
  },
];

export const authorizationParams: AuthorizationParams = {
  prompt: "login",
  avatar: localStorage.getItem("avatar") ?? "6",
  tree_location: undefined,
};
