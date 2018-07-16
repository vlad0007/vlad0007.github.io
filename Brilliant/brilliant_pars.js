var btn_lw_minus, btn_lw_plus;
var btn_square_dev_minus, btn_square_dev_plus;
var btn_r_minus, btn_r_plus;
var btn_t_minus, btn_t_plus;
var btn_beta_minus, btn_beta_plus;
var btn_dSquare_minus,  btn_dSquare_plus;
var btn_alpha_minus, btn_alpha_plus;
var btn_hPavFacet_minus, btn_hPavFacet_plus;
var btn_culet_minus, btn_culet_plus;
var btn_culet_R_minus, btn_culet_R_plus;
var btn_culet_A_minus, btn_culet_A_plus;

function Add_Param_Buttons()
{
	btn_lw_minus = new Btn("<",  "button", "170px", "95px" );
	btn_lw_plus = new Btn(">", "button", "200px", "95px" );				
	btn_lw_minus.name.addEventListener("click", lw_minus);
	btn_lw_plus.name.addEventListener("click", lw_plus);
	
	btn_square_dev_minus = new Btn("<", "button", "170px", "115px" );
	btn_square_dev_plus = new Btn(">", "button", "200px", "115px" );
	btn_square_dev_minus.name.addEventListener("click", square_dev_minus);
	btn_square_dev_plus.name.addEventListener("click", square_dev_plus);	
	
	btn_r_minus = new Btn("<", "button", "170px", "135px" );
	btn_r_plus = new Btn(">", "button", "200px", "135px" );
	btn_r_minus.name.addEventListener("click", r_minus);
	btn_r_plus.name.addEventListener("click", r_plus);	
	
	btn_t_minus = new Btn("<", "button", "170px", "155px" );
	btn_t_plus = new Btn(">", "button", "200px", "155px" );
	btn_t_minus.name.addEventListener("click", t_minus);
	btn_t_plus.name.addEventListener("click", t_plus);	

	btn_beta_minus = new Btn("<", "button", "170px", "175px" );
	btn_beta_plus = new Btn(">", "button", "200px", "175px" );
	btn_beta_minus.name.addEventListener("click", beta_minus);
	btn_beta_plus.name.addEventListener("click", beta_plus);	
	
	btn_dSquare_minus = new Btn("<", "button", "170px", "195px" );
	btn_dSquare_plus = new Btn(">", "button", "200px", "195px" );
	btn_dSquare_minus.name.addEventListener("click", dSquare_minus);
	btn_dSquare_plus.name.addEventListener("click", dSquare_plus);	
	
	btn_alpha_minus = new Btn("<", "button", "170px", "215px" );
	btn_alpha_plus = new Btn(">", "button", "200px", "215px" );
	btn_alpha_minus.name.addEventListener("click", alpha_minus);
	btn_alpha_plus.name.addEventListener("click", alpha_plus);	
	
	btn_hPavFacet_minus = new Btn("<", "button", "170px", "235px" );
	btn_hPavFacet_plus = new Btn(">", "button", "200px", "235px" );
	btn_hPavFacet_minus.name.addEventListener("click", hPavFacet_minus);
	btn_hPavFacet_plus.name.addEventListener("click", hPavFacet_plus);	
		
	btn_culet_minus = new Btn("<", "button", "170px", "255px" );
	btn_culet_plus = new Btn(">", "button", "200px", "255px" );
	btn_culet_minus.name.addEventListener("click", culet_minus);
	btn_culet_plus.name.addEventListener("click", culet_plus);

	btn_culet_R_minus = new Btn("<", "button", "170px", "275px" );
	btn_culet_R_plus = new Btn(">", "button", "200px", "275px" );
	btn_culet_R_minus.name.addEventListener("click", culet_R_minus);
	btn_culet_R_plus.name.addEventListener("click", culet_R_plus);
	
	btn_culet_A_minus = new Btn("<", "button", "170px", "295px" );
	btn_culet_A_plus = new Btn(">", "button", "200px", "295px" );
	btn_culet_A_minus.name.addEventListener("click", culet_A_minus);
	btn_culet_A_plus.name.addEventListener("click", culet_A_plus);
	btn_wireframe.name.addEventListener("click", wireframe);
}


function lw_minus() 
{ 
	lw = lw - 0.05; 
	recalc(); 
	if ( (isCorrect() == -1) || (lw < 0.2) )
	{
		lw = lw + 0.05;
		recalc();
	}
}

function lw_plus() 
{ 
	lw = lw + 0.05; 
	recalc(); 
	if ( (isCorrect() == -1) || (lw > 2.0) )
	{
		lw = lw - 0.05;
		recalc();
	}
}

function square_dev_minus()	
{ 
	square_deviation = square_deviation - 0.05; 
	recalc(); 
	if ( (isCorrect() == -1) || (square_deviation < -1.0) )
	{
		square_deviation = square_deviation + 0.05;
		recalc();
	}
}

function square_dev_plus()	
{ 
	square_deviation = square_deviation + 0.05; 
	recalc(); 
	if ( (isCorrect() == -1) || (square_deviation > 1) )
	{
		square_deviation = square_deviation - 0.05;
		recalc();
	}
}

function r_minus() 
{ 
	r = r - 0.01; 
	recalc();
	//if ( (isCorrect() == -1) || (r < 0.01) )
	if (isCorrect() == -1) 
	{
		r = r + 0.01;
		recalc();
	}
}

function r_plus() 
{ 
	r = r + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		r = r - 0.01;
		recalc();
	}
}

function t_minus() 
{ 
	t = t - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		t = t + 0.01;
		recalc();
	}
}

function t_plus() 
{ 
	t = t + 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		t = t - 0.01;
		recalc();
	}
}

function beta_minus() 
{
	beta = beta - DEGREE; 
	recalc();
	if ( (isCorrect() == -1) || (beta <= DEGREE) )
	{
		beta = beta + DEGREE; 
		recalc();
	}
}
function beta_plus() 
{ 
	beta = beta + DEGREE; 
	recalc();
	if ( (isCorrect() == -1) || (beta > 85*DEGREE) )
	{
		beta = beta - DEGREE; 
		recalc();
	}
}
function dSquare_minus() 
{ 
	dSquare = dSquare - 0.01; 
	recalc();
	if ( isCorrect() == -1 )
	{
		dSquare = dSquare + 0.01; 
		recalc();
	}
}

function dSquare_plus() 
{ 
	dSquare = dSquare + 0.01; 
	recalc();
	if ( isCorrect() == -1 )
	{
		dSquare = dSquare - 0.01; 
		recalc();
	}
}

function alpha_minus() 
{ 
	alpha = alpha - DEGREE; 
	recalc();
	if ( (isCorrect() == -1) || (alpha < DEGREE) )
	{
		alpha = alpha + DEGREE; 
		recalc();
	}
}

function alpha_plus() 
{ 
	alpha = alpha + DEGREE; 
	recalc();
	if ( (isCorrect() == -1) || (alpha > 85*DEGREE) )
	{
		alpha = alpha - DEGREE; 
		recalc();
	}
}

function hPavFacet_minus() 
{ 
	hPavFacet = hPavFacet - 0.05; 
	recalc(); 
	if ( ( isCorrect() == -1 ) || (hPavFacet < 0.1) )
	{
		hPavFacet = hPavFacet + 0.05; 
		recalc();
	}
}

function hPavFacet_plus() 
{ 
	hPavFacet = hPavFacet + 0.05; 
	recalc(); 
	if ( (isCorrect() == -1 ) || (hPavFacet > 0.95) )
	{
		hPavFacet = hPavFacet - 0.05; 
		recalc();
	}
}

function culet_minus() 
{ 
	culet = culet - 0.005; 
	recalc(); 
	//if ( (isCorrect() == -1) || (culet < 0.001) )
	if ( isCorrect() == -1 )
	{
		culet = culet + 0.005; 
		recalc();
	}
}

function culet_plus() 
{ 
	culet = culet + 0.005; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		culet = culet - 0.005; 
		recalc();
	}
}

function culet_R_minus() 
{ 
	culet_R = culet_R - 0.005; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		culet_R = culet_R + 0.005; 
		recalc();
	}
}

function culet_R_plus() 
{ 
	culet_R = culet_R + 0.005; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		culet_R = culet_R - 0.005; 
		recalc();
	}
}

function culet_A_minus() { culet_A = culet_A - 5*DEGREE; recalc(); }

function culet_A_plus() { culet_A = culet_A + 5*DEGREE; recalc(); }

function pars_value()
{
	var text_color = "#F5F";
	var value_color = "#F75";
	
	// Text before buttons
	ctx.font = "italic 10pt Arial";
	
	var text = "Girdle ratio ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 110);		
	text = roundNumber(lw, 2);
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 110);	
	
	text = "Square deviation ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 130);	
	ctx.fillStyle = value_color;
	text = roundNumber(square_deviation*100, 2) + "%";
	ctx.fillText(text, 120, 130);			

	text = "Girdle thckness ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 150);
	text = roundNumber(r*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 150);	
	
	text = "Table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 170);	
	text = roundNumber(t*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 170);	

	text = "Crown angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 190);	
	text = roundNumber(Math.degrees(beta), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 190);	
	
	text = "Square table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 210);	
	text = roundNumber(dSquare*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 210);

	text = "Pavilion angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 230);	
	text = roundNumber(Math.degrees(alpha), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 230);	
	
	text = "Lower facets depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 250);	
	text = roundNumber(hPavFacet*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 250);
	
	text = "Culet ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 270);	
	text = roundNumber(culet*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 270);	

	text = "Culet offset";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 290);	
	text = roundNumber(culet_R*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 290);
	
	text = "Culet azimuth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 310);	
	text = roundNumber(Math.degrees(culet_A), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 310);	
}	
	
function cut_value()
{
	var text_color = "#F5F";
	var value_color = "#F75";
	
	// Text before buttons
	ctx.font = "italic 10pt Arial";
		
	var text = "Crown height ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 350);	
	text = roundNumber( (Math.tan(beta) * (1 - t) / 2)*100, 2) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 170, 350);	
	
	text = "Pavilion depth";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 370);	
	text = roundNumber( (Math.tan(alpha) * (1 - culet) / 2)*100, 2) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 170, 370);	
	
	text = "Total height ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 390);	
	text = roundNumber( (Math.tan(beta) * (1 - t) / 2 + r + Math.tan(alpha) * (1 - culet) / 2)*100, 2) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 170, 390);		

	text = "Wireframe ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 420);	
	
	text = "Facet color ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 440);	

	text = "Solid ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 460);		
	
	text = "Fresnel ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 480);	

	text = "Dispersion ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 500);		
	
	/////////////////////////
	text = "Spin the Cut by dragging it with mouse";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 500, 580);	
	
	text = "Key Alt + move Mouse(down)  -  moving Cut on screen";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 470, 600);	
}	
	
function print_text_2d_3d()
{
	ctx.font = '30px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Brilliant', window.innerWidth/2 - window.innerWidth/4, 60);
	ctx.font = '20px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Crown - 32 facets, Girdle - 64 facets, Pavilion - 24 facets + culet', 
							window.innerWidth/4 - window.innerWidth/4 + window.innerWidth/8, 85);
}
	
