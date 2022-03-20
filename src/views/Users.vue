<template>
  <v-layout
    row wrap pt-5 text-xs-center>
    <v-flex xs12>
      <h1>Users</h1>
      <p>유저를 검색해 주세요.</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        v-model="userId"
        label='유저번호를 입력하세요'>
      </v-text-field>
      <v-btn @click="$router.push({
        name: 'users-detail', 
        params:{
          id:userId
       }
      })">검색</v-btn>
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
    <!-- <p>user param : {{userId}}</p>
    <p>name param : {{$route.params.name}}</p>
    <p>그룹 : {{$route.query.group}}</p>
    <p>카테고리 : {{$route.query.category}}</p> -->
  </v-layout>
</template>

<script>
export default {
    data() {
      return {
        userId: null
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('before Enter')
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('before Leave')
      next()
    },
    computed: {

    },
    created() {
      console.log('created')
        // console.log("router", this.$router)
        // console.log("route", this.$route)
    },
    destroyed() {
      console.log('destroyed')
    }
}
</script>
