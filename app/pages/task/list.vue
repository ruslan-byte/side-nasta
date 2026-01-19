<template>
  <div>
    <div class="px-10 pb-20 pt-8" v-if="taskList.data">
      <div class="mb-1" v-for="task of taskList.data.value" :key="task.id">
        {{ task.label }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFetch } from "nuxt/app";

interface ITask {
  id: 2;
  label: "Задача на тему ";
  lession_ids: [1, 2, 3];
}
const taskList = await useFetch<ITask[]>("/api/get-task-by-id", {
  query: {
    id: useRoute().query.ids,
  },
});
</script>
