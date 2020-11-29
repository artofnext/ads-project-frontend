<template>
  <div>
    <div class="inline-element">
      <label for="uri-input">Endpoint URI</label>
      <input v-model="endpoint" type="text" name="uri-input" id="uri-input" />
    </div>
    <div class="inline-element">
      <label for="uri-input">Upload JAR</label>
      <file-upload :url='url' :thumb-url='thumbUrl' :headers="headers" :btn-label="btn-label" @change="onFileChange"></file-upload>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import FileUpload from 'v-file-upload';
Vue.use(FileUpload);

export default {
  name: "EvaluationModule",
  data () {
    return {
      url: 'http://your-post.url',
      headers: {'access-token': '<your-token>'},
      filesUploaded: [],
      "btn-label": "Upload jar file",
    }
  },
  methods: {
    thumbUrl (file) {
      return file.myThumbUrlProperty
    },
    onFileChange (file) {
      // Handle files like:
      this.fileUploaded = file
    }
  }
};
</script>