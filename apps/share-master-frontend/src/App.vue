<template>
  <div class="min-h-screen bg-gradient-to-br from-brand-sand to-brand-gold text-brand-espresso">
    <div class="mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-hidden rounded-[40px] bg-brand-night/60 p-4 shadow-2xl sm:p-8">
      <GradientHeader />
      <main class="relative flex-1 overflow-hidden rounded-[32px] bg-brand-night/40 p-0">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import GradientHeader from './components/GradientHeader.vue';
</script>
