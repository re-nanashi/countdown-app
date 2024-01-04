import { CountdownTimer } from "./countdown-class";

// Declare canvas, context variables
let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

// Instantiate timer
let timer = new CountdownTimer();

export function world() {
  canvas = <HTMLCanvasElement>document.getElementById("world-canvas");
  context = canvas.getContext("2d");

  timer.startCountdown();

  // Start the first frame request
  window.requestAnimationFrame(worldLoop);
}

function worldLoop() {
  // Parameters
  worldGraphicRenderer(timer);
  worldKeyHandler(timer);

  // Keep requesting new frames
  window.requestAnimationFrame(worldLoop);
}

function worldGraphicRenderer(state: CountdownTimer) {
  const CANVAS_WIDTH = 1280;
  const CANVAS_HEIGHT = 720;

  const CANVAS_CENTER_X = CANVAS_WIDTH / 2;
  const CANVAS_CENTER_Y = CANVAS_HEIGHT / 2;

  let currentCount: number = state.getCountdown();

  // Clear previous canvas frame
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Renders background
  context.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.fillStyle = "white";
  context.fill();

  // Draws the number on the canvas
  context.font = "bold 150px Arial";
  context.fillStyle = currentCount > 3 ? "black" : "red";
  context.textAlign = "center";
  context.fillText(currentCount.toString(), CANVAS_CENTER_X, CANVAS_CENTER_Y);
}

function worldKeyHandler(state: CountdownTimer) {
  document.addEventListener(
    "keydown",
    (event) => {
      var name = event.key;
      if (name === " ") {
        // Reset the countdown
        state.resetCountdown();
        return;
      }
    },
    false
  );
}
