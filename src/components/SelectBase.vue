<template>
    <div class="select_wrapper">
        <label :for="id">{{ label }}</label>
        <select :name="id" :id="id" v-model="Value" :class="props.invalid ? 'invalid' : ''">
            <option value="" disabled selected hidden>Select</option>
            <option :value="option.label" v-for="option in options" :key="option.key">{{ option.label }}</option>
        </select>
        <small v-if="props.invalid" class="invalid">Please select a valid option </small>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type Option from '@/types/selectOption';

interface Props {
    id: string;
    label: string;
    options: Option[];
    value: string | number | null;
    invalid: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits(['update:value']);

const Value = computed({
    get: () => props.value,
    set: (newValue) => {
        emits('update:value', newValue);
    }
});
</script>



<style scoped>
.select_wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

select {
    min-width: 20rem;
    height: 2.625rem;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--neutral-200);
    color: black;
    background-color: white;
}

/* Apply red border when the invalid class is added */
select.invalid {
    border: 1px solid red;
}

select option {
    color: black;
    background-color: white;
}

.invalid {
    color: red;
}
</style>
