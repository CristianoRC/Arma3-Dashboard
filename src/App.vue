<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h1 class="title ml-5">Controle de Combate</h1>

      <v-spacer></v-spacer>

      <v-btn href="https://www.facebook.com/14bfnclan" target="_blank" text>
        <span class="mr-2">Saiba mais</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-navigation-drawer v-model="drawer" app bottom temporary>
        <v-list nav dense>
          <v-list-item-group v-for="(page,index) in pages" :key="index">
            <v-list-item @click="to(page.name)">
              <v-list-item-title>
                <v-icon class="mr-5">{{page.icon}}</v-icon>
                {{page.title}}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: false,
    pages: [
      { title: "Home", name: "Home", icon: "mdi-home" },
      { title: "Anotações", name: "Anotations", icon: "mdi-grease-pencil" }
    ]
  }),
  methods: {
    to(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>
