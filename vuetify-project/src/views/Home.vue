<template>

<v-container fluid>
    <v-row class= "mr-8 mt-n10" justify="end">
      <v-col cols = "10">
        <V_card_form/>
      </v-col>
    </v-row>

    <v-row class= "mr-8" justify="end">
      <v-col cols = "5">
        <V_card_form/>
      </v-col>
      <v-col cols = "5">
        <V_card_form/> 
      </v-col>
    </v-row>

    <v-row class= "mr-8" justify="end">
      <v-col cols = "5">
        <V_card_form/> 
      </v-col>
      <v-col cols = "5">
        <V_card_form/>
      </v-col>
    </v-row>

    <v-row class= "mr-8" justify="end">
      <v-col cols = "5">
        <V_card_form/> 
      </v-col>
      <v-col cols = "5">
        <V_card_form/> 
      </v-col>
    </v-row>

    <v-row class= "mr-8" justify="end">
      <v-col cols = "5">
        <V_card_form/> 
      </v-col>
      <v-col cols = "5">
        <V_card_form/> 
      </v-col>
    </v-row>
    
  
</v-container>

</template>

<script setup>
    import V_card_form from "../components/Form/Form_v_card.vue"
</script>
<style>

</style>