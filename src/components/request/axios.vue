<template>
  <div>
    <div class="title" v-title>this is Axios component</div>
    <div class="desc">此组件只总结Axios的相关知识</div>
    <h5>以下是通过axios请求过来的todos</h5>
    <div class="todos">
      <p v-for="todo in todos" :key="todo.id">{{todo.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Axios",
  data () {
    return {
      todos:[]
    };
  },

  components: {},

  methods: {},

  created() {
    var _this = this;
    _this.$axios.get("http://jsonplaceholder.typicode.com/todos", {
      params: {
        userId: 1
      }
    })
    .then(data => {
      _this.todos = data.data.slice(0,10);
    })
    .catch(err => {
      console.log(err);
    });
  },

  mounted() {}

}

</script>

<style scoped>
</style>