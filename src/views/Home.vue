<template>
  <div class="home">
    <HelloWorld>

    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import {mapState, mapActions} from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState('users', ['users'])
  },
  created(){
    this.loadUsers().then(()=>{
      console.log(this.users);
    });
  },
  methods:{
    ...mapActions('users',{
      loadUsers:'loadUsers'
    })
  }
}
</script>
