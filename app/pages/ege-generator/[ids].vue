<template>
  <div class="g-container pt-8 pb-20">
    <NuxtLink
      href="/ege-generator"
      class="hover:text-accent active:text-primary"
      >Назад</NuxtLink
    >
    <h3 class="text-center">Часть 1</h3>
    <p class="border border-gray-light p-4 italic bg-white my-4">
      Ответом к заданиям 1–12 является последовательность цифр или слово
      (словосочетание). Сначала укажите ответы в тексте работы, а затем
      перенесите их в БЛАНК ОТВЕТОВ № 1 справа от номера соответствующего
      задания, начиная с первой клеточки, без пробелов, запятых и других
      дополнительных символов. Каждую цифру или букву пишите в отдельной
      клеточке в соответствии с приведёнными в бланке образцами. Имена
      российских государей следует писать только буквами (например:
      НиколайВторой)
    </p>
    <ege-task-one v-if="data" :data="data.taskOne"></ege-task-one>
  </div>
</template>
<script setup lang="ts">
const themeIds = useRoute().params.ids?.toString();
const { data } = useFetch(`/api/generate-variant?ids=${themeIds}`);
</script>
