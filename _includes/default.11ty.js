exports.data = {
    title: "Hi, I'm Xing"
}

exports.render = function (data) {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
        <link rel="stylesheet" href="/css/normalize.css" type="text/css">
        <link rel="stylesheet" href="/css/sakura.css" type="text/css">
        <link rel="stylesheet" href="/css/style.css" type="text/css">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
      </head>
      <body class="site">
        ${this.nav(data.page)}
        <section class="site-content">
        ${data.content}
        </section>
        <nav id="footer">
            <ul>
                <li>source: <a href="https://github.com/ohdyno/ohdyno">GitHub</a></li>
                <li>deployed and hosted on: <a href="https://netlify.com/">Netlify</a></li>
                <li>statically generated with: <a href="https://www.11ty.dev/">11ty</a></li>
            </ul>
        </nav>
      </body>
    </html>
`
}
