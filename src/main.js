import createElement from "./vdom/createElement";
import render from "./vdom/render";

let mood = "😴 tired of coding all day";

function buildApp() {
  return createElement("div", {
    attrs: {
      id: "app",
      class: "wrapper",
    },
    children: [
      createElement("h1", {
        attrs: { class: "title" },
        children: ["Custom Virtual DOM Demo 🚀"],
      }),

      createElement("p", {
        attrs: { class: "subtitle" },
        children: ["A tiny VDOM built from scratch."],
      }),

      createElement("img", {
        attrs: {
          src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDIwNDAxNWp4Y2tmcXRuM2d3YmFqMnZ2Y3YzN2U5YmdseTR2bWUwMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gx54W1mSpeYMg/giphy.gif",
          class: "cat-image",
        },
      }),

      createElement("p", {
        attrs: { class: "mood-text" },
        children: [`Developer mood: ${mood}`],
      }),

      createElement("button", {
        attrs: {
          class: "btn-change",
          onclick: () => {
            handleChangeMood();
          },
        },
        children: ["Change Mood"],
      }),
    ],
  });
}

function handleChangeMood() {
  mood =
    mood === "😴 tired of coding all day"
      ? "🔥 motivated to build cool things!"
      : "😴 tired of coding all day";

  rerender();
}

function rerender() {
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(render(buildApp()));
}

console.log("mood", mood);

// Initial render
rerender();
