<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            theme="dark"
            v-model="drawer"
            :rail="rail"
            permanent
        >
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
              title="John Leider"
              subtitle="Lorem "
              nav
          >
            <template v-slot:append>
              <v-btn
                  icon="mdi-chevron-left"
                  variant="text"
                  @click.stop="rail = !rail"
              ></v-btn>
            </template>
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
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn block
                  prepend-icon="mdi mdi-logout">
                <span v-show="!rail">Logout</span>
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        <v-main style="min-height: 95vh; background: green">
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
      drawer: true,
      rail: false,
      lists: [
        {icon: 'mdi-home-city', text: 'Home', link: '/'},
        {icon: "mdi-account", text: "Patients", link: '/patients'},
        {icon: "mdi-account-group-outline", text: "Users", link: '/users'}
      ]
    }
  },
}
</script>

<style>
.v-list-item-title{
  text-align: left;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

