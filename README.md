@wq/markdown
==============

**@wq/markdown** is a [@wq/app plugin][@wq/app] that adds Markdown and syntax highlighting capabilities to the renderer.

## Installation

```bash
npm install @wq/markdown
```

> Note: As of version 2.0, @wq/markdown is only compatible with the [@wq/material] renderer.   To integrate with the classic [@wq/jquery-mobile] renderer, install [@wq/markdown 1.x].

## API

By default, @wq/markdown looks for a `markdown` property on the current context.  If present, the included [view overrides] will render the Markdown with [react-markdown] and [react-syntax-highlighter].  @wq/markdown specifies [@wq/material]-based renderers like `<Typography/>` for the main block types, and automatically distinguishes between internal [@wq/router]-handled `<Link/>`s and external `<a href/>`s.  @wq/markdown can be configured to look for a different `input` context variable, or the exported `<Markdown/>` component can be used in a custom view.

### Usage

```javascript
// src/index.js
import app from '@wq/app';
import markdown from '@wq/markdown';
import config from './config';

// In src/config.js:
// config.markdown = {'input': 'markdown' };

app.use(markdown);
app.init(config).then(...);
```

@wq/markdown includes the react-markdown highlight.js parsers for Bash, JavaScript, Python, and XML.

[@wq/app]: https://wq.io/@wq/app
[@wq/markdown 1.x]: https://github.com/wq/markdown/tree/1.x
[@wq/material]: https://wq.io/@wq/material
[@wq/jquery-mobile]: https://github.com/wq/wq.app/tree/master/packages/jquery-mobile
[react-markdown]: https://github.com/remarkjs/react-markdown
[react-syntax-highlighter]: https://github.com/react-syntax-highlighter/react-syntax-highlighter
[view overrides]: https://github.com/wq/wq.app/tree/master/packages/material
[@wq/router]: https://wq.io/@wq/router
