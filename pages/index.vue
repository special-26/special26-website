<template>
    <div class="relative">
        <!-- glow-background -->
        <span class="glow-background bg-cyan-400/50 blur-[140px] rounded-full w-[25vw] h-[35vh] absolute left-[4%] top-[15vh]"></span>
        <span class="glow-background bg-cyan-400/50 blur-[100px] rounded-full w-[15vw] h-[25vh] absolute right-[4%] top-[50vh]"></span>

        <!-- Hero-area -->
        <section class="hero-area text-zinc-100 h-screen overflow-hidden w-full flex">
            <div class="w-full h-full flex items-center justify-center">
                <BigText class="text-cyan-100" />
            </div>
            <div class="w-full h-full flex items-center justify-center">
                <div class="px-12">
                    <h2 class="text-[5em] font-bold capitalize">Your <br/>appearance shows your quality!</h2>
                    <p class="text-gray-400">Change the quality of your appearance, your appearance reflects <br/> your personality, so change now!</p>
                </div>
            </div>
        </section>

      <!-- My Project -->
      <section class="my-projects py-10 md:py-20 max-w-7xl w-[90vw] mx-auto">
          <div class="flex flex-col md:flex-row gap-10 items-center">
              <div class="w-full md:w-1/2">
                  <div class="heading relative flex items-center justify-center overflow-hidden py-10 leading-[4em]">
                      <span class="absolute text-[3.5em] md:text-[5em] text-center font-rubik font-bold headingText">Our Projects</span>
                      <div class="text-[2em] md:text-[3.5em] font-bold text-zinc-100 font-indie relative">Our Projects</div>
                  </div>
                  <div class="show-more flex justify-center">
                      <router-link to="projects" class="bg-zinc-900 px-8 py-3 rounded-xl text-zinc-400">All Projects</router-link>
                  </div>
              </div>
              <div class="flex flex-col md:flex-row gap-6 items-center w-full justify-end">
                  <div class="border-4 border-gray-400/10 p-8 rounded-xl bg-gradient-to-bl from-gray-400/30  flex-center flex-col w-full h-[320px] text-center">
                      <button class="border rounded-lg h-10 w-10 flex items-center justify-center mb-4">
                          <Icon name="mdi:tailwind" class="w-8 h-8" />
                      </button>
                      <NuxtLink to="/web-components" class="text-zinc-100 text-[2em] hover:scale-110 transition duration-700 ease-in-out font-exo leading-tight">Tailwind Web Components</NuxtLink>
                      <div class="text-zinc-500 mt-2">Visual Studio Code extension for Tailwind components.</div>
                  </div>
                  <div class="border-4 border-gray-400/10 p-8 rounded-xl bg-gradient-to-bl from-gray-400/30  flex-center flex-col w-full h-[320px] text-center">
                      <Icon name="mdi:gradient-horizontal" class="w-12 h-12 mb-4" />
                      <NuxtLink to="/gradient" target="_blank" class="text-zinc-100 text-[2em] hover:scale-110 transition duration-700 ease-in-out font-exo leading-tight">Tailwind Gradient Background</NuxtLink>
                      <div class="text-zinc-500 mt-2">Tailwind Background Gradient <br/> Generator</div>
                  </div>
              </div>
          </div>
      </section>

      <!-- My Work -->
      <section class="my-works py-10 md:py-20 relative max-w-7xl w-[90vw] mx-auto">
          <div class="heading relative flex items-center justify-center overflow-hidden mb-6 md:mb-20">
              <span class="absolute text-[4em] md:text-[8em] text-center font-bold headingText font-rubik">Our Works</span>
              <div class="text-[2.5em] md:text-[5em] font-bold text-zinc-100 font-indie">Our Works</div>
          </div>
          <div class="">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <figure class="rounded-xl overflow-hidden group relative">
                  <div class="link-text absolute left-10 top-10 z-10 hidden md:block">
                      <div class="tags uppercase text-zinc-500 text-xs">Design + Development</div>
                      <div class="text-zinc-200 text-[2.4em] font-bold">Interior Landing Page</div>
                      <button class="flex-center text-zinc-200 border p-4 rounded-full mt-4 hover:scale-125 transition duration-700 ease-in-out">
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path fill-rule='evenodd' d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z' clip-rule='evenodd' /></svg>
                      </button>
                  </div>
                  <img src="/images/architecture-landing-page.jpg" alt="architecture-landing-page" class="w-full object-cover h-full md:h-[90vh]  cursor-pointer group-hover:scale-110 transition duration-700 ease-in-out">
              </figure>
              <figure class="rounded-xl overflow-hidden group relative">
                  <div class="link-text absolute left-10 top-10 z-10 hidden md:block">
                      <div class="tags uppercase text-zinc-600 text-xs">Design + Development</div>
                      <div class="text-zinc-800 text-[2.4em] font-bold">Travel Landing Page</div>
                      <button class="flex-center text-zinc-800 border border-zinc-800 p-4 rounded-full mt-4 hover:scale-125 transition duration-700 ease-in-out">
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path fill-rule='evenodd' d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z' clip-rule='evenodd' /></svg>
                      </button>
                  </div>
                  <img src="/images/travel-landing-page2.jpg" alt="architecture-landing-page" class="w-full object-cover h-full md:h-[90vh] cursor-pointer group-hover:scale-110 transition duration-700 ease-in-out">
              </figure>
              </div>
              <div class="show-more flex justify-end">
                  <router-link to="work" class="bg-zinc-900 px-8 py-3 rounded-xl text-zinc-400 mt-6">Show all</router-link>
              </div>
          </div>
      </section>

      <!-- Contact me -->
      <section class="contact-me py-10 md:py-20 relative max-w-7xl w-[90vw] mx-auto">
          <div class="contact-field w-full flex-center flex-col">
              <div class="text-zinc-500 mb-3 text-2xl text-center">Feel free to talk to us!</div>
              <div class="text-[4em] text-center text-zinc-300">Let's Work Together</div>
              <!-- social-links -->
              <div class="flex items-center justify-center gap-10 mt-5">
                  <a href="https://github.com/VimalBharti" target="_blank" class="text-zinc-300 flex-center gap-2 group">
                      <Icon name="bi:linkdein" class='w-5 h-5 group-hover:scale-[2] group-hover:rotate-[360deg] transition duration-300 ease-in-out' />
                      LinkdeIn
                  </a>
                  <a href="https://twitter.com/vimal_bharti" target="_blank" class="text-zinc-300 flex-center gap-2 group">
                      <Icon name="ri:twitter-x-fill" class='w-5 h-5 group-hover:scale-[2] group-hover:rotate-[360deg] transition duration-300 ease-in-out' />
                      Twitter
                  </a>
              </div>
              <router-link to="/contact" class="relative inline-flex items-center justify-center h-64 w-64 overflow-hidden text-zinc-900 bg-white border contactBtn group mt-12">
                  <span class="absolute w-0 h-0 transition-all duration-700 ease-out bg-black contactBtn group-hover:w-64 group-hover:h-64"></span>
                  <!-- <span class="absolute inset-0 w-full h-full -mt-1 contactBtn opacity-30 bg-gradient-to-b from-transparent via-transparent to-zinc-200"></span> -->
                  <div class="flex flex-col items-center group-hover:text-white">
                      <span class="relative text-sm">click to</span>
                      <span class="relative text-3xl">Get in touch</span>
                  </div>
              </router-link>
          </div>
      </section>
  </div>
</template>

<script setup>
  
</script>

<style>
.contactBtn{
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.text-outline{
  color: #fff;
-webkit-text-fill-color: black; /* Will override color (regardless of order) */
-webkit-text-stroke-width: 0.01px;
-webkit-text-stroke-color: white;
font-weight: bold;
}
.bird{
  animation: birdMove 1.3s linear alternate infinite;
}
@keyframes birdMove {
from { transform: translateY(-10px); }
to { transform: translateY(10px); }
}
@keyframes birdFly {
to { box-shadow: none; }
}
</style>