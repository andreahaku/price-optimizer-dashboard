<script setup lang="ts">
const today = "01 Gennaio 2025";
</script>

<template>
  <div class="mb-4 flex items-center justify-between text-sm text-gray-700">
    <!-- Sinistra: data + oggi -->
    <div class="flex items-center gap-3">
      <input
        type="text"
        :value="today"
        class="w-40 rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none"
        readonly
      />
      <button class="text-xs text-gray-500 hover:text-black">Oggi</button>
    </div>

    <!-- Centro: stato invio -->
    <div class="flex items-center gap-2">
      <span class="flex items-center gap-1 text-green-600">
        <span class="h-2 w-2 rounded-full bg-green-500"></span>
        Stato di invio: <strong>ok</strong>
      </span>
    </div>

    <!-- Destra: pulsanti -->
    <div class="flex items-center gap-3">
      <button class="rounded bg-gray-800 px-3 py-1 text-sm text-white hover:bg-gray-700">
        Personalizza prezzi
      </button>
      <button class="text-gray-400 hover:text-black">⚙️</button>
    </div>
  </div>
</template>
