<template>
  <div class="w-full h-full overflow-y-auto lg:px-10 py-6 lg:py-10">
      <div class="w-full">
        <h2 class="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 capitalize"># Header Section</h2>
      </div>
      
      <!-- Header One -->
      <BoltwindHeadersHeaderOne />
  </div>
</template>

<script setup>

  definePageMeta({
    colorMode: 'dark',
    layout: 'boltwinddocs'
  })

  useHead({
    title: `Boltwind - Tailwind Headers`,
    meta: [
      { name: 'description', content: `Boltwind - Tailwind headers` }
    ],
  })

</script>

<style scoped>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 2em;
}

</style>