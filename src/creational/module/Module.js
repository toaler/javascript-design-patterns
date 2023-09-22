/**
 * The Module pattern was initially defined to provide private and public encapsulation for classes in conventional
 * software engineering.
 *
 * At one point, organizing a JavaScript application of any reasonable size was a challenge. Developers would rely on
 * separate scripts to split and manage reusable chunks of logic, and it wasn’t surprising to find 10 to 20 scripts
 * being imported manually in an HTML file to keep things tidy. Using objects, the Module pattern was just one way to
 * encapsulate logic in a file with both public and “private” methods. Over time, several custom module systems came
 * about to make this smoother. Now, developers can use JavaScript modules to organize objects, functions, classes, or
 * variables such that they can be easily exported or imported into other files. This helps prevent conflicts between
 * classes or function names included in different modules.
 *
 * The freedom to have private functions that can be consumed only by our module. They aren’t exposed to the rest of
 * the page (only our exported API is), so they’re considered truly private.
 *
 * Given that functions are usually declared and named, it can be easier to show call stacks in a debugger when we’re
 * attempting to discover what function(s) threw an exception.
 */
// A private counter variable
let myPrivateVar = 0;

// A private function that logs any arguments
const myPrivateMethod = foo => {
    return foo;
};

const myNamespace = {
    // A public variable
    myPublicVar: 'foo',

    // A public function utilizing privates
    myPublicFunction(bar) {
        // Increment our private counter
        myPrivateVar++;

        // Call our private method using bar
        return myPrivateMethod(bar);
    },

    getCount() {
        return myPrivateVar;
    }
};

export default myNamespace;