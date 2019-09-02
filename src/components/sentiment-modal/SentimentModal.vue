<template>
  <div class="text-center">
    <v-dialog v-model="getDialog" width="500">
      <v-card>
        <v-card-title class="headline" :class="sentimetColor" primary-title>{{ titleMessage }}</v-card-title>

        <v-card-text>
          <div class="negative-words">
            <h3>Negative Words:</h3>
            <li v-for="negativeWord in negativeWords">{{ negativeWord }}</li>
          </div>
          <div class="positive-words">
            <h3>Positive Words:</h3>
            <li v-for="positiveWord in positiveWords">{{ positiveWord }}</li>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" class="close-button" text @click="closeDialog()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { posix } from "path";

export default {
  props: {
    isDialogOpen: {
      type: Boolean,
      default: false
    },
    sentimentData: {
      type: Object
    }
  },
  computed: {
    getDialog() {
      console.log(this.sentimentData);
      this.setSentimentData(this.sentimentData);
      return this.isDialogOpen;
    }
  },
  data: () => ({
    negativeWords: [],
    positiveWords: [],
    comparativeScore: 0,
    sentimetColor: "",
    titleMessage: ""
  }),
  methods: {
    setSentimentData(data) {
      if (!data.negative) return;
      const { negative, positive, score, comparative } = data;
      this.negativeWords =
        negative.length < 1 ? ["There were no negative words"] : negative;
      this.positiveWords =
        positive.length < 1 ? ["There were no positive words"] : positive;
      this.comparativeScore = !!comparative === false ? 0 : comparative;
      switch (true) {
        case comparative <= -0.85:
          this.sentimetColor = "bad";
          this.titleMessage = "Very Bad!";
          break;
        case comparative < 0:
          this.sentimetColor = "kindabad";
          this.titleMessage = "A Little Bad";
          break;
        case comparative === 0:
          this.sentimetColor = "indifferent";
          this.titleMessage = "Ehhh";
          break;
        case comparative >= 0.85:
          this.sentimetColor = "good";
          this.titleMessage = "Really Good!";
          break;
        case comparative > 0:
          this.sentimetColor = "kindagood";
          this.titleMessage = "Pretty Good";
          break;
        default:
          this.sentimetColor = "indifferent";
          this.titleMessage = "You got bad Data";
      }
    },
    closeDialog() {
      this.$emit("close");
    },
    setNegativeWords(negWords) {
      return negWords.length < 1 ? ["There were no negative words"] : negWords;
    },
    setPositiveWords(posWords) {
      return posWords.length < 1 ? ["There were no positive words"] : posWords;
    },
    setComparativeScore(compScore) {
      return !!compScore === false ? 0 : compScore;
    },
    setSentimentColor(compScore) {
      switch (compScore) {
        case compScore < -0.5:
          return ["bad", "Very Bad!"];
          break;
        case compScore < -0.5 && compScore < 0:
          return ["kindabad", "A Little Bad"];
          break;
        case compScore === 0:
          return ["indifferent", "Ehhh"];
          break;
        case compScore < 0.5 && compScore > 0:
          return ["kindagood", "Pretty Good"];
          break;
        case compScore >= 0.5:
          return ["good", "Really Good!"];
          break;
        default:
          return ["indifferent", "You got bad Data"];
      }
    }
  }
};
</script>
<style>
.good {
  background-color: #003d73;
  color: white;
}
.kindagood {
  background-color: #1ecfd6;
}
.bad {
  background-color: #bb1924;
  color: white;
}
.kindabad {
  background-color: #ee6c81;
}
.indifferent {
  background-color: #babcc5;
}
</style>
