<template>
  <div class="min-h-screen relative w-full overflow-hidden">

      <!-- Section-One -->
      <section data-aos="zoom-out-up" data-aos-duration="1500" class="flex flex-col md:flex-row h-screen w-full relative" id="top">
          <!-- Left Section -->
          <div class="md:w-1/2 w-full bg-gradient-to-b from-[#054736] to-[#021812] h-1/2 md:h-full flex flex-col justify-center absolute md:static bottom-0">
              <div class="md:px-24 p-6">
                  <div class="uppercase text-white text-sm md:text-2xl">Interior</div>
                  <div class="text-white font-bold md:text-[6vw]">Architecture</div>
                  <p class="text-white text-xs md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in est quibusdam esse ipsum tenetur sequi omnis, nemo unde deserunt perferendis minus culpa, asperiores qui assumenda! Dolor, odio quis? Sit.</p>
                  <a class="w-full rounded-xl bg-gradient-to-b from-[#054736] to-[#021812] hover:bg-gradient-to-t text-white shadow-inner p-4 mt-12 block text-center">Explore more</a>
              </div>
          </div>
          <!-- Right Section -->
          <div class="w-full md:w-1/2 h-1/2 md:h-full relative">
              <div class="section-count absolute -left-20 md:-left-24 top-8 z-10 rounded-full h-52 w-52 text-white bg-[#054736] shadow-xl flex items-center justify-center text-2xl font-bold">.01</div>
              <img src="/works/_1.jpeg" class="h-full w-full object-cover">
          </div>
      </section>

      <!-- Section-Two -->
      <section data-aos="zoom-out-up" data-aos-duration="1500" class="flex flex-col md:flex-row h-screen w-full relative">
          <!-- Left Section -->
          <div class="w-full md:w-1/2 h-1/2 md:h-full relative">
              <div class="section-count absolute -right-20 md:-right-24 top-8 z-10 rounded-full h-52 w-52 text-white bg-[#fac905] shadow-xl flex items-center justify-center text-2xl font-bold">.02</div>
              <img src="/works/_2.jpeg" class="h-full w-full object-cover">
          </div>
          <!-- Right Section -->
          <div class="md:w-1/2 w-full bg-gradient-to-b from-[#fac905] to-[#af8d04] h-1/2 md:h-full flex flex-col justify-center absolute md:static bottom-0">
              <div class="md:px-24 p-6">
                  <div class="uppercase text-white text-sm md:text-2xl">Interior</div>
                  <div class="text-white font-bold md:text-[6vw]">Colorful</div>
                  <p class="text-white text-xs md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in est quibusdam esse ipsum tenetur sequi omnis, nemo unde deserunt perferendis minus culpa, asperiores qui assumenda! Dolor, odio quis? Sit.</p>
                  <a class="w-full rounded-xl bg-gradient-to-b from-[#fac905] to-[#af8d04] hover:bg-gradient-to-t text-white shadow-inner p-4 mt-12 block text-center">Explore more</a>
              </div>
          </div>
      </section>

      <!-- Section-Three -->
      <section data-aos="zoom-out-up" data-aos-duration="1500" class="flex flex-col md:flex-row h-screen w-full relative">
          <!-- Left Section -->
          <div class="md:w-1/2 w-full bg-gradient-to-b from-[#768FA6] to-[#1e272e] h-1/2 md:h-full flex flex-col justify-center absolute md:static bottom-0">
              <div class="md:px-24 p-6">
                  <div class="uppercase text-white text-sm md:text-2xl">Interior</div>
                  <div class="text-white font-bold md:text-[6vw]">Minimalist</div>
                  <p class="text-white text-xs md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in est quibusdam esse ipsum tenetur sequi omnis, nemo unde deserunt perferendis minus culpa, asperiores qui assumenda! Dolor, odio quis? Sit.</p>
                  <a class="w-full rounded-xl bg-gradient-to-b from-[#768FA6] to-[#1e272e] hover:bg-gradient-to-t text-white shadow-inner p-4 mt-12 block text-center">Explore more</a>
              </div>
          </div>
          <!-- Right Section -->
          <div class="w-full md:w-1/2 h-1/2 md:h-full relative">
              <div class="section-count absolute -left-20 md:-left-24 top-8 z-10 rounded-full h-52 w-52 text-white bg-[#768FA6] shadow-xl flex items-center justify-center text-2xl font-bold">.03</div>
              <img src="/works/_3.jpeg" class="h-full w-full object-cover">
          </div>
      </section>

      <!-- Bottom Navbar -->
      <nav class="fixed bottom-8 left-0 right-0 z-30">
          <div class="bg-black/30 backdrop-blur rounded-xl hidden md:flex items-center justify-between px-6 py-4 w-full md:w-3/4 mx-auto shadow-xl text-white relative">
              <a href="#" class="uppercase font-bold">Archi's</a>
              <div class="nav-links flex items-center gap-12">
                  <a href="#" class="active font-bold underline">Home</a>
                  <a href="#">Explore</a>
                  <a href="#">About</a>
                  <!-- Search Bar -->
                  <div class="relative w-full flex items-center gap-5">
                      <span>Search</span>
                      <input type="text" id="voice-search" class="bg-white/75 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pr-10 p-2.5" required>
                      <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                      </button>
                  </div>
              </div>
              <!-- Action Buttons -->
              <div class="action-btns flex items-center gap-5">
                  <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" /></svg></a>
                  <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" /></svg></a>
                  <a href="#top" class="bg-black/30 p-2 rounded group">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:animate-bounce"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
                  </a>
              </div>
          </div>
          <!-- nav menu for mobile -->
          <button class="bg-black/50 backdrop-blur rounded-xl h-12 w-12 absolute right-4 bottom-2 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>              
          </button>
      </nav>

  </div>
</template>