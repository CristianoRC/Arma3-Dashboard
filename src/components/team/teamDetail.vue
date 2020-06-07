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
      <v-btn text>Detalhes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    names() {
      if (this.team.persons.length > 1)
        return this.team.persons.reduce((acc, cur) => {
          return `${acc.militaryRank} ${acc.name}, ${cur.militaryRank} ${cur.name}`;
        });

      return `${this.team.persons[0].militaryRank} ${this.team.persons[0].name}`;
    },
    temAvatar() {
      return this.team.name.charAt(0).toUpperCase();
    }
  },
  props: ["team"]
};
</script>

<style>
</style>