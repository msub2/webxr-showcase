extends Spatial
 
var webxr_interface
var vr_supported = false
 
func _ready() -> void:
	$CanvasLayer/Button.connect("pressed", self, "_on_Button_pressed")
 
	webxr_interface = ARVRServer.find_interface("WebXR")
	if webxr_interface:
		webxr_interface.connect("session_supported", self, "_webxr_session_supported")
		webxr_interface.connect("session_started", self, "_webxr_session_started")
		webxr_interface.connect("session_ended", self, "_webxr_session_ended")
		webxr_interface.connect("session_failed", self, "_webxr_session_failed")
 
		webxr_interface.is_session_supported("immersive-vr")
 
func _webxr_session_supported(session_mode: String, supported: bool) -> void:
	if session_mode == 'immersive-vr':
		vr_supported = supported
 
func _on_Button_pressed() -> void:
	if not vr_supported:
		OS.alert("Your browser doesn't support VR")
		return
 
	webxr_interface.session_mode = 'immersive-vr'

	webxr_interface.requested_reference_space_types = 'bounded-floor, local-floor, local'

	webxr_interface.required_features = 'local-floor'
	webxr_interface.optional_features = 'bounded-floor'
 
	if not webxr_interface.initialize():
		OS.alert("Failed to initialize")
		return
 
func _webxr_session_started() -> void:
	get_viewport().arvr = true

	print ("Reference space type: " + webxr_interface.reference_space_type)
 
func _webxr_session_ended() -> void:
	get_viewport().arvr = false
 
func _webxr_session_failed(message: String) -> void:
	OS.alert("Failed to initialize: " + message)
