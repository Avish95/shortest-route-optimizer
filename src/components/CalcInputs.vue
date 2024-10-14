<template>
    <div class="Input_wrapper">
        <h2>Select Path</h2>
        <SelectBase v-model:value="userInput.fromnode" id="select_from" label="From Node" :options="nodes"
            :invalid="validationErrors.isFromInValid" />
        <SelectBase v-model:value="userInput.tonode" id="select_from" label="To Node" :options="nodes"
            :invalid="validationErrors.isToInvalid" />
        <div class="buttons_wrapper">
            <button class="clear_btn" @click="handleClear">Clear</button>
            <button class="primary_btn" @click="handleCalculator">
                Calculate
                <i>
                    <IconCalculator />
                </i>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import SelectBase from './SelectBase.vue'
import IconCalculator from './icons/IconCalculator.vue'
import { ref, reactive } from 'vue'
import Path from '@/types/path'
import Option from '@/types/selectOption'

const emits = defineEmits(['action', 'clear'])
const nodes = ref<Option[]>([
    { key: 1, label: 'A' },
    { key: 2, label: 'B' },
    { key: 3, label: 'C' },
    { key: 4, label: 'D' },
    { key: 5, label: 'E' },
    { key: 6, label: 'F' },
    { key: 7, label: 'G' },
    { key: 8, label: 'H' },
])

const userInput = reactive<Path>({
    fromnode: '',
    tonode: '',
})

const validationErrors = reactive({
    isFromInValid: false,
    isToInvalid: false

})
const handleClear = () => {
    userInput.fromnode = ''
    userInput.tonode = ''
    validationErrors.isFromInValid = false
    validationErrors.isToInvalid = false
    emits('clear')
}
const handleValidation = () => {
    validationErrors.isFromInValid = false
    validationErrors.isToInvalid = false

    if (userInput.fromnode ==
        userInput.tonode) {
        validationErrors.isFromInValid = true
        validationErrors.isToInvalid = true
    } if (!userInput.fromnode) {
        validationErrors.isFromInValid = true
    }
    if (!userInput.tonode) {
        validationErrors.isToInvalid = true
    }
}
const handleCalculator = () => {
    handleValidation();
    if (!validationErrors.isFromInValid &&
        !validationErrors.isToInvalid) {
        emits('action', userInput)
    }
}
</script>

<style scoped>
.Input_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
}

.buttons_wrapper {
    display: flex;
    gap: 1rem;
}

.clear_btn {
    background-color: transparent;
    padding: 0.75rem 1rem;
    border: 1px solid var(--secondary-100);
    border-radius: 0.5rem;
    color: var(--secondary-100);
    font-size: 1rem;
    font-family: 'Poppins';
    line-height: 1.125rem;
}

.primary_btn {
    background-color: var(--secondary-100);
    padding: 0.75rem 1rem;
    border: 1px solid var(--secondary-100);
    border-radius: 0.5rem;
    color: white;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
    font-family: 'Poppins';
    line-height: 1.125rem;
}

button:hover {
    transform: scale(1.05);
    cursor: pointer;
}
</style>
