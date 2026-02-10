<template>
  <div class="g-container pt-8 pb-20">
    <h1 class="mb-6">Домик Насти</h1>

    <div class="border border-primary rounded p-4">
      <h3 class="mb-4">Комнаты в домике</h3>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <NuxtLink href="/ege-generator">
          <Button class="w-full">Генератор ЕГЭ</Button>
        </NuxtLink>
        <Button disabled>Кухня (пока не доступна)</Button>
        <Button disabled>Кабинет (Скоро закончим ремонт)</Button>
        <Button disabled>Попугайня (Попугаи в отпуске)</Button>
        <a href="https://t.me/litva1318" target="_blank">
          <Button class="w-full">Записаться на уроки</Button>
        </a>
        <Button disabled>Комната отдыха (Отдыхать пока нельзя)</Button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
