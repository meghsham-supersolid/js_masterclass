/*
 * while using nested scopes
 * outer function / block variable can be accessed form outer function and inner function / block
 * inner function / block variable can be accessed inner function / block but can't be accessed from outer function and blocks
 */

// nested function

function outerFunction() {
  const outerFunctionVariable = "I am outerFunctionVariable";

  innerFunction();

  function innerFunction() {
    const innerFunctionVariable = "I am innerFunctionVariable";

    if (outerFunctionVariable === undefined) {
      console.log(
        `From innerFunction I CAN'T access outerFunctionVariable : ${outerFunctionVariable}`
      );
    } else {
      console.log(
        `From innerFunction I CAN access outerFunctionVariable : ${outerFunctionVariable}`
      );
    }

    if (innerFunctionVariable === undefined) {
      console.log(
        `From innerFunction I CAN'T access innerFunctionVariable : ${innerFunctionVariable}`
      );
    } else {
      console.log(
        `From innerFunction I CAN access innerFunctionVariable : ${innerFunctionVariable}`
      );
    }
  }

  if (outerFunctionVariable === undefined) {
    console.log(
      `From outerFunction I CAN'T access outerFunctionVariable : ${outerFunctionVariable}`
    );
  } else {
    console.log(
      `From outerFunction I CAN access outerFunctionVariable : ${outerFunctionVariable}`
    );
  }

  //   if (innerFunctionVariable  === undefined) {
  //     console.log(
  //       `From outerFunction I CAN'T access innerFunctionVariable : ${innerFunctionVariable}`
  //     );
  //   } else {
  //     console.log(
  //       `From outerFunction I CAN access outerFunctionVariable : ${innerFunctionVariable}`
  //     );
  //   } // ReferenceError: innerFunctionVariable is not defined at outerFunction
}
outerFunction();

// nested blocks

if (true) {
  const outerBlockVariable = "outerBlockVariable";

  if (outerBlockVariable === "outerBlockVariable") {
    const innerBlockVariable = "innerBlockVariable";

    console.log(
      innerBlockVariable != ""
        ? `I can access ${innerBlockVariable} from inner Block Variable`
        : `I can't access innerBlockVariable from inner Block Variable`
    );

    console.log(
      outerBlockVariable != ""
        ? `I can access ${outerBlockVariable} from inner Block Variable`
        : `I can't access outerBlockVariable from inner Block Variable`
    );
  }

  //   console.log(
  //     innerBlockVariable != ""
  //       ? `I can access ${innerBlockVariable} from outer Block Variable`
  //       : `I can't access innerBlockVariable from outer Block Variable`
  //   ); // ReferenceError: innerBlockVariable is not defined

  console.log(
    outerBlockVariable != ""
      ? `I can access ${outerBlockVariable} from outer Block Variable`
      : `I can't access outerBlockVariable from outer Block Variable`
  );
}
