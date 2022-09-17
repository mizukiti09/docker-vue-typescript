<template>
  <v-card>
    <v-container>
      <v-card-title>Counter</v-card-title>
      <v-divider />

      <v-container>
        <v-avatar v-for="item in count" :key="item" color="primary">
          <span class="white--text headline">{{ item }}</span>
        </v-avatar>
      </v-container>

      <v-divider />

      <v-card-actions>
        <v-btn @click="increment">+</v-btn>
        <!-- クリックされた時にincrementメソッドを実行 -->
        <v-btn @click="decrement">-</v-btn>
        <!-- クリックされた時にdecrementメソッドを実行 -->
        <v-btn text @click="reset">Reset</v-btn>
        <!-- クリックされた時にresetメソッドを実行 -->
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { counterModule } from '../store/modules/counter'

@Component
export default class Counter extends Vue {
  get count() {
    return counterModule.count // Store の count をそのまま返す
  }

  /**
   * カウントをプラスする
   */
  increment() {
    counterModule.increment() // Store の increment メソッドを発火
  }

  /**
   * カウントをマイナスする
   */
  decrement() {
    counterModule.decrement() // Store の decrement メソッドを発火
  }

  /**
   * カウントをリセットする
   */
  reset() {
    counterModule.reset() // Store の reset メソッドを発火
  }
}
</script>

<style lang="scss" scoped></style>
