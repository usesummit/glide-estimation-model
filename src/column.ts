import * as glide from "./glide";

export default glide.column({
  name: "GitHub Profile",
  description: "Echo what you send to it.",
  author: "David Siegel <david@glideapps.com>",
  params: {
    message: {
      displayName: "Username",
      type: "primitive",
    },
  },

  result: { type: "string" },

  async run(message) {
    if (message.value === undefined) {
      return undefined;
    }
    const profile = await fetch(
      `https://api.github.com/users/${message.value}`
    );
    return JSON.stringify(profile);
  },
});
