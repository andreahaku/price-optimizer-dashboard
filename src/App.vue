<script setup lang="ts">
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardGrid from "@/components/DashboardGrid.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <div class="flex min-h-screen bg-gray-100">
    <NavigationBar />
    <main class="flex-1 p-6">
      <div class="mx-auto max-w-7xl">
        <DashboardHeader />
        <DashboardGrid />
      </div>
    </main>
  </div>
</template>
