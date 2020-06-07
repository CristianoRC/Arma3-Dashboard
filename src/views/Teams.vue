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
                <h1 class="font-weight-bold display-2">Equipes em campo</h1>
              </v-col>
              <v-col sm="12">
                <v-btn small @click="dialog = true" color="primary">
                  Adicionar nova equipe
                  <v-icon right dark>mdi-account-multiple-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col sm="12" md="4" v-for="(team, index) in teams" :key="index">
                <team-detail @delete="deleteTeam" :index="index" :team="team"></team-detail>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-if="dialog" v-model="dialog" max-width="700px" transition="dialog-transition">
      <create-team @save="addNewTeam"></create-team>
    </v-dialog>
  </v-container>
</template>

<script>
import TeamDetail from "../components/team/teamDetail";
import CreateTeam from "../components/team/createTeam";

export default {
  created() {
    this.getFromLocalStorage();
  },
  data: () => ({
    dialog: false,
    teams: []
  }),
  watch: {
    teams: {
      deep: true,
      handler() {
        this.saveOnLocalStorage();
      }
    }
  },
  methods: {
    deleteTeam(teamIndex) {
      this.teams.splice(teamIndex, 1);
    },
    saveOnLocalStorage() {
      localStorage.setItem("teams", JSON.stringify(this.teams));
    },
    getFromLocalStorage() {
      const teams = JSON.parse(localStorage.getItem("teams"));
      if (teams !== null) this.teams = teams;
    },
    addNewTeam(team) {
      this.teams.push(team);
      this.dialog = false;
    }
  },
  components: { TeamDetail, CreateTeam }
};
</script>

<style>
</style>