function callBack(callBackValue) {
  console.log("callBack Function");
  callBackValue();
}
callBack(() => {
  console.log("callBack Value");
});

// Using setTimeout
setTimeout(() => {
  alert("Welecome you are in safezone");
}, 1000);

setTimeout(() => {
  alert("Hurry up only 5seconds left fallback safezone");
}, 5000);

setTimeout(() => {
  alert("OOPS The game is over see you again!");
}, 10000);
