import { AuthorizationParams } from "@auth0/auth0-vue";

export const navigation = [
  {
    text: "Home",
    target: "/home",
  },
  {
    text: "IPFS",
    target: "/file-manager",
  },
  {
    text: "My Tree",
    target: "/my-tree",
  },
];

export const authorizationParams: AuthorizationParams = {
  prompt: "login",
  avatar: localStorage.getItem("avatar") ?? "6",
  tree_location: localStorage.getItem("treeLocation"),
};
