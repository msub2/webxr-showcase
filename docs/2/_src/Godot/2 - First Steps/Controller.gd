extends ARVRController


onready var player = $".."
onready var _camera = $"../ARVRCamera"

export var deadzone = 0.05
export var movement_speed = 1.5
export var fly = false


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# Read incoming input from WebXR API for trackpad and/or joystick
	var trackpad_vector = Vector2(Input.get_joy_axis(100, 1), Input.get_joy_axis(100, 0))
	var joystick_vector = Vector2(Input.get_joy_axis(100, 3), Input.get_joy_axis(100, 2))

	if trackpad_vector.length() < deadzone:
		trackpad_vector = Vector2(0, 0)
	else:
		trackpad_vector = trackpad_vector.normalized()# * ((trackpad_vector.length() - deadzone) / (1 - deadzone))

	if joystick_vector.length() < deadzone:
		joystick_vector = Vector2(0, 0)
	else:
		joystick_vector = joystick_vector.normalized()# * ((joystick_vector.length() - deadzone) / (1 - deadzone))

	var forward_direction = -_camera.global_transform.basis.z.normalized()
	var right_direction = _camera.global_transform.basis.x.normalized()

	var movement_vector = (trackpad_vector + joystick_vector).normalized()

	var movement_forward = forward_direction * movement_vector.x * delta * movement_speed
	var movement_right = right_direction * movement_vector.y * delta * movement_speed

	if !fly:
		movement_forward.y = 0
		movement_right.y = 0

	if movement_right.length() > 0 or movement_forward.length() > 0:
		get_parent().translate(movement_right + movement_forward)
