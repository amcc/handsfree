let handsfree;

function setup() {
  createCanvas(windowWidth, windowHeight);

  handsfree = new Handsfree({
    showDebug: true,
    hands: true,
    maxNumHands: 2,
  });
  handsfree.start();
}

function draw() {
  background(255);

  if (handsfree.data.hands) {
    // Left hand, person #1
    let left = handsfree.data.hands.landmarksVisible[0];
    // Right hand, person #1
    let right = handsfree.data.hands.landmarksVisible[1];

    let leftPoints = handsfree.data.hands.landmarks[0];
    let rightPoints = handsfree.data.hands.landmarks[1];

    if (left && right) {
      stroke("yellow");
      strokeWeight(3)
      for (let i = 0; i < leftPoints.length; i++) {
        line(
          width - width * leftPoints[i].x,
          height * leftPoints[i].y,
          width - width * rightPoints[i].x,
          height * rightPoints[i].y
        );
      }
    }
    
    noStroke();
    if (left) {
      for (let i = 0; i < leftPoints.length; i++) {
        i % 4 ?  fill(150,150,150,150) : fill(255, 0, 255, 150);
        circle(width - width * leftPoints[i].x, height * leftPoints[i].y, 30);
      }
    }
    if (right) {
      for (let i = 0; i < rightPoints.length; i++) {
        i % 4 ?  fill(150,150,150,150) : fill(0,255,255,150);
        circle(width - width * rightPoints[i].x, height * rightPoints[i].y, 30);
      }
    }
    
  }
}
