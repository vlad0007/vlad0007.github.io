function facet_colors()
{
	
	var ind = 0;
	var i;

	// table
	colors[ind] = new THREE.Color("rgb(150, 150, 150)");
	ind++;
	
		// upper crown facets
	for (i = 0; i < 8; i++)
	{
		colors[ind] = new THREE.Color("rgb(150, 150, 250)");
		ind++;
	}	
	
	// crown facets
	for (i = 0; i < 9; i++)
	{
		colors[ind] = new THREE.Color("rgb(100, 100, 250)");
		ind++;
	}

	// bottom crown facets
	for (i = 0; i < 8; i++)
	{
		colors[ind] = new THREE.Color("rgb(170, 170, 250)"); ind++;
		colors[ind] = new THREE.Color("rgb(200, 200, 250)"); ind++;
	}	
	
	//  GIRDLE
	for (i = 0; i < 50; i++)
	{
		colors[ind] = new THREE.Color("rgb(100, 100, 100)");
		ind++;
		colors[ind] = new THREE.Color("rgb(150, 150, 150)");
		ind++;
		
	}
	
	// upper pavilion facets
	for (i = 0; i < 8; i++)
	{
		colors[ind] = new THREE.Color("rgb(170, 170, 250)");
		ind++;
		colors[ind] = new THREE.Color("rgb(200, 200, 250)");		
		ind++;
	}

	// lower pavilion facets
	for (i = 0; i < 4; i++)
	{
		colors[ind] = new THREE.Color("rgb(100, 100, 250)");
		ind++;
		
		colors[ind] = new THREE.Color("rgb(120, 120, 250)");
		ind++;
	}	
	
	// table
	colors[ind] = new THREE.Color("rgb(170, 170, 170)");
};