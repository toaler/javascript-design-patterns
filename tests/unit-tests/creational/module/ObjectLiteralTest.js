import expect from "expect";

import myModule from "../../../../src/creational/module/ObjectLiteral";


test('Object Literal Test', () => {
// Outputs: What is Paul Irish debugging today?
    expect(myModule.saySomething()).toBe("Where is Paul Irish debugging today?");

// Outputs: Caching is: enabled
    expect(myModule.reportMyConfig()).toBe("Caching is: enabled");

// Outputs: fr
    expect(myModule.updateMyConfig({
        language: 'fr',
        useCaching: false,
    })).toBe('fr');

// Outputs: Caching is: enabled
    expect(myModule.reportMyConfig()).toBe("Caching is: disabled");
});