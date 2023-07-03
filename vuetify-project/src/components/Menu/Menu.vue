<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <!-- <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"> -->
        <v-list>
          <v-list-item v-for="[icon, text] in links" :key="icon" link>
            <template v-slot:prepend>
              <v-icon>{{ icon }}</v-icon>
            </template>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- </v-app>
   -->
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        ["mdi-inbox-arrow-down", "Tableau de bord"],
        ["mdi-send", "Relevés"],
        ["mdi-delete", "Factures"],
        ["mdi-alert-octagon", "Spam"],
      ],
      drawer: null,
    };
  },
};
</script>
