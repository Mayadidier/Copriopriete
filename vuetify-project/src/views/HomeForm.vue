<template>
  <Menu />
  <v-container fluid>
    <v-col cols="10" offset="2">
      <v-row no-gutters class="align-center justify-center">
        <h1>Relevés</h1>
      </v-row>
    </v-col>

    <v-col offset="3" cols="8">
      <v-card class="mx-auto px-6 py-8" max-width="600">
       
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import Menu from "../components/Menu/Menu.vue";
// Déclaration du composant Vue
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Champs manquant",
        number: (value) => !isNaN(value) || "Veuillez rentrer un nombre",
      },
    };
  },
  components: {
    Menu,
  },
};
</script>

<script setup></script>

<!-- Utilise le langage SCSS https://sass-lang.com/guide -->
<style lang="scss"></style>
