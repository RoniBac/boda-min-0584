const API_URL = import.meta.env.DEV
  ? "/api"
  : "https://script.google.com/macros/s/AKfycbz-iiHNrt7RlrVQLO-Ip6nR9PT--R25KYy7CBgi4wN2YIpifltYZmbugNATBLX4OQeNjw/exec"

// 🔍 Buscar invitado
export const buscarInvitado = async (nombre) => {
  const res = await fetch(`${API_URL}?nombre=${encodeURIComponent(nombre)}`)
  return res.json()
}

export const confirmarInvitado = async ({ fila, personas, asistencia }) => {
  const params = new URLSearchParams({
    fila,
    personas,
    asistencia
  })

  const res = await fetch(`${API_URL}?${params.toString()}`)
  return res.json()
}
