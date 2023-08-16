// main.ts
import { createApp } from 'vue'
import { defineCustomElement } from 'vue'
import MyList from './App.ce.vue'

const MyListElement = defineCustomElement(MyList)
customElements.define('my-vue-list', MyListElement)

export { default as MyList } from './App.ce.vue'
