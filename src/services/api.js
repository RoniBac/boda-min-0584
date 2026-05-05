const API_URL = import.meta.env.DEV
  ? "/api"
  : "https://script.google.com/macros/s/AKfycbz-iiHNrt7RlrVQLO-Ip6nR9PT--R25KYy7CBgi4wN2YIpifltYZmbugNATBLX4OQeNjw/exec"

// 🔍 Buscar invitado
export const buscarInvitado = async (nombre) => {
  const res = await fetch(`${API_URL}?nombre=${encodeURIComponent(nombre)}`)
  return res.json()
}

// ✅ Confirmar invitado
export const confirmarInvitado = async ({ fila, personas, asistencia }) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fila,
      personas,
      asistencia
    })
  })
}