<script setup lang="ts">

interface CardData {
    icon?: string;
    iconTitle?: string;
    title?: string;
    cardurl?: string;
    description: string;
}   

const props = defineProps({
    cards: {
        type: Array as () => CardData[],
        required: true
    }
})

</script>

<template>

    <div class="cards">
        
        <a v-for="(card, index) in cards.filter(card => card.cardurl)" :key="index" 
            :href="card.cardurl" target="_blank" rel="noopener noreferrer" class="card">

            <div v-if="card.icon" class="card-icon-content">
                <img :src="card.icon" alt="card icon" class="card-icon">
                <span v-if="card.iconTitle" class="card-icon-title">{{card.iconTitle}}</span>
            </div>
            <h3 v-if="card.title" class="card-title">
                {{card.title}}
            </h3>
            <p class="card-description">
                {{card.description}}
            </p>

        </a>

        
        <div v-for="(card, index) in cards.filter(card => !card.cardurl)" :key="index" class="card">

            <div v-if="card.icon" class="card-icon-content">
                <img :src="card.icon" alt="card icon" class="card-icon">
                <span v-if="card.iconTitle" class="card-icon-title">{{card.iconTitle}}</span>
            </div>
            <h3 v-if="card.title" class="card-title">
                {{card.title}}
            </h3>
            <p class="card-description">
                {{card.description}}
            </p>

        </div>

    </div>

</template>

<style scoped>

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    width: 100%;
}

@media (max-width: 768px) {
    .cards {
        gap: 1rem;
    }
}

a {
    text-decoration: none;
    color: inherit;
    display: block;
}
a .card {
    cursor: pointer;
}

.card {
    flex: 1 1 300px;
    max-width: 400px;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
    .card {
        flex: 1 1 150px;
        max-width: 200px;
    }
}

.card-icon-content {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.card-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.card-icon-title {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
}

.card-description {
    color: #6b7280;
    line-height: 1.6;
}

</style>