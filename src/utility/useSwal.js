import Swal from 'sweetalert2'

export function useSwal() {
  const showAlert = async (options) => {
    return await Swal.fire(options)
  }

  const showSuccess = async (message) => {
    return await showAlert({
      title: 'Success',
      text: message,
      icon: 'success',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    })
  }
  const showError = async (message) => {
    return await showAlert({
      title: 'Hata!',
      text: message,
      icon: 'error',
      position: 'top',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const showConfirm = async (message) => {
    return await showAlert({
      title: 'Değişiklikleri kaydetmek istiyor musunuz?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Kaydet!',
      cancelButtonText: 'Değiştirme!',
    })
  }
  return {
    showSuccess,
    showError,
    showConfirm,
  }
}
