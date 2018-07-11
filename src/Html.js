const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="icon" href="${process.env.PUBLIC_URL}/favicon.png">
      <title>${title}</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;
