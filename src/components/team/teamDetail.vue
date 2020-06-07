<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Equipe</div>
        <v-list-item-title class="headline mb-1">{{team.name}}</v-list-item-title>
        <v-list-item-subtitle>{{names}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="100" color="primary">
        <p class="display-1 white--text">{{temAvatar}}</p>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="dialog = true" text>Detalhes</v-btn>
    </v-card-actions>

    <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
      <dialog-team :team="team"></dialog-team>
    </v-dialog>
  </v-card>
</template>

<script>
import dialogTeam from "./dialogTeam";

export default {
  components: {
    dialogTeam
  },
  computed: {
    names() {
      if (this.team.persons.length > 1)
        return this.team.persons.reduce((acc, cur) => {
          if (typeof acc === "string")
            return `${acc}, ${cur.name}`;
          return `${cur.name}`;
        });

      return `${this.team.persons[0].militaryRank} ${this.team.persons[0].name}`;
    },
    temAvatar() {
      return this.team.name.charAt(0).toUpperCase();
    }
  },
  data: () => ({ dialog: false }),
  props: ["team"]
};
</script>

<style>
</style>