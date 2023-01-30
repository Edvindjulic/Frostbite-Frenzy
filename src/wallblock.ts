class WallBlock extends GameEntity {
  
  public constructor(
    position: p5.Vector,
    cellSize: number
  ) {
    super(position, new p5.Vector (
      cellSize,
      cellSize
    ));
  }

  
  
  public draw() {
    push();
    fill("205, 240, 255");
    // stroke('205, 240, 255')
    rect(this.position.x, this.position.y, this.size.x, this.size.y, 10);
    pop();
  }
}
