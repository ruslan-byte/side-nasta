<template>
  <div class="p-4 bg-white">
    <div class="mb-10 border border-main text-center font-semibold">
      Рассмотрите схему и выполните задания 9–12
    </div>
    <div class="grid lg:grid-cols-2 gap-10">
      <nuxt-img class="w-full" src="/ege/map9-12/image.png"></nuxt-img>
      <div>
        <nuxt-img class="w-full" src="/ege/map9-12/image-2.png"></nuxt-img>
        <div>
          Ответы
          <table class="w-full">
            <tbody>
              <tr>
                <td class="border size-8 text-left">9</td>
                <td class="border size-8 text-left">10</td>
                <td class="border size-8 text-left">11</td>
                <td class="border size-8 text-left">12</td>
              </tr>
              <tr>
                <td class="border">
                  <input type="text" class="text-center" />
                </td>
                <td class="border">
                  <input type="text" class="text-center" />
                </td>
                <td class="border">
                  <input type="text" class="text-center" />
                </td>
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
