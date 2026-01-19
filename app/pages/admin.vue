<template>
  <div>
    {{ data }}
  </div>
</template>
<script setup lang="ts">
const data = ref<number[]>([]);
onMounted(fetch);
function fetch() {
  $fetch("/api/test").then((res) => {
    data.value = res;
  });
}
</script>
