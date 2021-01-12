const audioLoader6 = new THREE.AudioLoader();
audioLoader6.load( './assets/sounds/volet1.mp3', function( buffer ) {
sound6.setBuffer( buffer );
sound6.setLoop( false );
sound6.setVolume( 0.4 );
sound6.playbackRate = 1;
sound6.play();
});				 
}, false)

loader.load(
	'./assets/obj/[]', function (object) {

		 object.traverse(function(child){child.castShadow = true;});
	     object.traverse(function(child){child.receiveShadow = true;});

		 []Texture = new THREE.TextureLoader().load( './assets/textures/[]' );

   
		 []Spec = new THREE.TextureLoader().load( './assets/textures/[]' );

   
		 []Norm = new THREE.TextureLoader().load( './assets/textures/[]' );

   
		 object.traverse( function( child ) {
		 if ( child instanceof THREE.Mesh ) {
		 child.material = pavement_material;
		 child.material.map = []Texture;
		 child.material.specularMap = []Spec;
		 child.material.normalMap = []Norm;
		 
		 child.material.shininess = 20;
		 }
	  } );
	 
      [] = object;
	scene.add( [] );		
    [].visible = true;
    scene.add( [] ); 

});