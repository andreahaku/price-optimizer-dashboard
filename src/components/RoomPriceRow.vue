<script setup lang="ts">
defineProps<{ room: { type: string; prices: number[]; occupancy: number[] } }>();
</script>

<template>
  <tr class="bg-gray-100 transition hover:bg-gray-300">
    <td class="px-4 py-2 text-left text-sm font-medium text-gray-700">
      <span class="inline-block w-4 text-gray-300">└</span>
      {{ room.type }}
    </td>
    <td
      v-for="(price, i) in room.prices"
      :key="i"
      class="relative border-l border-gray-200 px-3 py-4 text-center text-sm text-gray-800"
    >
      <div
        class="absolute inset-0 opacity-50"
        :style="{ backgroundColor: `hsl(${(room.occupancy[i] / 100) * 120}, 100%, 80%)` }"
      ></div>
      <div class="relative z-10 flex h-full items-center justify-center">{{ price }} €</div>
    </td>
  </tr>
</template>
