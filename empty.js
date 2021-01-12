 // Scene Camera & Renderer
			
 const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true});
 renderer.setSize(window.innerWidth, window.innerHeight);
	 
 renderer.setSize( window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement );
 
 renderer.shadowMap.enabled = true;
 renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 
 scene = new THREE.Scene();
 scene.background = new THREE.Color( 0xcce0ff );
 //scene.fog = new THREE.Fog( 0xcce0ff, 1, 75 );
	 
 scene.position.x += 0.6;
 let camera, camera2;
 let cameraActive = true;
 let camera2Active = false;
 
 camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.5, 1000 );
 camera2 = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.5, 1000 );

 scene.add( camera );
 scene.add( camera2 );
 
 camera.position.set( 0, 9, 15 );
 camera2.position.set( 0, 1, 5 );

 let domEvents	= new THREEx.DomEvents(camera, renderer.domElement);
 
// Sounds

 const listener = new THREE.AudioListener();
 camera.add( listener ); 

 const sound = new THREE.Audio( listener );
 const sound1 = new THREE.Audio( listener );
 const sound2 = new THREE.Audio( listener );
 const sound3 = new THREE.Audio( listener );
 const sound4 = new THREE.Audio( listener );
 const sound5 = new THREE.Audio( listener );
 const sound6 = new THREE.Audio( listener );
 const sound7 = new THREE.Audio( listener );
 const sound8 = new THREE.Audio( listener );

 /*const audioLoader1 = new THREE.AudioLoader();
 audioLoader1.load( './assets/sounds/ambiant.mp3', function( buffer ) {
 sound1.setBuffer( buffer );
 sound1.setLoop( true );
 sound1.setVolume( 0.5 );
 sound1.play();
});*/

// Loading screen

const loadingManager = new THREE.LoadingManager( () => {
 
 const loadingScreen = document.getElementById( 'loading-screen' );
 loadingScreen.classList.add( 'fade-out' );
 loadingScreen.addEventListener( 'transitionend', onTransitionEnd );  
});	

// Materials	
	 
 const plaf_material = new THREE.MeshStandardMaterial( { color: 0xFFFFF0 } );
 const charpente_material = new THREE.MeshPhongMaterial();
 const tuiles_material = new THREE.MeshStandardMaterial( { color: 0x48382c } );
 const basic_material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
 const house_material = new THREE.MeshStandardMaterial( { color: 0xaca89f } );
 const house2_material = new THREE.MeshStandardMaterial( { color: 0xaca89f } );
 const house3_material = new THREE.MeshStandardMaterial( { color: 0xaca89f } );
 const isol_material = new THREE.MeshStandardMaterial( { color: 0xaca89f } );
 const isol2_material = new THREE.MeshStandardMaterial( { color: 0xaca89f } );
 const glass_material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, metalness: 0.25, roughness: 0.1, transmission: 0.9, transparent: true } );
 const wood_material = new THREE.MeshPhongMaterial();
 const wood_material2 = new THREE.MeshPhongMaterial();
 const stairs_material = new THREE.MeshPhongMaterial();
 const clouds_material = new THREE.MeshStandardMaterial( {fog: true} );
 const pavement_material = new THREE.MeshPhongMaterial();
 const shutter_material = new THREE.MeshPhongMaterial();
 const door_material = new THREE.MeshPhongMaterial();
 const sky_material = new THREE.MeshBasicMaterial( {fog: true} );
 const groundMaterial = new THREE.MeshStandardMaterial();
 const groundMaterial2 = new THREE.MeshStandardMaterial( { color: 0x808080 } );
 const gravel_material = new THREE.MeshPhongMaterial();
 const mud_material = new THREE.MeshPhongMaterial();
 const hedge_material = new THREE.MeshPhongMaterial();
 
 const loader = new THREE.OBJLoader( loadingManager );

 const quaternion = new THREE.Quaternion();
 const euler = new THREE.Euler( 0, -1.6, 0, 'XYZ' );
 const targetQuaternion = new THREE.Quaternion();
 targetQuaternion.setFromEuler( euler );

 const euler2 = new THREE.Euler( 0, -0, 0, 'XYZ' );
 const targetQuaternion2 = new THREE.Quaternion();
 targetQuaternion2.setFromEuler( euler2 );

 const euler3 = new THREE.Euler( 0, 1.6, 0, 'XYZ' );
 const targetQuaternion3 = new THREE.Quaternion();
 targetQuaternion3.setFromEuler( euler3 );

 const euler4 = new THREE.Euler( 0, -6.28, 0, 'XYZ' );
 const targetQuaternion4 = new THREE.Quaternion();
 targetQuaternion4.setFromEuler( euler4 );

 const euler5 = new THREE.Euler( 0, 6.28, 0, 'XYZ' );
 const targetQuaternion5 = new THREE.Quaternion();
 targetQuaternion5.setFromEuler( euler5 );

 const euler6 = new THREE.Euler( 0, -3.14, 0, 'XYZ' );
 const targetQuaternion6 = new THREE.Quaternion();
 targetQuaternion6.setFromEuler( euler6 );

 const euler7 = new THREE.Euler( 0, 3.14, 0, 'XYZ' );
 const targetQuaternion7 = new THREE.Quaternion();
 targetQuaternion7.setFromEuler( euler7 );	

 //scene.overrideMaterial = new THREE.MeshStandardMaterial( { color: 0xaca89f, wireframe: true } );

// objects

loader.load(
	'./assets/obj/house.obj', function (object) {			

	object.traverse(function(child){child.castShadow = true;});
	object.traverse(function(child){child.receiveShadow = true;});

	house2Norm = new THREE.TextureLoader().load( './assets/textures/houseN2.jpg' );
	house2Norm.wrapS = house2Norm.wrapT = THREE.RepeatWrapping;
	house2Norm.repeat.set(50, 50);

	object.traverse( function( child ) {
	if ( child instanceof THREE.Mesh ) {
	child.material = house2_material;


	child.material.normalMap = house2Norm;
	child.material.normalScale = new THREE.Vector2(0.5, 0.5);
	}
	} );
	
	model = object;
	   scene.add( model );		
	model.visible = true;
});

loader.load(
	'./assets/obj/terrasse.obj', function (object) {

		 object.traverse(function(child){child.castShadow = true;});
	   object.traverse(function(child){child.receiveShadow = true;});

		 terrTexture = new THREE.TextureLoader().load( './assets/textures/terrasseD.jpg' );
		 terrTexture.wrapS = terrTexture.wrapT = THREE.RepeatWrapping;
		 terrTexture.repeat.set(10, 10);
   
		 terrSpec = new THREE.TextureLoader().load( './assets/textures/terrasseS.jpg' );
		 terrSpec.wrapS = terrSpec.wrapT = THREE.RepeatWrapping;
		 terrSpec.repeat.set(10, 10);
   
		 terrNorm = new THREE.TextureLoader().load( './assets/textures/terrasseN.jpg' );
		 terrNorm.wrapS = terrNorm.wrapT = THREE.RepeatWrapping;
		 terrNorm.repeat.set(10, 10);
   
		 object.traverse( function( child ) {
		 if ( child instanceof THREE.Mesh ) {
		 child.material = pavement_material;
		 child.material.map = terrTexture;
		 child.material.specularMap = terrSpec;
		 child.material.normalMap = terrNorm;
		 child.material.side = THREE.FrontSide;
		 
		 child.material.shininess = 20;
		 child.material.reflectivity = 1;
		 child.material.normalScale = new THREE.Vector2(2, 2);
		 }
	  } );
	 
	 terrasse = object;
	scene.add( terrasse );		
	 terrasse.visible = true;
	 
	 domEvents.addEventListener(terrasse, 'click', function(event){

	 const audioLoader3 = new THREE.AudioLoader();
	 audioLoader3.load( './assets/sounds/steps.mp3', function( buffer ) {
	 sound3.setBuffer( buffer );
	 sound3.setLoop( false );
	 sound3.setVolume( 0.3 );
	 sound3.playbackRate = 1.5;
	 sound3.play();
});			  	
	 }, false)
});

loader.load(
	'./assets/obj/charpente.obj', function (object) {

	object.traverse(function(child){child.castShadow = true;});
	object.traverse(function(child){child.receiveShadow = true;});

	charpenteTexture = new THREE.TextureLoader().load( './assets/textures/charpenteD.jpg' );
	charpenteSpec = new THREE.TextureLoader().load( './assets/textures/charpenteS.jpg' );
	charpenteNorm = new THREE.TextureLoader().load( './assets/textures/charpenteN.jpg' );

	object.traverse( function( child ) {
	if ( child instanceof THREE.Mesh ) {
	child.material = charpente_material;
	child.material.map = charpenteTexture;
	child.material.roughnessMap = charpenteSpec;
	child.material.normalMap = charpenteNorm;
	
	child.material.shininess = 20;
	child.material.normalScale = new THREE.Vector2(0.5, 0.5);
	}
	} );
	
	charpente = object;
	scene.add( charpente );		
	charpente.visible = true;		
});

loader.load(
	'./assets/obj/chevrons.obj', function (object) {

	object.traverse(function(child){child.castShadow = true;});
	object.traverse(function(child){child.receiveShadow = true;});

	charpenteTexture = new THREE.TextureLoader().load( './assets/textures/charpenteD.jpg' );
	charpenteSpec = new THREE.TextureLoader().load( './assets/textures/charpenteS.jpg' );
	charpenteNorm = new THREE.TextureLoader().load( './assets/textures/charpenteN.jpg' );

	object.traverse( function( child ) {
	if ( child instanceof THREE.Mesh ) {
	child.material = charpente_material;
	child.material.map = charpenteTexture;
	child.material.roughnessMap = charpenteSpec;
	child.material.normalMap = charpenteNorm;
	
	child.material.shininess = 20;
	child.material.normalScale = new THREE.Vector2(0.5, 0.5);
	}
	} );
	
	chevrons = object;
	scene.add( chevrons );		
	chevrons.visible = true;		
});

loader.load(
	'./assets/obj/liteaux.obj', function (object) {
		
	object.traverse(function(child){child.castShadow = true;});
	object.traverse(function(child){child.receiveShadow = true;});

	charpenteTexture = new THREE.TextureLoader().load( './assets/textures/charpenteD.jpg' );
	charpenteSpec = new THREE.TextureLoader().load( './assets/textures/charpenteS.jpg' );
	charpenteNorm = new THREE.TextureLoader().load( './assets/textures/charpenteN.jpg' );

	object.traverse( function( child ) {
	if ( child instanceof THREE.Mesh ) {
	child.material = charpente_material;
	child.material.map = charpenteTexture;
	child.material.roughnessMap = charpenteSpec;
	child.material.normalMap = charpenteNorm;
	
	child.material.shininess = 20;
	child.material.normalScale = new THREE.Vector2(0.5, 0.5);
	}
	} );
	
	liteaux = object;
		scene.add( liteaux );		
	liteaux.visible = true;		
});

// Sky

/*loader.load(
	'./assets/obj/nuages1.obj', function (object) {

	object.traverse(function(child){child.castShadow = false;});
	  object.traverse(function(child){child.receiveShadow = false;});

	  cloudTexture = new THREE.TextureLoader().load( './assets/textures/clouds.png' );

	object.traverse( function( child ) {
	if ( child instanceof THREE.Mesh ) {
	  child.material = clouds_material;
	  child.material.map = cloudTexture;
	  child.material.transparent = true;
	  child.material.side = THREE.BackSide;
	}
	} );

	nuages1 = object;
	nuages1.visible = true;	
});	

loader.load(
		'./assets/obj/nuages2.obj', function (object) {

		object.traverse(function(child){child.castShadow = false;});
		object.traverse(function(child){child.receiveShadow = false;});
		
		cloudTexture = new THREE.TextureLoader().load( './assets/textures/clouds.png' );

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = clouds_material;
		child.material.map = cloudTexture;
		child.material.transparent = true;
		child.material.side = THREE.BackSide;
		}
		} );

		nuages2 = object;
		nuages2.visible = true;
});	

loader.load(
		'./assets/obj/nuages3.obj', function (object) {

		object.traverse(function(child){child.castShadow = false;});
		object.traverse(function(child){child.receiveShadow = false;});
		
		cloudTexture = new THREE.TextureLoader().load( './assets/textures/clouds.png' );

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = clouds_material;
		child.material.map = cloudTexture;
		child.material.transparent = true;
		child.material.side = THREE.BackSide;
		}
		} );

		nuages3 = object;
		nuages3.visible = true;	

		group_nuages = new THREE.Group;
		group_nuages.add( nuages1 );
		group_nuages.add( nuages2 );
		group_nuages.add( nuages3 );

		scene.add( group_nuages);
		group_nuages.scale.x = 0.7;
		group_nuages.scale.y = 0.5;
		group_nuages.scale.z = 0.7;
});				

// Skydome

const sky = new THREE.SphereGeometry( 75, 32, 32 );
skyMap = new THREE.TextureLoader().load( './assets/textures/envmap.png' );
const sphere = new THREE.Mesh( sky, sky_material );

sky_material.side = THREE.BackSide;
sky_material.map = skyMap;

sphere.position.y += 15;
sphere.visible = false;

scene.add( sphere );*/

// Lights

     scene.add( new THREE.AmbientLight( 0xffffff, 0.15 ) );
         
	 const light = new THREE.SpotLight( 0xffffff, 1.8 );
	 light.position.set( 100, 100, 100 );   
	 light.castShadow = true;
	 light.angle = 2.5;

	 light.shadow.mapSize = new THREE.Vector2(4096, 4096);
	 light.shadow.camera.near = 15;
	 light.shadow.camera.far = 5000;
	 light.shadow.focus = 0.05;
	 light.shadow.radius = 1;
	 light.shadow.bias = 0.00001;
	 light.shadow.normalBias = 0.02;

	 scene.add( light );

     const textureLoader = new THREE.TextureLoader();

     const textureFlare0 = textureLoader.load( "./examples/textures/lensflare/lensflare0.png" );
     const textureFlare1 = textureLoader.load( "./examples/textures/lensflare/lensflare2.png" );
     const textureFlare2 = textureLoader.load( "./examples/textures/lensflare/lensflare3.png" );

	 const lensflare = new THREE.Lensflare();

     lensflare.addElement( new THREE.LensflareElement( textureFlare0, 1024, 0 ) );
     lensflare.addElement( new THREE.LensflareElement( textureFlare1, 1024, 0 ) );
     lensflare.addElement( new THREE.LensflareElement( textureFlare2, 120, 0.6 ) );

	 light.add( lensflare );
     
     const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.25 );
     directionalLight.position.y = 3;
     directionalLight.position.x = -5;
	 directionalLight.position.z = -5;

	 scene.add( directionalLight );
	 
// Grid

const gridHelper = new THREE.GridHelper( 20, 40, 0xf29131, 0xA9A9A9);
     scene.add( gridHelper );		
     gridHelper.position.y -= 0.03;
         
// Floor

const ground = new THREE.PlaneGeometry( 1000, 1000, 10, 10 );
          
     mesh = new THREE.Mesh( ground, groundMaterial2 );
     scene.add( mesh );
     
     mesh.position.y -= 0.275;
     mesh.rotateX( - Math.PI / 2 );
     mesh.receiveShadow = true;
	 mesh.castShadow = true;

	 
// PostProcessing

const width = window.innerWidth;
const height = window.innerHeight;

const composer = new THREE.EffectComposer( renderer );
composer.setSize(window.innerWidth, window.innerHeight);

const renderPass = new THREE.RenderPass( scene, camera );
composer.addPass( renderPass );

// BLOOM		

const params = {
exposure: 1,
bloomStrength: 0.15,
bloomThreshold: 0.99,
bloomRadius: 1
};

const bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
bloomPass.threshold = params.bloomThreshold;
bloomPass.strength = params.bloomStrength;
bloomPass.radius = params.bloomRadius;

composer.addPass( bloomPass );

// SMAA

const pass = new THREE.SMAAPass( window.innerWidth * renderer.getPixelRatio(), window.innerHeight * renderer.getPixelRatio() );
composer.addPass( pass ); 
 
// Controls		
     
const controls = new THREE.OrbitControls( camera, renderer.domElement );
const controls2 = new THREE.OrbitControls( camera2, renderer.domElement );
     
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
	 controls.target.set(0, 1, 0);
	 
	 controls2.maxPolarAngle = Math.PI / 2.05;
     controls2.minPolarAngle = Math.PI / 3;
     controls2.enableDamping = true;
     controls2.enablePan = false;
     controls2.dampingFactor = 0.1;
     controls2.maxDistance = 15;
     controls2.minDistance = 3;
     controls2.zoomSpeed = 0.5;
     controls2.panSpeed = 0.5;
	 controls2.rotateSpeed = 0.5;
	 controls2.target.set(0, 1, 0);

// Animation & render

function animate() {

	if (cameraActive)
	{  renderer.render( scene, camera );  }
	else
	{  renderer.render( scene, camera2 );  }

     renderer.setPixelRatio(window.devicePixelRatio);
     composer.setPixelRatio(window.devicePixelRatio);
    
	   requestAnimationFrame(animate);
	   
	   /*nuages1.rotation.y += 0.0005;
	   nuages2.rotation.y -= 0.0005;
	   nuages3.rotation.y += 0.0005;*/
 
	 controls.update();
	 controls2.update();

       if (resizeRendererToDisplaySize(renderer)) {
     const canvas = renderer.domElement;
	 camera.aspect = canvas.clientWidth / canvas.clientHeight;
	 camera2.aspect = canvas.clientWidth / canvas.clientHeight;
	 camera.updateProjectionMatrix();
	 camera2.updateProjectionMatrix();
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

function onTransitionEnd( event ) {

     const element = event.target;
     element.remove();

}