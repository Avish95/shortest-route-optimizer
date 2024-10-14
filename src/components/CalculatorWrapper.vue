<template>
    <div class="loadingWraper" v-if="loading">
        <IconLoading style="width: 5rem;" />
        <span class="loadingText">Calculating the Shortest Path...</span>
    </div>
    <div v-else class="calc_wrapper">
        <div class="">
            <CalculatorInputs @action="handleAction" @clear="result = null" />
        </div>

        <CalcResult v-if="result !== null" :result="result" />
        <div v-else class="image_wrapper">
            <img :src="image" alt="graphical image of a sitting man">
        </div>
    </div>


</template>
<script setup lang="ts">
import image from '@/assets/calcImage.png'
import CalculatorInputs from './CalcInputs.vue'
import CalcResult from './CalcResult.vue'
import type Result from '@/types/result'
import IconLoading from './icons/IconLoading.vue'
import { ShortestPath } from '@/services/calculator'
import { ref } from 'vue'

const handleAction = async (event) => {
    loading.value = true
    ShortestPath(event).then((res) => {
        result.value = res

    }).finally(() => {
        loading.value = false
    })

}
const loading = ref(false)
const result = ref<Result | null>(null)
</script>
<style scoped>
.calc_wrapper {
    background-color: white;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
}

.image_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loadingWraper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
}

.loadingText {
    color: var(--primary-200);
    font-family: 'Poppins';
    font-size: 2rem;
    text-align: center;
}

@media (max-width: 900px) {
    .calc_wrapper {
        display: flex;
        flex-direction: column;
    }

    
}
</style>