import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use('*', async (req, res) => {
  const response = await fetch('https://lampocka.koyeb.app' + req.originalUrl);
  const text = await response.text();
  res.send(text);
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
