<template>
  <section class="countdown-section" v-if="data">

    <h2 class="titulo2">
      APARTA <span class="titulo-span">esta</span> FECHA
    </h2>

    <p class="tipo">— {{ data?.fechaTexto }} —</p>

    <div class="countdown">

      <div class="box">
        <span>{{ tiempo?.dias }}</span>
        <p>DÍAS</p>
      </div>

      <div class="box">
        <span>{{ tiempo?.horas }}</span>
        <p>HORAS</p>
      </div>

      <div class="box">
        <span>{{ tiempo?.minutos }}</span>
        <p>MINUTOS</p>
      </div>

      <div class="box">
        <span>{{ tiempo?.segundos }}</span>
        <p>SEGUNDOS</p>
      </div>

    </div>

  </section>

  <section class="reveal" v-if="data?.imagen">
    <img :src="data?.imagen" alt="imagen">
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  data: Object
})

const tiempo = ref({
  dias: '00',
  horas: '00',
  minutos: '00',
  segundos: '00'
})

let intervalo

const calcularTiempo = () => {
  const ahora = new Date()
  const destino = new Date(props.data.fechaISO)

  const diferencia = destino - ahora

  if (diferencia <= 0) return

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60)
  const segundos = Math.floor((diferencia / 1000) % 60)

  tiempo.value = {
    dias: String(dias).padStart(2, '0'),
    horas: String(horas).padStart(2, '0'),
    minutos: String(minutos).padStart(2, '0'),
    segundos: String(segundos).padStart(2, '0')
  }
}

onMounted(() => {
  calcularTiempo()
  intervalo = setInterval(calcularTiempo, 1000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>