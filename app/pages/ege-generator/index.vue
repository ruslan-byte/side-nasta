<template>
  <div class="g-container pt-8 pb-20">
    <NuxtLink href="/" class="hover:text-accent active:text-primary"
      >Назад</NuxtLink
    >
    <h2 class="mb-4">Темы для ЕГЭ</h2>
    <p class="mb-4">
      Выбери темы которые мы уже прошли и я создам по ним вариант ЕГЭ, который
      ты можешь сделать на 100
    </p>

    <div class="italic mb-4">Заметка для себя - подготовить список тем</div>
    <div class="mb-4">
      <label
        v-for="theme of themeList"
        class="block p-2 cursor-pointer hover:text-accent active:text-primary"
      >
        <input
          class="mr-2"
          type="checkbox"
          :checked="activeThemeList.includes(theme.id)"
          @change="
            (newVal) => {
              if (newVal.target.checked) activeThemeList.push(theme.id);
              else {
                activeThemeList = activeThemeList.filter(
                  (activeThemeId) => activeThemeId !== theme.id,
                );
              }
            }
          "
        />
        {{ theme.label }}
      </label>
    </div>
    <NuxtLink
      :href="`/ege-generator/${activeThemeList.join(',')}`"
      v-if="activeThemeList.length > 0"
    >
      <Button>Открыть</Button>
    </NuxtLink>
    <Button v-else disabled>Открыть</Button>
  </div>
</template>
<script setup lang="ts">
const { data: themeList } = useFetch("/api/get-theme-list");

const activeThemeList = ref<number[]>([]);
</script>
