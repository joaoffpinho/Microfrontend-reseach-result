<style>
:host {
  --font-family: Arial, Helvetica, sans-serif;
}

.container {
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 1rem;
}

.table-wrapper {
  grid-column: 1/-1;
}


table{
	font-family: var(--font-family);

  background: var(--table-bg-color,#000);
  color: var(--table-color,#ddd);
  
  border: var(--table-border, 1px solid black);
  border-collapse: collapse;
  margin: auto;
  
  width: var(--table-width, 100%);
}

table td, #customers th {
  border: var(--table-td-th-border, 1px solid #ddd);
  border-top: var(--table-td-th-border-top, 1px solid #ddd);
  padding: 0.8rem;
}

table tr:hover {
  background-color: var(--table-onhover-tr-bg-color,#ddd);
  color: var(--table-onhover-tr-color, #000)
}

table th {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
	padding-left: 0.8rem;
  
  text-align: left;
  
  background-color: var(--table-header-bg-color, darkblue);
  color: var(--table-header-color, white);
}

button{
  grid-column: -1;
	font-family: var(--font-family);

  background-color: var(--button-bg-color, darkblue);
	color: var(--button-color, white);
  
	border: var(--button-border,none);
  border-radius:  var(--button-border-radius, 4px);
  
	padding: 0.6rem 1.2rem; 
  
  width: fit-content;
  justify-self: flex-end;

  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--button-bg-color-hover, darkblue);
}
</style>


<template>
  <div class="container">
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th v-if="id">ID</th>
            <th v-if="name">Name</th>
            <th v-if="email">Email</th>
            <th v-if="password">Password</th>
            <th v-if="work">Work</th>
            <th v-if="address">Address</th>
            <th v-if="phone">Phone number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in list" :key="user._id">
            <td v-if="id">{{ user._id }}</td>
            <td v-if="name">{{ user.name }}</td>
            <td v-if="email">{{ user.email }}</td>
            <td v-if="password">{{ user.password }}</td>
            <td v-if="work">{{ user.work }}</td>
            <td v-if="address">{{ user.address }}</td>
            <td v-if="phone">{{ user.phoneNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="reloadList">Reload List</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from './userstypes';

export default defineComponent({
  props: {
    linkapi: {
      type: String,
      required: true
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
  tag: 'my-list-users',
	name: 'MyListUsers',
	data() {
    return {
      list: [] as User[]
    };
  },
  async created() {
    await this.fetchListData();
  },
  methods: {
    async fetchListData() {
      const response = await fetch(this.linkapi);
      const data = await response.json();
      this.list = data;
    },
    async reloadList() {
      await this.fetchListData();
    },
  }
});
</script>
