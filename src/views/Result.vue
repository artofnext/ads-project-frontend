<template>
  <div class="about">
    <h1>Resultado da otimização de sistemas e serviços</h1>
    <ResponseList msg="Solicitar otimização de sistemas e serviços" />
  </div>
</template>

<script>
// @ is an alias to /src
import ResponseList from "@/components/ResponseList.vue";

export default {
  name: "Request",
  components: {
    ResponseList
  }
};
</script>