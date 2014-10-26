<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Web components catalogue</title>
  <style>
    body {
      background-color: #C63D0F;
      font-family: Helvetica, Arial, sans-serif;
    }

    h1 {
      background-color: #FDF3E7;
      margin: 2em;
      padding: 1em;
      text-align: center;
    }

    section { text-align: center; }

    article {
      float: left;
      background: #0E8F8F;
      color: white;
      margin: 2em;
      width: 20em;
      height: 10em;
      padding: 1em;

      box-shadow: 1px 1px 5px 1px rgb(100, 100, 100);
      box-shadow: 1px 1px 5px 1px rgba(100, 100, 100, 0.80);
    }
  </style>
</head>
<body>
  <h1>Available web components</h1>
  <section id="components">
    {{#components}}
    <article>
      <h2>{{name}}</h2>
      <p>{{description}}</p>
      <pre>{{usage}}</pre>
      <p><a href="{{sampleFile}}">Demo</a> | <a href="{{links.repository}}">Repository</a> | <a href="{{links.documentation}}">Docs</a></p>
    </article>
    {{/components}}
  </section>
</body>
</html>
