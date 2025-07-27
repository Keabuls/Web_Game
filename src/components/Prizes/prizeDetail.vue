<template>
  <div class="modal fade" tabindex="-1" :id="`prizeDetailModel-${product.id}`">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content border-0 shadow-lg">
        <form @submit.prevent="handleSubmit">
          <div class="modal-header bg-gradient-primary text-white border-0 py-4">
            <div class="d-flex align-items-center">
              <div class="icon-container me-3">
                <i class="fas fa-gift fs-4"></i>
              </div>
              <div>
                <h4 class="modal-title mb-0 fw-bold">Ürün Detayları</h4>
                <small class="opacity-75">Ürün ayarlarını düzenleyin</small>
              </div>
            </div>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body p-4">
            <div class="row g-4">
              <!-- Sol Kolon - Ürün Seçimi -->
              <div  class="col-lg-6">
                <div v-if="product.count" class="card border-0 bg-light h-100">
                  <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="text-dark mb-0">
                      <i class="fas fa-th-large me-2 text-primary"></i>
                      Ürün Seçimi
                    </h5>
                  </div>
                  <div class="card-body">
                    <div v-if="product.count" class="product-grid">
                      <div 
                        v-for="products in productPrize" 
                        :key="products.id"
                        class="product-item"
                        :class="{ 'selected': selectedProduct === products.id }"
                        @click="selectProduct(products.id)"
                      >
                        <div class="product-image">
                          <img 
                            v-if="products.img" 
                            :src="products.img" 
                            :alt="products.name"
                            class="img-fluid"
                          >
                          <div v-else class="placeholder-icon">
                            <i class="fas fa-image text-muted"></i>
                          </div>
                        </div>
                        <div class="product-name">
                          {{ products.name }}
                        </div>
                        <div class="selection-indicator">
                          <i class="fas fa-check"></i>
                        </div>
                      </div>
                    </div>
                    <div v-else class="text-center py-5 text-muted">
                      <i class="fas fa-inbox fs-1 mb-3 d-block"></i>
                      <p>Henüz ürün bulunmuyor</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sağ Kolon - Detaylar ve Ayarlar -->
              <div class="col-lg-6">
                <!-- Açıklama Bölümü -->
                <div class="card border-0 mb-4">
                  <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="text-dark mb-0">
                      <i class="fas fa-info-circle me-2 text-info"></i>
                      Açıklama
                    </h5>
                  </div>
                  <div class="card-body pt-2">
                    <p class="text-muted mb-0 lh-lg">
                      {{ product.description || 'Açıklama bulunamadı.' }}
                    </p>
                  </div>
                </div>

                <!-- Ayarlar Bölümü -->
                <div class="card border-0">
                  <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="text-dark mb-0">
                      <i class="fas fa-cog me-2 text-warning"></i>
                      Ayarlar
                    </h5>
                  </div>
                  <div class="card-body pt-2">
                    <div class="row g-3">
                      <!-- Adet Ayarı -->
                      <div v-if="product.count" class="col-md-6">
                        <div class="form-floating">
                          <input 
                            v-model="product.count" 
                            type="number" 
                            class="form-control border-2" 
                            id="countInput"
                            placeholder="Adet"
                            min="1"
                          />
                          <label for="countInput" class="text-muted">
                            <i class="fas fa-hashtag me-2"></i>Adet
                          </label>
                        </div>
                      </div>

                      <!-- İndirim Oranı Ayarı -->
                      <div v-if="product.discountRate" class="col-md-6">
                        <div class="form-floating">
                          <input 
                            v-model="product.discountRate" 
                            type="number" 
                            class="form-control border-2" 
                            id="discountInput"
                            placeholder="İndirim Oranı"
                            min="0"
                            max="100"
                          />
                          <label for="discountInput" class="text-muted">
                            <i class="fas fa-percentage me-2"></i>İndirim Oranı
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Ekstra Bilgi Kartları -->
                    <div class="row g-2 mt-3">
                      <div v-if="product.count" class="col-6">
                        <div class="bg-primary bg-opacity-10 rounded-3 p-3 text-center">
                          <div class="fw-bold text-primary">{{ product.count }}</div>
                          <small class="text-muted">Toplam Adet</small>
                        </div>
                      </div>
                      <div v-if="product.discountRate" class="col-6">
                        <div class="bg-success bg-opacity-10 rounded-3 p-3 text-center">
                          <div class="fw-bold text-success">%{{ product.discountRate }}</div>
                          <small class="text-muted">İndirim</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modern Footer -->
          <div class="modal-footer border-0 bg-light px-4 py-3">
            <div class="d-flex gap-2 ms-auto">
              <button 
                type="button" 
                class="btn btn-outline-secondary px-4" 
                data-bs-dismiss="modal"
              >
                <i class="fas fa-times me-2"></i>İptal
              </button>
              <button 
                type="submit" 
                class="btn btn-success px-4 shadow-sm"
              >
                <i class="fas fa-save me-2"></i>Kaydet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'
import { useSwal } from '@/utility/useSwal.js'
const emit = defineEmits(['product-selected'])

const { showSuccess, showError, showConfirm } = useSwal()


const handleSubmit = () => {
  showConfirm('Değişiklikleri kaydetmek istediğinize emin misiniz?')
}

const selectProduct = (product) => {
  emit('product-selected', product)
}


const productPrize = reactive([
  {
    id: 1,
    name: "Bira",
    img: '/images/beer.svg',
  },
  {
    id: 2,
    name: "Kahve",
    img: '/images/coffe.svg',
  },
  {
    id: 3,
    name: "Çay",
    img: '/images/tea.svg',
  },
  {
    id: 4, 
    name: "Yemek",
    img: '/images/food.svg',
  },
])

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Gradient Header */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Product Grid Styles */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.product-item {
  position: relative;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  overflow: hidden;
}

.product-item:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.product-item.selected {
  border-color: #28a745;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
}

.product-image {
  width: 50px;
  height: 50px;
  margin: 0 auto 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f8f9fa;
}

.product-item.selected .product-image {
  background: rgba(255, 255, 255, 0.2);
}

.placeholder-icon {
  font-size: 1.5rem;
}

.product-name {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.selection-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s ease;
}

.product-item.selected .selection-indicator {
  opacity: 1;
  transform: scale(1);
}

/* Card Styles */
.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}

/* Form Styles */
.form-floating > .form-control {
  border-radius: 8px;
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}

.form-floating > .form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.form-floating > label {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Animation for modal */
.modal.fade .modal-dialog {
  transform: scale(0.9);
  transition: transform 0.3s ease-out;
}

.modal.show .modal-dialog {
  transform: scale(1);
}

/* Button hover effects */
.btn {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-success {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  border: none;
}

/* Icon container */
.icon-container {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>