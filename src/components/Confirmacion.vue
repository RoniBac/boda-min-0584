<template>
  <section class="confirmacion" v-if="data">

    <!-- TÍTULO -->
    <h2 class="titulo">{{ data?.titulo }}</h2>

    <!-- DECORACIÓN -->
    <img :src="data?.decoracion" class="decoracion">

    <!-- TEXTO -->
    <p class="texto" v-html="formatearTexto(data?.texto)"></p>

    <!-- AVISO -->
    <p class="aviso" v-if="data?.aviso">{{ data?.aviso }}</p>

    <p class="descripcion" v-html="formatearTexto(data?.descripcion)"></p>

    <!-- BOTÓN -->
    <a 
      :href="linkWhatsApp" 
      target="_blank" 
      class="btn"
    >
      Confirmar
    </a>

  </section>
</template>

<script setup>
const props = defineProps({
  data: Object
})

// convierte \n en <br>
const formatearTexto = (texto) => {
  return texto.replace(/\n/g, "<br>")
}

// genera link automático
const linkWhatsApp = `https://wa.me/${props.data.whatsapp}?text=${encodeURIComponent(props.data.mensaje)}`
</script>