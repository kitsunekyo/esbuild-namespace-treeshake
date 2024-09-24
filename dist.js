(() => {
  // src/namespace/fn.mjs
  function fn() {
    console.log("fn");
  }

  // src/namespace/a.mjs
  var a = "a";

  // src/namespace/b.mjs
  var b = "b";

  // src/namespace/index.mjs
  var namespace_fn = () => fn();

  // src/index.mjs
  namespace_fn();
  console.log(a);
  console.log(b);
})();
