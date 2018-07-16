var directionalLight1;
var directionalLight2;
var directionalLight3;
var directionalLight4;
var pointLight;

function Light() 
{
	var ambient = new THREE.AmbientLight( 0x101010 );
//	scene.add( ambient );
	
	directionalLight1 = new THREE.DirectionalLight( 0x0000ff );
	directionalLight1.position.set( 0, -300, 300 ).normalize();
	
	directionalLight2 = new THREE.DirectionalLight( 0x0000ff );
	directionalLight2.position.set( 0, 30, 30 ).normalize();
	//////////////////////////////////////////////////////////
	directionalLight3 = new THREE.DirectionalLight( 0x0000ff );
	directionalLight3.position.set( 100, -50, 100 ).normalize();
	
	directionalLight4 = new THREE.DirectionalLight( 0x0000ff );
	directionalLight4.position.set( 10, 5, 100 ).normalize();

	scene.add( directionalLight1 );
//	scene.add( directionalLight2 );
//	scene.add( directionalLight3 );
//	scene.add( directionalLight4 );

	pointLight = new THREE.PointLight(0x55aaff);         //( 0xffaa00 );
	pointLight.position.set( 0, 30, 30 );
	scene.add( pointLight );

	scene.add( directionalLight1 );
				
}