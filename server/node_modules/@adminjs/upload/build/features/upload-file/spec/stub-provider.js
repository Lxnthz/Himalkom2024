import sinon from 'sinon';
import { BaseProvider } from '../providers/base-provider.js';
const stubProvider = (resolvedS3Path) => {
    const resolvedPath = resolvedS3Path || '/someS3Path.png';
    class StubProvider extends BaseProvider {
        path = sinon.stub().resolves(resolvedPath);
        upload = sinon.stub().resolves(resolvedPath);
        delete = sinon.stub().resolves(resolvedPath);
    }
    return new StubProvider('bucketName');
};
export default stubProvider;
