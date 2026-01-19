<template>
  <div>
    <div class="px-10 pb-20 pt-8">
      <h2 class="text-[2rem] leading-6 font-semibold mb-6">Темы</h2>
      <div
        v-for="lession of data"
        :key="lession.id"
        class="mb-4 border-b py-2 border-gray-300 flex items-center max-w-3xl justify-between"
      >
        <div class="min-w-3xs">
          {{ lession.label }}
        </div>

        <label>
          <input
            type="checkbox"
            :value="actuveLessionIdList.includes(lession.id)"
            @change="
              (newVal: Event) => {
                toggleTaskById(lession.id, newVal.target?.checked);
              }
            "
          />
        </label>
      </div>
      <a
        v-if="actuveLessionIdList.length !== 0"
        :href="`/task/list?ids=${actuveLessionIdList}`"
        class="text-[2rem] border border-gray-600 px-6 py-4 hover:bg-amber-300 active:bg-amber-600 mt-4 block w-fit"
      >
        Открыть задания
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/get-lession");
const actuveLessionIdList = ref<number[]>([]);

function toggleTaskById(id: number, newVal: boolean) {
  if (newVal) actuveLessionIdList.value.push(id);
  else
    actuveLessionIdList.value = actuveLessionIdList.value.filter(
      (item) => item !== id,
    );
}
</script>
