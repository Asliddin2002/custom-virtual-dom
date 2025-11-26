const render = (vNode) => {
  const $el = document.createElement(vNode.tagName);

  for (const [k, v] of Object.entries(vNode.attrs)) {
    if (k.startsWith("on") && typeof v === "function") {
      const event = k.slice(2);
      $el.addEventListener(event, v);
    } else {
      $el.setAttribute(k, v);
    }
  }

  if (vNode?.children) {
    for (const child of vNode.children) {
      if (typeof child === "object") {
        $el.appendChild(render(child));
      } else {
        $el.textContent = child;
      }
    }
  }

  return $el;
};

export default render;
