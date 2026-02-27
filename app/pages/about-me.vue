<template>
  <div class="py-8">
    <div class="g-container">
      <img
        class="rounded mb-4"
        src="https://sun9-28.userapi.com/s/v1/ig2/-w8pC1-tY4baYYokOyaoFa28Up43tTKearKgjXJ-srpxrd_OlJ-f_owPXO6fRRolVGBtEYgSDH1noVvzS2YtZNWs.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=2560x0"
        alt=""
      />

      <div class="h-[5.375rem]">
        <Transition
          enter-active-class="transition-all"
          enter-from-class="translate-x-9"
          enter-to-class="translate-x-0"
        >
          <div class="flex flex-col items-center" v-if="isPageLoad">
            <h2 class="text-main mr-4">Анастасия</h2>
            <h2 class="text-main ml-8">Алексеевна</h2>
          </div>
        </Transition>
        <Transition
          enter-active-class="transition-all"
          enter-from-class="-translate-x-9"
          enter-to-class="translate-x-0"
        >
          <div class="flex items-center justify-center" v-if="isPageLoad">
            <h4 class="mr-2 text-main">Репетитор</h4>
            <div class="mr-2 size-1 bg-main rounded-full"></div>
            <h4 class="mr-2 text-main">ЕГЭ</h4>
            <div class="mr-2 size-1 bg-main rounded-full"></div>
            <h4 class="text-main">2027</h4>
          </div>
        </Transition>
      </div>
      <p class="mb-4 text-main">
        Занимаюсь подготовкой молодых людей к ЕГЭ, сейчас набираю учеников на
        2026-2027 учебный год.
      </p>

      <div
        class="mb-4 rounded border border-primary p-4 text-main flex items-center"
      >
        <div>Записатся на бесплатный пробный урок-знакомство</div>
        <div>
          <Button class="bg-blue mb-2">Телеграм</Button>
          <Button class="bg-blue">ВКонтакте</Button>
        </div>
      </div>
      <p class="mb-6">
        Преподаю только индивидуально. Онлайн или офлайн по желанию
      </p>

      <h3>Особенности</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
const isPageLoad = ref(false);
onMounted(() => {
  setTimeout(() => {
    isPageLoad.value = true;
  }, 100);
});
</script>
