<template>
  <div class="row">
    <div
      v-for="game in games"
      :key="game.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3"
    >
      <div class="card h-100 border">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="card-title mb-0">{{ game.name }}</h5>
            <button
              @click="addToFavourite(game.id)"
              class="btn btn-sm btn-outline-secondary rounded-pill"
              :class="{ 'btn-warning': game.isFavourite }"

            >
              <i class="bi bi-star-fill"></i>
            </button>
          </div>
          <p class="card-text text-truncate mb-3">{{ game.description }}</p>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="fw-bold me-2 fs-6 text-muted">
              <span class="text-success">{{ game.category || 'Genel' }}</span>
            </div>
            <small class="text-muted">{{ game.createdAt }}</small>
          </div>
          <div class="d-flex flex-wrap gap-2">
            <button
              class="btn btn-success fs-6 py-2 px-4 btn-sm"
              data-bs-toggle="modal"
              :data-bs-target="`#productDetailModel-${game.id}`"
            >
              <i class="bi bi-card-list"></i> View Details
            </button>
          </div>
        </div>
      </div>
        <gameDetail :product="game"></gameDetail>
    </div>
    <!-- Diğer componentler -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useSwal } from '@/utility/useSwal.js'
const { showSuccess, showError, showConfirm } = useSwal()
import gameDetail from './gameDetail.vue'

// Oyun verileri
const games = reactive([
  {
    id: 1,
    name: 'Futbol Manager',
    description: 'Futbol takımını ',
    category: 'Spor',
    createdAt: '2024-01-15',
    isFavourite: "",
    winRate: 0.75,
    playTime: 120,
  },
  {
    id: 2,
    name: 'Strateji Savaşı',
    description: 'Ordunu kurarak düşmanları yen',
    category: 'Strateji',
    createdAt: '2024-01-10',
    isFavourite: "",
        winRate: 0.75,
    playTime: 120,
  },
  {
    id: 3,
    name: 'Puzzle Master',
    description: 'Zeka oyunları ile beynini geliştir',
    category: 'Puzzle',
    createdAt: '2024-01-20',
    isFavourite: true,
        winRate: 0.75,
    playTime: 120,
  },
  {
    id: 4,
    name: 'Yarış Heyecanı',
    description: 'Hızlı arabalarla yarışa katıl',
    category: 'Yarış',
    createdAt: '2024-01-12',
    isFavourite: false,
        winRate: 0.75,
    playTime: 120,
  },
  {
    id: 5,
    name: 'Macera Adası',
    description: 'Gizemli adada hazineleri keşfet',
    category: 'Macera',
    createdAt: '2024-01-18',
    isFavourite: false,
        winRate: 0.75,
    playTime: 120,
  },
  {
    id: 6,
    name: 'Kart Ustası',
    description: 'Kartlarla rakiplerini alt et',
    category: 'Kart',
    createdAt: '2024-01-22',
    isFavourite: false,
        winRate: 0.75,
    playTime: 120,
  },
])

// Favorilere ekleme fonksiyonu
const addToFavourite = (gameId) => {
  const game = games.find((g) => g.id === gameId)
  console.log(game)
  if (game) {
    game.isFavourite = !game.isFavourite

    if (game.isFavourite) {
      console.log(`${game.name} favorilere eklendi!`)
      // Burada API çağrısı yapabilirsin
      // await addGameToFavourites(gameId)

      // Toast notification gösterebilirsin
      showSuccess(`${game.name} favorilere eklendi!`)
    } else {
      showSuccess(`${game.name} favorilerden çıkarıldı!`)
      // await removeGameFromFavourites(gameId)
    }
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

.card {
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
</style>
