<template>
    <div class="heading_container">
        <h1>Dijiktra’s Algorithm Calculator</h1>
        <p class="hero_text">Discovering Optimal Routes Through Nodes Using Dijkstra's Method</p>
    </div>
</template>

<style scoped>
.heading_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
}

.hero_text {
    color: white;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 400;
}

@media (max-width: 1200px) {
    .heading_container {
        width: 100vw;
        padding: 0 1rem;
        gap: 0
    }

    .hero_text {
        font-size: 0.5rem;
        line-height: 1.5rem;
        text-align: left;
    }
}
</style>