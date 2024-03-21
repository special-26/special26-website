<template>
  <section class="w-full space-y-16">
    <div class="component-container relative">

      <section class="w-full mt-8 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-xl p-3">
        <!-- Card Preview -->
        <div class="lg:p-6 flex items-center justify-center bg-white dark:bg-zinc-900">
          <header class="bg-white dark:bg-zinc-900 w-full">
            <nav class="flex items-center justify-between py-4">
              <div class="flex items-center gap-5">
                <div class="logo flex h-8 w-8 items-center justify-center rounded bg-teal-500 text-white">B</div>
                <div class="nav-links hidden gap-5 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
                  <a href="#">Home</a>
                  <a href="#">Products</a>
                  <a href="#">Resources</a>
                  <a href="#">Pricing</a>
                </div>
              </div>
              <div class="hidden items-center gap-3 md:flex">
                <button class="rounded px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-300">Log in</button>
                <button class="rounded-lg bg-teal-500 px-3 py-1.5 text-sm text-white">Sign in</button>
              </div>
              <button class="block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z" /></svg>
              </button>
            </nav>
            <section class="ml-auto flex max-w-7xl flex-col gap-12 md:flex-row">
              <div class="flex w-full flex-col items-start justify-center gap-6 p-4 md:p-0">
                <div class="flex items-center rounded-xl border p-1 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                  <button class="flex items-center gap-2 rounded-lg border px-3 py-1 text-sm dark:border-zinc-700">
                    <span class="h-3 w-3 rounded-full border-2 border-teal-100 bg-teal-500"></span>
                    We're hiring!
                  </button>
                  <span class="px-5 text-sm">Join our remote team</span>
                </div>
                <h2 class="text-4xl text-zinc-800 dark:text-zinc-100">People who care about your growth</h2>
                <p class="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum sint voluptate hic neque vero nobis?</p>
                <div class="flex w-full gap-3">
                  <input type="text" placeholder="enter your email" class="flex-grow rounded-lg border dark:border-zinc-700 px-2 bg-white dark:bg-zinc-800" />
                  <button class="px-6 rounded bg-teal-500 py-2 text-white">Get started</button>
                </div>
                <p class="text-sm text-zinc-500">We care about your data in our <span class="underline">privacy policy</span></p>
              </div>
              <div class="w-full">
                <img src="https://images.unsplash.com/photo-1509744645300-a2098b11871a" alt="" class="h-[50vh] md:h-70vh] w-full object-cover" />
              </div>
            </section>
          </header>
        </div>

        <!-- Card-footer -->
        <div class="card-footer flex items-center justify-center space-x-3 relative">
          <ClientOnly>
            <CopyToClipboard 
              content='
              <header class="bg-white dark:bg-zinc-900 w-full">
                <nav class="flex items-center justify-between py-4">
                  <div class="flex items-center gap-5">
                    <div class="logo flex h-8 w-8 items-center justify-center rounded bg-teal-500 text-white">B</div>
                    <div class="nav-links hidden gap-5 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
                      <a href="#">Home</a>
                      <a href="#">Products</a>
                      <a href="#">Resources</a>
                      <a href="#">Pricing</a>
                    </div>
                  </div>
                  <div class="hidden items-center gap-3 md:flex">
                    <button class="rounded px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-300">Log in</button>
                    <button class="rounded-lg bg-teal-500 px-3 py-1.5 text-sm text-white">Sign in</button>
                  </div>
                  <button class="block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z" /></svg>
                  </button>
                </nav>
                <section class="ml-auto flex max-w-7xl flex-col gap-12 md:flex-row">
                  <div class="flex w-full flex-col items-start justify-center gap-6 p-4 md:p-0">
                    <div class="flex items-center rounded-xl border p-1 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                      <button class="flex items-center gap-2 rounded-lg border px-3 py-1 text-sm dark:border-zinc-700">
                        <span class="h-3 w-3 rounded-full border-2 border-teal-100 bg-teal-500"></span>
                        We are hiring!
                      </button>
                      <span class="px-5 text-sm">Join our remote team</span>
                    </div>
                    <h2 class="text-4xl text-zinc-800 dark:text-zinc-100">People who care about your growth</h2>
                    <p class="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum sint voluptate hic neque vero nobis?</p>
                    <div class="flex w-full gap-3">
                      <input type="text" placeholder="enter your email" class="flex-grow rounded-lg border dark:border-zinc-700 px-2 bg-white dark:bg-zinc-800" />
                      <button class="px-6 rounded bg-teal-500 py-2 text-white">Get started</button>
                    </div>
                    <p class="text-sm text-zinc-500">We care about your data in our <span class="underline">privacy policy</span></p>
                  </div>
                  <div class="w-full">
                    <img src="https://images.unsplash.com/photo-1509744645300-a2098b11871a" alt="" class="h-[50vh] md:h-70vh] w-full object-cover" />
                  </div>
                </section>
              </header>
              ' 
              @click="copyBtnHandle" />
          </ClientOnly>
        </div>
      </section>
    </div>  
  </section>

  <div class="fixed left-0 right-0 top-4 flex-center">
    <Transition name="bounce">
      <span v-if="ifCopied" class="text-[14px] bg-zinc-800 px-6 py-2 rounded">
        <span class="textGradient">Copied</span>
      </span>
    </Transition>
  </div>
</template>

<script setup>
  const toast = useToast()

  const copyBtnHandle = () => {
    ifCopied.value = true
    setTimeout(() => {
      ifCopied.value = false
    }, 2000)
  }

  const ifCopied = ref(false);
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-enter,
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
  /* opacity: 0; */
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>