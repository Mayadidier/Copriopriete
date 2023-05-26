<template>
  <Navbar/> 
  <v-container
      class="bg-surface-variant mb-6"
    >
      <v-row
        align="start"
        no-gutters
        style="height: 150px;"
      > 
      <Titre_page/>
    </v-row>
    </v-container>

    <Formulaire/>


</template>

<script setup>
  import Navbar from "@/components/navbar/Navbar.vue";
  import Titre_page from "@/components/titre/Titre_page.vue";
  import Formulaire from "@/components/Form/Formulaire.vue";
  
</script>
 