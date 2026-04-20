<template>
  <div class="p-4 bg-white">
    <div class="mb-10 border border-main text-center font-semibold">
      Рассмотрите изображение и выполните задания 15, 16
    </div>
    <div class="grid lg:grid-cols-2 gap-10">
      <div>
        <nuxt-img class="w-full" src="/ege/task15-16/Image.png"></nuxt-img>
        <div>
          Ответ
          <table class="w-full">
            <tbody>
              <tr>
                <td class="border size-8 text-left">15</td>
              </tr>
              <tr>
                <td class="border">
                  <input type="text" class="text-center" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <nuxt-img class="w-full" src="/ege/task15-16/Image2.png"></nuxt-img>
        <div>
          Ответ
          <table class="w-full">
            <tbody>
              <tr>
                <td class="border size-8 text-left">16</td>
              </tr>
              <tr>
                <td class="border">
                  <input type="text" class="text-center" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
