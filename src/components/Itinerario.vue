<template>
    <section class="itinerario">

        <!-- TÍTULO -->
        <h2 class="titulo3">Itinerario</h2>

        <!-- DECORACIÓN -->
        <img :src="data.decoracion" class="decoracion""> 

        <!-- LISTA -->
        <div class="lista">

            <div class="item">
            <img :src="data.icon1">
            <p>Ceremonia Religiosa</p>
            </div>

            <div class="item">
            <img :src="data.icon2">
            <p>Recepción</p>
            </div>

            <div class="item">
            <img :src="data.icon3" style="filter: invert(1);">
            <p>Bienvenida Novios</p>
            </div>

            <div class="item">
            <img :src="data.icon5" style="filter: invert(1);">
            <p>Banquete</p>
            </div>

            <div class="item">
            <img :src="data.icon6" style="filter: brightness(0) invert(1);">
            <p>Baile</p>
            </div>

        </div>

    </section>


</template>

<script setup>
defineProps({
  data: Object
})
</script>
