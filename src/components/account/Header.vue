<template>
  <div class="header">
    <div class="picker-wrap">
      <button class="btn-prev" @click="setMonth('prev');">이전</button>
      <VueMonthlyPicker
       v-model="selectedMonth"
       @selected="selected">
      </VueMonthlyPicker>
      <button class="btn-next" @click="setMonth('next');">다음</button>
    </div>
  </div>
</template>
<script>
  
  export default{
    name:'Header',
    data(){
      return{
        selectedMonth: this.$moment()
      }
    },
    methods:{
      selected(){
        console.log(this.selectedMonth.format('YYYYMM'));
      },
      setMonth(type){
        this.selectedMonth = this.$moment(this.selectedMonth).add(type == 'next' ? 1 : -1, 'months');
      }
    }
  }
</script>
<style>
  .picker-wrap{
  }
</style>
