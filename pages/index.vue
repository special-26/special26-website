<template>
    <div class="relative">
        <!-- glow-background -->
        <span class="glow-background bg-teal-400/50 blur-[120px] rounded-full w-[35vw] h-[45vh] absolute left-[0%] top-[0vh]"></span>
        <span class="glow-background bg-teal-400/50 blur-[100px] rounded-full w-[15vw] h-[25vh] absolute right-[4%] top-[50vh]"></span>

        
        <!-- Hero-area -->
        <BigText class="text-zinc-400/5 absolute left-0 -top-[60vh] w-full z-0" />

        <section class="hero-area text-zinc-100 h-[60vh] overflow-hidden w-full flex items-center justify-center relative">
            <div class="w-full h-full flex flex-col items-center justify-center max-w-4xl relative">
                <svg class="w-24 h-24 rotate-90" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h2 class="text-[5em] font-bold text-center">
                    Unlock the <span class="italic font-serif border-b-2 border-dotted text-teal-300">Potential</span> of Your <span class="italic font-serif border-b-2 border-dotted text-teal-300">Online
                    </span> Presence
                </h2>
                <!-- <p class="text-teal-100 text-xl font-serif">Experience the difference with Special-26 and let's build something extraordinary together.</p> -->
            </div>
        </section>

        <!-- Our Products -->
        <section class="mx-auto max-w-7xl py-12">
            <div class="grid max-w-xl items-start justify-between gap-5">
                <div class="text-4xl/[1.07] font-bold tracking-tight md:text-5xl/[1.07]">
                    <span class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">Our Products</span>
                </div>
                <div class="text-lg text-zinc-400/80">Our products engineered to streamline <span class="text-gray-200">website design and development</span>, empowering you to create stunning digital experiences with ease and efficiency</div>
            </div>
            <div class="mt-16 grid gap-4 lg:grid-cols-2 lg:gap-6 xl:gap-8">
                <!-- Boltwind -->
                <div class="col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 lg:col-span-1">
                    <div class="relative flex h-full w-full items-center justify-center overflow-hidden px-3 pt-3">
                        <div class="relative h-full w-full rounded-xl [mask:radial-gradient(65%_65%_at_50%_40%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]">
                            <div class="absolute inset-x-0 top-16 h-40 w-full rounded-full bg-gradient-to-r from-teal-600 via-sky-500 to-violet-600 opacity-25 blur-[6rem]"></div>
                            <div class="absolute left-0 top-0 h-full w-full min-w-[1024px] opacity-20 [mask:linear-gradient(teal,transparent)]">
                                <svg viewBox="0 0 750 400" preserveAspectRatio="xMinYMin slice"><pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="8" patternTransform="rotate(45 2 2)"><path d="M -1,2 l 6,0" stroke="#A3A7B1" stroke-width=".5"></path></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalHatch)"></rect></svg>
                            </div>
                        </div>
                        <div class="absolute h-full max-h-[300px] w-11/12 max-w-[500px] rounded-lg border border-zinc-100/5 bg-zinc-900 [mask:linear-gradient(teal,teal_75%,transparent)] md:w-4/5">
                            <div class="relative flex h-full w-full items-center justify-center">
                                <img src="/projects/boltwind-l.png" alt="" class="rounded-xl w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
                            </div>
                        </div>
                    </div>
                    <div class="mt-auto w-full space-y-4 px-4 pb-4 sm:px-8 sm:pb-8">
                        <h3 class="text-lg/none font-medium text-zinc-200">Boltwind</h3>
                        <p class="max-w-sm text-sm text-zinc-400/80">Tailwind Web Components to boost your productivity & helps to build webapp.</p>
                    </div>
                </div>
                <!-- JustGoogleFont -->
                <div class="col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 lg:col-span-1">
                    <div class="relative flex h-full w-full items-center justify-center overflow-hidden px-3 pt-3">
                        <div class="relative h-full w-full rounded-xl [mask:radial-gradient(65%_65%_at_50%_40%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]">
                            <div class="absolute inset-x-0 top-16 h-40 w-full rounded-full bg-gradient-to-r from-teal-600 via-sky-500 to-violet-600 opacity-25 blur-[6rem]"></div>
                            <div class="absolute left-0 top-0 h-full w-full min-w-[1024px] opacity-20 [mask:linear-gradient(teal,transparent)]">
                                <svg viewBox="0 0 750 400" preserveAspectRatio="xMinYMin slice"><pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="8" patternTransform="rotate(45 2 2)"><path d="M -1,2 l 6,0" stroke="#A3A7B1" stroke-width=".5"></path></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalHatch)"></rect></svg>
                            </div>
                        </div>
                        <div class="absolute h-full max-h-[300px] w-11/12 max-w-[500px] rounded-lg border border-zinc-100/5 bg-zinc-900 [mask:linear-gradient(teal,teal_75%,transparent)] md:w-4/5">
                            <div class="relative flex h-full w-full items-center justify-center">
                                <img src="/projects/jgf.png" alt="" class="rounded-xl w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
                            </div>
                        </div>
                    </div>
                    <div class="mt-auto w-full space-y-4 px-4 pb-4 sm:px-8 sm:pb-8">
                        <h3 class="text-lg/none font-medium text-zinc-200">Just Google Font</h3>
                        <p class="max-w-sm text-sm text-zinc-400/80">Effortlessly previewing Google Fonts right on webpage.</p>
                    </div>
                </div>
                <!-- Gradients -->
                <div class="col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 lg:col-span-1">
                    <div class="relative flex h-full w-full transform-gpu items-center justify-center overflow-hidden">
                        <div class="absolute inset-0 h-full w-full [mask:radial-gradient(50%_50%_at_50%,rgba(0,0,0,0.7)_35%,rgba(0,0,0,0)_100%)]">
                            <div class="absolute inset-0 -z-10 h-full w-full text-zinc-300/10 [mask:linear-gradient(teal,teal_60%,transparent)]">
                                <svg class="h-full w-full" aria-hidden="true"><defs><pattern id="genius-pattern" width="44" height="44" x="50%" y="100%" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#genius-pattern)"></rect></svg>
                            </div>
                        </div>
                        <div class="absolute h-full max-h-[300px] w-11/12 max-w-[500px] rounded-lg border border-zinc-100/5 bg-zinc-900 [mask:linear-gradient(teal,teal_75%,transparent)] md:w-4/5">
                            <div class="relative flex h-full w-full items-center justify-center">
                                <img src="/projects/gradient.png" alt="tailwind-gradient-genrator" class="rounded-xl w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
                            </div>
                        </div>
                    </div>
                    <div class="mt-auto w-full space-y-4 px-4 pb-4 sm:px-8 sm:pb-8">
                        <h3 class="text-lg/none font-medium text-zinc-200">Tailwind Gradient Background</h3>
                        <p class="max-w-sm text-sm text-zinc-400/80">Generate tailwind gradient background with directions and preview</p>
                    </div>
                </div>
                <!-- SVG Doodle -->
                <div class="col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 lg:col-span-1 relative">
                    <button class="bg-teal-500 text-white px-4 py-1 rounded-lg absolute top-4 left-4 z-10">In Process...</button>
                    <div class="relative flex h-full w-full transform-gpu items-center justify-center overflow-hidden blur-sm">
                        <div class="absolute inset-0 h-full w-full [mask:radial-gradient(50%_50%_at_50%,rgba(0,0,0,0.7)_35%,rgba(0,0,0,0)_100%)]">
                            <div class="absolute inset-0 -z-10 h-full w-full text-zinc-300/10 [mask:linear-gradient(teal,teal_60%,transparent)]">
                                <svg class="h-full w-full" aria-hidden="true"><defs><pattern id="genius-pattern" width="44" height="44" x="50%" y="100%" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#genius-pattern)"></rect></svg>
                            </div>
                        </div>
                        <div class="absolute h-full max-h-[300px] w-11/12 max-w-[500px] rounded-lg border border-zinc-100/5 bg-zinc-900 [mask:linear-gradient(teal,teal_75%,transparent)] md:w-4/5">
                            <div class="relative flex h-full w-full items-center justify-center">
                                <img src="/projects/doodle.webp" alt="free-svg-doodles" class="rounded-xl w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
                            </div>
                        </div>
                    </div>
                    <div class="mt-auto w-full space-y-4 px-4 pb-4 sm:px-8 sm:pb-8 blur-sm">
                        <h3 class="text-lg/none font-medium text-zinc-200">SVG Doodles</h3>
                        <p class="max-w-sm text-sm text-zinc-400/80">Collection of editable SVG Doodles to spice up your designs</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack -->
        <section class="mx-auto max-w-7xl py-20 relative">
            <div class="absolute top-0 right-0 flex flex-col items-center justify-center left-0">
                <div aria-hidden="true" class="user-select-none center pointer-events-none h-0.5 w-4/5 max-w-[800px] transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(34,211,238,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
            </div>
            <h2 class="bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl uppercase text-center">TALL Stack</h2>
            <p class="text-center text-zinc-500">Full-stack development solution used for building powerful, modern, and reactive applications with <br/> Tailwind CSS, Alpine. js, Laravel, and Livewire</p>
            <div class="grid grid-cols-4 gap-12 items-center mt-16">
                <img src="/images/laravel.png" alt="laravel-10-logo" class="transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
                <img src="/images/livewire.png" alt="laravel-10-logo" class="transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
                <img src="/images/tailwind.png" alt="laravel-10-logo" class="transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
                <img src="/images/alpine.png" alt="laravel-10-logo" class="transition duration-700 ease-in-out cursor-pointer grayscale hover:grayscale-0">
            </div>
        </section>

        <section class="relative mx-auto max-w-full h-[70vh] flex flex-col items-center justify-center overflow-hidden  shadow-inner">
            <div class="absolute top-0 right-0 flex flex-col items-center justify-center left-0">
                <div aria-hidden="true" class="user-select-none center pointer-events-none h-0.5 w-4/5 max-w-[800px] transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(34,211,238,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
            </div>

            <div class="relative isolate">
                <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(40%_80%_at_center,teal,transparent)]" aria-hidden="true"><defs><pattern id="cta" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#cta)"></rect></svg>
                <div class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
                    <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-teal-500 to-teal-800 opacity-20" style="clip-path:polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)"></div>
                </div>
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">Get in Touch with Special-26</h2>
                    <p class="mt-6 text-lg text-zinc-400/80">Have questions or ready to start your next project? Reach out to the Special-26 team today. Whether it's a simple inquiry or a detailed project proposal, we're here to listen, assist, and turn your ideas into reality.</p> 
                    <p class="mt-6 text-lg text-zinc-400/80">Contact us now to begin your journey towards digital excellence.</p>
                    <div class="mt-12 flex items-center justify-center">
                        <router-link to='/contact'>
                            <button class="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rvraqla:" data-state="closed">
                                <span class="absolute inset-0 overflow-hidden rounded-full">
                                    <span class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                </span>
                                <div class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">Contact Us Now</div>
                                <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-teal-400/0 via-teal-400/90 to-teal-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class='p-4 shadow hidden md:flex md:items-center md:justify-between md:p-6 bg-white dark:bg-zinc-900 w-full border-t dark:border-zinc-800'>
          <span class='text-sm text-zinc-500 sm:text-center dark:text-zinc-500'>© 2024 <a href='https://special-26.com' class='hover:underline'>Special-26</a>. All Rights Reserved.</span>
          <div class='flex flex-wrap gap-5 items-center justify-between text-sm text-zinc-500 dark:text-zinc-400'>
            <div class="w-full flex items-center gap-1 justify-end">
              <h4 class="text-xs text-zinc-700 dark:text-zinc-400">Inked By :</h4>
              <img src="/boltwind/charlie.png" alt="user-image" class="w-6 h-6 rounded-full object-cover">
              <a href="https://twitter.com/vimal_bharti" target="_blank" class="text-xs text-zinc-600 dark:text-zinc-300 hover:underline">Vimal Bharti</a>
            </div>
          </div>
      </footer>
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
-webkit-text-fill-color: teal; /* Will override color (regardless of order) */
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