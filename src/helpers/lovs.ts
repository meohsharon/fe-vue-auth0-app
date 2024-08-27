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

export const authorizationParams = {
  prompt: "login",
  avatar: 6, // default avatar
  tree_location: localStorage.getItem("treeLocation"),
};
