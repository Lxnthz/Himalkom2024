import path from 'path';
import * as url from 'url';
const dirname = url.fileURLToPath(new URL('.', import.meta.url));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const bundleComponent = (loader, componentName) => {
    const componentPath = path.join(dirname, `../components/${componentName}`);
    return loader.add(componentName, componentPath);
};
export default bundleComponent;
