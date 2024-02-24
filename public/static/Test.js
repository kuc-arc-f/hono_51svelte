import { p as i, u as t, B as c } from "./jsxRuntime.module-9ZXPRZJZ.js";
import { C as r } from "./Head-Da9GSqxo.js";
const o = [{
  id: 1,
  title: "title_1"
}, {
  id: 2,
  title: "title_2"
}, {
  id: 3,
  title: "title_3"
}];
let l = [];
function s() {
  i(0);
  const [a, n] = i(""), d = function() {
    l = o, n((/* @__PURE__ */ new Date()).toString());
  };
  return t("div", {
    class: "container mx-auto my-2 px-8 bg-white",
    children: [t("div", {
      children: t(r, {})
    }), t("h1", {
      class: "text-4xl font-bold",
      children: "Test"
    }), t("hr", {}), t("div", {
      class: "card",
      children: t("button", {
        class: "btn-purple",
        onClick: () => d(),
        children: "Test"
      })
    }), t("hr", {}), l.map((e) => t("li", {
      children: [t("h3", {
        className: "text-3xl font-bold",
        children: e.title
      }), t("span", {
        children: ["id: ", e.id]
      })]
    }, e.id))]
  });
}
c(t(s, {}), document.getElementById("app"));
