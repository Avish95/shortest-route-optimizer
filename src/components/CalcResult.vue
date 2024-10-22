<template>
    <div class="result_wrapper">
        <h3>Result</h3>
        <div class="result_panel">
            <p>From Node Name = "{{ props.result.from }}", To Node Name = "{{ props.result.to }}": {{ props.result.path }}</p>
            <p>Total Distance: {{ props.result.distance }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type Result from '@/types/result'

interface Props {
    result: Result
}

const props = defineProps<Props>()
</script>

<style scoped>
.result_wrapper {
    background-color: var(--neutral-100);
    display: flex;
    flex-direction: column;
    padding: 3rem 1.5rem;
    gap: 2rem;
}

.result_panel {
    max-width: 20rem;
    min-height: 15rem;
    max-height: 18rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>