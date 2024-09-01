export declare const DAY_IN_MINUTES = 86400;
export type DuplicateOccurrence = {
    keys: Array<string>;
    value: string;
};
/**
 * These properties are stored to the database
 *
 * @private
 */
export declare const DB_PROPERTIES: readonly ["key", "bucket", "size", "mimeType", "filename"];
/**
 * Namespace under which data in the ActionContext will be stored.
 * I.e when user posts data in payload which should be stripped before the record.update - they
 * will go to ActionContext to context[CONTEXT_NAMESPACE][property-name]
 *
 * @private
 */
export declare const CONTEXT_NAMESPACE = "adminjs-upload";
export declare const ERROR_MESSAGES: {
    NO_PROVIDER: string;
    WRONG_PROVIDER_OPTIONS: string;
    NO_PERSISTENT_RECORD_UPLOAD: string;
    NO_FILENAME: string;
    NO_KEY_PROPERTY: string;
    NO_AWS_SDK: string;
    NO_DIRECTORY: (dir: string) => string;
    METHOD_NOT_IMPLEMENTED: (method: string) => string;
    DUPLICATED_KEYS: (keys: Array<DuplicateOccurrence>) => string;
};
