<template>
    
    <section class="dresscode">

        <!-- TÍTULO -->
        <h2 class="titulo">Código de Vestimenta</h2>

        <!-- DECORACIÓN -->
        <img :src="data.decoracion" class="decoracion">

        <!-- TIPO -->
        <p class="formal">— FORMAL —</p>

        <!-- ICONOS -->
        <div class="iconos">
            <img :src="data.icon"  class="iconodc" alt="traje">
        </div>

        <div class="contenido2">

            <div class="col">
            <h3>Ellos</h3>
            <p>
                Traje<br>
                {{ data?.ellos }}
            </p>
            </div>

            <div class="col">
            <h3>Ellas</h3>
            <p>
                Vestidos de noche<br>
                {{ data?.ellas }}
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
