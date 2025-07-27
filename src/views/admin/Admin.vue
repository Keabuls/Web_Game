<template>
  <Header></Header>
  <div class="admin-container">
    <div class="mb-5 p-2 border border-dark position-relative">
      <form @submit.prevent="handleSubmit">
        <div class="container-fluid">
          <h2>OYUNLAR</h2>
          <hr />
          <Games @game-selected="handleGameSelection"></Games>
          <br />
          <h2>ÖDÜLLER</h2>
          <hr />
          <Prizes @prize-selected="handlePrizeSelection"></Prizes>
        </div>
        <button 
          type="submit" 
          class="btn btn-secondary position-absolute bottom-0 end-0 m-2"
          :disabled="!selectedGame || !selectedPrize"
        >
          Kaydet
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Games from '@/components/Games/games.vue'
import Prizes from '@/components/Prizes/prizes.vue'
import Header from '@/components/layout/Header.vue'

// Seçilen game ve prize için ref'ler
const selectedGame = ref(null)
const selectedPrize = ref(null)

const Result = reactive({
  game: null,
  prize: null
})

// Games componentinden gelen seçim
const handleGameSelection = (game) => {
  selectedGame.value = game
  Result.game = game
}

// Prizes componentinden gelen seçim
const handlePrizeSelection = (prize) => {
  selectedPrize.value = prize
  Result.prize = prize
}

const handleSubmit = () => {
  if (selectedGame.value && selectedPrize.value) {
    console.log("Oyun: ",Result.game.name,"|Ödül: ", Result.prize.id)

  }
}
</script>

<style scoped>
.admin-container {
  padding: 20px;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #000;
}

.btn-warning:hover {
  background-color: #e0a800;
  border-color: #d39e00;
}

h2 {
  color: #333;
  font-weight: 600;
}

.badge {
  font-size: 0.75em;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>