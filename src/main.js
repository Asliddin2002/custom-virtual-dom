import createElement from "./vdom/createElement";

const vApp = createElement("div", {
  attrs: {
    id: "app",
  },
  children: [
    "Hello world",
    createElement("img", {
      attrs: {
        src: "https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif",
      },
    }),
  ],
});

console.log(vApp);
