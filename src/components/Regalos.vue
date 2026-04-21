<template>  

    <section class="regalos">

        <!-- TÍTULO -->
        <h2 class="titulo">Regalos</h2>

        <!-- DECORACIÓN -->
        <img :src="data.decoracion" class="decoracion">

        <!-- FRASE -->
        <p class="frase">
            Tu presencia es nuestro mayor regalo,<br>
            pero si quieres tener un detalle con nosotros,<br>
            te compartimos esta idea.
        </p>

        <!-- LLUVIA DE SOBRES -->
        <p class="formal">— Lluvia de Sobres —</p>

        <img :src="data.icon" class="icono">

        <p class="frase">
            La tradición de regalar dinero en efectivo<br>
            dentro de un sobre el día del evento.
        </p>

        <!-- MESA DE REGALOS -->
        <p class="formal">— Mesa de Regalos —</p>
        
        <p class="tipo">{{ data?.mesa }}</p>
        <img :src="data.tienda" class="logo">
        
        <br><br><a :href="data.link" target="_blank" class="btn3">Ver mesa</a>



    </section>

</template>
<script setup>
defineProps({
  data: Object
})
</script>
