<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 13:42:54
 * @LastEditors: 舌红
 * @LastEditTime: 2024-10-18 14:18:03
-->
<template>
  <div
    class="confirm-mask update-confirm-loader"
    :style="{ zIndex }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ConfirmMask',
  props: {
    zIndex: {
      type: Number,
      default: 2001
    }
  }
}
</script>

