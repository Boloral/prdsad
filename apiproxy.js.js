# apiproxy.js
export default async function handler(req, res) {
  const targetUrl = httpslampocka.koyeb.app + req.url;
  const response = await fetch(targetUrl);
  const body = await response.text();

  res.setHeader(Content-Type, texthtml);
  res.status(200).send(body);
}
