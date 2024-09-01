import { DuplicateOccurrence } from '../constants.js';
import { FeatureInvocation, UploadOptions } from '../types/upload-options.type.js';
/**
 * Checks if values for properties given by the user are different
 *
 * @private
 */
export declare const hasDuplicatedProperties: (properties: Partial<UploadOptions['properties']>) => false | Array<DuplicateOccurrence>;
/**
 * Checks if all properties have uniq names
 */
export declare const validatePropertiesGlobally: (globalContext: Array<FeatureInvocation>) => false | Array<DuplicateOccurrence>;
