<template>
  <v-card>
    <v-card-title primary-title>Cadastro de quipe</v-card-title>
    <v-divider class="mb-5"></v-divider>
    <v-card-text>
      <v-row justify="center" align="center">
        <v-list-item-avatar tile size="100" color="#3f3f3f">
          <p class="display-1 white--text">{{name.charAt(0).toUpperCase()}}</p>
        </v-list-item-avatar>
      </v-row>
      <v-row align="center" justify="center">
        <v-col sm="10">
          <v-text-field v-model="name" label="Nome" required></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text class="card-user mb-5" v-for="(person, index) in persons" :key="index">
      <v-row align="center" justify="center">
        <v-col sm="10">
          <v-text-field v-model="person.name" label="Nome" required></v-text-field>
        </v-col>
        <v-col sm="10">
          <v-text-field v-model="person.militaryRank" label="Patente" required></v-text-field>
        </v-col>
        <v-col sm="10">
          <v-text-field v-model="person.function" label="Função" required></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="addNewPerson" small>
        Adicionar
        <v-icon class="ml-3" dark>mdi-plus-thick</v-icon>
      </v-btn>
      <v-btn class="ml-5" @click="save" small>
        Salvar
        <v-icon class="ml-3" dark>mdi-content-save</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  created() {
    this.clearForm();
  },
  methods: {
    addNewPerson() {
      this.persons.push({ name: "", militaryRank: "", function: "" });
    },
    clearForm() {
      this.persons = [{ name: "", militaryRank: "", function: "" }];
    },
    save() {
      this.$emit("save", { name: this.name, persons: this.persons });
    }
  },
  data: () => ({
    name: "",
    persons: []
  })
};
</script>

<style>
.card-user {
  background-color: #d3d3d3;
}
</style>