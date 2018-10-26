<template>
  <section class="container">
    <div>
      <logo/>
      <h1
        class="title"
        @click="testFn(3)">
        Dashboard gfgf
      </h1>
      <label class="label">Email (1s delay)</label>
      <input
        v-validate="'required|email'"
        :class="{'input': true, 'is-danger': errors.has('email') }"
        name="email"
        data-vv-delay="5000"
        type="text"
        placeholder="Email">

      <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'dashboard',
  components: {
    Logo
  },
  methods: {
    testFn(a) {
      const b = 5
      let c = 10

      return console.log(a + b)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
