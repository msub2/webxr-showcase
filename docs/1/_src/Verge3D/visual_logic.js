/**
 * Generated by Verge3D Puzzles v.3.5.0
 * Tue Jan 26 2021 00:23:38 GMT-0500 (Eastern Standard Time)
 * Prefer not editing this file as your changes may get overridden once Puzzles are saved.
 * Check out https://www.soft8soft.com/docs/manual/en/introduction/Using-JavaScript.html
 * for the information on how to add your own JavaScript to Verge3D apps.
 */

'use strict';

(function() {

// global variables/constants used by puzzles' functions

var LIST_NONE = '<none>';

var _pGlob = {};

_pGlob.objCache = {};
_pGlob.fadeAnnotations = true;
_pGlob.objClickInfo = [];
_pGlob.pickedObject = '';
_pGlob.objHoverInfo = [];
_pGlob.hoveredObject = '';
_pGlob.objMovementInfos = {};
_pGlob.objDragOverCallbacks = [];
_pGlob.objDragOverInfoByBlock = {}
_pGlob.dragMoveOrigins = {};
_pGlob.dragScaleOrigins = {};
_pGlob.mediaElements = {};
_pGlob.loadedFiles = {};
_pGlob.loadedFile = '';
_pGlob.promiseValue = '';
_pGlob.animMixerCallbacks = [];
_pGlob.arHitPoint = new v3d.Vector3(0, 0, 0);
_pGlob.states = [];
_pGlob.percentage = 0;
_pGlob.animateParamUpdate = null;
_pGlob.openedFile = '';
_pGlob.xrSessionAcquired = false;
_pGlob.xrSessionCallbacks = [];
_pGlob.screenCoords = new v3d.Vector2();
_pGlob.gamepadIndex = 0;

_pGlob.AXIS_X = new v3d.Vector3(1, 0, 0);
_pGlob.AXIS_Y = new v3d.Vector3(0, 1, 0);
_pGlob.AXIS_Z = new v3d.Vector3(0, 0, 1);
_pGlob.MIN_DRAG_SCALE = 10e-4;
_pGlob.SET_OBJ_ROT_EPS = 1e-8;

_pGlob.vec2Tmp = new v3d.Vector2();
_pGlob.vec2Tmp2 = new v3d.Vector2();
_pGlob.vec3Tmp = new v3d.Vector3();
_pGlob.vec3Tmp2 = new v3d.Vector3();
_pGlob.vec3Tmp3 = new v3d.Vector3();
_pGlob.vec3Tmp4 = new v3d.Vector3();
_pGlob.eulerTmp = new v3d.Euler();
_pGlob.eulerTmp2 = new v3d.Euler();
_pGlob.quatTmp = new v3d.Quaternion();
_pGlob.quatTmp2 = new v3d.Quaternion();
_pGlob.colorTmp = new v3d.Color();
_pGlob.mat4Tmp = new v3d.Matrix4();
_pGlob.planeTmp = new v3d.Plane();
_pGlob.raycasterTmp = new v3d.Raycaster();
_pGlob.intervals = {};

var _pPhysics = {};

_pPhysics.tickCallbacks = [];
_pPhysics.syncList = [];
_pPhysics.consList = [];

// internal info
_pPhysics.collisionData = [];

// goes to collision callback
_pPhysics.collisionInfo = {
    objectA: '',
    objectB: '',
    distance: 0,
    positionOnA: [0, 0, 0],
    positionOnB: [0, 0, 0],
    normalOnB: [0, 0, 0]
};

var _noWebAudioReported = false;

var PL = v3d.PL = v3d.PL || {};

// a more readable alias for PL (stands for "Puzzle Logic")
v3d.puzzles = PL;

PL.procedures = PL.procedures || {};



PL.execInitPuzzles = function(options) {
    // always null, should not be available in "init" puzzles
    var appInstance = null;
    // app is more conventional than appInstance (used in exec script and app templates)
    var app = null;

    var _initGlob = {};
    _initGlob.percentage = 0;
    _initGlob.output = {
        initOptions: {
            fadeAnnotations: true,
            useBkgTransp: false,
            preserveDrawBuf: false,
            useCompAssets: false,
            useFullscreen: true,
            useCustomPreloader: false,
            preloaderStartCb: function() {},
            preloaderProgressCb: function() {},
            preloaderEndCb: function() {},
        }
    }

    // provide the container's id to puzzles that need access to the container
    _initGlob.container = options !== undefined && 'container' in options
            ? options.container : "";

    

    var PROC = {
    
};


    return _initGlob.output;
}

PL.init = function(appInstance, initOptions) {

// app is more conventional than appInstance (used in exec script and app templates)
var app = appInstance;

initOptions = initOptions || {};

if ('fadeAnnotations' in initOptions) {
    _pGlob.fadeAnnotations = initOptions.fadeAnnotations;
}



var PROC = {
    
};

// utility function envoked by almost all V3D-specific puzzles
// filter off some non-mesh types
function notIgnoredObj(obj) {
    return (obj.type !== "AmbientLight" && obj.name !== ""
            && !(obj.isMesh && obj.isMaterialGeneratedMesh));
}


// utility function envoked by almost all V3D-specific puzzles
// find first occurence of the object by its name
function getObjectByName(objName) {
    var objFound;
    var runTime = _pGlob !== undefined;
    objFound = runTime ? _pGlob.objCache[objName] : null;

    if (objFound && objFound.name === objName)
        return objFound;

    appInstance.scene.traverse(function(obj) {
        if (!objFound && notIgnoredObj(obj) && (obj.name == objName)) {
            objFound = obj;
            if (runTime) {
                _pGlob.objCache[objName] = objFound;
            }
        }
    });
    return objFound;
}


// utility function envoked by almost all V3D-specific puzzles
// retrieve all objects on the scene
function getAllObjectNames() {
    var objNameList = [];
    appInstance.scene.traverse(function(obj) {
        if (notIgnoredObj(obj))
            objNameList.push(obj.name)
    });
    return objNameList;
}


// utility function envoked by almost all V3D-specific puzzles
// retrieve all objects which belong to the group
function getObjectNamesByGroupName(targetGroupName) {
    var objNameList = [];
    appInstance.scene.traverse(function(obj){
        if (notIgnoredObj(obj)) {
            var groupNames = obj.groupNames;
            if (!groupNames)
                return;
            for (var i = 0; i < groupNames.length; i++) {
                var groupName = groupNames[i];
                if (groupName == targetGroupName) {
                    objNameList.push(obj.name);
                }
            }
        }
    });
    return objNameList;
}


// utility function envoked by almost all V3D-specific puzzles
// process object input, which can be either single obj or array of objects, or a group
function retrieveObjectNames(objNames) {
    var acc = [];
    retrieveObjectNamesAcc(objNames, acc);
    return acc;
}

function retrieveObjectNamesAcc(currObjNames, acc) {
    if (typeof currObjNames == "string") {
        acc.push(currObjNames);
    } else if (Array.isArray(currObjNames) && currObjNames[0] == "GROUP") {
        var newObj = getObjectNamesByGroupName(currObjNames[1]);
        for (var i = 0; i < newObj.length; i++)
            acc.push(newObj[i]);
    } else if (Array.isArray(currObjNames) && currObjNames[0] == "ALL_OBJECTS") {
        var newObj = getAllObjectNames();
        for (var i = 0; i < newObj.length; i++)
            acc.push(newObj[i]);
    } else if (Array.isArray(currObjNames)) {
        for (var i = 0; i < currObjNames.length; i++)
            retrieveObjectNamesAcc(currObjNames[i], acc);
    }
}




// utility function used by the whenClicked, whenHovered and whenDraggedOver puzzles
function initObjectPicking(callback, eventType, mouseDownUseTouchStart, mouseButtons) {

    var elem = appInstance.renderer.domElement;
    elem.addEventListener(eventType, pickListener);

    if (eventType == 'mousedown') {

        var touchEventName = mouseDownUseTouchStart ? 'touchstart' : 'touchend';
        elem.addEventListener(touchEventName, pickListener);

    } else if (eventType == 'dblclick') {

        var prevTapTime = 0;

        function doubleTapCallback(event) {

            var now = new Date().getTime();
            var timesince = now - prevTapTime;

            if (timesince < 600 && timesince > 0) {

                pickListener(event);
                prevTapTime = 0;
                return;

            }

            prevTapTime = new Date().getTime();
        }

        var touchEventName = mouseDownUseTouchStart ? 'touchstart' : 'touchend';
        elem.addEventListener(touchEventName, doubleTapCallback);
    }

    var raycaster = new v3d.Raycaster();

    function pickListener(event) {
        event.preventDefault();

        var xNorm = 0, yNorm = 0;
        if (event instanceof MouseEvent) {
            if (mouseButtons && mouseButtons.indexOf(event.button) == -1)
                return;
            xNorm = event.offsetX / elem.clientWidth;
            yNorm = event.offsetY / elem.clientHeight;
        } else if (event instanceof TouchEvent) {
            var rect = elem.getBoundingClientRect();
            xNorm = (event.changedTouches[0].clientX - rect.left) / rect.width;
            yNorm = (event.changedTouches[0].clientY - rect.top) / rect.height;
        }

        _pGlob.screenCoords.x = xNorm * 2 - 1;
        _pGlob.screenCoords.y = -yNorm * 2 + 1;
        raycaster.setFromCamera(_pGlob.screenCoords, appInstance.camera);
        var objList = [];
        appInstance.scene.traverse(function(obj){objList.push(obj);});
        var intersects = raycaster.intersectObjects(objList);
        callback(intersects, event);
    }
}

function objectsIncludeObj(objNames, testedObjName) {
    if (!testedObjName) return false;

    for (var i = 0; i < objNames.length; i++) {
        if (testedObjName == objNames[i]) {
            return true;
        } else {
            // also check children which are auto-generated for multi-material objects
            var obj = getObjectByName(objNames[i]);
            if (obj && obj.type == "Group") {
                for (var j = 0; j < obj.children.length; j++) {
                    if (testedObjName == obj.children[j].name) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

// utility function used by the whenClicked, whenHovered, whenDraggedOver, and raycast puzzles
function getPickedObjectName(obj) {
    // auto-generated from a multi-material object, use parent name instead
    if (obj.isMesh && obj.isMaterialGeneratedMesh && obj.parent) {
        return obj.parent.name;
    } else {
        return obj.name;
    }
}



_pGlob.getInputSource = function(controller) {
    if (controller && controller.userData.v3d && controller.userData.v3d.inputSource) {
        return controller.userData.v3d.inputSource
    } else {
        return null;
    }
};

_pGlob.traverseNonControllers = function(obj, callback) {

    if (obj.name.startsWith('XR_CONTROLLER_'))
        return;

    callback(obj);

    var children = obj.children;

    for (var i = 0, l = children.length; i < l; i++) {

        _pGlob.traverseNonControllers(children[i], callback);

    }

};

_pGlob.xrGetIntersections = function(controller) {

    controller.updateMatrixWorld(true);

    _pGlob.mat4Tmp.identity().extractRotation(controller.matrixWorld);

    var objList = [];

    _pGlob.traverseNonControllers(appInstance.scene, function(obj) {
        objList.push(obj);
    });

    var raycaster = new v3d.Raycaster();
    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, -1).applyMatrix4(_pGlob.mat4Tmp);

    return raycaster.intersectObjects(objList);

}

_pGlob.xrOnSelect = function(event) {

    var controller = event.target;

    var intersections = _pGlob.xrGetIntersections(controller);

    if (intersections.length > 0) {
        var intersection = intersections[0];
        var obj = intersection.object;

        // save the object for the pickedObject block
        _pGlob.pickedObject = getPickedObjectName(obj);

        _pGlob.objClickInfo.forEach(function(el) {
            var isPicked = obj && objectsIncludeObj(el.objNames, getPickedObjectName(obj));
            el.callbacks[isPicked ? 0 : 1]();
        });
    } else {
        _pGlob.objClickInfo.forEach(function(el) {
            // missed
            el.callbacks[1]();
        });
    }

}



// enterVRMode puzzle
function enterVRMode(refSpace, enterCb, exitCb, unAvailableCb) {

    var DEFAULT_DEPTH = 10;

    var _rayReticleDepth = [];
    var _hoveredObjects = [];

    function onControllerHover() {

        var controllers = appInstance.xrControllers;

        for (var i = 0; i < controllers.length; i++) {
            var controller = controllers[i];

            var intersections = _pGlob.xrGetIntersections(controller);

            if (intersections.length > 0) {
                var intersection = intersections[0];
                var obj = intersection.object;
                _rayReticleDepth[i] = intersection.distance;
            } else {
                var obj = null;
                _rayReticleDepth[i] = DEFAULT_DEPTH;
            }

            controller.children.forEach(function(child) {
                if (child.name.indexOf('_RAY') > -1) {
                    child.scale.z = _rayReticleDepth[i];
                } else if (child.name.indexOf('_RETICLE') > -1) {
                    // reduces crossing artefacts
                    child.position.z = -0.95 * _rayReticleDepth[i];
                }
            });

            var prevHovered = _hoveredObjects[i];
            var currHovered = obj ? getPickedObjectName(obj) : '';

            if (prevHovered == currHovered) {
                continue;
            }

            // first - all "out" callbacks, then - all "over"
            _pGlob.objHoverInfo.forEach(function(el) {
                if (objectsIncludeObj(el.objNames, prevHovered)) {
                    // ensure the correct value of the hoveredObject block
                    _pGlob.hoveredObject = prevHovered;
                    el.callbacks[1]();
                }
            });

            _pGlob.objHoverInfo.forEach(function(el) {
                if (objectsIncludeObj(el.objNames, currHovered)) {
                    // ensure the correct value of the hoveredObject block
                    _pGlob.hoveredObject = currHovered;
                    el.callbacks[0]();
                }
            });

            _hoveredObjects[i] = currHovered;
        }
    }

    switch (refSpace) {
        case 'SITTING':
            var referenceSpace = 'local-floor';
            break;
        case 'WALKING':
            var referenceSpace = 'unbounded';
            break;
        case 'ORIGIN':
            var referenceSpace = 'local';
            break;
        case 'ROOM':
            var referenceSpace = 'bounded-floor';
            break;
        case 'VIEWER':
            var referenceSpace = 'viewer';
            break;
        default:
            console.error('puzzles: Wrong VR reference space');
            return;
    }

    appInstance.initWebXR('immersive-vr', referenceSpace, function() {

        var controllers = appInstance.xrControllers;

        for (var i = 0; i < controllers.length; i++) {
            var controller = controllers[i];

            // clicks
            controller.addEventListener('select', _pGlob.xrOnSelect);

            _pGlob.xrSessionCallbacks.forEach(function(pair) {
                controller.addEventListener(pair[0], pair[1]);
            });
        }

        // hovers
        if (_pGlob.objHoverInfo.length && appInstance.renderCallbacks.indexOf(onControllerHover) == -1)
            appInstance.renderCallbacks.push(onControllerHover);

        _pGlob.xrSessionAcquired = true;

        enterCb();

    }, unAvailableCb, function() {

        var controllers = appInstance.xrControllers;

        for (var i = 0; i < controllers.length; i++) {
            var controller = controllers[i];

            controller.removeEventListener('select', _pGlob.xrOnSelect);

            _pGlob.xrSessionCallbacks.forEach(function(pair) {
                controller.removeEventListener(pair[0], pair[1]);
            });
        }

        var cbIdx = appInstance.renderCallbacks.indexOf(onControllerHover);
        if (cbIdx != -1)
            appInstance.renderCallbacks.splice(cbIdx, 1);

        _pGlob.xrSessionAcquired = false;

        exitCb();
    });
}



// checkVRMode puzzle
function checkVRMode(availableCb, unAvailableCb) {
    // COMPAT: < 2.13.1
    if (v3d.Detector.checkWebXR)
        v3d.Detector.checkWebXR('immersive-vr', availableCb, unAvailableCb);
    else
        appInstance.checkWebXR('immersive-vr', availableCb, unAvailableCb);
}



// utility functions envoked by the HTML puzzles
function getElements(ids, isParent) {
    var elems = [];
    if (Array.isArray(ids) && ids[0] != 'CONTAINER' && ids[0] != 'WINDOW' &&
        ids[0] != 'DOCUMENT' && ids[0] != 'BODY' && ids[0] != 'QUERYSELECTOR') {
        for (var i = 0; i < ids.length; i++)
            elems.push(getElement(ids[i], isParent));
    } else {
        elems.push(getElement(ids, isParent));
    }
    return elems;
}

function getElement(id, isParent) {
    var elem;
    if (Array.isArray(id) && id[0] == 'CONTAINER') {
        if (appInstance !== null) {
            elem = appInstance.container;
        } else if (typeof _initGlob !== 'undefined') {
            // if we are on the initialization stage, we still can have access
            // to the container element
            var id = _initGlob.container;
            if (isParent) {
                elem = parent.document.getElementById(id);
            } else {
                elem = document.getElementById(id);
            }
        }
    } else if (Array.isArray(id) && id[0] == 'WINDOW') {
        if (isParent)
            elem = parent;
        else
            elem = window;
    } else if (Array.isArray(id) && id[0] == 'DOCUMENT') {
        if (isParent)
            elem = parent.document;
        else
            elem = document;
    } else if (Array.isArray(id) && id[0] == 'BODY') {
        if (isParent)
            elem = parent.document.body;
        else
            elem = document.body;
    } else if (Array.isArray(id) && id[0] == 'QUERYSELECTOR') {
        if (isParent)
            elem = parent.document.querySelector(id);
        else
            elem = document.querySelector(id);
    } else {
        if (isParent)
            elem = parent.document.getElementById(id);
        else
            elem = document.getElementById(id);
    }
    return elem;
}



// eventHTMLElem puzzle
function eventHTMLElem(eventType, ids, isParent, callback) {
    var elems = getElements(ids, isParent);
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (!elem)
            continue;
        elem.addEventListener(eventType, callback, false);
    }
}



eventHTMLElem('click', 'vr_button', true, function(event) {
  checkVRMode(function() {
    enterVRMode('SITTING', function() {}, function() {}, function() {});
  }, function() {
    console.log('WebXR not enabled!');
  });
});



} // end of PL.init function

})(); // end of closure

/* ================================ end of code ============================= */
