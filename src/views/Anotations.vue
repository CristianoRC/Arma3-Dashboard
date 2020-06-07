<template>
  <v-container fluid>
    <v-row justify="center" class="mt-5">
      <v-col sm="10">
        <v-card>
          <v-card-title class="text-center justify-center py-6">
            <v-row>
              <v-col sm="12">
                <img src="https://i.imgur.com/PoQlkCp.png" alt="Logo 14º BFN" height="100px" />
              </v-col>
              <v-col class="mt-5" sm="12">
                <h1 class="font-weight-bold display-2">Anotações do campo de batalha</h1>
              </v-col>
              <v-col sm="12">
                <v-btn small @click="clearAnotations" color="primary">
                  Limpar todas
                  <v-icon right dark>mdi-delete</v-icon>
                </v-btn>
                <v-btn class="ml-5" small @click="addNewAnotation" color="primary">
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
                <vue-editor style="height: 100%;" v-model="item.content" />
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
      this.anotations.push({
        title: `${this.anotations.length - 3}ª`,
        content: ""
      });
    },
    saveOnLocalStorage() {
      localStorage.setItem("anotations", JSON.stringify(this.anotations));
    },
    getFromLocalStorage() {
      const anotations = JSON.parse(localStorage.getItem("anotations"));
      if (anotations !== null) this.anotations = anotations;
    },
    clearAnotations() {
      this.anotations = [
        { title: "Organização", content: "" },
        { title: "Objetivo", content: "" },
        { title: "Localizações", content: "" },
        { title: "Outros", content: "" }
      ];
    }
  },
  watch: {
    anotations: {
      deep: true,
      handler() {
        this.saveOnLocalStorage();
      }
    }
  },
  mounted() {
    this.getFromLocalStorage();
  }
};
</script>
