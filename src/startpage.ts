class StartPage {
  private characters: p5.Image;
  private snowflakes: p5.Image;
  private currentOption: number = 0;
  private options: string[] = ["New Game", "Objectives", "Game Controls"];
  private buttons: p5.Element[] = [];

  public constructor() {
    this.characters = images.characters;
    this.snowflakes = images.snowflakes;
  }

  public draw() {
    this.drawShape();
    this.drawText();
    removeElements();
    this.drawButtons();
    this.updateHover();
    this.drawImages();
  }

  public update() {}

  private drawShape() {
    push(); // save current styles and transformations
    rectMode(CENTER);
    fill(74, 122, 167);
    rect(width / 2, height / 2, 700, 600); // larger rect
    pop(); // restore previous styles and transformations
  }

  // Creates the buttons with a for loop based on the options array length
  private drawButtons() {
    for (let i = 0; i < this.options.length; i++) {
      let button = createButton(this.options[i]);
      button.position(width / 2, height / 2.5 + (i + 1) * 50);
      button.size(150, 40);
      button.center("horizontal");
      button.style("color: #4A7AA7");
      button.style("border-radius: 1rem");
      button.style("border-style: none");
      button.style("font-size: 19px");
      button.style("font-family: Freckle Face");
      button.style("background-color: #D2ECF3");

      button.mouseOver(() => {
        this.currentOption = i;
        this.updateHover();
      });

      button.mouseOut(() => {
        this.currentOption = 0;
        this.updateHover();
      });

      button.mousePressed(() => {
        // callback function to call when the button is clicked
        if (i === 0) {
          startGame();
        } else if (i === 1) {
          showObjectives();
        } else if (i === 2) {
          showGameControls();
        }
      });
      this.buttons.push(button);
    }
  }

  private updateHover() {
    // update hover effect on buttons
    for (let i = 0; i < this.options.length; i++) {
      if (i === this.currentOption) {
        this.buttons[i].style("background-color", "rgb(100, 190, 230)");
        console.log("Hover effect");
      } else {
        this.buttons[i].style("background-color", "#D2ECF3");
      }
      noLoop();
    }
  }

  private drawText() {
    push(); // save current styles and transformations
    textFont("Freckle Face");
    fill(255);
    textSize(42);
    textAlign(CENTER, CENTER);
    text("Frostbite Frenzy", width / 2, height / 2.6);
    pop(); // restore previous styles and transformations
  }

  private drawImages() {
    if (this.characters.width > 0 && this.characters.height > 0) {
      image(this.characters, width / 2 - 350, height / 2 - -50, 700, 250);
    }
    if (this.snowflakes.width > 0 && this.snowflakes.height > 0) {
      image(this.snowflakes, width / 2 - 342, height / 2 - 290, 680, 170);
    }
  }

  public keyPressed() {
    // update the current option based on the keyboard input
    if (keyCode === 87) {
      this.currentOption = max(this.currentOption - 1, 0);
    } else if (keyCode === 83) {
      this.currentOption = min(this.currentOption + 1, this.options.length - 1);
      console.log("qwtqwetwqe");
    } else if (key === "a" || key === "A") {
      this.currentOption = min(this.currentOption + 1, this.options.length - 1);
    } else if (key === "d" || key === "D") {
      this.currentOption = max(this.currentOption - 1, 0);
    } else if (key === "Enter") {
      if (this.currentOption === this.options.length - 1) {
        startGame();
        console.log("Click");
      }
    }
    this.updateHover();
  }
}

function startGame() {
  // code to start the game
  alert("Game started");
}

function showObjectives() {
  // code to show the objectives of the game
  alert(
    "Objectives: \n- Collect as many keys as possible\n- Avoid obstacles and enemies\n- you have 3 minutes!"
  );
}

function showGameControls() {
  // code to show the controls of the game
  alert(
    "Controls: \n- Use W, A, S, D or arrow keys to move\n- Press P to pause the game\n- Press M to mute the sound\n- Press Esc to exit the game"
  );
}
