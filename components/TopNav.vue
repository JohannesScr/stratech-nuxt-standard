<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Nav 1</nuxt-link></li>
        <li><nuxt-link to="/2">Nav 2</nuxt-link></li>
        <li><nuxt-link to="/3">Nav 3</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e2a33;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>
