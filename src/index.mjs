import * as namespace from "./namespace/index.mjs";
import { b } from "./namespace/barrel.mjs";

namespace.namespace_fn();
console.log(namespace.a);
console.log(b);
