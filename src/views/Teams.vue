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
                <h1 class="font-weight-bold display-2">Equipes em campo</h1>
              </v-col>
              <v-col sm="12">
                <v-btn small @click="addNewTeam" color="primary">
                  Adicionar nova equipe
                  <v-icon right dark>mdi-account-multiple-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col sm="12" md="4" v-for="(team, index) in teams" :key="index">
                <team-detail :team="team"></team-detail>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamDetail from "../components/team/teamDetail";
export default {
  data: () => ({
    teams: [
      {
        name: "Alfa",
        persons: [
          { name: "Cunha", militaryRank: "Soldado", function: "Machine Gunner" }
        ]
      },
      {
        name: "Bravo",
        persons: [
          {
            name: "Raffi",
            militaryRank: "Soldado",
            function: "Machine Gunner"
          },
          { name: "Cunha", militaryRank: "Soldado", function: "Médico" },
          {
            name: "Raffi",
            militaryRank: "Soldado",
            function: "Machine Gunner"
          },
          { name: "Cunha", militaryRank: "Soldado", function: "Médico" },
          {
            name: "Raffi",
            militaryRank: "Soldado",
            function: "Machine Gunner"
          },
          { name: "Cunha", militaryRank: "Soldado", function: "Médico" },
          {
            name: "Raffi",
            militaryRank: "Soldado",
            function: "Machine Gunner"
          },
          { name: "Cunha", militaryRank: "Soldado", function: "Médico" }
        ]
      }
    ]
  }),
  methods: {
    saveOnLocalStorage() {
      localStorage.setItem("teams", JSON.stringify(this.teams));
    },
    getFromLocalStorage() {
      const teams = JSON.parse(localStorage.getItem("teams"));
      if (teams !== null) this.teams = teams;
    },
    addNewTeam() {}
  },
  components: { TeamDetail }
};
</script>

<style>
</style>