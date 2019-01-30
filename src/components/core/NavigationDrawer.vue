<template>
  <v-navigation-drawer
    :value="togglePassed" fixed app @click="toggleNavigation" >
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <img src="@/assets/logo.png" width="36px" />
      </router-link>
      <router-link :to="{ name: 'Dashboard' }" class="text">
         Vue Admin Template
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('Dashboard', 1)">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >Dashboard</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Calendar', 2)">
        <v-list-tile-action>
          <v-icon>calendar_today</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Calendar</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Mailbox', 3)">
        <v-list-tile-action>
          <v-icon>inbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">Mailbox</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="pageview">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Widgets</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Social', 4)">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">Social</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Chart', 5)">
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Charts</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Media', 6)">
          <v-list-tile-action>
            <v-icon>perm_media</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">Media</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Authorization</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">403</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '404' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">404</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '500' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">500</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">Login</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
      prepend-icon="account_circle">
      <v-list-tile slot="activator">
        <v-list-tile-title class="item-title">Users</v-list-tile-title>
      </v-list-tile>
          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i">
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
          </v-list-tile>
    </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },
  computed: {
    togglePassed() {
      console.log('clearToggle');
      let vm = this;
      console.log(`toggle:${vm.toggle}`); 
      return vm.toggle;
      // if (vm.toggle){
      //   return false;
      // }
      // else{
      //   return true;
      // }
    }
  },

  data() {
    return {
      selectedIndex: 1,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ]
    }
  },

  methods: {
    toggleNavigation() {
      const vm = this;

      vm.$emit('toggleNavigation');
      vm.$emit('toggleNavigationBar');
      console.log('toggleNavigation');
    },

    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }

  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
  .v-navigation-drawer,
  aside.v-navigation-drawer {
    height: unset !important;
    max-height: unset !important;
  }
</style>
