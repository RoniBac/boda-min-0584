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

    <!-- ========================= -->
    <!-- 🔍 PASO 1: BUSCAR -->
    <!-- ========================= -->
    <div v-if="estado === 'buscar'" class="rsvp-box">
        <p v-if="errorMsg" class="error-msg">
          {{ errorMsg }}
        </p>
      <input 
        v-model="nombreInput" 
        placeholder="Escribe tu nombre (un Nombre y un apellido)"
        class="input"
      />
      <button @click="buscarNombre" class="btn">
        Buscar
      </button>
    </div>

    <!-- ========================= -->
    <!-- ✅ PASO 2: CONFIRMAR -->
    <!-- ========================= -->
    <div v-if="estado === 'confirmar'" class="rsvp-box">

  <p class="nombre-confirmado">¿Eres {{ nombreValido }}?</p>

  <!-- PASO 1 -->
  <div v-if="pasoConfirmacion === 'decision'">
    <button class="btn" @click="seleccionarAsistencia('si')">
      Asistiré
    </button>

    <button class="btn btn-secundario" @click="seleccionarAsistencia('no')">
      No asistiré
    </button>
  </div>

  <!-- PASO 2 -->
  <div v-if="pasoConfirmacion === 'personas'">
    <button @click="confirmarAsistencia" class="btn">
      Confirmar asistencia
    </button>
  </div>

  <!-- SI NO ASISTE -->
  <div v-if="pasoConfirmacion === 'no-asiste'">
    <button @click="confirmarAsistencia" class="btn">
      Confirmar
    </button>
  </div>

</div>

    <!-- ========================= -->
    <!-- 🎉 PASO 3: RESULTADO -->
    <!-- ========================= -->
    <div v-if="estado === 'final'" class="rsvp-box">
      <p class="mensaje-final">
        {{ mensajeFinal }}
      </p>
      
    </div>

  </section>
</template>

<script setup>
import { buscarInvitado, confirmarInvitado } from "../services/api.js"
import { ref } from "vue"

const props = defineProps({
  data: Object
})

// texto con saltos
const formatearTexto = (texto) => {
  return texto.replace(/\n/g, "<br>")
}

// =======================
// 🧠 ESTADOS
// =======================
const estado = ref("buscar")
const nombreInput = ref("")
const nombreValido = ref("")
const asistencia = ref("si")
const personas = ref(0)
const mensajeFinal = ref("")
const fila = ref(null)
const errorMsg = ref("")
const pasoConfirmacion = ref("decision")

// =======================
// 🔍 BUSCAR
// =======================
const buscarNombre = async () => {
  try {
    errorMsg.value = ""

    const nombre = nombreInput.value.trim()

    if (!nombre) {
      errorMsg.value = "Escribe tu nombre completo"
      return
    }

    const data = await buscarInvitado(nombre)

    if (!data || !data.encontrado) {
      errorMsg.value = "Intenta con tus dos apellidos o un nombre diferente.”"
      return
    }

    nombreValido.value = data.nombre
    fila.value = data.fila
    estado.value = "confirmar"

  } catch (error) {
    console.error(error)
    errorMsg.value = "Error al conectar con el sistema"
  }
}
// =======================
// ✅ CONFIRMAR
// =======================
const confirmarAsistencia = async () => {
  try {
    await confirmarInvitado({
      fila: fila.value,
      personas: asistencia.value === "si",
      asistencia: asistencia.value
    })

    estado.value = "final"

    mensajeFinal.value =
      asistencia.value === "si"
        ? "Gracias por confirmar, te esperamos 🎉"
        : "Gracias por avisarnos 🙌"

  } catch (error) {
    console.error(error)
    errorMsg.value = "Error al guardar la confirmación"
  }
}

const seleccionarAsistencia = (tipo) => {
  asistencia.value = tipo

  if (tipo === "si") {
    pasoConfirmacion.value = "personas"
  } else {
    pasoConfirmacion.value = "no-asiste"
  }
}
</script>