let message = "0123456789";

console.log(message.substring(5, -5));

/*

working : 
start collecting element fr2om till element before the last index
starting index is negative then assigns 0 to it
last index is negative then then assigns 0 to it
compare both index and finds minIndexValue and maxIndexValue
then start collecting elements from minIndexValue index till maxIndexValue index

*/
