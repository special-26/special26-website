<template>
  <div class="h-full overflow-hidden relative flex">
    <button class="fixed right-0 top-[20vh] z-30 bg-gradient-to-r from-yellow-400 to-orange-400 text-white h-12 w-12 flex items-center justify-center rounded-l-xl" @click="isOpen = true">
      <Icon name="material-symbols:settings-rounded" class="w-7 h-7" />
    </button>
    <USlideover v-model="isOpen" :overlay="false">
      <aside class="bg-zinc-950 h-full overflow-y-auto">
        <div v-if="pending">
          <div class="flex items-center justify-center h-full p-20 text-2xl">
            Loading Fonts...
          </div>
        </div>
        <div v-else>
          <div class="flex items-center justify-between gap-4 px-3 border-b border-zinc-700 py-4">
            <div class="flex items-center gap-2">
              <h3>Selected Font:</h3>
              <span class="text-yellow-500">{{ selectedFont }}</span>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3 p-3">
            <button 
              v-for="font in fonts.items" 
              class="w-full h-16 flex items-center justify-center rounded-xl shadow-xl bg-zinc-900 text-sm text-zinc-300"
              @click="emitFontSelected(font.family)"
            >
              {{ font.family }}
            </button>
          </div>
        </div>
      </aside>
    </USlideover>

    <!-- Web Page -->
    <section class="w-full h-full overflow-y-auto">
      <template v-if="changingFontLoading">
        <div>Changing Font...</div>
      </template>
      <template v-else>
        <div class="min-h-screen h-full bg-white" :style="{ fontFamily: selectedFont }">
          <div class="navbar pt-3">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 mb-8 shadow-inner bg-gray-50 rounded-full">
              <div class="logo text-2xl font-bold text-zinc-900 flex items-center gap-1">
                  <img src="/justgooglefont/logo.png" alt="just-google-font" class="w-12 ">
                JustGoogleFont
              </div>
              <div class="flex items-center gap-8 text-sm text-zinc-900">
                <a href="#">Features</a>
                <a href="#">Services</a>
                <a href="#">Blogs</a>
                <a href="#">Pricing</a>
                <a href="#">Sign In</a>
                <button class="rounded-full bg-gray-900 px-4 py-2 text-gray-100">Sign up free</button>
              </div>
            </nav>
          </div>

          <!-- Hero-Section -->
          <section class="h-[60vh] w-full relative hero-section">
            <img src="/justgooglefont/letter_j.jpg" alt="letter-j" class="absolute left-0 top-0 opacity-5 w-[8%]">
            <img src="/justgooglefont/letter_g.jpg" alt="letter-j" class="absolute left-20 top-[30%] opacity-5 w-[10%]">
            <img src="/justgooglefont/letter_f.jpg" alt="letter-j" class="absolute left-10 top-[55%] opacity-5 w-[10%]">

            <img src="/justgooglefont/numb_2.jpg" alt="letter-j" class="absolute right-[10%] top-[15%] opacity-5 w-[10%]">
            <img src="/justgooglefont/numb_6.jpg" alt="letter-j" class="absolute right-20 top-[40%] opacity-5 w-[10%]">

            <div class="mx-auto max-w-7xl flex flex-col md:flex-row items-center h-full">
              <div class="flex h-full md:w-[50%] flex-col justify-center">
                <h2 class="mb-4 text-[2em] md:text-[4em] font-bold text-zinc-900">Let's build the future of design, <span class="text-yellow-500">together</span></h2>
                <p class="mb-8 md:text-xl text-gray-700">With JustGoogleFont, you can elevate your website with the perfect font selection from Google's vast library of fonts.</p>
                <div class="flex gap-5">
                  <button class="rounded-full bg-gray-900 px-5 py-2.5 text-white">View the docs</button>
                  <button class="rounded-full border px-5 py-2.5 text-zinc-900">Manage your apps</button>
                </div>
              </div>
              <div class="flex items-center justify-center md:w-[50%]">
                <img src="https://illustrations.popsy.co/amber/creative-work.svg" class="w-[50%] md:w-full" />
              </div>
            </div>
          </section>

          <section class="border-y py-12">
            <!-- Features -->
            <div class="mx-auto max-w-7xl">
              <!-- Grid -->
              <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
                <div class="lg:col-span-1">
                  <h2 class="text-2xl font-bold text-gray-800 md:text-5xl">We tackle the challenges start-ups face</h2>
                  <p class="mt-2 text-gray-500 md:mt-4 text-lg">Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.</p>
                </div>
                <!-- End Col -->

                <div class="lg:col-span-2">
                  <div class="grid gap-8 sm:grid-cols-2 md:gap-12">
                    <!-- Icon Block -->
                    <div class="flex gap-x-5">
                      <svg class="mt-1 size-6 flex-shrink-0 text-orange-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="10" x="3" y="11" rx="2" />
                        <circle cx="12" cy="5" r="2" />
                        <path d="M12 7v4" />
                        <line x1="8" x2="8" y1="16" y2="16" />
                        <line x1="16" x2="16" y1="16" y2="16" />
                      </svg>
                      <div class="grow">
                        <h3 class="text-xl font-semibold text-gray-800">Creative minds</h3>
                        <p class="mt-1 text-lg text-gray-600 dark:text-gray-400">We choose our teams carefully. Our people are the secret to great work.</p>
                      </div>
                    </div>
                    <!-- End Icon Block -->

                    <!-- Icon Block -->
                    <div class="flex gap-x-5">
                      <svg class="mt-1 size-6 flex-shrink-0 text-orange-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 10v12" />
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                      </svg>
                      <div class="grow">
                        <h3 class="text-xl font-semibold text-gray-800">Simple and affordable</h3>
                        <p class="mt-1 text-lg text-gray-600 dark:text-gray-400">From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.</p>
                      </div>
                    </div>
                    <!-- End Icon Block -->

                    <!-- Icon Block -->
                    <div class="flex gap-x-5">
                      <svg class="mt-1 size-6 flex-shrink-0 text-orange-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <div class="grow">
                        <h3 class="text-xl font-semibold text-gray-800">Industry-leading documentation</h3>
                        <p class="mt-1 text-lg text-gray-600 dark:text-gray-400">Our documentation and extensive Client libraries contain everything a business needs to build a custom integration.</p>
                      </div>
                    </div>
                    <!-- End Icon Block -->

                    <!-- Icon Block -->
                    <div class="flex gap-x-5">
                      <svg class="mt-1 size-6 flex-shrink-0 text-orange-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <div class="grow">
                        <h3 class="text-xl font-semibold text-gray-800">Designing for people</h3>
                        <p class="mt-1 text-lg text-gray-600 dark:text-gray-400">We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.</p>
                      </div>
                    </div>
                    <!-- End Icon Block -->
                  </div>
                </div>
                <!-- End Col -->
              </div>
              <!-- End Grid -->
            </div>
            <!-- End Features -->
          </section>

          <!-- Blog Section -->
          <section class="">
            <!-- Card Blog -->
            <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
              <!-- Title -->
              <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-zinc-900">Blog & News</h2>
                <p class="mt-1 text-lg text-gray-600">See how game-changing companies are making the most of every engagement with Special-26.</p>
              </div>
              <!-- End Title -->

              <!-- Grid -->
              <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Card -->
                <a class="group flex h-full flex-col rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:border-transparent hover:shadow-lg" href="#">
                  <div class="aspect-w-16 aspect-h-11">
                    <img class="w-full rounded-xl object-cover" src="/works/_1.jpeg" alt="Image Description" />
                  </div>
                  <div class="my-6">
                    <h3 class="text-xl font-semibold text-gray-800">Announcing a free plan for small teams</h3>
                    <p class="mt-5 text-gray-600">At Wake, our mission has always been focused on bringing openness.</p>
                  </div>
                  <div class="mt-auto flex items-center gap-x-3">
                    <img class="size-8 rounded-full" src="/works/_1.jpeg" alt="Image Description" />
                    <div>
                      <h5 class="text-sm text-gray-800">By Lauren Waller</h5>
                    </div>
                  </div>
                </a>
                <!-- End Card -->

                <!-- Card -->
                <a class="group flex h-full flex-col rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:border-transparent hover:shadow-lg" href="#">
                  <div class="aspect-w-16 aspect-h-11">
                    <img class="w-full rounded-xl object-cover" src="/works/_2.jpeg" alt="Image Description" />
                  </div>
                  <div class="my-6">
                    <h3 class="text-xl font-semibold text-gray-800">How Google Assistant now helps you record stories for kids</h3>
                    <p class="mt-5 text-gray-600">Google is constantly updating its consumer AI, Google Assistant, with new features.</p>
                  </div>
                  <div class="mt-auto flex items-center gap-x-3">
                    <img class="size-8 rounded-full" src="/works/_2.jpeg" alt="Image Description" />
                    <div>
                      <h5 class="text-sm text-gray-800">By Aaron Larsson</h5>
                    </div>
                  </div>
                </a>
                <!-- End Card -->

                <!-- Card -->
                <a class="group flex h-full flex-col rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:border-transparent hover:shadow-lg" href="#">
                  <div class="aspect-w-16 aspect-h-11">
                    <img class="w-full rounded-xl object-cover" src="/works/_3.jpeg" alt="Image Description" />
                  </div>
                  <div class="my-6">
                    <h3 class="text-xl font-semibold text-gray-800">Front accounts - let's work together</h3>
                    <p class="mt-5 text-gray-600">Are you an accountant? Are you a company formation advisor?</p>
                  </div>
                  <div class="mt-auto flex items-center gap-x-3">
                    <img class="size-8 rounded-full" src="/works/_3.jpeg" alt="Image Description" />
                    <div>
                      <h5 class="text-sm text-gray-800">By Lauren Waller</h5>
                    </div>
                  </div>
                </a>
                <!-- End Card -->
              </div>
              <!-- End Grid -->

              <!-- Card -->
              <div class="mt-12 text-center">
                <a class="inline-flex items-center gap-x-1 rounded-full border border-yellow-200 bg-yellow-500 px-6 py-3 text-sm font-medium text-yellow-800 shadow-sm disabled:pointer-events-none disabled:opacity-50" href="#">
                  Read more
                  <svg class="size-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
              <!-- End Card -->
            </div>
            <!-- End Card Blog -->
          </section>

          <!-- Testimonials with Stats -->
          <section class="border-t border-b">
            <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
              <!-- Grid -->
              <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
                <div class="lg:col-span-5 lg:col-start-1">
                  <!-- Title -->
                  <div class="mb-8">
                    <h2 class="mb-2 text-3xl font-bold text-gray-800 lg:text-4xl">It's all about speed</h2>
                    <p class="text-gray-600">We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.</p>
                  </div>
                  <!-- End Title -->

                  <!-- Blockquote -->
                  <blockquote class="relative">
                    <svg class="absolute start-0 top-0 size-16 -translate-x-6 -translate-y-8 transform text-gray-200" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                    </svg>

                    <div class="relative z-10">
                      <p class="text-xl italic text-gray-800">Amazing people to work with. Very fast and professional partner.</p>
                    </div>

                    <footer class="mt-6">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                        </div>
                        <div class="ms-4 grow">
                          <div class="font-semibold text-gray-800">Josh Grazioso</div>
                          <div class="text-xs text-gray-500">Director Payments & Risk | Airbnb</div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                  <!-- End Blockquote -->
                </div>
                <!-- End Col -->

                <div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
                  <div class="space-y-6 sm:space-y-8">
                    <!-- List -->
                    <ul class="grid grid-cols-2 divide-x divide-y divide-gray-200 overflow-hidden">
                      <li class="-m-0.5 flex flex-col p-4 sm:p-8">
                        <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 sm:text-5xl">45k+</div>
                        <p class="text-sm text-gray-600 sm:text-base">users - from new startups to public companies</p>
                      </li>

                      <li class="-m-0.5 flex flex-col p-4 sm:p-8">
                        <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 sm:text-5xl">
                          <svg class="size-5 flex-shrink-0 text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                          </svg>
                          23%
                        </div>
                        <p class="text-sm text-gray-600 sm:text-base">increase in traffic on webpages with Looms</p>
                      </li>

                      <li class="-m-0.5 flex flex-col p-4 sm:p-8">
                        <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 sm:text-5xl">
                          <svg class="size-5 flex-shrink-0 text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                          </svg>
                          9.3%
                        </div>
                        <p class="text-sm text-gray-600 sm:text-base">boost in reply rates across sales outreach</p>
                      </li>

                      <li class="-m-0.5 flex flex-col p-4 sm:p-8">
                        <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 sm:text-5xl">2x</div>
                        <p class="text-sm text-gray-600 sm:text-base">faster than previous Preline versions</p>
                      </li>
                    </ul>
                    <!-- End List -->
                  </div>
                </div>
                <!-- End Col -->
              </div>
              <!-- End Grid -->
            </div>
            <!-- End Testimonials with Stats -->
          </section>

          <!-- Pricing Table -->
          <section class="border-b">
            <div class="sm:flex sm:flex-col sm:align-center p-10">
              <div class="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
                  <button type="button"
                      class="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm">Monthly
                      billing
                  </button>
                  <button type="button"
                      class="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900">Yearly
                      billing
                  </button>
              </div>
              <div
                  class="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-7xl md:mx-auto xl:grid-cols-3">
                  <div class="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                      <div class="p-6">
                          <h2 class="text-xl leading-6 font-bold text-slate-900">Starter</h2>
                          <p class="mt-2 text-base text-slate-700 leading-tight">For new makers who want to fine-tune and test an
                              idea.</p>
                          <p class="mt-8">
                              <span class="text-4xl font-bold text-slate-900 tracking-tighter">$0</span>

                              <span class="text-base font-medium text-slate-500">/mo</span>
                          </p><a href="#"
                              class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center">Join
                              as a Starter</a>
                      </div>
                      <div class="pt-6 pb-8 px-6">
                          <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
                          <ul role="list" class="mt-4 space-y-3">
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">1 landing page included</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">1,000 visits/mo</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">Access to all UI blocks</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">50 conversion actions included</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">5% payment commission</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">Real-time analytics</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                      <div class="p-6">
                          <h2 class="text-xl leading-6 font-bold text-slate-900">Superior</h2>
                          <p class="mt-2 text-base text-slate-700 leading-tight">For creators with multiple ideas who want to
                              efficiently test and refine them.</p>
                          <p class="mt-8">
                              <span class="text-4xl font-bold text-slate-900 tracking-tighter">$8</span>

                              <span class="text-base font-medium text-slate-500">/mo</span>
                          </p><a href="#"
                              class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center">Join
                              as a Superior</a>
                      </div>
                      <div class="pt-6 pb-8 px-6">
                          <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
                          <ul role="list" class="mt-4 space-y-3">
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">All Free features</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">5 landing pages included</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">50,000 visits/mo</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">1,000 conversion actions included</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">1% payment commission</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                      <div class="p-6">
                          <h2 class="text-xl leading-6 font-bold text-slate-900">Shipper</h2>
                          <p class="mt-2 text-base text-slate-700 leading-tight">For productive shippers who want to work more
                              efficiently.</p>
                          <p class="mt-8">
                              <span class="text-4xl font-bold text-slate-900 tracking-tighter">$15</span>

                              <span class="text-base font-medium text-slate-500">/mo</span>
                          </p><a href="#"
                              class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center">Join
                              as a Shipper</a>
                      </div>
                      <div class="pt-6 pb-8 px-6">
                          <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
                          <ul role="list" class="mt-4 space-y-3">
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">All Standard features</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">20 landing pages included</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">200,000 visits/mo</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">5,000 conversion actions included</span>
                              </li>
                              <li class="flex space-x-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-yellow-500" width="24"
                                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                  <span class="text-base text-slate-700">No payment commission</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
          </section>

          <footer class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
            <!-- Grid -->
            <div class="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
              <div class="col-span-full hidden lg:col-span-1 lg:block">
                <!-- <a class="flex-none text-xl font-semibold text-gray-800" href="#" aria-label="Brand">Brand</a> -->
                <img src="/images/special-26.png" alt="special-26-logo" class="w-12 h-12 rounded-xl">
                <p class="mt-3 text-xs text-gray-600 sm:text-sm">© 2024 Special-26</p>
              </div>
              <!-- End Col -->

              <div>
                <h4 class="text-xs font-semibold uppercase text-gray-900">Product</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Pricing</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Changelog</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Docs</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Download</a></p>
                </div>
              </div>
              <!-- End Col -->

              <div>
                <h4 class="text-xs font-semibold uppercase text-gray-900">Company</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">About us</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Blog</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Careers</a> <span class="inline text-yellow-500">— We're hiring</span></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Customers</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Newsroom</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Sitemap</a></p>
                </div>
              </div>
              <!-- End Col -->

              <div>
                <h4 class="text-xs font-semibold uppercase text-gray-900">Resources</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Community</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Help & Support</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">eBook</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">What's New</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Status</a></p>
                </div>
              </div>
              <!-- End Col -->

              <div>
                <h4 class="text-xs font-semibold uppercase text-gray-900">Developers</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Api</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Status</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">GitHub</a> <span class="inline text-yellow-500">— New</span></p>
                </div>

                <h4 class="mt-7 text-xs font-semibold uppercase text-gray-900">Industries</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Financial Services</a></p>
                  <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Education</a></p>
                </div>
              </div>
              <!-- End Col -->
            </div>
            <!-- End Grid -->
          </footer>
        </div>
      </template>
    </section>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'googlefont',
  })

  useHead({
    title: 'JustGoogleFont - Better preview of google font',
    meta: [
      { name: 'description', content: 'Our intuitive interface allows you to browse, preview, and select fonts effortlessly, ensuring that your website captures attention' }
    ],
  })

  const selectedFont = ref('Acme');
  const isOpen = ref(false)

  const changingFontLoading = ref(false)

  const api = ref('AIzaSyD7hKf9Ny9g66yq1emo0bcgXgl4s1aO0mM');

  const { pending, count, data: fonts } = useFetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${api.value}`, {
    lazy: true,
    pick: ['items']
  })

  onMounted(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css?family=${selectedFont.value}&display=swap`;
    link.rel = 'stylesheet';
    link.id= 'googleFontLink';
    document.head.appendChild(link);
  })

  const emitFontSelected = (font) => {
    changingFontLoading.value = true;

    selectedFont.value = font.replace(/\s/g, '+')
    // change Google Font 
    let getLink = document.getElementById("googleFontLink");
    getLink.getAttribute("href");
    getLink.setAttribute("href", `https://fonts.googleapis.com/css?family=${selectedFont.value}&display=swap`);

    changingFontLoading.value = false;
  };

</script>

<style scoped>
.hero-section{
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23e9e9e9' fill-opacity='0.16' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>