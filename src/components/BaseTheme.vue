<template>
  <v-app id="inspire">

    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Are They Mad?</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-card max-width="90%" class="mx-auto">
        <v-card-title>Please Enter Message Below</v-card-title>
        <v-card-text>
          <TextForm />
        </v-card-text>
      </v-card>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import TextForm from './text-form/TextForm';

export default {
  components: {
    TextForm,
  },
  props: {
    source: String,
  },
  data: () => ({
  }),
};
</script>
