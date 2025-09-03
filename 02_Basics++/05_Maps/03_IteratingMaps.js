// Iterating over values

const studentMap = new Map();
studentMap.set("student_1", "Kamlesh");
studentMap.set("student_2", "Kunal");
studentMap.set("student_3", "Krishna");
studentMap.set("student_4", "Kamal");
studentMap.set("student_5", "Kinjal");

// Way -> 1 Getting a entry
for (const entry of studentMap) {
  console.log(entry);
}

// Way -> 2 Destructuring entry array
console.log("\n\n\ngetting keys and values from entry array");

for (const [key, values] of studentMap) {
  console.log(`${key}=>${values}`);
}

// Way -> 3 getting keys and values from keys array
console.log("\n\n\ngetting keys and values from keys array");
const studentMapKeys = studentMap.keys();

// with the help of keys getting values of studentMap
for (key of studentMapKeys) {
  console.log(`${key}=>${studentMap.get(key)}`);
}
