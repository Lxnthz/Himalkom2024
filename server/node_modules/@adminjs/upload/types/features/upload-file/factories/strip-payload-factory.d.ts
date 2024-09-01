import { ActionContext, Before } from 'adminjs';
import { FeatureInvocation, UploadOptionsWithDefault } from '../types/upload-options.type.js';
type ContextNamespace = {
    /**
     * for properties which name we don't now right now (user defines i.e. that property holding
     * `file` can be `myFile`
     */
    [key: string]: any;
    /**
     * When we strip payload for each upload we are also storing use properties under __invocations
     * key. This is because in the next step we have to validate if all the properties are unique.
     * Otherwise upload from one element will override the upload in another element.
     */
    __invocations: Array<FeatureInvocation>;
};
export declare const stripPayloadFactory: (uploadOptionsWithDefault: UploadOptionsWithDefault) => Before;
export declare const getNamespaceFromContext: (context: ActionContext) => ContextNamespace;
export {};
