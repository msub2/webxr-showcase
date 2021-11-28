let player = {
	position: new p5.Vector(0, 0, 0),
	deadzone: 0.25,
	flying: false,
	speed: 0.05,
};

let x = 0;

function preload() {
	createVRCanvas();
}

function setup() {
	setVRBackgroundColor(0, 0, 255);
	angleMode(DEGREES);
}

function calculate() {
	const left = getXRInput(LEFT);
	if (left) {
		let v = [left.thumbstick2D.x, 0, left.thumbstick2D.y];
		
		// Get head orientation
		let o = p5xr.instance.viewer._view.transform.orientation;
		let q = [o.x, o.y, o.z, o.w];

		glMatrix.vec3.transformQuat(v, v, q);
		glMatrix.vec3.scale(v, v, player.speed);
		
		player.position.x += v[0];
		player.position.y += v[1];
		player.position.z += v[2];
	}
}

function draw() {
	const p = player.position;
	const left = getXRInput(LEFT);
	const right = getXRInput(RIGHT);

	setViewerPosition(p.x, p.y, p.z);

	[left, right].forEach((hand) => {
		if (hand) {
			push();
			translate(p.x, p.y, p.z);
			fill(255, 255, 255);
			applyMatrix(hand.pose);
			box(0.15);
			pop();
		}
	});

	rotateX(-90);
	fill(0, 255, 0);
	noStroke();
	plane(10, 10);
}