<template>
  <div>
    <h1>
    This is Users Page
    </h1>
    <hr/>
    <p>user param : {{userId}}</p>
    <p>name param : {{$route.params.name}}</p>
    <p>그룹 : {{$route.query.group}}</p>
    <p>카테고리 : {{$route.query.category}}</p>
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
