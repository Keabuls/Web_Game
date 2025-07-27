<template>   
  <div class="row">     
    <div       
      v-for="prize in prizes"       
      :key="prize.id"       
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3"     
    >       
      <div 
        class="card h-100 border" 
        :class="{ 'selected-card': selectedPrizeId === prize.id }"
        @click="selectPrize(prize)"
        style="cursor: pointer;"
      >         
        <div class="card-body d-flex flex-column">           
          <div class="d-flex justify-content-between align-items-center mb-2">             
            <h5 class="card-title mb-0">{{ prize.name }}</h5>
            <div v-if="selectedPrizeId === prize.id" class="text-success">
              <i class="bi bi-check-circle-fill fs-5"></i>
            </div>           
          </div>           
          <p class="card-text text-truncate mb-3">{{ prize.description }}</p>           
          <div class="d-flex justify-content-between align-items-center mb-3">             
            <div class="fw-bold me-2 fs-6 text-muted">               
              <span class="text-success">{{ prize.category || 'Genel' }}</span>             
            </div>           
          </div>           
          <div class="d-flex flex-wrap gap-2">             
            <button               
              class="btn btn-success fs-6 py-2 px-4 btn-sm"               
              data-bs-toggle="modal"               
              :data-bs-target="`#prizeDetailModel-${prize.id}`"
              @click.stop
            >               
              <i class="bi bi-gear"></i> Ayarlar             
            </button> 
            <span></span>          
          </div>         
        </div>       
      </div>        
      <prizeDetail :product="prize"></prizeDetail>     
    </div>        
  </div>   
</template>  

<script setup> 
import { ref, reactive } from 'vue' 
import prizeDetail from './prizeDetail.vue'

// Emit tanımı
const emit = defineEmits(['prize-selected'])

// Seçili ödül ID'si
const selectedPrizeId = ref(null)

// Ödül verileri 
const prizes = reactive([   
  {     
    id: 1,     
    name: 'Ödül',     
    description: 'İşletmeden bir ödül',     
    category: 'Ürün',     
    count: 1,   
  },   
  {     
    id: 2,     
    name: 'İndirim',     
    description: 'İşletmeden bir indirim',     
    category: 'İndirim',     
    discountRate: 20,    
  }, 
])  

// Ödül seçme fonksiyonu
const selectPrize = (prize) => {
  selectedPrizeId.value = prize.id
  emit('prize-selected', prize)
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

.selected-card {
  border: 2px solid #28a745 !important;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3) !important;
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