<template>
    <main class="random-dog-app">
        <h1>Random Dog</h1>

        <div class="dog-container">
            <img v-if="dogImg" :src="dogImg" alt="random dog image">
            <p v-else>Loading...</p>
        </div>

        <button @click="fetchDog">Get Dog</button>
    </main>
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
        const dogImg = ref(null)
        async function fetchDog () {
            const res = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await res.json()
            dogImg.value = data.message
        }

        fetchDog()

        return {
            dogImg,
            fetchDog
        }
    }
}
</script>

<style>
.random-dog-app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    width: 400px;
    height: 500px;

    display: flex;
    flex-direction: column;

    border: 4px solid #000000;
    margin: 8px;
    box-shadow: 4px 4px 0 #000000;
    padding: 24px;
    gap: 24px;
}

.random-dog-app > h1 {
    padding: 0;
    margin: 0;
}

.random-dog-app > .dog-container {
    width: 100%;
    height: 100%;
    border: 4px solid #000000;
    overflow: hidden;
}

.random-dog-app > .dog-container > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.random-dog-app > button {
    padding: 8px;
    border: 4px solid #000000;
    color: #000000;
    background-color: #ffffff;
    font-size: 24px;
    margin-top: auto;
}

.random-dog-app > button:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #000000;
}
</style>
