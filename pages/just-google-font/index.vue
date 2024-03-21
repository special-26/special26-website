<template>
  <div class="h-screen overflow-hidden relative flex">
    <aside class="h-full overflow-y-auto w-[30vw] bg-zinc-950 shadow-xl">
      <div v-if="pending">
        Loading ...
      </div>
      <div v-else>
        Total Fonts: {{ fonts.items.length }}
        <div class="grid grid-cols-3 gap-3 p-3">
          <button 
            v-for="font in fonts.items" 
            class="w-full h-20 flex items-center justify-center rounded-xl shadow-xl bg-zinc-900 text-xs text-zinc-300"
            @click="emitFontSelected(font.family)"
          >
            {{ font.family }}
          </button>
        </div>
      </div>
    </aside>
    <section class="w-[70vw] h-full overflow-y-auto p-8">
      {{ selectedFont }}
      <h2 :style="{ fontFamily: selectedFont }" class="text-5xl my-5">Section title</h2>
      <p :style="{ fontFamily: selectedFont }" class="text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt inventore omnis facilis aspernatur, sequi corrupti quibusdam odit itaque excepturi dolorem laborum tempore nam tenetur. Corporis eveniet facilis error illo.</p>
      <p :style="{ fontFamily: selectedFont }" class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas! Nesciunt minima nihil tenetur aliquam magni sed, accusamus assumenda repellat asperiores tempore incidunt nulla doloremque quam voluptate, autem, quia libero!</p>
    </section>
  </div>
</template>

<script setup>

  const selectedFont = ref('Abel');

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
    selectedFont.value = font.replace(/\s/g, '+')
    // change Google Font 
    let getLink = document.getElementById("googleFontLink");
    getLink.getAttribute("href");
    getLink.setAttribute("href", `https://fonts.googleapis.com/css?family=${selectedFont.value}&display=swap`);
    console.log(getLink);
  };

</script>