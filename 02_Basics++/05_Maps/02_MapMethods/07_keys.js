/* 
Returns an iterable of keys in the map.
 */

const studentMap = new Map();
studentMap.set("student_1", "Kamlesh");
studentMap.set("student_2", "Kunal");
studentMap.set("student_3", "Krishna");
studentMap.set("student_4", "Kamal");
studentMap.set("student_5", "Kinjal");

console.log(`Student map looks like :`);
console.log(studentMap);

console.log("Collecting all the keys in student : ");
console.log(studentMap.keys());
