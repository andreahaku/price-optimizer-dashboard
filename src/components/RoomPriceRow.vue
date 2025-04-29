<script setup lang="ts">
defineProps<{ room: { type: string; prices: number[] } }>();
</script>

<template>
  <tr class="bg-gray-50 transition hover:bg-gray-200">
    <td class="border-t border-gray-200 px-4 py-6 text-left text-sm font-medium text-gray-700">
      <span class="inline-block w-4 text-gray-300">└</span>
      <span class="ml-2">{{ room.type }}</span>
    </td>
    <td
      v-for="(price, i) in room.prices"
      :key="i"
      class="border-t border-l border-gray-200 bg-white py-2 text-sm text-gray-800"
    >
      {{ price }} €
    </td>
  </tr>
</template>
