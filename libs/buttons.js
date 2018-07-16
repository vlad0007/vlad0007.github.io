var buttonMainPage;
var buttonOctagon, buttonBrilliant, buttonMoonMarquise, buttonMoonPear, buttonHeart, buttonMaltese, buttonPentagonalStar;
	
var btn_rotXplus, btn_rotXminus, btn_rotYplus, btn_rotYminus;
var btn_size_plus, btn_size_minus;
	
function Btn(name, type, left, top )
{
	this.name = name;
	this.name = document.createElement('input');
	this.name.type = type;   //'button';
	this.name.value = name;
	this.id = document.body.appendChild(this.name);
	this.id.style = "position: absolute";
	this.id.style.background='#0fff0';
	this.id.style.top = top;
	this.id.style.left = left;
	this.id.style.width = "30px";
	this.id.style.opacity = "0.8";
	this.id.className = "b1";
	this.id.style.cursor = "pointer";
}	
	
function BtnCuts (name, where, top, left, width )
{
	this.name = name;
	this.name = document.createElement('input');
	this.name.type = 'button';
	this.name.value = name;
	this.name.addEventListener("click",  function (){document.location.href = where;});
	this.id = document.body.appendChild(this.name);
	this.id.style = "position: absolute";
	this.id.style.background='#ff00f0';
	this.id.style.top = top;
	this.id.style.left = left;
	this.id.style.width = width; //"130px";
	this.id.style.borderRadius = "10px";
	this.id.style.cursor = "pointer";
}

function AddButtons()
{
	buttonOctagon = new BtnCuts("Octagon", "../Octagon/Octagon.html", "5px", "50px", "80px" ); 
	buttonBrilliant = new BtnCuts("Brilliant", "../Brilliant/Brilliant.html", "5px", "150px", "80px");
	buttonMoonMarquise = new BtnCuts("MoonMarquise", "../MoonMarquise/MoonMarquise.html", "5px", "250px", "110px");
	buttonMoonPear = new BtnCuts("MoonPear", "../MoonPear/MoonPear.html", "5px", "380px", "100px");
	buttonHeart = new BtnCuts("Heart", "../Heart/Heart.html", "5px", "500px", "80px"  );
	buttonMaltese = new BtnCuts("Cushion (Maltese Cross)", "../Maltese/Maltese.html", "5px", "600px", "170px"  );
	buttonPentagonalStar = new BtnCuts("PentagonalStar", "../WavyPentagonalStar/WavyPentagonalStar.html", "5px", "790px", "130px"  );
}

function rotX_plus()
{
	var deltaX = 10; // degree
	var deltaY = 10;
	
	if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == false) )
	{
//			R_Y = all_plgs[0].rotation.y + degToRad(deltaY);
		R_X = all_plgs[0].rotation.x + degToRad(deltaX);
		
			
		for (var i = 0; i < all_plgs.length; i++)
		{
//				all_plgs[i].rotation.y = all_plgs[i].rotation.y + degToRad(deltaY);	
			all_plgs[i].rotation.x = all_plgs[i].rotation.x + degToRad(deltaX);
		}
		
		for (var i = 0; i < all_lines.length; i++)
		{
//				all_lines[i].rotation.y = all_lines[i].rotation.y + degToRad(deltaY);	
			all_lines[i].rotation.x = all_lines[i].rotation.x + degToRad(deltaX);
		}
	}
	else if( (btn_Freshnel.name.checked == true) && (btn_Dispersion.name.checked == false) )
	{
//			R_Y = mesh_freshnel.rotation.y - degToRad(deltaY);
		R_X = mesh_freshnel.rotation.x - degToRad(deltaX);	
		
//			mesh_freshnel.rotation.y = mesh_freshnel.rotation.y + degToRad(deltaY);	
		mesh_freshnel.rotation.x = mesh_freshnel.rotation.x + degToRad(deltaX);		
	}
	else if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == true) )
	{
//			R_Y = mesh_dispersion.rotation.y + degToRad(deltaY);
		R_X = mesh_dispersion.rotation.x + degToRad(deltaX);	
		
//			mesh_dispersion.rotation.y = mesh_dispersion.rotation.y + degToRad(deltaY);	
		mesh_dispersion.rotation.x = mesh_dispersion.rotation.x + degToRad(deltaX);		
	}
	else
	{
	
	}
}

function rotX_minus()
{
	var deltaX = 10; // degree
	var deltaY = 10;
	
	if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == false) )
	{
//			R_Y = all_plgs[0].rotation.y - degToRad(deltaY);
		R_X = all_plgs[0].rotation.x - degToRad(deltaX);
		
			
		for (var i = 0; i < all_plgs.length; i++)
		{
//				all_plgs[i].rotation.y = all_plgs[i].rotation.y - degToRad(deltaY);	
			all_plgs[i].rotation.x = all_plgs[i].rotation.x - degToRad(deltaX);
		}
		
		for (var i = 0; i < all_lines.length; i++)
		{
//				all_lines[i].rotation.y = all_lines[i].rotation.y - degToRad(deltaY);	
			all_lines[i].rotation.x = all_lines[i].rotation.x - degToRad(deltaX);
		}
	}
	else if( (btn_Freshnel.name.checked == true) && (btn_Dispersion.name.checked == false) )
	{
//			R_Y = mesh_freshnel.rotation.y - degToRad(deltaY);
		R_X = mesh_freshnel.rotation.x - degToRad(deltaX);	
		
//			mesh_freshnel.rotation.y = mesh_freshnel.rotation.y - degToRad(deltaY);	
		mesh_freshnel.rotation.x = mesh_freshnel.rotation.x - degToRad(deltaX);		
	}
	else if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == true) )
	{
//			R_Y = mesh_dispersion.rotation.y - degToRad(deltaY);
		R_X = mesh_dispersion.rotation.x - degToRad(deltaX);	
		
//			mesh_dispersion.rotation.y = mesh_dispersion.rotation.y - degToRad(deltaY);	
		mesh_dispersion.rotation.x = mesh_dispersion.rotation.x - degToRad(deltaX);		
	}
	else
	{
	
	}
}

function rotY_plus()
{
	var deltaX = 10; // degree
	var deltaY = 10;
	
	if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == false) )
	{
		R_Y = all_plgs[0].rotation.y + degToRad(deltaY);
		for (var i = 0; i < all_plgs.length; i++)
		{
			all_plgs[i].rotation.y = all_plgs[i].rotation.y + degToRad(deltaY);	
		}
		for (var i = 0; i < all_lines.length; i++)
		{
			all_lines[i].rotation.y = all_lines[i].rotation.y + degToRad(deltaY);	
		}
	}
	else if( (btn_Freshnel.name.checked == true) && (btn_Dispersion.name.checked == false) )
	{
		R_Y = mesh_freshnel.rotation.y + degToRad(deltaY);
		mesh_freshnel.rotation.y = mesh_freshnel.rotation.y + degToRad(deltaY);	
	}
	else if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == true) )
	{
		R_Y = mesh_dispersion.rotation.y + degToRad(deltaY);
		mesh_dispersion.rotation.y = mesh_dispersion.rotation.y + degToRad(deltaY);	
	}
	else
	{
	
	}
}

function rotY_minus()
{
	var deltaX = 10; // degree
	var deltaY = 10;
	
	if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == false) )
	{
		R_Y = all_plgs[0].rotation.y - degToRad(deltaY);
		for (var i = 0; i < all_plgs.length; i++)
		{
			all_plgs[i].rotation.y = all_plgs[i].rotation.y - degToRad(deltaY);	
		}
		for (var i = 0; i < all_lines.length; i++)
		{
			all_lines[i].rotation.y = all_lines[i].rotation.y - degToRad(deltaY);	
		}
	}
	else if( (btn_Freshnel.name.checked == true) && (btn_Dispersion.name.checked == false) )
	{
		R_Y = mesh_freshnel.rotation.y - degToRad(deltaY);
		mesh_freshnel.rotation.y = mesh_freshnel.rotation.y - degToRad(deltaY);	
	}
	else if( (btn_Freshnel.name.checked == false) && (btn_Dispersion.name.checked == true) )
	{
		R_Y = mesh_dispersion.rotation.y - degToRad(deltaY);
		mesh_dispersion.rotation.y = mesh_dispersion.rotation.y - degToRad(deltaY);	
	}
	else
	{
	
	}
}

function size_plus()
{
	S = S * 1.05;
	for (var i = 0; i < all_plgs.length; i++)
	{
		all_plgs[i].scale.set( S, S, S );        
	}
		
	for (var i = 0; i < all_lines.length; i++)
	{
		all_lines[i].scale.set( S, S, S );
	}	
	
	if (btn_Freshnel.name.checked == true)
	{
		mesh_freshnel.scale.set( S, S, S );
	}
	if (btn_Dispersion.name.checked == true)
	{
		mesh_dispersion.scale.set( S, S, S );
	}
}

function size_minus()
{
	S = S * 0.95;
	for (var i = 0; i < all_plgs.length; i++)
	{
		all_plgs[i].scale.set( S, S, S );        
	}
		
	for (var i = 0; i < all_lines.length; i++)
	{
		all_lines[i].scale.set( S, S, S );
	}	
	
	if (btn_Freshnel.name.checked == true)
	{
		mesh_freshnel.scale.set( S, S, S );
	}
	if (btn_Dispersion.name.checked == true)
	{
		mesh_dispersion.scale.set( S, S, S );
	}
}

function AddButtonsRotateSize()
{
	btn_rotXplus = new Btn("Rot.X+", "button", "400px", "500px" );
	btn_rotXplus.id.style.width = "70px";
	btn_rotXplus.id.style.height = "40px";
	btn_rotXminus = new Btn("Rot.X-", "button", "480px", "500px" );
	btn_rotXminus.id.style.width = "70px";
	btn_rotXminus.id.style.height = "40px"
	
	btn_rotXplus.name.addEventListener("click", rotX_minus);
	btn_rotXminus.name.addEventListener("click", rotX_plus);	
	
	btn_rotYplus = new Btn("Rot.Y+", "button", "560px", "500px" );
	btn_rotYplus.id.style.width = "70px";
	btn_rotYplus.id.style.height = "40px";
	btn_rotYminus = new Btn("Rot.Y-", "button", "640px", "500px" );
	btn_rotYminus.id.style.width = "70px";
	btn_rotYminus.id.style.height = "40px"
	
	btn_rotYplus.name.addEventListener("click", rotY_minus);
	btn_rotYminus.name.addEventListener("click", rotY_plus);	
	
	btn_size_plus = new Btn("Size+", "button", "750px", "500px" );
	btn_size_plus.id.style.width = "70px";
	btn_size_plus.id.style.height = "40px";
	btn_size_minus = new Btn("Size-", "button", "830px", "500px" );
	btn_size_minus.id.style.width = "70px";
	btn_size_minus.id.style.height = "40px"
	
	btn_size_plus.name.addEventListener("click", size_plus);
	btn_size_minus.name.addEventListener("click", size_minus);		
}		

function AddButtonsPositionSize()
{
	btn_Xminus = new Btn("◄", "button", "1000px", "500px" );
	btn_Xminus.id.style.width = "50px";
	btn_Xminus.id.style.height = "40px";
	btn_Xminus.id.style.fontSize = "32px";
	btn_Xminus.id.style.opacity = "0.7";
	
	btn_Xplus = new Btn("►", "button", "1100px", "500px" );
	btn_Xplus.id.style.width = "50px";
	btn_Xplus.id.style.height = "40px";
	btn_Xplus.id.style.fontSize = "32px";
	btn_Xplus.id.style.opacity = "0.7";

	
	btn_Xplus.name.addEventListener("click", posX_minus);
	btn_Xminus.name.addEventListener("click", posX_plus);	
	
	btn_Yplus = new Btn("▲", "button", "1050px", "450px" );
	btn_Yplus.id.style.width = "50px";
	btn_Yplus.id.style.height = "40px";
	btn_Yplus.id.style.fontSize = "32px";
	btn_Yplus.id.style.opacity = "0.7";
	
	btn_Yminus = new Btn("▼", "button", "1050px", "550px" );
	btn_Yminus.id.style.width = "50px";
	btn_Yminus.id.style.height = "40px"
	btn_Yminus.id.style.fontSize = "32px";
	btn_Yminus.id.style.opacity = "0.7";
	
	btn_Yplus.name.addEventListener("click", posY_minus);
	btn_Yminus.name.addEventListener("click", posY_plus);	
	
	btn_size_plus = new Btn("+", "button", "1050px", "320px" );
	btn_size_plus.id.style.width = "50px";
	btn_size_plus.id.style.height = "40px";
	btn_size_plus.id.style.fontSize = "38px";
	btn_size_plus.id.style.opacity = "0.7";
	
	btn_size_minus = new Btn("–", "button", "1050px", "370px" );
	btn_size_minus.id.style.width = "50px";
	btn_size_minus.id.style.height = "40px"
	btn_size_minus.id.style.fontSize = "38px";
	btn_size_minus.id.style.opacity = "0.7";
	
	btn_size_plus.name.addEventListener("click", sizeGD_plus);
	btn_size_minus.name.addEventListener("click", sizeGD_minus);		
}	

function posX_minus()
{
	xC = xC + 5;
	redraw();
}

function posX_plus()
{
	xC = xC - 5;
	redraw();
}

function posY_minus()
{
	yC = yC - 5;
	redraw();
}

function posY_plus()
{
	yC = yC + 5;
	redraw();
}

function sizeGD_plus()
{
	var delta = 5;
	SCALE = SCALE + 5 * delta; 
	redraw();
}

function sizeGD_minus()
{
	var delta = 5;
	SCALE = SCALE - 5 * delta;
	redraw();
}

