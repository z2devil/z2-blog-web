<template>
    <div class="back-page">
        <div class="container">
            <template v-if="idx === 0">
                <keep-alive>
                    <Com.A />
                </keep-alive>
            </template>
            <template v-else>
                <keep-alive>
                    <Com.B />
                </keep-alive>
            </template>
            <!-- <component :is="coms[idx].com"></component> -->
            <z-button @click="changeIdx">切换</z-button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as Com from './com';

// let coms = [
//     {
//         name: 'a',
//         com: Com.A
//     },
//     {
//         name: 'b',
//         com: Com.B
//     }
// ];

const idx = ref(0);

const changeIdx = function () {
    idx.value = idx.value === 0 ? 1 : 0;
};

onMounted(() => {
    console.log(123);
});
</script>

<style lang="scss" scoped>
* {
    // cursor: none!important;
}
.container {
    width: $con_width;
    padding-top: $nav_height;
    margin: 0 auto;
}
</style>
