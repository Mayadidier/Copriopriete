<template>
  <v-container fluid>
    <Menu />
    <v-col cols="10" offset="2">
      <v-row no-gutters class="align-center justify-center">
        <h1>Facture Eau</h1>
      </v-row>
    </v-col>

    <v-col offset="3" cols="8">
      <v-card class="ma-3 px-6 py-8" max-width="1200">
        <v-form v-model="form" @submit="checkForm" method="post">
          <v-row>
            <v-col cols="3">
              <v-text-field type="date" label="Date"></v-text-field>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-card class="mb-7">
              <v-card-item>
                <v-card-title class="pb-3">Consommations</v-card-title>
                <v-card-text>
                  <div class="d-flex flex-row-reverse">
                    <v-text-field
                      v-model="partDeletaire"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Part délétaire"
                    ></v-text-field>

                    <v-text-field
                      v-model="sedif"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="SEDIF"
                    ></v-text-field>

                    <v-text-field
                      v-model="ressourceEnEau"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Préservation ressources en eau"
                    ></v-text-field>
                  </div>
                </v-card-text>
              </v-card-item>
            </v-card>

            <v-card class="mb-7">
              <v-card-item>
                <v-card-title
                  >Collecte et traitement des eaux usées</v-card-title
                >
                <v-card-text>
                  <div class="d-flex justify-space-between pa-2">
                    <v-text-field
                      v-model="redevanceCommunautaire"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      class="pa-2"
                      clearable
                      label="Redevance Communautaire"
                    ></v-text-field>

                    <v-text-field
                      v-model="redevanceFermiere"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      class="pa-2"
                      clearable
                      label="Redevance fermière communautaire"
                    ></v-text-field>

                    <v-text-field
                      v-model="redevanceDepartementale"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      class="pa-2"
                      clearable
                      label="Redevance départementale"
                    ></v-text-field>

                    <v-text-field
                      v-model="redevanceFDepartementale"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      class="pa-2"
                      clearable
                      label="Redevance fermière communautaire"
                    ></v-text-field>

                    <v-text-field
                      v-model="redevanceinterdepartementale"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      class="pa-2"
                      clearable
                      label="Redevance interdepartementale"
                    ></v-text-field>
                  </div>
                </v-card-text>
              </v-card-item>
            </v-card>

            <v-card class="mb-7">
              <v-card-item>
                <v-card-title>Organismes publics</v-card-title>
                <v-card-text>
                  <div class="d-flex justify-space-between pa-2">
                    <v-text-field
                      v-model="luttePollution"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Lutte pollution"
                    ></v-text-field>

                    <v-text-field
                      v-model="modernisationReseaux"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Modernisation réseaux"
                    ></v-text-field>

                    <v-text-field
                      v-model="soutienEtiage"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Soutien d'étiage"
                    ></v-text-field>

                    <v-text-field
                      v-model="voiesNaviguable"
                      :readonly="loading"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Développement des voie naviguable"
                    ></v-text-field>
                  </div>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
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
      releves: ["Montant HT", "Abonnement", "Contribution", "Taxe"],
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
