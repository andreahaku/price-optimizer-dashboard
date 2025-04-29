<script setup lang="ts">
defineProps<{ room: { type: string; prices: number[] } }>();
</script>

<template>
  <tr>
    <td class="px-4 py-2 text-left text-sm text-gray-600">{{ room.type }}</td>
    <td v-for="(price, i) in room.prices" :key="i" class="py-2 text-sm">{{ price }} €</td>
  </tr>
</template>
