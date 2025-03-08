<template>
    <v-card>
      <v-layout>
        <v-app-bar color="primary">
          <v-app-bar-nav-icon variant="text" @click.stop="rail = !rail"></v-app-bar-nav-icon>

          <v-toolbar-title>My files</v-toolbar-title>

          <v-spacer></v-spacer>

          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>

            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>

          <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>

        <v-navigation-drawer
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            theme="dark"
            :rail="rail"
            permanent
        >
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
              title="John Leider"
              subtitle="Lorem "
              nav
          >
<!--            <template v-slot:append>-->
<!--              <v-btn-->
<!--                  icon="mdi-chevron-left"-->
<!--                  variant="text"-->
<!--                  @click.stop="rail = !rail"-->
<!--              ></v-btn>-->
<!--            </template>-->
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
        <v-main style="min-height: 95vh; background: none">
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

