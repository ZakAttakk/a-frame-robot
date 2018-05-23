document.addEventListener("DOMContentLoaded", init);

function init(){
  var wholeRobot = document.querySelector('#wholeRobot');
  var face = document.querySelector('#face');
  var leftEye = document.querySelector('#leftEye');
  var rightEye = document.querySelector('#rightEye');
  var antenna1 = document.querySelector('#antenna1');
  var antenna2 = document.querySelector('#antenna2');
  var mouth = document.querySelector('#mouth');
  var hello = document.querySelector('#hello');

  face.addEventListener('click', faceClicked);

  // To use .emit with animation, first add an event listener an HTML object...
  antenna1.addEventListener('click', a1clicked);
  antenna2.addEventListener('click', a2clicked);
  mouth.addEventListener('click', mouthClicked);
  redSphere.addEventListener('click', redClicked);

  function faceClicked(){
    leftEye.setAttribute("color", `yellow`);
    rightEye.setAttribute("color", `yellow`);
  }

  //...when the event is triggered, have the HTML object "emit" some phrase.  Put that phrase as an attribute in your HTML animation tag.  For instance: <a-animation attribute="scale" begin="yourPhrase" to="2 2 2">
  function a1clicked(){
    antenna1.emit("moveAntenna1");
  }

  function a2clicked(){
    antenna2.emit("moveAntenna2");
  }

  var name = "Robert";
  function mouthClicked(){
    hello.setAttribute("visible", "true");
    hello.setAttribute("value", `Hi, my name is ${name}.`);
  }

  function redClicked(){
    wholeRobot.emit("scaleRobot");
  }


  const greenBox = document.querySelector('#greenBox');
  const scene = document.querySelector('a-scene');
  let y = 5;

  greenBox.addEventListener('click', addBoxes);

  function addBoxes(){
    console.log("clicked!");
    for (var i = 0; i < 500; i += 1) {
      let x = randBetween();
      let y = randBetween();
      let z = randBetween();
      let color = getRandomColor();

      //I had to use this instead of .innerHTML += "<...>"
      var boxClone = greenBox.cloneNode(true);
      scene.appendChild(boxClone);
      boxClone.setAttribute("position", `${x} ${y} ${z}`);
      boxClone.setAttribute("color", `${color}`);
      console.log(boxClone);
    }
  }


  function randBetween() {
    return (Math.floor(Math.random() * 100 ) - 50) // Will return between -50 and 50, because
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
