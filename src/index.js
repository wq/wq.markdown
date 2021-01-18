import Markdown from './views/Markdown';
import MarkdownIndex from './views/MarkdownIndex';
import MarkdownDetail from './views/MarkdownDetail';
import MarkdownList from './views/MarkdownList';
import renderers from './renderers';

export default {
    name: 'markdown',
    config: {
        input: 'markdown',
        autoindex: 'autoindex',
        tags: 'tags',
    },
    init(config) {
        if (config) {
            Object.assign(this.config, config);
        }
    },
    context(ctx, routeInfo) {
        const { input, autoindex } = this.config;
        if (routeInfo.page_config[input] && !ctx[input]) {
            const context = {
                [input]: routeInfo.page_config[input],
            };
            if (!(autoindex in ctx)) {
                context[autoindex] = routeInfo.page_config[autoindex] || true;
            }
            return context;
        }
    },
    views: {
        Index: MarkdownIndex,
        Default: Markdown,
        DefaultDetail: MarkdownDetail,
        DefaultList: MarkdownList,
    },
};

export { Markdown, MarkdownIndex, MarkdownDetail, renderers };
