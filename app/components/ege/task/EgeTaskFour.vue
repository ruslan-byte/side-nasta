<template>
  <div class="my-4 p-4 bg-white border border-gray-light">
    <div class="flex mb-4">
      <div class="border size-6 leading-5 text-center mr-2 flex-[0_0_auto]">
        4
      </div>
      <div class="font-semibold">
        Заполните пустые ячейки таблицы, используя приведённый ниже список
        пропущенных элементов: для каждого пропуска, обозначенного буквой,
        выберите номер нужного элемента.
      </div>
    </div>
    <div class="mb-4">
      <table class="w-full">
        <tbody>
          <tr>
            <td class="border border-gray px-10 text-center">
              Географический<br />
              объект
            </td>
            <td class="border border-gray px-10 text-center">
              Событие<br />
              (явление, процесс)
            </td>
            <td class="border border-gray px-10 text-center">
              Время, когда <br />
              произошло событие <br />
              (явление, процесс)
            </td>
          </tr>
          <tr v-for="item of tableData">
            <td class="border border-gray px-10 text-center">
              {{ item.place }}
            </td>
            <td class="border border-gray px-10 text-center">
              {{ item.event }}
            </td>
            <td class="border border-gray px-10 text-center">
              {{ item.year }}-e гг.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mb-4 font-semibold">Пропущенные элементы:</p>
    <ol class="mb-4 list-decimal list-inside">
      <li>Петроград</li>
      <li>Севастополь</li>
      <li>1890-е гг.</li>
      <li>Владивосток</li>
      <li>1660-е гг.</li>
      <li>ввод в эксплуатацию первой в мире атомной электростанции</li>
      <li>деятельность Всероссийского Учредительного собрания</li>
      <li>1790-е гг.</li>
      <li>вхождение в состав Российской Федерации</li>
    </ol>
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
            <td class="border size-8 text-center">Д</td>
            <td class="border size-8 text-center">Е</td>
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

const lastLetterIndex = ref(0);
function getQuestionLetter() {
  const letters = ["А", "Б", "В", "Г", "Д", "Е"];
  if (lastLetterIndex.value >= letters.length) return "";
  let thisLetter = letters[lastLetterIndex.value];
  lastLetterIndex.value = lastLetterIndex.value + 1;

  return thisLetter;
}

const tableData = computed(() => [
  {
    place: "Донецк",
    event: `______________(${getQuestionLetter()})`,
    year: 2020,
  },
  {
    place: `______________(${getQuestionLetter()})`,
    event: "Транссибирской магистрали",
    year: `______________(${getQuestionLetter()})`,
  },
  {
    place: "Деревня Андрусово",
    event: "Подписание перемирия между Россией и Речью Посполитой",
    year: `______________(${getQuestionLetter()})`,
  },
  {
    place: `______________(${getQuestionLetter()})`,
    event: `______________(${getQuestionLetter()})`,
    year: 1910,
  },
]);
</script>
