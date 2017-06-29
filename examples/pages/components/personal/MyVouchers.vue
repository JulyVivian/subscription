<template>
  <div>
    <voucherlist :list="voucherlist" mode="show"/>
  </div>
</template>
<script>
  import Voucherlist from '../Voucherlist'
  import { vouchers } from './helper.js'

  export default {
    components: {
      Voucherlist
    },
    data () {
      return {
        voucherlist: vouchers
      }
    }
  }
</script>
<style>
</style>
