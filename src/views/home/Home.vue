<template>
  <div class="d-flex justify-content-center p-3">
    <div class="border-wrapper p-4">
      <div class="container modern-form text-center">
        <h3 class="mb-4">Masa Numarası</h3>
        <form class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <input type="email" class="form-control modern-input" placeholder="" />
          <button type="submit" class="modern-button">Gönder</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.modern-input {
  border: none;
  border-radius: 1.5rem;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.modern-input:focus {
  box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.25);
  transform: scale(1.03);
}

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
