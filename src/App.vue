<template>
    <div id="q-app">
        <q-card class="fixed-center user-card">
            <div class="fixed-center text-center">
            <q-avatar size="150px" v-show="avatar_url && avatar_url.length > 0">
                <img :src="avatar_url"/>
            </q-avatar>
                <div class="name">{{ username }}</div>
            </div>
        </q-card>
    </div>
</template>

<script>
// import exampleStoreModule from './store/example'
export default {
  name: 'App',
  // our hook here
  async preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
    // Return a Promise if you are running an async job
    return store.dispatch('example/loadData')
  },
  computed: {
    username () {
      return this.$store.state.example.username
    },
    avatar_url () {
      return this.$store.state.example.avatar_url
    }
  }
  // ,
  // mounted () {
  //   // Preserve the previous state if it was injected from the server
  //   this.$store.registerModule('user', userStoreModule, { preserveState: true })
  // },
  // // IMPORTANT: avoid duplicate module registration on the client
  // // when the route is visited multiple times.
  // destroyed () {
  //   this.$store.unregisterModule('user')
  // }
}
</script>

<style lang="styl">
.user-card
  width 300px
  height 300px
  padding 30px
  .name
    font-size 40px
</style>
