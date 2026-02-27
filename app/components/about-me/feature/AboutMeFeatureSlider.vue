<template>
  <div class="">
    <h3 class="mb-4">Особенности</h3>
    <ClientOnly>
      <swiper-container
        :slides-per-view="2"
        :loop="true"
        :autoplay="{
          delay: 3000,
        }"
        :slides-per-group="1"
        space-between="16"
        alight
      >
        <template v-for="i of 2">
          <swiper-slide>
            <div class="aspect-square bg-white rounded p-4">
              <img
                src="https://cdn.yutu.ru/static/logo_class.svg"
                class="size-full"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="aspect-square bg-white rounded p-4">Скрипты</div>
          </swiper-slide>
          <swiper-slide>
            <div class="aspect-square bg-white rounded p-4">
              Генератор вариатов егэ
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="aspect-square bg-white rounded p-4">
              Чат бот для повторения
            </div>
          </swiper-slide>
        </template>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts"></script>
