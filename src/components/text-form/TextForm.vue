<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      class="textMessage"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <SentimentModal
      :is-dialog-open="dialog"
      :sentiment-data="sentimentData"
      @close="closeDialog()"
    />

    <v-checkbox
      class="submission-checkbox"
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <div class="buttons-div">
      <v-btn :disabled="!valid" color="success" class="mr-4 validate-button" @click="validate">Validate</v-btn>

      <v-btn color="error" class="mr-4 reset-form-button" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" class="reset-validation-button" @click="resetValidation">Reset Validation</v-btn>
    </div>
  </v-form>
</template>
<script>
import SentimentAnalysis from "../../sentiment-analysis-services/SentimentAnalysisService";
import SentimentModal from "../sentiment-modal/SentimentModal";

export default {
  components: {
    SentimentModal
  },
  data: () => ({
    dialog: false,
    valid: true,
    name: "",
    emotion: "",
    emotionColor: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length >= 10) || "Name must be more than 10 characters"
    ],
    checkbox: false,
    sentimentData: {}
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.sentimentData = SentimentAnalysis.fetchSentiment(this.name);
        this.dialog = true;
        this.reset();
        this.snackbar = true;
      }
    },
    closeDialog() {
      this.dialog = false;
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
