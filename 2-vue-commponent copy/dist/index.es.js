import { defineComponent as f, openBlock as r, createElementBlock as e, createElementVNode as l, Fragment as d, renderList as s, toDisplayString as u, defineCustomElement as m } from "vue";
const h = f({
  props: {
    linkapi: {
      type: String,
      required: !0
    },
    infoTable: {
      type: String,
      default: ""
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
  computed: {
    infoTableArray() {
      return this.infoTable.split(",");
    }
  },
  methods: {
    async fetchListData() {
      const o = await (await fetch(this.linkapi)).json();
      this.list = o;
    },
    async reloadList() {
      await this.fetchListData();
    }
  }
}), g = `:host{--font-family: Arial, Helvetica, sans-serif}.container{display:grid;grid-template-rows:auto auto;grid-gap:1rem}.table-wrapper{grid-column:1/-1}table{font-family:var(--font-family);background:var(--table-bg-color,#000);color:var(--table-color,#ddd);border:var(--table-border, 1px solid black);border-collapse:collapse;margin:auto;width:var(--table-width, 100%)}table td,#customers th{border:var(--table-td-th-border, 1px solid #ddd);border-top:var(--table-td-th-border-top, 1px solid #ddd);padding:.8rem}table tr:hover{background-color:var(--table-onhover-tr-bg-color,#ddd);color:var(--table-onhover-tr-color, #000)}table th{padding-top:.8rem;padding-bottom:.8rem;padding-left:.8rem;text-align:left;background-color:var(--table-header-bg-color, darkblue);color:var(--table-header-color, white)}button{grid-column:-1;font-family:var(--font-family);background-color:var(--button-bg-color, darkblue);color:var(--button-color, white);border:var(--button-border,none);border-radius:var(--button-border-radius, 4px);padding:.6rem 1.2rem;width:-moz-fit-content;width:fit-content;justify-self:flex-end;cursor:pointer;transition:background-color .3s}button:hover{background-color:var(--button-bg-color-hover, darkblue)}
`, v = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [c, b] of o)
    n[c] = b;
  return n;
}, y = { class: "container" }, k = { class: "table-wrapper" };
function w(t, o, n, c, b, E) {
  return r(), e("div", y, [
    l("div", k, [
      l("table", null, [
        l("thead", null, [
          l("tr", null, [
            (r(!0), e(d, null, s(t.infoTableArray, (a, i) => (r(), e("th", { key: i }, u(a), 1))), 128))
          ])
        ]),
        l("tbody", null, [
          (r(!0), e(d, null, s(t.list, (a) => (r(), e("tr", {
            key: a._id
          }, [
            (r(!0), e(d, null, s(t.infoTableArray, (i, p) => (r(), e("td", { key: p }, u(a[i]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]),
    l("button", {
      onClick: o[0] || (o[0] = (...a) => t.reloadList && t.reloadList(...a))
    }, "Reload List")
  ]);
}
const L = /* @__PURE__ */ v(h, [["render", w], ["styles", [g]]]), _ = m(L);
customElements.define("my-vue-list", _);
export {
  L as MyList
};
