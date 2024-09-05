function tag(input) {
  return `${input}#tag`;
}

// ❌ doesnt treeshake
// export const tagged = tag`string`;

// ❌ doesnt treeshake either
// export const tagged = /* @__PURE__ */ tag`string`;

// ✅ treeshaking requires wrapping with IIFE and annotating
export const tagged = /* @__PURE__ */ (() => tag`string`)();
