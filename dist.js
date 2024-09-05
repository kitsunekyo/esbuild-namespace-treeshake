(() => {
  // src/fn.mjs
  function fn() {
    console.log("fn");
  }

  // src/tagged-template-literal.mjs
  function tag(input) {
    return `${input}#tag`;
  }
  var tagged = tag`some string`;

  // src/a.mjs
  var a = "a";

  // src/namespace.mjs
  var namespace_fn = () => fn();

  // src/index.mjs
  namespace_fn();
  console.log(a);
})();
