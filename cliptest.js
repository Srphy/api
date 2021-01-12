 // Scene Camera & Renderer
			
 const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true});
 renderer.setSize(window.innerWidth, window.innerHeight);
	 
 renderer.setSize( window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement );
 
 renderer.shadowMap.enabled = true;
 renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 renderer.localClippingEnabled = true;
 
 scene = new THREE.Scene();
 scene.background = new THREE.Color( 0xcce0ff );
 scene.fog = new THREE.Fog( 0xcce0ff, 1, 100 );
	 
 //scene.position.x += 0.6;
 
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.5, 1000 );
 
 camera.position.set( 0, 9, 15 );
 //camera.rotation.set (-0.4, 0, 0);

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
 const door_material = new THREE.MeshPhongMaterial( { color: 0xcdcdcd } );
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

const terrasse1 = new THREE.OBJLoader;
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
	 terrasse.visible = true;
	 //scene.add( terrasse)
});

// Clips

const params1 = {
	clipIntersection: true,
	planeConstant: 0,
	showHelpers: false,
};

const clipPlanes = [
	new THREE.Plane( new THREE.Vector3( 3, 0, 0 ), -0.2 ), // X1
	new THREE.Plane( new THREE.Vector3( -3, 0, 0 ), -0.2 ), // X2
	new THREE.Plane( new THREE.Vector3( 0, 35, 0 ), -0.2 ), // Y1
	new THREE.Plane( new THREE.Vector3( 0, -5, 0 ), -0.2 ), // Y2
	new THREE.Plane( new THREE.Vector3( 0, 0, 3 ), -0.2 ), // Z1
	new THREE.Plane( new THREE.Vector3( 0, 0, -3 ), -0.2 ) // Z2	
];

// helpers

	const helpers = new THREE.Group();
	helpers.add( new THREE.PlaneHelper( clipPlanes[ 0 ], 2, 0xff0000 ) );
	helpers.add( new THREE.PlaneHelper( clipPlanes[ 1 ], 2, 0xff0000 ) );
	helpers.add( new THREE.PlaneHelper( clipPlanes[ 2 ], 2, 0x00ff00 ) );
	helpers.add( new THREE.PlaneHelper( clipPlanes[ 3 ], 2, 0x00ff00 ) );
	helpers.add( new THREE.PlaneHelper( clipPlanes[ 4 ], 2, 0x0000ff ) );
	helpers.add( new THREE.PlaneHelper( clipPlanes[ 5 ], 2, 0x0000ff ) );
	helpers.visible = true;
	scene.add( helpers );

// gui

		const gui = new dat.GUI();

		gui.autoPlace = false;
		gui.domElement.id = 'gui';

		gui.add( params1, 'clipIntersection' ).name( 'clip intersection' ).onChange( function ( value ) {

			const children = group.children;

			for ( let i = -0; i < children.length; i ++ ) {

				children[ i ].material.clipIntersection = value;

			}

			renderer.render(scene, camera);

		} );

		gui.add( params1, 'planeConstant', - 1, 1 ).step( 0.01 ).name( 'plane constant' ).onChange( function ( value ) {

			for ( let j = 0; j < clipPlanes.length; j ++ ) {

				clipPlanes[ j ].constant = value;

			}

			renderer.render(scene, camera);

		} );

		gui.add( params1, 'showHelpers' ).name( 'show helpers' ).onChange( function ( value ) {

			helpers.visible = value;

			renderer.render(scene, camera);

		} );

// Lucarne 1

const Lcharpente1 = new THREE.OBJLoader();	
Lcharpente1.load(
		'./assets/obj/lucarnes/1/Lcharpente1.obj', function (object) {
		
		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});

		charpenteTexture = new THREE.TextureLoader().load( './assets/textures/poutreD.jpg' );
		charpenteSpec = new THREE.TextureLoader().load( './assets/textures/poutreS.jpg' );
		charpenteNorm = new THREE.TextureLoader().load( './assets/textures/poutreN.jpg' );

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = charpente_material;
		child.material.map = charpenteTexture;
		child.material.specularMap = charpenteSpec;
		child.material.normalMap = charpenteNorm;
		
		child.material.shininess = 200;
		child.material.normalScale = new THREE.Vector2(0.25, 0.25);
		}
		} );
	
		Charpente1 = object;		
		Charpente1.visible = true;	
});

const Lliteaux1 = new THREE.OBJLoader();
Lliteaux1.load(
		'./assets/obj/lucarnes/1/Lliteaux1.obj', function (object) {
	
		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});

		charpenteTexture = new THREE.TextureLoader().load( './assets/textures/poutreD.jpg' );
		charpenteSpec = new THREE.TextureLoader().load( './assets/textures/poutreS.jpg' );
		charpenteNorm = new THREE.TextureLoader().load( './assets/textures/poutreN.jpg' );

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = charpente_material;
		child.material.map = charpenteTexture;
		child.material.specularMap = charpenteSpec;
		child.material.normalMap = charpenteNorm;

		child.material.shininess = 200;
		child.material.normalScale = new THREE.Vector2(0.25, 0.25);
		}
		} );

		liteaux1 = object;	
		liteaux1.visible = true;	
});

const Ltuiles1 = new THREE.OBJLoader();
Ltuiles1.load(
		'./assets/obj/lucarnes/1/Ltuiles1.obj', function (object) {
	
		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = tuiles_material;
		child.material.transparent = true;	
		}
		} );

		tuiles1 = object;	
		tuiles1.visible = false;	

const group = new THREE.Group();
		group.add( Charpente1 );
		group.add( liteaux1 );
		group.add( tuiles1 );
		group.add( faitieres1);
		group.add( joues1);
		group.add( noues1);
		group.add( ciment1 );
		group.add( fenetre1 );
		scene.add( group );	

		objects.push( group );
		group.visible = true;
});

const Lfaitieres1 = new THREE.OBJLoader();
Lfaitieres1.load(
		'./assets/obj/lucarnes/1/Lfaitieres1.obj', function (object) {
			
		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = tuiles_material;
		child.material.transparent = true;		
		}
		} );

		faitieres1 = object;		
		faitieres1.visible = false;
});

const Ljoues1 = new THREE.OBJLoader();
Ljoues1.load(
		'./assets/obj/lucarnes/1/Ljoues1.obj', function (object) {			

		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});

		houseNorm = new THREE.TextureLoader().load( './assets/textures/houseN2.png' );
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
    	houseNorm.repeat.set(3, 3);

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = house_material;

		child.material.normalMap = houseNorm;
		child.material.normalScale = new THREE.Vector2(0.5, 0.5);
		}
        } );
	
		joues1 = object;		
		joues1.visible = true;		
});

const Lnoues1 = new THREE.OBJLoader();
Lnoues1.load(
		'./assets/obj/lucarnes/1/Lnoues1.obj', function ( object ) {

		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});
		
		object.traverse( function ( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = basic_material;
		}
		} );

		noues1 = object ;
		noues1.visible = true;
});

const Lciment1 = new THREE.OBJLoader();
Lciment1.load(
		'./assets/obj/lucarnes/1/Lciment1.obj', function ( object ) {
			
		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});
		
		houseNorm = new THREE.TextureLoader().load( './assets/textures/houseN2.png' );
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
    	houseNorm.repeat.set(3, 3);

		const cement_material = new THREE.MeshStandardMaterial( { color: 0xababab } );

		object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = cement_material;

		child.material.normalMap = houseNorm;
		child.material.normalScale = new THREE.Vector2(0.5, 0.5);
		}
        } );

		ciment1 = object ;
		ciment1.visible = false;
});

const Lfenetre1 = new THREE.OBJLoader();
Lfenetre1.load(
		'./assets/obj/lucarnes/1/Lfenetre1.obj', function ( object ) {

		object.traverse(function(child){child.castShadow = true;});
		object.traverse(function(child){child.receiveShadow = true;});
		
		object.traverse( function ( child ) {
		if ( child instanceof THREE.Mesh ) {
		child.material = basic_material;
		}
		} );

		fenetre1 = object ;
		fenetre1.visible = false;
});

loader.load(
	'./assets/obj/plafonds.obj', function ( object ) {

		const plaf_material = new THREE.MeshStandardMaterial( { color: 0xFFFFF0, clippingPlanes: clipPlanes,
			clipIntersection: params1.clipIntersection } );

	object.traverse(function(child){child.castShadow = true;});
	object.traverse(function(child){child.receiveShadow = true;});
	
	object.traverse( function ( child ) {
	if ( child instanceof THREE.Mesh ) {
	child.material = plaf_material;
	}
	} );

	plafonds = object ;
	scene.add( plafonds );		
	plafonds.visible = true;
});	

// Sky

loader.load(
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
	scene.add( nuages1 );		
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
		scene.add( nuages2 );		
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
		scene.add( nuages3 );		
		nuages3.visible = true;	
});				

// Lights

     scene.add( new THREE.AmbientLight( 0xffffff, 0.15 ) );
         
     const light = new THREE.SpotLight( 0xffffff, 2 );
     light.position.set( 100, 50, 100 );   
     light.castShadow = true;

     light.shadow.mapSize = new THREE.Vector2(4096, 4096);
     light.shadow.camera.near = 15;
     light.shadow.camera.far = 1000;
     light.shadow.focus = 0.075;
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
     
     floorTexture = new THREE.TextureLoader().load( './assets/textures/GrassD.png' );
     floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
     floorTexture.repeat.set(300, 300);
     floorTexture.anisotropy = 16;
     
     const groundMaterial = new THREE.MeshStandardMaterial({map: floorTexture, clippingPlanes: clipPlanes,
		clipIntersection: params1.clipIntersection}),
     
     mesh = new THREE.Mesh( ground, groundMaterial );
    scene.add( mesh );
     
     mesh.position.y -= 0.045;
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
	 
	 const objects = [];

	 dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
	 dragControls.transformGroup = true;

	 dragControls.addEventListener("hoveron", function () {
		 controls.enabled = false;
	  controls.autoRotate = false;
	 });
	 dragControls.addEventListener("hoveroff", function () {
		 controls.enabled = true;
	 });
	 dragControls.addEventListener('dragstart', function (event) {
		 controls.enabled = false;
		 controls.touches.enabled = false;
		 controls.autoRotate = false;
	 })
	 dragControls.addEventListener('dragend', function (event) {
		 controls.enabled = true;
		 controls.touches.enabled = true;
	 })
	 dragControls.addEventListener ( 'drag', function( event ){
	  console.log('drag');
	  event.object.position.z = 0;
	 })
	 dragControls.addEventListener ( 'drag', function( event ){
	  console.log('drag');
	  event.object.position.y = 0;
	 })

	 var min = new THREE.Vector3( -6, 0, 0);
	 var max = new THREE.Vector3( 0.7, 0, 0 );

	 dragControls.addEventListener ( 'drag', function( event ){
	  console.log('drag');
	 event.object.position.clamp( min, max );
	 })

// Animation & render

function animate() {

     renderer.render(scene, camera); // PostProcessing OFF
     //composer.render(scene, camera); // PostProcessing ON  

     renderer.setPixelRatio(window.devicePixelRatio);
     composer.setPixelRatio(window.devicePixelRatio);
    
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

function onTransitionEnd( event ) {

     const element = event.target;
     element.remove();

}