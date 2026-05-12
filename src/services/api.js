const API_URL = import.meta.env.DEV
  ? "/api"
  : "https://script.google.com/macros/s/AKfycbwbOMk6h1qSsf1a3gK2uL0QxFtLm_azV8rGFlZywzGFi2LFPlF-5ubV8oe6YFM9Yr6-MQ/exec"

// 🔍 Buscar invitado
export const buscarInvitado = async (nombre) => {

  const res = await fetch(
    `${API_URL}?nombre=${encodeURIComponent(nombre)}`
  )

  return res.json()
}


// ✅ Confirmar invitado
export const confirmarInvitado = async ({ fila, asistencia }) => {

  const params = new URLSearchParams({
    fila,
    asistencia
  })

  const res = await fetch(
    `${API_URL}?${params.toString()}`
  )

  return res.json()
}