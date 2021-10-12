import * as glide from "./glide";

export default glide.column({
  name: "Echo",
  description: "Echo what you send to it.",
  author: "David Siegel <david@glideapps.com>",
  params: {
    message: {
      displayName: "Message",
      type: "primitive",
    },
  },

  result: { type: "primitive" },

  async run(message) {
    if (message.value === undefined) {
      return undefined;
    }
    return `echo ${message.value}`;
  },
});
