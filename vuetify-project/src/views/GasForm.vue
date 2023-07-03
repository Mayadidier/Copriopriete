<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col offset="2">
        <v-card class="align-center pa-4 mt-n3 outlined">
          <h2>Relevés eau</h2>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2" offset="2" class="mt-2">
        <v-text-field type="date" label="Date"></v-text-field>
      </v-col>
    </v-row>

    <v-row no-gutters v-for="article in releveEau">
      <v-col cols="2" offset="2" class="mt-2">
        <p class="text-center align-center pa-4">{{ article }}</p>
      </v-col>

      <v-col cols="1" offset="0" class="mt-2">
        <v-text-field variant="solo" suffix="m3"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Déclaration du composant Vue
export default {
  data() {
    return {
      releveEau: [
        "Compteur principal",
        " Compteur lot 2/3",
        "Compteur lot 2",
        "Compteur Cour",
      ],
    };
  },
};
</script>

<script setup>
import Date_form from "../components/Form/Form_date.vue";
</script>

<!-- Utilise le langage SCSS https://sass-lang.com/guide -->
<style lang="scss"></style>
