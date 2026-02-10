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

    <NuxtLink href="/ege-generator/2,3">
      <Button>Открыть</Button>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts"></script>
