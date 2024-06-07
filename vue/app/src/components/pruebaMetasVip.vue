<template>
  <div class="principal">
    <h1>{{ metaData }}</h1>
    <h3>first contact</h3>
    <div>{{ data1 }}</div>
    <ul>
      <li>{{ "hola" }}</li>
      <li>{{ 'hi' }}</li>
    </ul>

  </div>
</template>

<script>
import { ref } from 'vue';
import { dataRequest } from '../requests/variablesRequest.js'
export default {
  name: 'pruebaMetasVip',
  props: {
    metaData: {}
  }
}

const data1 = ref({});
data1.value = dataRequest.dataGoalsToBeVip

console.log(data1.value)


</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>