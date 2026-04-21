<template>
  <section class="music" v-if="data">
    <audio controls>
      <source :src="data?.src" type="audio/mpeg">
      Tu navegador no soporta audio
    </audio>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
.music {
  text-align: center;
  margin: 2rem 0;
}

audio {
  width: 80%;
  max-width: 400px;
}
</style>
