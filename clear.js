// Scene Camera & Renderer
			
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true});
renderer.setSize(window.innerWidth, window.innerHeight);
    
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

    renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xcce0ff );
    scene.fog = new THREE.Fog( 0xcce0ff, 1, 150 );
        
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set( 0, 9, 15 ); 
camera.rotation.set (-0.4, 0, 0);
    
    const basic_material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
    const glass_material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, metalness: 0.25, roughness: 0.1, transmission: 0.9, transparent: true } );
    const loader = new THREE.OBJLoader();
                        
// Lights

  const amb = new THREE.AmbientLight( 0x666666, 0.25 );
scene.add ( amb );

  amb.visible = true;
    
const light = new THREE.SpotLight( 0xdfebff, 2 );
light.position.set( 100, 50, 100 );   
light.castShadow = true;

light.shadow.mapSize = new THREE.Vector2(2048, 2048);
    light.shadow.camera.near = 15;
    light.shadow.camera.far = 1000;
    light.shadow.focus = 0.075;
    light.shadow.radius = 1;
    light.shadow.bias = 0.00001;
    light.shadow.normalBias = 0.02;

scene.add( light );

light.visible = true;

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.25 );
directionalLight.position.y = 3;
directionalLight.position.x = -5;
directionalLight.position.z = -5;

scene.add( directionalLight );

directionalLight.visible = true;

// Grid

const gridHelper = new THREE.GridHelper( 20, 40, 0xf29131, 0xA9A9A9);
scene.add( gridHelper );
   
gridHelper.position.y -= 0.03;
        
// Floor

const ground = new THREE.PlaneGeometry( 1000, 1000, 10, 10 );
    
    floorTexture = new THREE.TextureLoader().load( './assets/textures/GrassD.png' );
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(300, 300);
    floorTexture.anisotropy = 16;
    
    const groundMaterial = new THREE.MeshStandardMaterial({map: floorTexture}),
    
    mesh = new THREE.Mesh( ground, groundMaterial );
    scene.add( mesh );
    
    mesh.position.y -= 0.045;
    mesh.rotateX( - Math.PI / 2 );
    mesh.receiveShadow = true;
    mesh.castShadow = true;
            
// Controls		
    
const controls = new THREE.OrbitControls( camera, renderer.domElement );
  
controls.maxPolarAngle = Math.PI / 2.25;
controls.minPolarAngle = Math.PI / 5;
controls.enableDamping = true;
controls.enablePan = true;
controls.dampingFactor = 0.1;
controls.autoRotate = false;
controls.autoRotateSpeed = 1;
controls.maxDistance = 60;
controls.minDistance = 3;
controls.zoomSpeed = 0.5;
controls.panSpeed = 0.5;
controls.rotateSpeed = 0.5;

// Animation & render

function animate() {

renderer.render(scene, camera);
  
requestAnimationFrame(animate);

controls.update();

if (resizeRendererToDisplaySize(renderer)) {
const canvas = renderer.domElement;
camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix();
}
}

animate();

function resizeRendererToDisplaySize(renderer) {
const canvas = renderer.domElement;
var width = window.innerWidth;
var height = window.innerHeight;
var canvasPixelWidth = canvas.width / window.devicePixelRatio;
var canvasPixelHeight = canvas.height / window.devicePixelRatio;

const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
if (needResize) {

renderer.setSize(width, height, true);
}
return needResize;
}
