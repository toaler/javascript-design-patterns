import expect from "expect";
import globalStyle from "../../../src/creational/singleton/Singleton";

test('Hello World Test', () => {
    globalStyle.setPropertyValue("color", "red");
    expect(globalStyle.getPropertyByName("color")).toBe("red");
    globalStyle.setPropertyValue("color", "blue");
    expect(globalStyle.getPropertyByName("color")).toBe("blue");
});



