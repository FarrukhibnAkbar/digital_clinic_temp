<template>
  <v-app-bar>
    <v-app-bar-nav-icon :icon=" !rail ? 'mdi-arrow-left-circle-outline' : 'mdi-arrow-right-circle-outline'" variant="text" @click.stop="$toggleSideBar"></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndUp">
      <v-text-field
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
      ></v-text-field>
    </template>




    <v-btn  @click="toggleTheme()" class="text-none" stacked>
        <v-icon>{{ themeIcon === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
    </v-btn>

    <v-btn  class="text-none" stacked>
      <v-badge color="error" content="2">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
<!--    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>-->

    <v-menu min-width="200px">
      <template v-slot:activator="{ props }">
        <v-btn
            icon
            v-bind="props"
        >

<!--          avatar-->
          <v-avatar
              color="brown"
              class="mx-2"
              size="40"
          >
            <v-img
                alt="John"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
            ></v-img>
          </v-avatar>
        </v-btn>
      </template>

<!--      avatar menu-->
      <v-card>
        <v-card-text>
          <v-row class="my-auto flex-column align-start">
            <v-btn
                variant="text"
                rounded
                prepend-icon="mdi-cog"
            >
              Settings
            </v-btn>
            <v-btn
                variant="text"
                rounded
                prepend-icon="mdi-calendar-month-outline"
            >
              Activity
            </v-btn>
            <v-btn
                variant="text"
                rounded
                prepend-icon="mdi-palette-outline"
            >
              Theme
            </v-btn>
            <v-btn
                variant="text"
                rounded
                prepend-icon="mdi-lifebuoy"
            >
              Support
            </v-btn>

            <v-divider class="my-3"></v-divider>
            <v-btn
                variant="text"
                rounded
                prepend-icon="mdi-logout"
                @click="logOut()"
            >
              Logout
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import {mapState, mapActions} from "vuex";
import { useTheme } from 'vuetify'

export default {
  data () {
    return {
      themeIcon: localStorage.getItem('mode') || 'light' ,
      theme: useTheme(),
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      }
    }
  },

  mounted() {
    this.theme.global.name =  this.themeIcon == 'dark' ? 'dark' : 'light';
  },
  
  methods: {
    ...mapActions(['$toggleSideBar']),

    logOut() {
      localStorage.setItem('auth', false);
      this.$router.replace({ name: 'Login' })
    },

    toggleTheme() {
      this.themeIcon = this.themeIcon == 'dark' ? 'light' : 'dark';
      console.log(this.themeIcon);      

      localStorage.setItem('mode', this.themeIcon);
      console.log(this.theme.global.name, localStorage.getItem('mode'));

      this.theme.global.name =  this.themeIcon == 'dark' ? 'dark' : 'light';
      console.log(this.themeIcon);
    }
  },
  computed: {
    ...mapState({rail: "navBarToggle"}),

    // themeIcon() {
    //   return localStorage.getItem('mode')
    // }
  }

}
</script>

<style>

</style>