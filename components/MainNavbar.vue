<template>
    <nav class='w-full flex items-center h-[62px] md:h-[100px] rounded-3xl relative z-10'>
      <div class='flex justify-between w-[90%] mx-auto'>
        <div class="flex items-center gap-5">
          <router-link to="/" class="logo flex items-center gap-3">
            <img src="/images/special-26.png" alt="special-26" class="w-6 rounded-lg">
            <span class="text-zinc-100 uppercase">Special-26</span>
          </router-link>
          <div class='hidden md:flex items-center gap-2 relative'>
            <div class='text-zinc-400 rounded px-3 py-1 text-sm group'>
              <button class="flex items-center gap-1">
                Products <Icon name="material-symbols:keyboard-arrow-down" class="w-4 h-4 group-hover:-rotate-180 transition duration-300 ease-in-out" />
              </button>
              <div class="absolute top-0 left-0 pt-10 hidden group-hover:block duration-700 ease-in-out hover:transition-all w-full">
                <div class="grid grid-cols-2 rounded-lg shadow bg-white overflow-hidden w-[35vw]">
                  <!-- Pinetail -->
                  <!-- <NuxtLink to="/gradient" target="_blank" class="flex items-center gap-2 cursor-pointer p-3 hover:bg-teal-50">
                    <button class="w-10 h-10 rounded-lg bg-teal-900 text-white hover:font-bold p-1">
                      <img src="/pinetail/logo.png" alt="pinetail-logo" class="w-full h-full" />
                    </button>
                    <div class="flex flex-col">
                      <h3 class="text-sm text-gray-900">PineTail</h3>
                      <span class="text-[10px]">Better preview for google fonts</span>
                    </div>
                  </NuxtLink> -->
                  <!-- Gradient -->
                  <NuxtLink to="/gradient" target="_blank" class="flex items-center gap-2 cursor-pointer p-3 hover:bg-teal-50">
                    <button class="w-10 h-10 rounded-lg bg-teal-900 text-white hover:font-bold">
                      GR
                    </button>
                    <div class="flex flex-col">
                      <h3 class="text-sm text-gray-900">Tailwind Gradients</h3>
                      <span class="text-[10px]">Better preview for google fonts</span>
                    </div>
                  </NuxtLink>
                  <!-- Boltwind -->
                  <NuxtLink to="/boltwind" target="_blank" class="flex items-center gap-2 cursor-pointer p-3 hover:bg-teal-50">
                    <button class="w-10 h-10 rounded-lg bg-teal-900 text-white hover:font-bold">
                      B
                    </button>
                    <div class="flex flex-col">
                      <h3 class="text-sm text-gray-900">Boltwind</h3>
                      <span class="text-[10px]">Tailwind Components</span>
                    </div>
                  </NuxtLink>
                  <!-- Tailwind Gradient -->
                  <NuxtLink to="/just-google-font" target="_blank" class="flex items-center gap-2 cursor-pointer p-3 hover:bg-teal-50">
                    <button class="w-10 h-10 rounded-lg bg-teal-900 text-white hover:font-bold">
                      GF
                    </button>
                    <div class="flex flex-col">
                      <h3 class="text-sm text-gray-900">Just Google Font</h3>
                      <span class="text-[10px]">Better preview for google fonts</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <router-link to='/works' class='text-zinc-400 rounded px-3 py-1 text-sm border-b border-transparent hover:text-zinc-200 hover:border-zinc-400'>Work</router-link>
            <router-link to='/about' class='text-zinc-400 rounded px-3 py-1 text-sm border-b border-transparent hover:text-zinc-200 hover:border-zinc-400'>About</router-link>
          </div>
        </div>
        <router-link to='/contact' class="flex items-center text-zinc-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          <span href='#' class='dark:text-zinc-300 rounded px-3 py-1 text-sm'>Let's Talk</span>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .slide-up-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-up-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  </style>