<template>
  <div class="admin-container">

    <div class="container-fluid">
      <h2>OYUNLAR</h2> <hr>
    <Games></Games>
    <br>
      <h2>ÖDÜLLER</h2> <hr>
      
    </div>
</div>

    <!-- Diğer componentler -->

</template>

<script setup>
import { ref, reactive } from 'vue'
import Games from '@/components/Games/games.vue'
import { useSwal } from '@/utility/useSwal.js'
const { showSuccess, showError, showConfirm } = useSwal()

// Oyun verileri
const games = reactive([
  { 
    id: 1, 
    name: 'Futbol Manager', 
    description: 'Futbol takımını ',
    category: 'Spor',
    createdAt: '2024-01-15',
    isFavourite: true
  },
  { 
    id: 2, 
    name: 'Strateji Savaşı', 
    description: 'Ordunu kurarak düşmanları yen',
    category: 'Strateji',
    createdAt: '2024-01-10',
    isFavourite: false
  },
  { 
    id: 3, 
    name: 'Puzzle Master', 
    description: 'Zeka oyunları ile beynini geliştir',
    category: 'Puzzle',
    createdAt: '2024-01-20',
    isFavourite: true
  },
  { 
    id: 4, 
    name: 'Yarış Heyecanı', 
    description: 'Hızlı arabalarla yarışa katıl',
    category: 'Yarış',
    createdAt: '2024-01-12',
    isFavourite: false
  },
  { 
    id: 5, 
    name: 'Macera Adası', 
    description: 'Gizemli adada hazineleri keşfet',
    category: 'Macera',
    createdAt: '2024-01-18',
    isFavourite: false
  },
  { 
    id: 6, 
    name: 'Kart Ustası', 
    description: 'Kartlarla rakiplerini alt et',
    category: 'Kart',
    createdAt: '2024-01-22',
    isFavourite: false
  }
])

// Favorilere ekleme fonksiyonu
const addToFavourite = (gameId) => {
  const game = games.find(g => g.id === gameId)
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
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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