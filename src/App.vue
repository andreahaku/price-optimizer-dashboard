<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="flex w-16 flex-col items-center border-r bg-white py-4">
      <!-- Icone di navigazione (placeholder) -->
      <nav class="flex flex-col gap-6 text-gray-400">
        <div class="h-6 w-6 rounded bg-gray-300"></div>
        <div class="h-6 w-6 rounded bg-gray-300"></div>
        <div class="h-6 w-6 rounded bg-gray-300"></div>
        <div class="h-6 w-6 rounded bg-gray-300"></div>
        <div class="h-6 w-6 rounded bg-gray-300"></div>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <div class="mx-auto max-w-7xl">
        <h1 class="mb-6 text-2xl font-bold text-gray-800">Price Optimizer Dashboard</h1>
        <DashboardGrid />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import DashboardGrid from "@/components/DashboardGrid.vue";
</script>
