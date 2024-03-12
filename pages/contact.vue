<template>
  <div class="h-full w-full">
      <div class="w-[90vw] md:w-[80vw] mx-auto py-10 md:py-20">
          <div class="mb-10 md:mb-16">
              <div class="text-xl text-zinc-400 ">Feel free to talk to us!</div>
              <div class="text-[4em] text-zinc-100 font-oxygen">Let's Work <span class="gradientText">Together</span></div>
          </div>
          
          <form ref="form" @submit.prevent="handleSubmit">
              <div class="work-type">
                  <h3 class="mb-5 text-lg text-zinc-500 font-medium">I need:</h3>
                  <ul class="grid w-full gap-6 md:grid-cols-3 grid-cols-1">
                      <li v-for="work in works" :key="work.id">
                          <input type="checkbox" :id="work.id" :value="work.name" class="hidden peer" name="services" v-model="services">
                          <label :for="work.id" class="inline-flex md:h-52 items-center justify-between w-full py-5 px-6 md:px-12 text-zinc-500 bg-zinc-900 shadow-inner rounded-2xl cursor-pointer peer-checked:border-zinc-700 peer-checked:bg-gradient-to-bl from-cyan-800  peer-checked:text-black border border-zinc-800 hover:bg-black hover:text-zinc-100 peer-checked:hover:text-zinc-100 transition duration-300 ease-in-out">
                              <div class="block">
                                  <div class="w-full text-lg font-semibold text-zinc-200">{{ work.name }}</div>
                                  <div class="text-sm mt-1 text-zinc-400">{{ work.description }}</div>
                              </div>
                          </label>
                      </li>
                  </ul>
              </div>

              <div class="form mt-16">
                  <div class="flex flex-col md:flex-row gap-6">
                      <input type="text" name="name" required placeholder="Full Name" class="border p-4 w-full bg-zinc-900 border-zinc-800 rounded-xl text-zinc-200 focus:outline-none" v-model="name">
                      <input type="email" name="email" required placeholder="Email*" class="border p-4 w-full bg-zinc-900 border-zinc-800 rounded-xl text-zinc-200 focus:outline-none" v-model="email">
                  </div>
              </div>
              <textarea rows="5" class="border p-4 w-full bg-zinc-900 border-zinc-800 mt-6 rounded-xl focus:outline-none text-zinc-200" placeholder="What is your project about?" name="message" v-model="message" required></textarea>

              <div class="submit-btn flex-center mt-6">
                  <button 
                      class="bg-zinc-900 border border-zinc-800 rounded-full text-white uppercase w-48 h-48 tracking-[10px] text-sm flex-center group relative hover:bg-zinc-800" 
                      :disabled="btnDisabled" 
                      type="submit"
                  >
                      <span>{{ btnText }}</span>
                  </button>
              </div>
          </form>
      </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';

  const name = ref('')
  const email = ref('')
  const message = ref('')
  const services = ref([])

  const form = ref('');
  const btnText = ref('Submit');
  const btnIcon = ref('pepicons:send-print')
  const btnDisabled = ref(false);
  const btnClass = ref('bg-gray-800 text-white')

  const works = ref([
      {id: 1, name: 'Figma to Html', icon: 'logos:figma', toIcon: 'vscode-icons:file-type-html', description: 'We convert figma designs into pixel perfect, clean, HTML code'},
      {id: 2, name: 'Tailwind Components', icon: 'logos:tailwindcss-icon', toIcon: '', description: 'UI components based on the utility-first Tailwind CSS'},
      {id: 3, name: 'UI/UX', icon: 'logos:adobe-xd', toIcon: 'logos:figma', description: 'UI/UX services that include branding, responsive web design, mobile app design.'},
      {id: 4, name: 'HTML/CSS', icon: 'vscode-icons:file-type-html', toIcon: 'vscode-icons:file-type-css', description: 'Pixel perfect, clean, well commented and semantic HTML and CSS code'},
      {id: 5, name: 'Back-end Development', icon: 'logos:laravel', toIcon: '', description: 'We provide bug-free, and robust Laravel application development'},
      {id: 6, name: 'Front-end Development', icon: 'logos:vue', toIcon: 'logos:nuxt-icon', description: 'VueJS development services aimed at designing, deploying, and testing single-page apps'},
      // {id: 7, name: 'Graphics/Illustration', icon: 'logos:adobe-illustrator', toIcon: 'logos:adobe-photoshop', description: 'Graphic and Illustration | Icons | Vectors | Visual | Patterns | Chracters'},
      // {id: 8, name: 'Other', icon: 'fluent:notepad-edit-20-filled', toIcon: '', description: 'Not Decided yet'}
  ])

  const handleSubmit = () => {
      btnDisabled.value = true;
      btnText.value = 'Sending...'
      btnIcon.value = 'line-md:loading-twotone-loop'

      emailjs.sendForm('service_hp89vpv', 'template_4y6en2s', form.value, 'K-6DifRIj_DD7IRdc')
      .then((result) => {
          btnClass.value = 'border text-gray-800 cursor-not-allowed'
          btnText.value = 'Sent'
          btnIcon.value = 'noto:thumbs-up'
          name.value = ''
          email.value = ''
          message.value = ''
          services.value = []
      }, (error) => {
          console.log('FAILED...', error.text);
      });
  }
</script>