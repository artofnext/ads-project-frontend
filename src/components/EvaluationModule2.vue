<template>
  <div class="inline-element">
    <p class="center">Select Evaluation method</p>
    <div>
      <div class="radio inline" :class="{ selected: selectedOption === 'uri' }">
        <label for="uri">
          <input type="radio" id="uri" value="uri" v-model="selectedOption" />
          Endpoint URI
        </label>
        <input
          :disabled="selectedOption !== 'uri'"
          v-model="endpoint"
          type="text"
          name="uri-input"
          id="uri-input"
        />
      </div>
      <div class="radio inline" :class="{ selected: selectedOption === 'jar' }">
        <label for="jar">
          <input type="radio" id="jar" value="jar" v-model="selectedOption" />
          Upload JAR
        </label>
        <div :class="{ hidden: selectedOption !== 'jar' }" class="">
          <input
            class="inputfile"
            type="file"
            id="file"
            ref="file"
            accept=".jar"
            v-on:change="handleFileUpload"
          />
          <button class="button" v-on:click="submitFile">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//TODO move all axios requests to store
import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);


export default {
  name: "EvaluationModule",
  data() {
    return {
      selectedOption: "uri",
      file: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      let self = this
      let formData = new FormData();
      formData.append("file", this.file);
//TODO move all axios requests to store
      axios
        .post("/single-file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          if (this.$store.devMode) console.log("SUCCESS!!");
          self.jarUploaded = true;

        })
        .catch(function () {
          if (this.$store.devMode) console.log("FAILURE!!");
          self.jarUploaded = false;
        });
    },

    toggleBtn() {
      if (this.selectedOption == "uri") {
        this.selectedOption = "jar";
      } else {
        this.selectedOption = "uri";
      }
    },
  },
  computed: {
    jarUploaded: {
      get() {
        return this.$store.state.isJarUploaded;
      },
      set(value) {
        this.$store.commit('setJarUploaded', value);
      },
    },
    endpoint: {
      get() {
        return this.$store.state.endpoint;
      },
      set(value) {
        this.$store.commit("updateEndpoint", value);
        if (this.$store.devMode) console.log(this.$store.state.endpoint);
      },
    },
  },
};
</script>

<style scoped lang="scss">

.inline {
  align-items: center;

  .inputfile + label {
    font-size: 1em;
    color: #222222;
    background-color: white;
    display: inline-block;
    border: solid 1px #222222;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .inputfile:focus + label,
  .inputfile + label:hover {
    box-shadow: 0 0 5px #222222;
  }

  .button {
    margin: 0 10px;
    padding: 5px 10px;
    background-color: white;
    color: #222222;
    border: solid 1px #222222;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 0 5px #222222;
    }

    &:active {
      background-color: #222222;
      color: white;
    }
  }
}

.hidden {
  display: none;
}

.radio {
  margin: 20px 0;
}

.center {
  text-align: center;
}
</style>