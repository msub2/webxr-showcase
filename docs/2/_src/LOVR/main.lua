local motion = {
    pose = lovr.math.newMat4(), -- Transformation in VR initialized to origin (0,0,0) looking down -Z
    thumbstickDeadzone = 0.4,   -- Smaller thumbstick displacements are ignored (too much noise)
    directionFrom = 'head',     -- Movement can be relative to orientation of head or left controller
    flying = false,

    moveSpeed = 4,
}

function motion.smooth(dt)
    if lovr.headset.isTracked('left') then
        local x, y = lovr.headset.getAxis('left', 'thumbstick')
        local direction = quat(lovr.headset.getOrientation(motion.directionFrom)):direction()
        if not motion.flying then
            direction.y = 0
        end
        -- Smooth strafe movement
        if math.abs(x) > motion.thumbstickDeadzone then
            local strafeVector = quat(-math.pi / 2, 0,1,0):mul(vec3(direction))
            motion.pose:translate(strafeVector * x * motion.moveSpeed * dt)
        end
        -- Smooth Forward/backward movement
        if math.abs(y) > motion.thumbstickDeadzone then
            motion.pose:translate(direction * -y * motion.moveSpeed * dt)
        end
    end
end

function lovr.draw()
    -- Sky
    lovr.graphics.setBackgroundColor(0, 0, 1, 1)
    
    -- Set graphics transform before drawing objects
    lovr.graphics.transform(mat4(motion.pose):invert())
    
    -- Ground
    lovr.graphics.setColor(0, 1, 0, 1)
    lovr.graphics.plane('fill', 0, 0, 0, 10, 10, -1.571, 1, 0, 0)

    -- Controllers
    lovr.graphics.setColor(1, 1, 1, 1)
    for i, hand in ipairs(lovr.headset.getHands()) do
        local poseRW = mat4(lovr.headset.getPose(hand))
        local poseVR = mat4(motion.pose):mul(poseRW)
        poseVR:scale(.15)
        lovr.graphics.cube('fill', poseVR)
    end
end

function lovr.update(dt)
    motion.smooth(dt)
end