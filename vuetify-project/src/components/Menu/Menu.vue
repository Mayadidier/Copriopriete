<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover>
        <v-list>
          <v-list-item
            prepend-icon="mdi-inbox-arrow-down"
            title="Tableau de bord"
            to="/"
          ></v-list-item>
          
          <v-list-item
            prepend-icon="mdi-inbox-arrow-down"
            title="Relevés"
            to="/"
          >
            <v-list-item
              v-for="item in underTabsForm"
              :prepend-icon="item.icon"
              :title="item.titre"
              :to="item.route"
            >
            </v-list-item>
          </v-list-item>

          <v-list-item
            prepend-icon="mdi-inbox-arrow-down"
            title="Factures"
            to="/"
          >
            <v-list-item
              v-for="item in underTabsBill"
              :prepend-icon="item.icon"
              :title="item.titre"
              :to="item.route"
            >
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { icon: "mdi-inbox-arrow-down", titre: "Tableau de bord", route: "/" },
        { icon: "mdi-inbox-arrow-down", titre: "Relevés", route: "/WaterForm" },
        { icon: "mdi-inbox-arrow-down", titre: "Factures", route: "/GasForm" },
      ],
      underTabsForm: [
        { icon: "mdi-inbox-arrow-down", titre: "Eau", route: "/WaterForm" },
        { icon: "mdi-inbox-arrow-down", titre: "Gaz", route: "/GasForm" },
      ],
      underTabsBill: [
        { icon: "mdi-inbox-arrow-down", titre: "Eau", route: "/WaterBill" },
        { icon: "mdi-inbox-arrow-down", titre: "Gaz", route: "/GasBill" },
      ],
      drawer: null,
    };
  },
};
</script>
