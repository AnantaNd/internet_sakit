<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <CardSettings />
    </div>
    <div class="w-full lg:w-12/12 px-4">
      <CardTableSetting />
    </div>
  </div>
</template>
<script>
import CardSettings from "@/components/Cards/CardSettings.vue";
import CardTableSetting from "@/components/Cards/CardTableSetting.vue";

export default {
  components: {
    CardSettings,
    CardTableSetting,
  },
};
</script>
