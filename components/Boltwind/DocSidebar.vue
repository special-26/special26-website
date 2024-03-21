<template>
  <div class="md:w-[20%] w-full relative hidden lg:block">
      <!-- Components -->
      <div class="dark:bg-zinc-900 bg-white border-r h-full dark:border-zinc-800  overflow-y-auto scrollbar-hide">
          <ul class="space-y-4 border-b dark:border-zinc-800 py-5 mb-5 pl-6">
              <li class="text-zinc-500 dark:hover:text-zinc-200 cursor-pointer w-full">
                  <NuxtLink to="/docs" class="w-full">
                      <button class="w-full text-left flex items-center gap-2 text-[14px]">
                          <IconsLayout class="h-5 w-5" />
                          All Components
                      </button>
                  </NuxtLink>
              </li>
          </ul>

          <!-- <button class="text-zinc-400 w-full border rounded-lg px-5 py-2 border-zinc-800 mb-4 text-sm" v-for="n in 4">Header</button> -->

          <ul class="pl-6">
              <li class="flex gap-2 text-zinc-600 pb-3">
                  <span class="font-bold">Web Components</span> 
              </li>
              <li
                  class="text-zinc-500 dark:hover:text-zinc-200 cursor-pointer w-full pl-6 border-l dark:border-zinc-700 border-dotted py-2"
                  v-for="link in categories" :key="link"
              >
                  <NuxtLink :to="`/boltwind/components/${link.slug}`" class="w-full">
                      <button class="w-full text-left text-[14px]">{{link.title}}</button>
                  </NuxtLink>
              </li>
          </ul>
      </div>
  </div>

</template>

<script setup>
  const colorMode = useColorMode()

  const components = [
      {title: "Introduction", route: "/docs", icon: "lucide:layout-dashboard"},
      {title: "Commands", route: "/docs/commands", icon: "ph:terminal-window"},
      // {title: "Gradient Generator", route: "/gradient-generator", icon: "streamline:interface-edit-swatch-color-colors-design-painting-palette-sample-swatch"},
  ]

  const categories = ref([
    {title: 'Header Section', slug: 'header-section'},
    {title: 'Banners', slug: 'banners'},
    {title: 'Blog Post Section', slug: 'blog-post-section'},
    {title: 'Blog Section', slug: 'blog-section'},
    {title: 'Careers Section', slug: 'careers-section'},
    {title: 'Contact Section', slug: 'contact-section'},
    {title: 'CTA Section', slug: 'cta-section'},
    {title: 'FAQ Section', slug: 'faq-section'},
    {title: 'Features Section', slug: 'features-section'},
    {title: 'Footers', slug: 'footers'},
    {title: 'Header Navigations', slug: 'header-navigations'},
    {title: 'Metrics Section', slug: 'metrics-section'},
    {title: 'Newsletter Section', slug: 'newsletter-section'},
    {title: 'News Mentions Section', slug: 'news-mentions-section'},
    {title: 'Pricing Section', slug: 'pricing-section'},
    {title: 'Rich Content Section', slug: 'rich-content-section'},
    {title: 'Social Section', slug: 'social-section'},
    {title: 'Testimonial Section', slug: 'testimonial-section'},
    {title: 'Teams Section', slug: 'teams-section'},
  ])

  const isDark = computed({
      get () {
          return colorMode.value === 'dark'
      },
      set () {
          colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
      }
  })

</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>