import { ERROR_MESSAGES } from '../constants.js';
import { AWSProvider } from '../providers/aws-provider.js';
import { GCPProvider } from '../providers/gcp-provider.js';
import { LocalProvider } from '../providers/local-provider.js';
export const getProvider = (options) => {
    if (!options) {
        throw new Error(ERROR_MESSAGES.NO_PROVIDER);
    }
    // when someone passes its own implementation as options
    if (options.name === 'BaseProvider') {
        return {
            name: 'base',
            provider: options,
        };
    }
    const givenProviders = Object.keys(options);
    if (givenProviders.length !== 1) {
        throw new Error(ERROR_MESSAGES.WRONG_PROVIDER_OPTIONS);
    }
    const providerName = givenProviders[0];
    const providerOptions = options[providerName];
    const providerMap = {
        aws: () => new AWSProvider(providerOptions),
        gcp: () => new GCPProvider(providerOptions),
        local: () => new LocalProvider(providerOptions),
        base: () => providerOptions,
    };
    const provider = providerMap[providerName]();
    if (!provider) {
        throw new Error(ERROR_MESSAGES.NO_PROVIDER);
    }
    return {
        provider,
        name: providerName,
    };
};
