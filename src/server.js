import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import Html from './Html';

const PORT = process.env.PORT || 3000;

const server = express();

server.use('/', express.static('dist'));

server.get('/', (req, res) => {
  const title = 'Martin Garrix | Website';
  const body = renderToString(<App />);

  res.send(
    Html({
      title: title,
      body: body
    })
  );
});

server.listen(PORT);

console.log(`Serving at http://localhost:${PORT}`);
