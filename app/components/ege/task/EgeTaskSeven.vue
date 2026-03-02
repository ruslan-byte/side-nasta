<template>
  <div class="my-4 p-4 bg-white border border-gray-light">
    <div class="flex mb-4">
      <div class="border size-6 leading-5 text-center mr-2 flex-[0_0_auto]">
        7
      </div>
      <div class="font-semibold">
        Установите соответствие между памятниками культуры и их краткими
        характеристиками: к каждой позиции первого столбца подберите
        соответствующую позицию из второго столбца.
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex-1 border-r border-gray mr-4 pr-4">
        <div class="text-center">ПАМЯТНИКИ КУЛЬТУРЫ</div>
        <div v-for="(event, index) of data?.events">
          {{ ["A", "Б", "В", "Г"][index] }}) {{ event.label }}
        </div>
      </div>
      <div class="flex-1">
        <div class="text-center">ХАРАКТЕРИСТИКИ</div>
        <div v-for="(year, index) of data?.years">
          {{ index + 1 }}) {{ year }} г
        </div>
      </div>
    </div>
    <p class="mb-4 font-semibold">
      Запишите в таблицу выбранные цифры под соответствующими буквами.
    </p>
    <div class="flex items-center">
      <div class="mr-4">Ответ</div>
      <table>
        <tbody>
          <tr>
            <td class="border size-8 text-center">А</td>
            <td class="border size-8 text-center">Б</td>
            <td class="border size-8 text-center">В</td>
            <td class="border size-8 text-center">Г</td>
          </tr>
          <tr>
            <td class="border size-8">
              <input type="text" class="size-8 text-center" />
            </td>
            <td class="border size-8">
              <input type="text" class="size-8 text-center" />
            </td>
            <td class="border size-8">
              <input type="text" class="size-8 text-center" />
            </td>
            <td class="border size-8">
              <input type="text" class="size-8 text-center" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ themeIds: string }>();

const { data } = useFetch(`/api/ege/task-first?ids=${props.themeIds}`);
</script>
