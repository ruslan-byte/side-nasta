<template>
  <div class="g-container pt-8 pb-20">
    <NuxtLink href="/" class="hover:text-accent active:text-primary"
      >Назад</NuxtLink
    >
    <h2 class="mb-4">Темы для ЕГЭ</h2>
    <p class="mb-4">
      Выбери темы которые мы уже прошли и я создам по ним вариант ЕГЭ
    </p>

    <div class="mb-4">
      <label
        class="block p-2 cursor-pointer hover:text-accent active:text-primary font-semibold"
      >
        <input
          class="mr-2"
          type="checkbox"
          :checked="activeThemeList.length === themeList?.length"
          @change="
            (newVal) => {
              if (!themeList) return;
              if (newVal.target.checked) {
                activeThemeList = themeList.map((item) => item.id);
              } else {
                activeThemeList = [];
              }
            }
          "
        />
        Выбрать все
      </label>
      <label
        v-for="theme of themeList"
        :key="theme.id"
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
