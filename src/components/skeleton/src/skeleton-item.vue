<template>
    <div
        :class="['skeleton-item', `display-${type}`]"
        :style="{
            width: width,
            height: height,
        }">
        <span>{{ a }}</span>
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'line',
    },
    width: {
        type: [Number, String],
        default: '100%',
    },
    height: {
        type: [Number, String],
        default: 32,
    },
});
const a = 'text';
</script>

<style lang="scss" scoped>
.skeleton-item {
    background-color: gray;
    border-radius: 4px;
}
// .display-line {
// }
</style>
