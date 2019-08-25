<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <SentimentModal
      :is-dialog-open="dialog"
      :sentiment-data="sentimentData"
      @close="closeDialog()"/>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>
<script>
  import SentimentAnalysis from '../../sentiment-analysis-services/SentimentAnalysisService'
  import SentimentModal from '../sentiment-modal/SentimentModal'
  export default {
    components: {
      SentimentModal
    },
    data: () => ({
      dialog: false,
      valid: true,
      name: '',
      emotion: '',
      emotionColor: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 10) || 'Name must be more than 10 characters',
      ],
      sentimentFeeling: [
          ['Super Mad', "#BB1924"],
          ['Kinda Mad', '#EE6C81'],
          ['eh', '#BABCC5'],
          ['Kinda Happy', '#1ECFD6'],
          ['Happy Happy Happy', '#003D73']
      ],
      checkbox: false,
      sentimentData: {}
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.sentimentData = SentimentAnalysis.fetchSentiment(this.name);
          this.dialog = true;
          this.snackbar = true
        }
      },
      closeDialog () {
          this.dialog = false;
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>