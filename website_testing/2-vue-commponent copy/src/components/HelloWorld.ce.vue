<!-- MyComponent.ce.vue -->
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello from Web Component!')
</script>
