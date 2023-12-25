<template>
    <nav class='bg-transparent w-full h-[62px] md:h-[100px] flex items-center '>
      <div class='flex justify-between w-[90%] mx-auto'>
        <router-link to="/" class="logo flex items-center gap-3">
          <!-- <button class="bg-zinc-200 rounded h-8 w-8 text-sm font-bold">VB</button> -->
          <img src="/images/logo.png" alt="vimalbharti" class="w-9">
          <span class="text-zinc-100">VimalBharti</span>
        </router-link>
        <div class='hidden md:flex items-center gap-2'>
          <router-link to='/projects' class='text-zinc-500 rounded px-3 py-1 text-sm border-b border-transparent hover:text-zinc-200 hover:border-zinc-400'>Projects</router-link>
          <router-link to='/works' class='text-zinc-500 rounded px-3 py-1 text-sm border-b border-transparent hover:text-zinc-200 hover:border-zinc-400'>Work</router-link>
          <router-link to='/about' class='text-zinc-500 rounded px-3 py-1 text-sm border-b border-transparent hover:text-zinc-200 hover:border-zinc-400'>About</router-link>
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
  
  <script lang="ts" setup>
  
  </script>
  
  <style>
  
  </style>