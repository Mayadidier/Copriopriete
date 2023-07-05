<template>
  <v-container fluid>
    <Menu />
    <v-col cols="10" offset="2">
      <v-row no-gutters class="align-center justify-center">
        <h1>Facture Gaz</h1>
      </v-row>
    </v-col>

    <v-col offset="3" cols="8">
      <v-card class="mx-auto px-6 py-8" max-width="600">
        <v-form v-model="form" @submit="checkForm" method="post">
          <v-col cols=" mx-auto">
            <v-text-field type="date" label="Date"></v-text-field>

            <v-text-field
              v-model="Montant"
              :readonly="loading"
              variant="solo"
              suffix="€"
              clearable
              class="mb-2"
              label="Montant HT"
            ></v-text-field>

            <v-text-field
              v-model="Montant"
              :readonly="loading"
              variant="solo"
              suffix="€"
              clearable
              class="mb-2"
              label="Abonnement"
            ></v-text-field>

            <v-text-field
              v-model="Contributions"
              :readonly="loading"
              variant="solo"
              suffix="€"
              clearable
              class="mb-2"
              label="Contributions"
            ></v-text-field>

            <v-text-field
              v-model="Taxe"
              :readonly="loading"
              variant="solo"
              suffix="€"
              clearable
              class="mb-2"
              label="Taxe"
            ></v-text-field>

            <br />

            <v-btn
              :disabled="!form"
              :loading="loading"
              block
              color="success"
              type="submit"
              value="Submit"
              variant="elevated"
            >
              Valider
            </v-btn>
          </v-col>
        </v-form>
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
