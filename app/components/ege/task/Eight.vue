<template>
  <div class="my-4 p-4 bg-white border border-gray-light">
    <div class="flex mb-4">
      <div class="border size-6 leading-5 text-center mr-2 flex-[0_0_auto]">
        8
      </div>
      <div class="font-semibold">
        Прочтите отрывок из записок исторического деятеля.
      </div>
    </div>
    <div class="flex mb-4">
      <img src="/ege/six-task/eight-task-1.png" alt="" class="mx-auto" />
    </div>
    <p class="mb-4">
      Заполните пропуск в предложении: «Этот номер газеты вышел в тысяча
      девятьсот ____________________ году». Ответ запишите словом (сочетанием
      слов)
    </p>

    <div class="flex items-center">
      <div class="mr-4">Ответ</div>
      <div>
        <input type="text" class="border-b border-gray" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ themeIds: string }>();

const { data } = useFetch(`/api/ege/task-first?ids=${props.themeIds}`);
</script>
