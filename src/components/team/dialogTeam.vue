<template>
  <v-card>
    <v-card-title primary-title>EQUIPE {{team.name.toUpperCase()}}</v-card-title>
    <v-divider class="mb-5"></v-divider>
    <v-card-text v-for="(person, index) in team.persons" :key="index">
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{person.militaryRank}}</div>
            <v-list-item-title class="headline mb-1">{{person.name}}</v-list-item-title>
            <v-list-item-subtitle>{{person.function}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="100" color="primary">
            <p class="display-1 white--text">{{person.name.charAt(0).toUpperCase()}}</p>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["team"],
  data: () => ({})
};
</script>

<style>
</style>