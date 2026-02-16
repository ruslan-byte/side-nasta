<template>
  <div class="my-4 p-4 bg-white border border-gray-light">
    <div class="flex mb-4">
      <div class="border size-6 leading-5 text-center mr-2 flex-[0_0_auto]">
        6
      </div>
      <div class="font-semibold">
        Прочтите отрывок из записок исторического деятеля.
      </div>
    </div>
    <div class="flex mb-4">
      <img src="/ege/six-task/six-task-1.png" alt="" class="mx-auto" />
    </div>
    <p class="mb-4 font-semibold">
      Используя отрывок и знания по истории, выберите в приведённом списке
      верные суждения. <br />
      Запишите цифры, под которыми они указаны.
    </p>
    <ol class="list-decimal list-inside mb-4">
      <li>
        Упоминаемая в отрывке петиция, составленная представителями дворянства,
        содержала требование роспуска Сената.
      </li>
      <li>
        По свидетельству автора, победа верховников означала установление в
        России олигархического правления.
      </li>
      <li>
        Государственный орган, упоминаемый в первом абзаце, был создан в годы
        правления Петра I.
      </li>
      <li>
        Императрица, имя которой дважды пропущено в тексте, была дочерью брата
        первого российского императора.
      </li>
      <li>
        Современниками описываемых в отрывке событий были Э.И. Бирон и А.И.
        Остерман.
      </li>
      <li>
        Из слов автора следует, что в борьбе с верховниками сторонники
        самодержавия соединились с конституционалистами
      </li>
    </ol>
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
