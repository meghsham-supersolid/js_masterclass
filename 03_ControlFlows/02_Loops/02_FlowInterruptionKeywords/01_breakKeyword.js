// break helps to get out the loop without doing all iterations, when break execute it exits the current loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 5) break;
// }

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("Outer loop I : " + i + " Inner Loop J : " + j);
    if (j == 5) break;
  }
  if (i == 2) break;
}
