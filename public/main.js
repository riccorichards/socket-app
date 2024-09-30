const socket = io("http://localhost:5000");

socket.on("welcome", (data) => {
  console.log(data);

  socket.emit("thankYou", "I hope we can create comprehensive things there!!!");
});

socket.on("forAll", (data) => {
  console.log(data);
});
