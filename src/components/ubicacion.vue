<template>

    <section class="ubicacion">

        <!-- TÍTULO -->
        <h2 class="titulo">Ubicaciones</h2>

        <!-- DECORACIÓN -->
        <img :src="data.decoracion" alt="decoración" class="decoracion">
        <!-- CEREMONIA -->
        <div class="card">

            <img :src="data.icon1" class="icono" style="filter: invert(1);">

            <p class="tipo">— Ceremonia —</p>
            <p class="hora">{{ data?.horaceremonia }}</p>

            <img :src=data.ubicacion1 class="ubi-img">

            <p class="lugar">{{ data?.lugarceremonia }}</p>
            <p class="direccion">
                {{ data?.direccionceremonia }}
            </p>

            <a :href="data?.mapsceremonia" class="btn">VER MAPA</a>

        </div>

        <!-- RECEPCIÓN -->
        <div class="card">

            <img :src="data.icon2" class="icono" >

            <p class="tipo">— Recepción —</p>
            <p class="hora">{{ data?.horarecepcion}}</p>

            <img :src=data.ubicacion2 class="ubi-img">

            <p class="lugar">{{ data?.lugarrecepcion }}</p>
            <p class="direccion">
            {{ data?.direccionrecepcion }}
            </p>

            <a :href="data.mapsrecepcion" class="btn">VER MAPA</a>

        </div>

    </section>


</template>

<script setup>
defineProps({
  data: Object
})
</script>
