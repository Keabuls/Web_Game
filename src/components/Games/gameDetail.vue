<template>
  <div class="modal fade" tabindex="-1" :id="`productDetailModel-${product.id}`">
    <div class="modal-dialog model-dialog-centered modal-xl">
      <div class="modal-content">
        <form v-on:submit.prevent="handleSubmit">
          <div class="modal-header">
            <h5 class="modal-title text-muted fs-5">Product Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row g-4">
              <div class="col-md-6">
                <div class="">
                  asdasdas
                </div>
              </div>

              <div class="col-md-6">
                <div class="h3">Açıklama</div>
                <p class="text-muted">{{ product.description }}</p>
                <hr />

                <div class="h3">Ayarlar</div>

                <div >
                  <div class="align-items-center gap-2 mb-2">
                    <span>
                      Kazanma Oranı:
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      v-model="product.winRate"

                    />
                    <br>
                    <span>
                      Oynanma Sayısı:
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      v-model="product.playTime"

                    />
                  </div>
                  <div class="d-flex flex-wrap gap-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success">Kaydet</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useSwal } from '@/utility/useSwal.js'
const { showSuccess, showError, showConfirm } = useSwal()

const handleSubmit = () => {
  
  showConfirm("")
}

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
