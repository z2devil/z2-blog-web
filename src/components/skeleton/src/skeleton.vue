<template>
    <div class="skeleton">
        <template v-if="!content">
            <div>
                {{ content }}
            </div>
        </template>
        <template v-else>
            <skeleton-item v-for="i in 5" :key="i" />
        </template>
    </div>
</template>

<script setup>
import skeletonItem from './skeleton-item';
defineProps({
    content: {
        type: String,
        required: false,
        default: 'normal',
    },
});
</script>

<style lang="scss" scoped></style>
