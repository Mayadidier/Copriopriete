<template>
  <Menu />
  <v-container fluid>
    <v-col cols="10" offset="2">
      <v-row no-gutters class="align-center justify-center">
        <h1>Facture Eau</h1>
      </v-row>
    </v-col>

    <v-col offset="3" cols="8">
      <v-card class="mb-12 px-6 pt-5 pb-0" max-width="1200">
        <v-form v-model="form" @submit="checkForm" method="post">
          <v-row>
            <v-col cols="3">
              <v-text-field type="date" label="Date"></v-text-field>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-card class="mb-4 pb-0">
              <v-card-item class="pb-0 mb-0">
                <v-card-title class="pb-1">Consommations</v-card-title>
                <v-card-text class="pa-0">
                  <div class="d-flex flex-row">
                    <v-text-field
                      v-model="partDeletaire"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Part délétaire"
                    ></v-text-field>

                    <v-text-field
                      v-model="sedif"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="SEDIF"
                    ></v-text-field>

                    <v-text-field
                      v-model="ressourceEnEau"
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

            <v-card class="mb-4 pb-0">
              <v-card-item class="pb-0 mb-0">
                <v-card-title class="pb-1"
                  >Collecte et traitement des eaux usées</v-card-title
                >
                <v-card-text class="pa-0">
                  <row>
                    <div class="d-flex flex-row">
                      <v-text-field
                        v-model="redevanceCommunautaire"
                        variant="solo"
                        suffix="€"
                        class="pa-2"
                        clearable
                        label="Redevance Communautaire"
                      ></v-text-field>

                      <v-text-field
                        v-model="redevanceFermiere"
                        variant="solo"
                        suffix="€"
                        class="pa-2"
                        clearable
                        label="Redevance fermière communautaire"
                      ></v-text-field>

                      <v-text-field
                        v-model="redevanceDepartementale"
                        variant="solo"
                        suffix="€"
                        class="pa-2"
                        clearable
                        label="Redevance départementale"
                      ></v-text-field>
                    </div>
                  </row>
                  <row>
                    <div class="d-flex flex-row">
                      <v-text-field
                        v-model="redevanceFDepartementale"
                        variant="solo"
                        suffix="€"
                        class="pa-2"
                        clearable
                        label="Redevance fermière communautaire"
                      ></v-text-field>

                      <v-text-field
                        v-model="redevanceinterdepartementale"
                        variant="solo"
                        suffix="€"
                        class="pa-2"
                        clearable
                        label="Redevance interdepartementale"
                      ></v-text-field>
                    </div>
                  </row>
                </v-card-text>
              </v-card-item>
            </v-card>

            <v-card class="mb-6 pb-0">
              <v-card-item class="pb-0 mb-0">
                <v-card-title>Organismes publics</v-card-title>
                <v-card-text class="pa-0">
                  <div class="d-flex flex-row">
                    <v-text-field
                      v-model="luttePollution"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Lutte pollution"
                    ></v-text-field>

                    <v-text-field
                      v-model="modernisationReseaux"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Modernisation réseaux"
                    ></v-text-field>

                    <v-text-field
                      v-model="soutienEtiage"
                      variant="solo"
                      suffix="€"
                      clearable
                      class="pa-2"
                      label="Soutien d'étiage"
                    ></v-text-field>

                    <v-text-field
                      v-model="voiesNaviguable"
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
            <v-btn
              :disabled="!form"
              block
              color="success"
              type="submit"
              value="Submit"
              variant="elevated"
            >
              Valider
            </v-btn>
          </v-col>
          <br />
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
