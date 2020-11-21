<template>
  <div>
    <Overlay v-if="avaitStatus"/>
    <ResponseList msg="Resultado da otimização de sistemas e serviços" />
  </div>
</template>

<script>
// @ is an alias to /src
import ResponseList from "@/components/ResponseList.vue";
import Overlay from "@/components/Overlay.vue";

export default {
  name: "Request",
  components: {
    ResponseList,
    Overlay,
  },
  computed: {
      avaitStatus: {
        get () {
          return this.$store.state.avaitStatus;
        }
    }
  }
};
</script>