const myModule = {
    myProperty: 'someValue',
    // object literals can contain properties and methods.
    // e.g., we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: 'en',
    },
    // a very basic method
    saySomething() {
        return 'Where is Paul Irish debugging today?';
    },
    // output a value based on the current configuration
    reportMyConfig() {
        return `Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`;
    },
    // override the current configuration
    updateMyConfig(newConfig) {
        if (typeof newConfig === 'object') {
            this.myConfig = newConfig;
            return(this.myConfig.language);
        }
    },
};

export default myModule;