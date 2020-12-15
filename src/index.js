import Markdown from './views/Markdown';
import MarkdownIndex from './views/MarkdownIndex';
import MarkdownDetail from './views/MarkdownDetail';
import renderers from './renderers';

export default {
    name: 'markdown',
    config: {
        input: 'markdown',
    },
    init(config) {
        if (config) {
            Object.assign(this.config, config);
        }
    },
    context(ctx, routeInfo) {
        const { input } = this.config;
        if (routeInfo.page_config[input] && !ctx[input]) {
            return { [input]: routeInfo.page_config[input] };
        }
    },
    views: {
        Index: MarkdownIndex,
        Default: Markdown,
        DefaultDetail: MarkdownDetail,
    },
};

export { Markdown, MarkdownIndex, MarkdownDetail, renderers };
