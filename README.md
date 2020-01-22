@wq/markdown
==============

**@wq/markdown** is a [@wq/app plugin][@wq/app] that adds Markdown and syntax highlighting capabilities to the template rendering [context].

## Installation

```bash
npm install @wq/markdown
```

> Note: @wq/markdown is meant to be used with [@wq/app for npm][@wq/app].  As of wq.app 1.2, @wq/markdown is no longer included in the [wq.app PyPI package][wq.app].

## API

By default, @wq/markdown looks for a `markdown` property on the current context and outputs an `html` property that can be rendered into the template as `{{{html}}}`.  @wq/markdown can optionally be configured to look for a different `input` context variable or a different `output` variable.  It can also be configured with a custom `postProcess` function before returning the final HTML.

### Usage

```javascript
// src/index.js
import app from '@wq/app';
import md from '@wq/markdown';
import config from './config';

// In src/config.js:
// config.markdown = {'input': 'markdown', 'output': 'html'};
// config.markdown.postProcess = function(html) { return html };

app.use(md);
app.init(config).then(function() {
    app.jqmInit();
    app.prefetchAll();
});
```

@wq/markdown uses [marked] for Markdown processing and [highlight.js] for code syntax highlighting.  The parsers for Bash, CSS, JavaScript, Markdown, Python, SCSS, and XML are included by default.

[@wq/app]: https://wq.io/docs/app-js
[wq.app]: https://wq.io/wq.app
[context]: https://wq.io/docs/router-js
[marked]: https://marked.js.org/
[highlight.js]: https://highlightjs.org/
