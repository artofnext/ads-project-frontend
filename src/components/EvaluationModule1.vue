<template>
  <div class="inline-element">
    <div class="center">Evaluation method</div>
    <div>
      <div class="radio inline" :class="{ selected: selectedOption === 'uri' }">
        <label for="uri">
          <input type="radio" id="uri" value="uri" v-model="selectedOption" />
          Endpoint URI
        </label>
        <input :disabled="selectedOption !== 'uri'" v-model="endpoint" type="text" name="uri-input" id="uri-input" />
      </div>
      <div class="radio inline" :class="{ selected: selectedOption === 'jar' }">
        <label for="jar">
          <input type="radio" id="jar" value="jar" v-model="selectedOption" />
          Upload JAR
        </label>
        <file-upload
          :class="{ hidden: selectedOption !== 'jar' }"
          class="toggle-button"
          :url="url"
          :thumb-url="thumbUrl"
          :headers="headers"
          :accept="accept"
          @change="onFileChange"
        >
        </file-upload>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import FileUpload from "v-file-upload";
Vue.use(FileUpload);

export default {
  name: "EvaluationModule",
  data() {
    return {
      url: "http://your-post.url",
      headers: { "access-token": "<your-token>" },
      filesUploaded: [],
      accept: ".jar",
      selectedOption: "uri",
    };
  },
  methods: {
    thumbUrl(file) {
      return file.myThumbUrlProperty;
    },
    onFileChange(file) {
      // Handle files like:
      this.fileUploaded = file;
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
    endpoint: {
      get() {
        return this.$store.state.endpoint;
      },
      set(value) {
        this.$store.commit("updateEndpoint", value);
        console.log(this.$store.state.endpoint);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.inline {
  // display: flex;
  // justify-content: space-between;
  align-items: center;

  &-element {
    // margin: 10px;
  }

  .toggle-button {
    width: 100px;
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

<style lang="scss">
.file-upload-icon {
  display: none !important;
}

.file-upload-input {
}

.file-upload .input-wrapper {
  text-align: center;
  position: relative;
  background: none !important;
  height: 20px !important;
}

.file-upload {
  display: inline-block;
}

.file-upload .input-wrapper .file-upload-label {
  width: 100%;
  font-size: 1em !important;
  color: #222222 !important;
  display: inline-block;
  padding: 0 !important;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  line-height: 1em !important;
}

.file-upload-label {
  // display: none !important;
}
</style>