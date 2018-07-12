import express from 'express';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import Html from './Html';
import { TITLE } from './../config/env/dev.env';

const PORT = process.env.PORT || 3000;

const server = express();

server.use('/', express.static('dist'));

const dirCss = 'dist/static/css';

const cssLinks = fs
  .readdirSync(dirCss)
  .map(file => {
    return `<link href="static/css/${file}" rel="stylesheet" /> `;
  })
  .join('\n');

server.get('/', (req, res) => {
  const title = TITLE;
  const body = renderToString(<App />);

  res.send(
    Html({
      title: title,
      body: body,
      styles: cssLinks
    })
  );
});

server.listen(PORT);

console.log(`Serving at http://localhost:${PORT}`);
