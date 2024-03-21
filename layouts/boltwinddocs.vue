<template>
  <div class="min-h-screen bg-zinc-900 main">

    <BoltwindNavbar />

    <div class="flex h-[calc(100vh-52px)]">
          <BoltwindDocSidebar />

          <!-- <div class="bg-zinc-950 p-12 w-full h-[calc(100vh-55px)] overflow-y-auto rounded-tl-3xl"> -->
          <div class="w-full lg:w-[80%] text-zinc-100 flex flex-col h-full overflow-y-auto gap-6 bg-zinc-50 dark:bg-zinc-900">
              <slot />
          </div>
      </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>