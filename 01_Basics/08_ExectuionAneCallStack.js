/*

How the JavaScript code executes:

    Whenever JS code is executed, it runs in 2 phases:
    
    1. Memory Creation Phase:
        - Memory is allocated for variables and function declarations.
        - Variables are initialized with the value "undefined".
        - Function declarations are fully hoisted (entire function definition is stored in memory).

    2. Execution Phase:
        - Actual code is executed line by line.
        - Values are assigned to variables.
        - Functions are invoked, and new Execution Contexts are created for them.

    Example:
        // JS code =>
        let a = 10;
        let b = 20;

        function addNum(num1, num2) {
            let c = a + b;
            return c;
        }

        let result1 = addNum(a, b);
        let result2 = addNum(100, 200); 

    Steps:

    Step 0: Global Execution Context (GEC) gets created and is pointed to by "this".

    Step 1: Memory Phase
        1. Memory is allocated to variables, and their initial value is "undefined".
        2. Function declarations are loaded into memory with the full definition.
        3. Variables assigned via expressions or function calls still hold "undefined" at this phase.

    Step 2: Execution Phase
        1. Variables are assigned actual values where direct assignment is present.
        2. When a function is called, a new Execution Context is created for it.
            - That context also goes through its own Memory and Execution Phases.

    For the above example, the execution and phases go like this:

        - Global Execution Context Created

        - Memory Creation Phase:
            - Memory allocated for `a` → "undefined"
            - Memory allocated for `b` → "undefined"
            - Function `addNum` is hoisted (function definition stored)
            - Memory allocated for `result1` → "undefined"
            - Memory allocated for `result2` → "undefined"

        - Execution Phase:
            - `a = 10`
            - `b = 20`
            - Function is hoisted already, so this line (function definition) is skipped
            - `addNum(a, b)` is called → creates a new Execution Context

                - Memory Phase (inside addNum):
                    - `num1` → "undefined"
                    - `num2` → "undefined"
                    - `c` → "undefined"

                - Execution Phase (inside addNum):
                    - `num1 = 10`
                    - `num2 = 20`
                    - `c = a + b = 10 + 20 = 30`
                    - return `c` → result1 = 30

            - The new Execution Context is deleted (popped off the call stack)

            - `addNum(100, 200)` → creates another Execution Context

                - Memory Phase (inside addNum):
                    - `num1` → "undefined"
                    - `num2` → "undefined"
                    - `c` → "undefined"

                - Execution Phase (inside addNum):
                    - `num1 = 100`
                    - `num2 = 200`
                    - `c = a + b = 100 + 200 = 300`
                    - return `c` → result2 = 300

            - The new Execution Context is deleted (popped off the call stack)

        - Global Execution Context is deleted (after all code is executed)


Global Execution Context:
    - Refers to how JS executes code at the top level.
    - When JS source code is run, a GEC is created and pointed to by the "this" keyword.
    - Depending on the environment, the GEC object changes:
        - Browser → creates "window" object
        - Node.js → creates "global" object
        - Deno.js → creates "globalThis" object

Functional Execution Context:
    - Created every time a function is invoked.
    - Has its own Memory and Execution phases.
    - Contains:
        - Arguments object
        - Local variables
        - A reference to its outer (lexical) environment

Eval Execution Context:
    - Created when code is executed inside an `eval()` function.
    - Rarely used. Can access and modify variables in the current scope.
    - Considered dangerous and bad practice in modern code.


Call Stack:

    - When working with different Execution Contexts, JavaScript creates a stack memory called the "Call Stack".
    - The Call Stack keeps track of which execution context is currently running.
    - Each time a function is called, a new Execution Context is created and pushed onto the top of the stack.
    - As soon as the code within that context finishes executing, the context is popped off (removed) from the stack and gets deleted to free memory.
    - JavaScript is single-threaded, so only one Execution Context runs at a time — the one on top of the Call Stack.
*/

