<template>
  <div class="text-center">
    <v-dialog v-model="getDialog" width="500">

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

        <v-card-text>Yoo</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" text @click="closeDialog()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { posix } from 'path';
export default {
  props: {
    isDialogOpen: {
      type: Boolean,
      default: false
    },
    sentimentData: {
        type: Object
    },
    textMessage: {
        type: String
    }
  },
  computed: {
      getDialog () {
          return this.isDialogOpen
      }
  },
  data: () => ({
      negativeWords = [],
      positiveWords = [],
      score = 0,
      comparativeScore = 0
  }),
  methods: {
      closeDialog() {
          this.$emit('close');
      },
      sentimentData(data) {
          const {negative, postive, score, comparitive} = data
          this.negativeWords = negative;
          this.positiveWords = postive;
          this.score = score;
          this.comparativeScore = comparitive;
      }
  }
};
</script>
