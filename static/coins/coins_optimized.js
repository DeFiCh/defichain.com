import * as THREE from '/coins/build/three.module.js';

import { STLLoader } from '/coins/STLLoader.js';

import { BokehShader, BokehDepthShader } from '/coins/BokehShader2.js';

// environment configuration
const ambientColor = 0xbbbbbb;
// const backgroundColor = 0xffffff;
const fogColor = 0xf4f3f6;
const enablePostProcessing = false;

// coin configuration
const coinModelFilePath = '/coins/optimized.stl';
const numberOfCoins = 7;
const coinColor = 0xcccccc;
const coinSpecularColor = 0xffffff;
const coinScale = 60;
const coinSpawnRangeX = 900;
const coinSpawnRangeY = coinScale * 40;
const coinSpawnRangeZ = 900;
const fallSpeed= 4;

// factors that influence how the coins rotate
const tumbleFactor = 0.2;
const spinFactor = 0.01;
const rollFactor = 0.01;

// positional ranges
const startY = 1800;
const endY = 0;

var container;
var camera, scene, renderer, materialDepth;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

// post processing settings
var postprocessing = {enabled: enablePostProcessing};

var shaderSettings = {
    rings: 3,
    samples: 4
};

var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var distance = 100;
var target = new THREE.Vector3(0, 1, 0);
var effectController = {
    enabled: enablePostProcessing,
    jsDepthCalculation: true,
    shaderFocus: false,

    fstop: 2.2,
    maxblur: 1.0,

    showFocus: false,
    focalDepth: 2.8,
    manualdof: false,
    vignetting: false,
    depthblur: false,

    threshold: 0.5,
    gain: 2.0,
    bias: 0.5,
    fringe: 0.7,

    focalLength: 16,
    noise: true,
    pentagon: false,

    dithering: 0.0001
};

init();
animate();

function init() {
    container = document.createElement('div');
    document.getElementById('hero-coins').appendChild(container);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
    camera.setFocalLength(16);

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(backgroundColor);
    scene.fog = new THREE.Fog(fogColor, 800, startY - endY);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    container.appendChild(renderer.domElement);

    const depthShader = BokehDepthShader;

    materialDepth = new THREE.ShaderMaterial({
        uniforms: depthShader.uniforms,
        vertexShader: depthShader.vertexShader,
        fragmentShader: depthShader.fragmentShader
    });

    materialDepth.uniforms['mNear'].value = camera.near;
    materialDepth.uniforms['mFar'].value = camera.far;

    // skybox
    var r = '/coins/textures/';
    var urls = [r + 'px.jpg', r + 'nx.jpg',
        r + 'py.jpg', r + 'ny.jpg',
        r + 'pz.jpg', r + 'nz.jpg'];

    var textureCube = new THREE.CubeTextureLoader().load(urls);

    // adding numberOfCoins
    var stlLoader = new STLLoader();
    stlLoader.load(coinModelFilePath, function (geometry) {

        geometry.computeVertexNormals();

        const material = new THREE.MeshPhongMaterial({
            specular: coinSpecularColor,
            color: coinColor,
            envMap: textureCube,
            shininess: 0.01,
            reflectivity: 0.01,
            flatShading: false
        });

        for (var i = 0; i < numberOfCoins; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = Math.floor(Math.random() * coinSpawnRangeX - (coinSpawnRangeX / 2));
            mesh.position.y = Math.floor(Math.random() * coinSpawnRangeY - (coinSpawnRangeY / 2));
            mesh.position.z = Math.floor(Math.random() * coinSpawnRangeZ - (coinSpawnRangeZ / 2));
            mesh.scale.setScalar(coinScale);
            mesh.custom = {
                fallSpeedFactor: Math.random(),
                xRotationFactor: Math.random(),
                yRotationFactor: Math.random(),
                zRotationFactor: Math.random()
            };
            mesh.rotation.x = 10 * mesh.custom.xRotationFactor; // tumble
            mesh.rotation.y = 10 * mesh.custom.yRotationFactor; // spin
            // mesh.rotation.z = 10 * mesh.custom.zRotationFactor; // roll
            scene.add(mesh);
        }

    });

    // lights
    scene.add(new THREE.AmbientLight(ambientColor));

    var directionalLight = new THREE.DirectionalLight(0xffffff, .2);
    directionalLight.position.set(100, 0, 0).normalize();
    directionalLight.target.position.set( 100, 200, 300);
    scene.add(directionalLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, .1);
    directionalLight.position.set(-100, 0, 0).normalize();
    directionalLight.target.position.set( 300, 100, 200);
    scene.add(directionalLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, .2);
    directionalLight.position.set(0, -500, 0).normalize();
    directionalLight.target.position.set( 0, 1000, 0 );
    scene.add(directionalLight);

    initPostprocessing();

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStartOrMove, false);
    document.addEventListener('touchmove', onDocumentTouchStartOrMove, false);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    postprocessing.rtTextureDepth.setSize(window.innerWidth, window.innerHeight);
    postprocessing.rtTextureColor.setSize(window.innerWidth, window.innerHeight);

    postprocessing.bokeh_uniforms['textureWidth'].value = window.innerWidth;
    postprocessing.bokeh_uniforms['textureHeight'].value = window.innerHeight;

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouse.x = (event.clientX - windowHalfX) / windowHalfX;
    mouse.y = -(event.clientY - windowHalfY) / windowHalfY;

    postprocessing.bokeh_uniforms['focusCoords'].value.set(event.clientX / window.innerWidth, 1 - (event.clientY / window.innerHeight));
}

function onDocumentTouchStartOrMove(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
        mouse.x = (event.touches[0].pageX - windowHalfX) / windowHalfX;
        mouse.y = -(event.touches[0].pageY - windowHalfY) / windowHalfY;
    }
}

function initPostprocessing() {
    postprocessing.scene = new THREE.Scene();

    postprocessing.camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -10000, 10000);
    postprocessing.camera.position.z = 100;

    postprocessing.scene.add(postprocessing.camera);

    var pars = {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat};
    postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, pars);
    postprocessing.rtTextureColor = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, pars);

    var bokeh_shader = BokehShader;

    postprocessing.bokeh_uniforms = THREE.UniformsUtils.clone(bokeh_shader.uniforms);

    postprocessing.bokeh_uniforms['tColor'].value = postprocessing.rtTextureColor.texture;
    postprocessing.bokeh_uniforms['tDepth'].value = postprocessing.rtTextureDepth.texture;
    postprocessing.bokeh_uniforms['textureWidth'].value = window.innerWidth;
    postprocessing.bokeh_uniforms['textureHeight'].value = window.innerHeight;

    postprocessing.materialBokeh = new THREE.ShaderMaterial({
        uniforms: postprocessing.bokeh_uniforms,
        vertexShader: bokeh_shader.vertexShader,
        fragmentShader: bokeh_shader.fragmentShader,
        defines: {
            RINGS: shaderSettings.rings,
            SAMPLES: shaderSettings.samples
        }
    });

    postprocessing.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight), postprocessing.materialBokeh);
    postprocessing.quad.position.z = -500;
    postprocessing.scene.add(postprocessing.quad);
}

function animate() {
    requestAnimationFrame(animate, renderer.domElement);
    render();
}

function linearize(depth) {
    const zFar = camera.far;
    const zNear = camera.near;
    return -zFar * zNear / (depth * (zFar - zNear) - zFar);
}

function smoothStep(near, far, depth) {
    const x = saturate((depth - near) / (far - near));
    return x * x * (3 - 2 * x);
}

function saturate(x) {
    return Math.max(0, Math.min(1, x));
}

function render() {
    const time = Date.now() * 0.00015;

    camera.lookAt(target);
    camera.updateMatrixWorld();

    scene.traverse(function (coin) {
        if (coin instanceof THREE.Mesh) {
            coin.position.y = coin.position.y - fallSpeed;
            coin.rotation.x += tumbleFactor * coin.custom.xRotationFactor; // tumble
            coin.rotation.y += spinFactor * coin.custom.yRotationFactor; // spin
            coin.rotation.z += rollFactor * coin.custom.zRotationFactor; // roll

            if (coin.position.y < endY - 300) {
                coin.position.y = startY;
            }
        }
    });

    if (effectController.jsDepthCalculation) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        const targetDistance = (intersects.length > 0) ? intersects[0].distance : 1000;
        distance += (targetDistance - distance) * 0.03;
        const sdistance = smoothStep(camera.near, camera.far, distance);
        const ldistance = linearize(1 - sdistance);
        postprocessing.bokeh_uniforms['focalDepth'].value = ldistance;
        effectController['focalDepth'] = ldistance;
    }

    if (postprocessing.enabled) {
        renderer.clear();

        // render scene into texture
        renderer.setRenderTarget(postprocessing.rtTextureColor);
        renderer.clear();
        renderer.render(scene, camera);

        // render depth into texture
        scene.overrideMaterial = materialDepth;
        renderer.setRenderTarget(postprocessing.rtTextureDepth);
        renderer.clear();
        renderer.render(scene, camera);
        scene.overrideMaterial = null;

        // render bokeh composite
        renderer.setRenderTarget(null);
        renderer.render(postprocessing.scene, postprocessing.camera);
    } else {
        scene.overrideMaterial = null;

        renderer.setRenderTarget(null);
        renderer.clear();
        renderer.render(scene, camera);
    }

}

