<template>
  <v-navigation-drawer
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      theme="dark"
      :rail="rail"
      permanent
      class="py-2"
  >
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        subtitle="Lorem "
        nav
    >
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          :value="item"
          :to="item.link"
          link
      >

        <v-divider
            class="border-opacity-100"
            color="danger"
            v-if="item.divider"
        ></v-divider>

        <v-row align="center">
          <v-col >
            <v-icon :icon="item.icon"></v-icon>
          </v-col>

          <v-col
              cols="9"
              v-show="!rail"
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-col>
        </v-row>

      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn
            block
            prepend-icon="mdi mdi-logout"
            @click="logOut()"
        >
          <span v-show="!rail">Logout</span>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapState} from "vuex";

export default {
  data () {
    return {
      menus: [
        {icon: 'mdi-monitor-dashboard', colour: 'red', text: 'Dashboard', link: '/dashboard'},
        {icon: 'mdi-clipboard-account', text: 'Patient registration'},
        {icon: "mdi-account", text: "Patients", link: '/patients'},
        {icon: "mdi-calendar-multiple", text: "Appointment scheduling"},
        {icon: "mdi-stethoscope", text: "OPD"},
        {icon: "mdi-needle", text: "IPD"},
        {icon: "mdi-seat-individual-suite", text: "Bed status"},
        {icon: "mdi-flask-outline", text: "Laboratory pathology"},
        {icon: "mdi-cash-multiple", text: "Billing & invoicing"},
        {icon: "mdi-doctor", text: "Doctors", link: '/users', divider: true }
      ]
    }
  },
  methods: {
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
.v-list-item-title{
  text-align: left;
}

</style>