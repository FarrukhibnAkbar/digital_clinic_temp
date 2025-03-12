<template>
  <v-app-bar image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
<!--    <v-app-bar-nav-icon :icon=" !rail ? 'mdi-arrow-left-circle-outline' : 'mdi-arrow-right-circle-outline'" variant="text" @click.stop="rail = !rail"></v-app-bar-nav-icon>-->
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


    <v-btn class="text-none" stacked>
      <v-badge color="error" content="2">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>

    <v-menu min-width="200px">
      <template v-slot:activator="{ props }">
        <v-btn
            icon
            v-bind="props"
        >
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
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar
                color="brown"
            >
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn
                variant="text"
                rounded
            >
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn
                variant="text"
                rounded
                prepend-icon="mdi mdi-logout"
                @click="logOut()"
            >
              Logout
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  data () {
    return {
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      }
    }
  },
  methods: {
    ...mapActions(['$toggleSideBar']),
    logOut() {
      localStorage.setItem('auth', false);
      this.$router.replace({ name: 'Login' })
    }
  },
  computed: {
    ...mapState({rail: "navBarToggle"})
  }

}
</script>

<style>

</style>