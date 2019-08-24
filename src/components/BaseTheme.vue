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
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

              <v-card-text>
                  {{textMessage}}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
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
import TextForm from "./text-form/TextForm";
export default {
  components: {
    TextForm
  },
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    textMessage: 'Bro Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })
};
</script>