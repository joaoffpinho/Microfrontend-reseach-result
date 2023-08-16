(function(o,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(o=typeof globalThis<"u"?globalThis:o||self,t(o.VueListUsers={},o.Vue))})(this,function(o,t){"use strict";const c=t.defineComponent({props:{linkapi:{type:String,required:!0},infoTable:{type:String,default:""}},tag:"my-list-users",name:"MyListUsers",data(){return{list:[]}},async created(){await this.fetchListData()},computed:{infoTableArray(){return this.infoTable.split(",")}},methods:{async fetchListData(){const r=await(await fetch(this.linkapi)).json();this.list=r},async reloadList(){await this.fetchListData()}}}),b=`:host{--font-family: Arial, Helvetica, sans-serif}.container{display:grid;grid-template-rows:auto auto;grid-gap:1rem}.table-wrapper{grid-column:1/-1}table{font-family:var(--font-family);background:var(--table-bg-color,#000);color:var(--table-color,#ddd);border:var(--table-border, 1px solid black);border-collapse:collapse;margin:auto;width:var(--table-width, 100%)}table td,#customers th{border:var(--table-td-th-border, 1px solid #ddd);border-top:var(--table-td-th-border-top, 1px solid #ddd);padding:.8rem}table tr:hover{background-color:var(--table-onhover-tr-bg-color,#ddd);color:var(--table-onhover-tr-color, #000)}table th{padding-top:.8rem;padding-bottom:.8rem;padding-left:.8rem;text-align:left;background-color:var(--table-header-bg-color, darkblue);color:var(--table-header-color, white)}button{grid-column:-1;font-family:var(--font-family);background-color:var(--button-bg-color, darkblue);color:var(--button-color, white);border:var(--button-border,none);border-radius:var(--button-border-radius, 4px);padding:.6rem 1.2rem;width:-moz-fit-content;width:fit-content;justify-self:flex-end;cursor:pointer;transition:background-color .3s}button:hover{background-color:var(--button-bg-color-hover, darkblue)}
`,p=(e,r)=>{const a=e.__vccOpts||e;for(const[d,s]of r)a[d]=s;return a},m={class:"container"},f={class:"table-wrapper"};function u(e,r,a,d,s,y){return t.openBlock(),t.createElementBlock("div",m,[t.createElementVNode("div",f,[t.createElementVNode("table",null,[t.createElementVNode("thead",null,[t.createElementVNode("tr",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.infoTableArray,(n,l)=>(t.openBlock(),t.createElementBlock("th",{key:l},t.toDisplayString(n),1))),128))])]),t.createElementVNode("tbody",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.list,n=>(t.openBlock(),t.createElementBlock("tr",{key:n._id},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.infoTableArray,(l,h)=>(t.openBlock(),t.createElementBlock("td",{key:h},t.toDisplayString(n[l]),1))),128))]))),128))])])]),t.createElementVNode("button",{onClick:r[0]||(r[0]=(...n)=>e.reloadList&&e.reloadList(...n))},"Reload List")])}const i=p(c,[["render",u],["styles",[b]]]),g=t.defineCustomElement(i);customElements.define("my-vue-list",g),o.MyList=i,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
