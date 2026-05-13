<template>
  <section class="confirmacion" v-if="data">

    <!-- TÍTULO -->
    <h2 class="titulo">
      {{ data?.titulo }}
    </h2>

    <!-- DECORACIÓN -->
    <img
      :src="data?.decoracion"
      class="decoracion"
    >

    <!-- TEXTO -->
    <p
      class="texto"
      v-html="formatearTexto(data?.texto)"
    ></p>

    <!-- AVISO -->
    <p
      class="aviso"
      v-if="data?.aviso"
    >
      {{ data?.aviso }}
    </p>

    <!-- DESCRIPCIÓN -->
    <p
      class="descripcion"
      v-html="formatearTexto(data?.descripcion)"
    ></p>

    <!-- ========================= -->
    <!-- 🔍 BUSCAR -->
    <!-- ========================= -->
    <div
      v-if="estado === 'buscar'"
      class="rsvp-box"
    >

      <p
        v-if="errorMsg"
        class="error-msg"
      >
        {{ errorMsg }}
      </p>

      <input
        v-model="nombreInput"
        placeholder="Escribe tu nombre"
        class="input"
      />

      <button
        @click="buscarNombre"
        class="btn"
      >
        Buscar
      </button>

    </div>

    <!-- ========================= -->
    <!-- 🎉 RESULTADO -->
    <!-- ========================= -->
    <div
      v-if="estado === 'final'"
      class="rsvp-box"
    >

      <p class="mensaje-final">
        {{ mensajeFinal }}
      </p>

    </div>

  </section>
</template>

<script setup>
import { ref } from "vue"
import {
  buscarInvitado,
  confirmarInvitado
} from "../services/api.js"

const props = defineProps({
  data: Object
})

// =======================
// 📝 FORMATEAR TEXTO
// =======================
const formatearTexto = (texto = "") => {
  return texto.replace(/\n/g, "<br>")
}

// =======================
// 🧠 ESTADOS
// =======================
const estado = ref("buscar")
const nombreInput = ref("")
const mensajeFinal = ref("")
const errorMsg = ref("")

// =======================
// 🔍 BUSCAR Y CONFIRMAR
// =======================
const buscarNombre = async () => {

  try {

    errorMsg.value = ""

    const nombre = nombreInput.value.trim()

    if (!nombre) {

      errorMsg.value =
        "Escribe tu nombre completo"

      return
    }

    const data = await buscarInvitado(nombre)

    if (!data || !data.encontrado) {

      errorMsg.value =
        "Intenta con tus dos apellidos o un nombre diferente"

      return
    }

    // ✅ CONFIRMA AUTOMÁTICAMENTE
    await confirmarInvitado({
      fila: data.fila,
      asistencia: "si"
    })

    estado.value = "final"

    mensajeFinal.value =
      `Gracias por confirmar ${data.nombre} 🎉`

  } catch (error) {

    console.error(error)

    errorMsg.value =
      "Error al conectar con el sistema"

  }
}
</script>