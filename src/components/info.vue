<template>
  <section class="info">

    <!-- FRASE -->
    <p class="frase">
      {{ data?.frase }}
    </p>

    <!-- DECORACIÓN -->
    <img :src="data.decoracion" alt="decoración" class="decoracion">

    <!-- FAMILIA -->
    <div class="familia" v-if="data?.familia">

  <div v-for="grupo in data.familia" :key="grupo.titulo" class="bloque">
    <p class="padrinos">{{ grupo?.titulo }}</p>

            <p class="nompadrinos">

        <!-- persona 1 -->
        <span class="persona">
            {{ grupo.personas[0]?.nombre }}
            <span v-if="grupo.personas[0]?.finado" class="finado">🎗</span>
        </span>

        <!-- persona 2 -->
        <span class="persona">
            {{ grupo.personas[1]?.nombre }}
            <span v-if="grupo.personas[1]?.finado" class="finado">🎗</span>
        </span>

        </p>
  </div>

</div>

  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>
