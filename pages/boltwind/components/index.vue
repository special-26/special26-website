<template>
  <div class="w-full h-full overflow-y-auto lg:p-12 p-4">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="category in categories"
          :key="category.id"
          class="w-full rounded-lg relative border border-zinc-700 overflow-hidden" 
          :to="`/boltwind/components/${category.slug}`"
        >
            <img :src="`/boltwind/categories/${category.image}`" :alt="category.title" class="w-full lg:h-[60vh] object-cover">
            <div class="px-4 py-3">
                <h2 class="text-md text-zinc-300 font-semibold w-full">{{ category.title }}</h2>
            </div>
        </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'dark',
    layout: 'boltwind'
  })

  const categories = ref([
    {title: 'Header Section', slug: 'header-section', image: 'header_section.jpg'},
    {title: 'Banners', slug: 'banners', image: 'banners.jpg'},
    {title: 'Blog Post Section', slug: 'blog-post-section', image: 'blog_post_section.jpg'},
    {title: 'Blog Section', slug: 'blog-section', image: 'blog_section.jpg'},
    {title: 'Careers Section', slug: 'careers-section', image: 'careers_section.jpg'},
    {title: 'Contact Section', slug: 'contact-section', image: 'contact_section.jpg'},
    {title: 'CTA Section', slug: 'cta-section', image: 'cta_section.jpg'},
    {title: 'FAQ Section', slug: 'faq-section', image: 'faq_section.jpg'},
    {title: 'Features Section', slug: 'features-section', image: 'features_section.jpg'},
    {title: 'Footers', slug: 'footers', image: 'footer.jpg'},
    {title: 'Header Navigations', slug: 'header-navigations', image: 'header_navigations.jpg'},
    {title: 'Metrics Section', slug: 'metrics-section', image: 'metrics_section.jpg'},
    {title: 'Newsletter Section', slug: 'newsletter-section', image: 'newsletter_section.jpg'},
    {title: 'News Mentions Section', slug: 'news-mentions-section', image: 'news_mentions_section.jpg'},
    {title: 'Pricing Section', slug: 'pricing-section', image: 'pricing_section.jpg'},
    {title: 'Rich Content Section', slug: 'rich-content-section', image: 'rich_content_section.jpg'},
    {title: 'Social Section', slug: 'social-section', image: 'social_section.jpg'},
    {title: 'Testimonial Section', slug: 'testimonial-section', image: 'testimonial_section.jpg'},
    {title: 'Teams Section', slug: 'teams-section', image: 'teams_section.jpg'},
  ])
</script>

<style scoped>
.dotted-bg{
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a5a5a5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e3e2e5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>