<template>
  <div class="d-flex justify-content-center p-3">
    <div class="border-wrapper p-4">
      <div class="container modern-form text-center">
        <form v-on:submit.prevent="handleSubmit" class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <button type="submit" class="modern-button" :disabled="loading" >
            <span class="spinner-border spinner-border-sm me-2" v-if="loading" ></span>
            <span v-else >OYUNA GİT</span></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/constants/routeNames.js'
import axios from 'axios'
import {useSwal} from '@/utility/useSwal.js'
const {showSuccess,showError,showConfirm} = useSwal();
const router = useRouter()
const loading = ref(false)




const handleSubmit = async () => {
  try {
    loading.value = true
    const response = await axios.post('https://your-django-backend.com/api/check-ip/')
    const isValid = response.data.is_valid

    if (isValid) {
      showSuccess('IP kontrolü başarılı, oyuna yönlendiriliyorsunuz.')
      router.push({name:ROUTE_NAMES.GAME})
    } else {
      alert('Bu buton yalnızca işletme ağına bağlıyken çalışır.')
    }

  } catch (error) {
    showError('IP kontrol isteği başarısız. Lütfen tekrar deneyin.')
    console.error('Error during IP check:', error)
  }
  finally {
    loading.value = false
  }
}




</script>

<style scoped>

.modern-button {
  border-radius: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #00d4ff, #443c33);
  color: white;
  border: none;
  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.modern-button:hover {
  background: linear-gradient(135deg, #443c33, #00b3cc);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.modern-form {
  max-width: 500px;
  margin: 50px auto;
}
.border-wrapper {
  background: linear-gradient(135deg, #423a30, #9a8d80);
  border-radius: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  max-width: 600px;
  width: 100%;
}

.border-wrapper:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
</style>
