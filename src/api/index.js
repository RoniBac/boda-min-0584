export default async function handler(req, res) {
  const url = "https://script.google.com/macros/s/AKfycbz-iiHNrt7RlrVQLO-Ip6nR9PT--R25KYy7CBgi4wN2YIpifltYZmbugNATBLX4OQeNjw/exec"

  if (req.method === "GET") {
    const response = await fetch(`${url}?nombre=${req.query.nombre}`)
    const data = await response.text()
    return res.status(200).send(data)
  }

  if (req.method === "POST") {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    })
    const data = await response.text()
    return res.status(200).send(data)
  }

  res.status(405).end()
}