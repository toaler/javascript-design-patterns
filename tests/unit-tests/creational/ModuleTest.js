import expect from "expect";

import myNamespace from "../../../src/creational/module/Module";

test('Hello World Test', () => {
    expect(myNamespace.myPublicVar).toBe("foo");
    expect(myNamespace.myPublicFunction("foo")).toBe("foo");
    expect(myNamespace.getCount()).toBe(1);
    expect(myNamespace.myPublicFunction("bar")).toBe("bar");
    expect(myNamespace.getCount()).toBe(2);
});



