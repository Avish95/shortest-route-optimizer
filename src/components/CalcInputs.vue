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
import type Path from '@/types/path'
import type Option from '@/types/selectOption'

const emits = defineEmits(['action', 'clear'])
const nodes = ref<Option[]>([
    { key: 'A', label: 'A' },
    { key: 'B', label: 'B' },
    { key: 'C', label: 'C' },
    { key: 'D', label: 'D' },
    { key: 'E', label: 'E' },
    { key: 'F', label: 'F' },
    { key: 'G', label: 'G' },
    { key: 'H', label: 'H' },
    { key: 'I', label: 'I' },
])

const userInput = reactive<Path>({
    fromnode: '',
    tonode: '',
})
interface FormValidation {
    isFromInValid: boolean
    isToInvalid: boolean
}
const validationErrors = reactive<FormValidation>({
    isFromInValid: false,
    isToInvalid: false

})
const handleClear = (): void => {
    userInput.fromnode = ''
    userInput.tonode = ''
    validationErrors.isFromInValid = false
    validationErrors.isToInvalid = false
    emits('clear')
}
const handleValidation = (): void => {
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
const handleCalculator = (): void => {
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
