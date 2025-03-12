<template>
    <v-card>
      <v-layout>

        <!--        navigation drawer-->
        <navigationDrawer/>

        <!--        app bar-->
        <appBar/>

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
import appBar from "@/components/AppBar.vue";
import navigationDrawer from "@/components/NavigationDrawer.vue";

export default {
  components: {appBar, navigationDrawer},
  name: 'mainPage',
  props: {
    msg: String
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

