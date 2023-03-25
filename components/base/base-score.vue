<script setup lang="ts">
const props = defineProps({
   score: {
      type: Number,
      default: 0
   },
}
)
</script>

<template>
   <div class="text-primary -translate-y-1">
      <Icon v-if="score === 0" name="uit:star" />
      <Icon v-if="score === 1" name="uis:star-half-alt" />
      <Icon v-if="score > 1" name="uis:star" />
      <Icon v-if="score < 3" name="uit:star" />
      <Icon v-if="score === 3" name="uis:star-half-alt" />
      <Icon v-if="score > 3" name="uis:star" />
         <Icon v-if="score < 5" name="uit:star" />
      <Icon v-if="score === 5" name="uis:star-half-alt" />
      <Icon v-if="score > 5" name="uis:star" />
         <Icon v-if="score < 7" name="uit:star" />
      <Icon v-if="score === 7" name="uis:star-half-alt" />
      <Icon v-if="score > 7" name="uis:star" />
         <Icon v-if="score < 9" name="uit:star" />
      <Icon v-if="score === 9" name="uis:star-half-alt" />
      <Icon v-if="score > 9" name="uis:star" />
   </div>
</template>
