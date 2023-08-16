import { defineComponent as b, openBlock as e, createElementBlock as o, createElementVNode as s, createCommentVNode as r, Fragment as h, renderList as p, toDisplayString as n, defineCustomElement as u } from "vue";
const m = b({
  props: {
    linkapi: {
      type: String,
      required: !0
    },
    id: {
      type: Boolean
    },
    name: {
      type: Boolean
    },
    email: {
      type: Boolean
    },
    password: {
      type: Boolean
    },
    work: {
      type: Boolean
    },
    phone: {
      type: Boolean
    },
    address: {
      type: Boolean
    }
  },
  tag: "my-list-users",
  name: "MyListUsers",
  data() {
    return {
      list: []
    };
  },
  async created() {
    await this.fetchListData();
  },
  methods: {
    async fetchListData() {
      const d = await (await fetch(this.linkapi)).json();
      this.list = d;
    },
    async reloadList() {
      await this.fetchListData();
    }
  }
}), y = `:host{--font-family: Arial, Helvetica, sans-serif}.container{display:grid;grid-template-rows:auto auto;grid-gap:1rem}.table-wrapper{grid-column:1/-1}table{font-family:var(--font-family);background:var(--table-bg-color,#000);color:var(--table-color,#ddd);border:var(--table-border, 1px solid black);border-collapse:collapse;margin:auto;width:var(--table-width, 100%)}table td,#customers th{border:var(--table-td-th-border, 1px solid #ddd);border-top:var(--table-td-th-border-top, 1px solid #ddd);padding:.8rem}table tr:hover{background-color:var(--table-onhover-tr-bg-color,#ddd);color:var(--table-onhover-tr-color, #000)}table th{padding-top:.8rem;padding-bottom:.8rem;padding-left:.8rem;text-align:left;background-color:var(--table-header-bg-color, darkblue);color:var(--table-header-color, white)}button{grid-column:-1;font-family:var(--font-family);background-color:var(--button-bg-color, darkblue);color:var(--button-color, white);border:var(--button-border,none);border-radius:var(--button-border-radius, 4px);padding:.6rem 1.2rem;width:-moz-fit-content;width:fit-content;justify-self:flex-end;cursor:pointer;transition:background-color .3s}button:hover{background-color:var(--button-bg-color-hover, darkblue)}
`, k = (t, d) => {
  const l = t.__vccOpts || t;
  for (const [i, c] of d)
    l[i] = c;
  return l;
}, f = { class: "container" }, g = { class: "table-wrapper" }, v = { key: 0 }, _ = { key: 1 }, w = { key: 2 }, L = { key: 3 }, B = { key: 4 }, E = { key: 5 }, D = { key: 6 }, C = { key: 0 }, N = { key: 1 }, $ = { key: 2 }, M = { key: 3 }, j = { key: 4 }, A = { key: 5 }, P = { key: 6 };
function S(t, d, l, i, c, z) {
  return e(), o("div", f, [
    s("div", g, [
      s("table", null, [
        s("thead", null, [
          s("tr", null, [
            t.id ? (e(), o("th", v, "ID")) : r("", !0),
            t.name ? (e(), o("th", _, "Name")) : r("", !0),
            t.email ? (e(), o("th", w, "Email")) : r("", !0),
            t.password ? (e(), o("th", L, "Password")) : r("", !0),
            t.work ? (e(), o("th", B, "Work")) : r("", !0),
            t.address ? (e(), o("th", E, "Address")) : r("", !0),
            t.phone ? (e(), o("th", D, "Phone number")) : r("", !0)
          ])
        ]),
        s("tbody", null, [
          (e(!0), o(h, null, p(t.list, (a) => (e(), o("tr", {
            key: a._id
          }, [
            t.id ? (e(), o("td", C, n(a._id), 1)) : r("", !0),
            t.name ? (e(), o("td", N, n(a.name), 1)) : r("", !0),
            t.email ? (e(), o("td", $, n(a.email), 1)) : r("", !0),
            t.password ? (e(), o("td", M, n(a.password), 1)) : r("", !0),
            t.work ? (e(), o("td", j, n(a.work), 1)) : r("", !0),
            t.address ? (e(), o("td", A, n(a.address), 1)) : r("", !0),
            t.phone ? (e(), o("td", P, n(a.phoneNumber), 1)) : r("", !0)
          ]))), 128))
        ])
      ])
    ]),
    s("button", {
      onClick: d[0] || (d[0] = (...a) => t.reloadList && t.reloadList(...a))
    }, "Reload List")
  ]);
}
const V = /* @__PURE__ */ k(m, [["render", S], ["styles", [y]]]), q = u(V);
customElements.define("my-vue-list", q);
export {
  V as MyList
};
