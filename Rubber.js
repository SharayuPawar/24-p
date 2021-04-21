class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

	var rubberOptions ={
		restitution:0.3,
		friction:1,
		density:5

		}
		
		

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, rubberOptions)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("darkblue");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS);
  ellipse(0,0,this.r,this.r);

			pop()
	}

}