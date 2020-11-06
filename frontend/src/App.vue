<template>
    <v-app app>

      <v-navigation-drawer app right v-model="isVisible" disable-resize-watcher>
        <v-list>
          <v-list-group v-for="ni in navitems" :key="ni.title" :prepend-icon="ni.icon" no-action>
            <template #activator>
              <v-list-item-content>
                <v-list-item-title>{{ ni.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="mi in ni.menuitems" :key="mi.title" :to="mi.action">
              <v-list-item-content>
                <v-list-item-title>{{ mi.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>


      <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-light">Playground</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-menu v-for="ni in navitems" :key="ni.title" offset-y>
            <template #activator="{ on }">
              <v-btn text v-on="on">
                <span class="mr-2">{{ ni.title }}</span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="mi in ni.menuitems" :key="mi.title" :to="mi.action">
                <v-list-item-title>{{ mi.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>

        <v-app-bar-nav-icon @click.stop="swap" class="hidden-md-and-up"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
    </v-app>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data() {
    return {
      isVisible: false,
      navitems: [
        {
          title: 'My Examples',
          icon: 'mdi-account-box',
          menuitems: [
            {
              title: 'Benutzerlist (REST-API - then-syntax)',
              action: '/users1',
            },
            {
              title: 'Benutzerlist (REST-API - async/await-syntax)',
              action: '/users2',
            },
            {
              title: 'Benutzerlist (REST-API - error handling)',
              action: '/users3',
            },
          ],
        },
        {
          title: 'Basic Examples',
          icon: 'mdi-file-code-outline',
          menuitems: [
            {
              title: 'Hello World',
              action: '/',
            },
            {
              title: 'Hello Vuetify',
              action: '/hv',
            },
            {
              title: 'Carousel',
              action: '/car',
            },
            {
              title: 'Counter',
              action: '/counter',
            },
          ],
        },
      ],
    };
  },
  methods: {
    swap() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
