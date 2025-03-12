<template>
    <v-card>
      <v-layout>

<!--        navigation drawer-->
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
                v-for="(item, i) in lists"
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

        <!--        app bar-->
        <v-app-bar image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
          <v-app-bar-nav-icon :icon=" !rail ? 'mdi-arrow-left-circle-outline' : 'mdi-arrow-right-circle-outline'" variant="text" @click.stop="rail = !rail"></v-app-bar-nav-icon>

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

<!--        router view-->
        <v-main class="main" style="min-height: 95vh; ">
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
</template>

<script>
export default {
  name: 'mainPage',
  props: {
    msg: String
  },
  data () {
    return {
      // drawer: true,
      rail: false,
      lists: [
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
      ],
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      }
    }
  },
  methods: {
    logOut() {
      localStorage.setItem('auth', false);
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>

<style>
.v-list-item-title{
  text-align: left;
}

.main{
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

