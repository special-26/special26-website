<template>
  <div class="min-h-screen bg-zinc-900 main">

    <BoltwindNavbar />

    <slot />

    <!-- Footer -->
    <footer class='p-4 shadow hidden md:flex md:items-center md:justify-between md:p-6 bg-white dark:bg-zinc-900 w-full border-t dark:border-zinc-800'>
        <span class='text-sm text-zinc-500 sm:text-center dark:text-zinc-500'>© 2023 <a href='https://boltwind.ink/' class='hover:underline'>Boltwind</a>. All Rights Reserved.</span>
        <div class='flex flex-wrap gap-5 items-center justify-between text-sm text-zinc-500 dark:text-zinc-400'>
          <div class="w-full flex items-center gap-1 justify-end">
            <h4 class="text-xs text-zinc-700 dark:text-zinc-400">Inked By :</h4>
            <img src="/boltwind/charlie.png" alt="user-image" class="w-6 h-6 rounded-full object-cover">
            <a href="https://vimalbharti.com" target="_blank" class="text-xs text-zinc-600 dark:text-zinc-300 hover:underline">Vimal Bharti</a>
          </div>
        </div>
    </footer>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>