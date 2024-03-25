<template>
  <div class="w-full h-full">

      <!-- Reusable Components -->
      <section class="relative w-full overflow-hidden bg-white dark:bg-zinc-900">
          <div class="w-full h-full md:h-[90vh] pb-12 md:pb-0">
              <div class="flex flex-col md:flex-row justify-center items-center gap-12 w-full h-full px-3 md:px-0">
                  <div class="h-full md:w-[50%]">
                      <img src="/boltwind/hero.png" alt="" class="w-full h-full object-cover">
                  </div>
                  <div class="md:w-[50%] h-full flex flex-col justify-center items-start">
                      <h5 class="text-sm font-medium text-lime-500">Components</h5>
                      <h2 class="dark:text-zinc-200 text-zinc-800 text-4xl mb-6 font-medium">Tailwind Components and <br/> <span class="textGradient">easy to implement</span></h2>
                      <p class="dark:text-zinc-300 text-zinc-600 mb-6">Start developing with an open-source library of Tailwind UI components</p>
                      <div class="flex items-center flex-wrap gap-2 w-[80%]">
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">navbar</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">testimonial</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">footer</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">buttons</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">alert</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">hero Section</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">cookies</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">card</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">form</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">skeleton</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">dummy Text</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">breadcrumbs</span>
                      </div>
                      <NuxtLink to="/boltwind/components" class="inline-block bg-gradient-to-tl from-[#C7D954] via-transparent to-[#30CFD0] hover:bg-gradient-to-tr rounded-xl mt-8 py-0.5 px-0.5">
                            <button class="bg-white dark:bg-zinc-900 w-full px-12 py-3 h-full rounded-xl text-zinc-800 dark:text-zinc-100 ">Browse Components</button>
                        </NuxtLink>
                  </div>
              </div>
          </div>
          <div class="glow-background bg-gradient-to-r from-[#30CFD0] to-[#c7d954] blur-2xl rounded-full shadow-lg shadow-cyan-500/50 w-[30%] h-[60%] absolute opacity-25 -right-20 -bottom-20 -z-0"></div>
      </section>

      <!-- VSCode Extension -->
      <section class="relative w-full overflow-hidden bg-white dark:bg-zinc-900">
          <div class="max-w-6xl mx-auto md:h-screen h-full flex flex-col md:flex-row justify-center items-center gap-20 px-3 md:px-0 py-12 md:py-0">
              <div class="w-full">
                  <div>
                      <h5 class="text-sm font-medium text-lime-500">Extension</h5>
                      <h2 class="text-4xl font-medium text-zinc-800 dark:text-zinc-300">Every Component you need is <span class="textGradient font-bold">ready for production</span></h2>
                      <p class="dark:text-zinc-400 text-zinc-500 mt-5">An effortless way to initiate with the tailwind components. With this extension, you can use the required commands as per the commands mention in documentation.</p>
                  </div>
                  <div class="mt-6 space-y-4">
                      <div class="group flex gap-4 w-full items-center px-4 py-4 text-sm bg-zinc-100 dark:bg-zinc-900 border dark:border-zinc-800 dark:hover:bg-zinc-800 hover:bg-white rounded-xl">
                          <button class="bg-lime-700/10 rounded-xl h-12 w-12 flex-center">
                              <IconsInstall class="text-lime-500 w-6 h-6" />
                          </button>
                          <div class="text-left">
                              <h3 class="text-lg dark:text-zinc-200">Install</h3>
                              <p class="text-sm text-zinc-500">Install the VSCode extension from marketplace</p>
                          </div>
                      </div>
                      <div class="group flex gap-4 w-full items-center px-4 py-4 text-sm bg-zinc-100 dark:bg-zinc-900 border dark:border-zinc-800 dark:hover:bg-zinc-800 hover:bg-white rounded-xl">
                          <button class="bg-lime-700/10 rounded-xl h-12 w-12 flex-center">
                              <IconsSync class="text-lime-500 w-6 h-6" />
                          </button>
                          <div class="text-left">
                              <h3 class="text-lg dark:text-zinc-200">Realod</h3>
                              <p class="text-sm text-zinc-500">Reload VSCodes</p>
                          </div>
                      </div>
                      <div class="group flex gap-4 w-full items-center px-4 py-4 text-sm bg-zinc-100 dark:bg-zinc-900 border dark:border-zinc-800 dark:hover:bg-zinc-800 hover:bg-white rounded-xl">
                          <button class="bg-lime-700/10 rounded-xl h-12 w-12 flex-center">
                              <IconsMonitor class="text-lime-500 w-6 h-6" />
                          </button>
                          <div class="text-left">
                              <h3 class="text-lg dark:text-zinc-200">Ready to use</h3>
                              <p class="text-sm text-zinc-500">Tailwind Components Snippets are ready to use</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="w-full h-full hidden md:flex items-center relative">
                  <img src="/boltwind/code.jpg" alt="boltwind-vscode-extension" class="absolute top-[20%] right-0 w-[80%] shadow-xl shadow-lime-400/10 rounded-xl">
                  <img src="/boltwind/boltwind.gif" alt="boltwind-vscode-extension" class="absolute top-[35%] left-0 w-[80%] shadow-lg shadow-lime-400/25 rounded-xl">
              </div>
          </div>
          <div class="glow-background bg-gradient-to-r from-[#30CFD0] to-[#c7d954] blur-2xl rounded-full shadow-lg shadow-cyan-500/50 w-[30%] h-[60%] absolute opacity-25 -left-20 -bottom-20 -z-0"></div>
      </section>

      <!-- Templates -->
      <section class="lg:h-screen overflow-hidden pt-20 bg-white dark:bg-zinc-900">
          <header class="text-center">
              <h2 class="text-3xl font-medium dark:text-zinc-200 text-zinc-800">Ready to use Templates</h2>
              <div class="inline-block bg-gradient-to-tl from-[#C7D954] via-transparent to-[#30CFD0] hover:bg-gradient-to-tr rounded-xl mt-8 py-0.5 px-0.5">
                    <button class="bg-white dark:bg-zinc-900 w-full px-12 py-3 h-full rounded-xl text-zinc-800 dark:text-zinc-100 ">Coming Soon</button>
                </div>
          </header>
          <img src="/boltwind/templates.png" alt="boltwind-templates" class="w-full blur-sm">
      </section>

  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'boltwind'
  })
  
  useHead({
    title: 'Boltwind - Tailwind UI Components ready to use',
    meta: [
      { name: 'description', content: 'Generate and preview tailwind gradient class' }
    ],
  })
</script>

<style>

</style>