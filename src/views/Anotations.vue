<template>
  <v-container fluid>
    <v-row justify="center" class="mt-5">
      <v-col sm="10">
        <v-card>
          <v-card-title class="text-center justify-center py-6">
            <v-row>
              <v-col sm="12">
                <img src="../assets/Logo_CinzaVerde.png" alt="Logo 14º BFN" height="100px" />
              </v-col>
              <v-col class="mt-5" sm="12">
                <h1 class="font-weight-bold display-2">Anotações do campo de batalha</h1>
              </v-col>
              <v-col sm="12">
                <v-btn small @click="addNewAnotation" color="primary">
                  Adicionar nova anotação
                  <v-icon right dark>mdi-grease-pencil</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-tabs vertical>
              <v-tab v-for="(item, index) in anotations" :key="index">{{ item.title }}</v-tab>
              <v-tab-item v-for="(item, index) in anotations" :key="index">
                <v-card flat>
                  <v-card-text>
                    <vue-editor v-model="item.content" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },
  data: () => ({
    anotations: [
      { title: "Organização", content: "" },
      { title: "Objetivo", content: "" },
      { title: "Localizações", content: "" },
      { title: "Outros", content: "" }
    ]
  }),
  methods: {
    addNewAnotation() {
      this.anotations.push({ title: `${this.anotations.length - 3}ª`, content: "" });
    }
  }
};
</script>

<style>

</style>