<template>
  <section class="buzon" v-if="data">

    <!-- TÍTULO -->
    <h2 class="titulo3">{{ data?.titulo }}</h2>

    <!-- DECORACIÓN -->
    <img :src="data?.decoracion" class="decoracion" >

    <!-- TEXTO -->
    <p class="texto2" v-html="formatearTexto(data?.texto)"></p>

    <!-- ICONO -->
    <img v-if="data?.icono" :src="data?.icono" class="icon--big" style="filter: invert(0) brightness(2);">

    <!-- BOTÓN -->
    <a 
      :href="data?.link" 
      target="_blank" 
      class="btn2"
    > 
      {{ data?.botonTexto }}
    </a>

  </section>
</template>

<script setup>
const props = defineProps({
  data: Object
})

// convierte saltos de línea
const formatearTexto = (texto) => {
  return texto.replace(/\n/g, "<br>")
}
</script>