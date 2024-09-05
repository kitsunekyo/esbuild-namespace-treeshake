function tag(input) {
  return `${input}#tag`;
}

// ? treeshaking requires wrapping with IIFE and annotating
export const tagged = /* @__PURE__ */ (() => tag`string`)();
