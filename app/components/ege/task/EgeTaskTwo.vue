<template>
  <div class="my-4 p-4 bg-white border border-gray-light">
    <div class="flex mb-4">
      <div class="border size-6 leading-5 text-center mr-2 flex-[0_0_auto]">
        2
      </div>
      <div class="font-semibold">
        Расположите в хронологической последовательности исторические события.
        Запишите цифры, которыми обозначены исторические события, в правильной
        последовательности в таблицу
      </div>
    </div>
    <ol class="mb-4 list-decimal list-inside">
      <li>открытие Васко да Гамой морского пути в Индию</li>
      <li>изятие Измаила русскими войсками под командованием А.В. Суворова</li>
      <li>освобождение Москвы от польско-литовских интервентов</li>
    </ol>

    <div class="flex items-center">
      <div class="mr-4">Ответ</div>
      <table>
        <tbody>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ themeIds: string }>();
</script>
