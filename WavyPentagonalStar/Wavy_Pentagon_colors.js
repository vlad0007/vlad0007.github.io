function facet_colors()
{
	var ind = 0;
	var i;

	// table
	colors[ind] = new THREE.Color("rgb(230, 150, 150)");
	ind++;
	
	// upper crown facets
	for (i = 0; i < 5; i++)
	{
		colors[ind] = new THREE.Color("rgb(250, 0, 0)");
		ind++;
		colors[ind] = new THREE.Color("rgb(150, 150, 250)");
		ind++;
	}
	
	// crown facets
	colors[ind] = new THREE.Color("rgb(230, 20, 20)");
	ind++;
	colors[ind] = new THREE.Color("rgb(250, 30, 0)");
	ind++;		
	colors[ind] = new THREE.Color("rgb(250, 50, 50)");
	ind++;		
	colors[ind] = new THREE.Color("rgb(230, 30, 0)");
	ind++;
	colors[ind] = new THREE.Color("rgb(250, 20, 20)");
	ind++;
	
	
	// girdle facets
	for (i = 0; i < 40; i++)
	{
		colors[ind] = new THREE.Color("rgb(120, 120, 120)"); ind++;
		colors[ind] = new THREE.Color("rgb(80, 80, 80)"); ind++;
	}
	
	
	// pavilion
	for (i = 0; i < 5; i++)
	{
		colors[ind] = new THREE.Color("rgb(250, 50, 20)");
		ind++;
		colors[ind] = new THREE.Color("rgb(250, 0, 0)");
		ind++;		
	}
		
	colors[ind] = new THREE.Color("rgb(200, 200, 250)"); ind++;
	colors[ind] = new THREE.Color("rgb(170, 170, 250)"); ind++;
	colors[ind] = new THREE.Color("rgb(200, 200, 250)"); ind++;
	colors[ind] = new THREE.Color("rgb(170, 170, 250)"); ind++;
	colors[ind] = new THREE.Color("rgb(150, 190, 230)"); ind++;

	
	colors[ind] = new THREE.Color("rgb(250, 10, 0)"); ind++;
	colors[ind] = new THREE.Color("rgb(255, 30, 0)"); ind++;
	colors[ind] = new THREE.Color("rgb(250, 10, 0)"); ind++;
	colors[ind] = new THREE.Color("rgb(255, 30, 0)"); ind++;
	colors[ind] = new THREE.Color("rgb(240, 0, 20)"); ind++;
};