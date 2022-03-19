<template>
  <div>
    This is Users Page
    <br/>
    <p>user param : {{userId}}</p>
    <p>name param : {{$route.params.name}}</p>
  </div>
</template>

<script>
export default {
    computed: {
        userId() {
            return this.$route.params.userId
        }
    },
    created() {
        console.log("router", this.$router)
        console.log("route", this.$route)
    }
}
</script>
