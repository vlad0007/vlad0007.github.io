var btn_lw_minus, btn_lw_plus;
var btn_square_dev_minus, btn_square_dev_plus;
var btn_r_minus, btn_r_plus;
var btn_vp_minus, btn_vp_plus;
var btn_t_minus, btn_t_plus;
var btn_table_length_minus, btn_table_length_plus;
var btn_beta_minus, btn_beta_plus;
var btn_dSquare_minus,  btn_dSquare_plus;
var btn_hp_minus, btn_hp_plus;
var btn_hPavFacet_minus, btn_hPavFacet_plus;
var btn_culetX_minus, btn_culetX_plus;

function Add_Param_Buttons()
{
	// girdle
	btn_lw_minus = new Btn("<",  "button", "170px", "95px" );
	btn_lw_plus = new Btn(">", "button", "200px", "95px" );				
	btn_lw_minus.name.addEventListener("click", lw_minus);
	btn_lw_plus.name.addEventListener("click", lw_plus);
	
	btn_r_minus = new Btn("<", "button", "170px", "115px" );
	btn_r_plus = new Btn(">", "button", "200px", "115px" );
	btn_r_minus.name.addEventListener("click", r_minus);
	btn_r_plus.name.addEventListener("click", r_plus);	
	
	btn_vp_minus = new Btn("<", "button", "170px", "135px" );
	btn_vp_plus = new Btn(">", "button", "200px", "135px" );
	btn_vp_minus.name.addEventListener("click", vp_minus);
	btn_vp_plus.name.addEventListener("click", vp_plus);	
	
	btn_square_dev_minus = new Btn("<", "button", "170px", "155px" );
	btn_square_dev_plus = new Btn(">", "button", "200px", "155px" );
	btn_square_dev_minus.name.addEventListener("click", square_dev_minus);
	btn_square_dev_plus.name.addEventListener("click", square_dev_plus);	
	
	btn_DelAngGirdle_4_minus = new Btn("<", "button", "170px", "175px" );
	btn_DelAngGirdle_4_plus = new Btn(">", "button", "200px", "175px" );
	btn_DelAngGirdle_4_minus.name.addEventListener("click", DelAngGirdle_4_minus);
	btn_DelAngGirdle_4_plus.name.addEventListener("click", DelAngGirdle_4_plus);

	btn_DelAngGirdle_8_minus = new Btn("<", "button", "170px", "195px" );
	btn_DelAngGirdle_8_plus = new Btn(">", "button", "200px", "195px" );
	btn_DelAngGirdle_8_minus.name.addEventListener("click", DelAngGirdle_8_minus);
	btn_DelAngGirdle_8_plus.name.addEventListener("click", DelAngGirdle_8_plus);
	
	btn_DelAngGirdle_12_minus = new Btn("<", "button", "170px", "215px" );
	btn_DelAngGirdle_12_plus = new Btn(">", "button", "200px", "215px" );
	btn_DelAngGirdle_12_minus.name.addEventListener("click", DelAngGirdle_12_minus);
	btn_DelAngGirdle_12_plus.name.addEventListener("click", DelAngGirdle_12_plus);
	
	// table
	btn_t_minus = new Btn("<", "button", "170px", "245px" );
	btn_t_plus = new Btn(">", "button", "200px", "245px" );
	btn_t_minus.name.addEventListener("click", t_minus);
	btn_t_plus.name.addEventListener("click", t_plus);	
	
	btn_table_length_minus = new Btn("<", "button", "170px", "265px" );
	btn_table_length_plus = new Btn(">", "button", "200px", "265px" );
	btn_table_length_minus.name.addEventListener("click", table_length_minus);
	btn_table_length_plus.name.addEventListener("click", table_length_plus);		
	
	btn_beta_minus = new Btn("<", "button", "170px", "285px" );
	btn_beta_plus = new Btn(">", "button", "200px", "285px" );
	btn_beta_minus.name.addEventListener("click", beta_minus);
	btn_beta_plus.name.addEventListener("click", beta_plus);	
	
	btn_dSquare_minus = new Btn("<", "button", "170px", "305px" );
	btn_dSquare_plus = new Btn(">", "button", "200px", "305px" );
	btn_dSquare_minus.name.addEventListener("click", dSquare_minus);
	btn_dSquare_plus.name.addEventListener("click", dSquare_plus);	
	
	// pavilion
	btn_hp_minus = new Btn("<", "button", "170px", "335px" );
	btn_hp_plus = new Btn(">", "button", "200px", "335px" );
	btn_hp_minus.name.addEventListener("click", hp_minus);
	btn_hp_plus.name.addEventListener("click", hp_plus);	
	
	btn_hPavFacet_minus = new Btn("<", "button", "170px", "355px" );
	btn_hPavFacet_plus = new Btn(">", "button", "200px", "355px" );
	btn_hPavFacet_minus.name.addEventListener("click", hPavFacet_minus);
	btn_hPavFacet_plus.name.addEventListener("click", hPavFacet_plus);	
		
	btn_culetX_minus = new Btn("<", "button", "170px", "375px" );
	btn_culetX_plus = new Btn(">", "button", "200px", "375px" );
	btn_culetX_minus.name.addEventListener("click", culetX_minus);
	btn_culetX_plus.name.addEventListener("click", culetX_plus);

	btn_MoonFacetAngle_minus = new Btn("<", "button", "170px", "395px" );
	btn_MoonFacetAngle_plus = new Btn(">", "button", "200px", "395px" );
	btn_MoonFacetAngle_minus.name.addEventListener("click", MoonFacetAngle_minus);
	btn_MoonFacetAngle_plus.name.addEventListener("click", MoonFacetAngle_plus);
	
	btn_culet_MoonRotateAngle_minus = new Btn("<", "button", "170px", "415px" );
	btn_culet_MoonRotateAngle_plus = new Btn(">", "button", "200px", "415px" );
	btn_culet_MoonRotateAngle_minus.name.addEventListener("click", MoonRotateAngle_minus);
	btn_culet_MoonRotateAngle_plus.name.addEventListener("click", MoonRotateAngle_plus);
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

function vp_minus() 
{ 
	vp = vp - 0.01; 
	recalc();
	if (isCorrect() == -1) 
	{
		vp = vp + 0.01;
		recalc();
	}
}

function vp_plus() 
{ 
	vp = vp + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		vp = vp - 0.01;
		recalc();
	}
}

function DelAngGirdle_4_minus()
{
	DelAngGirdle_4 = DelAngGirdle_4 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_4 = DelAngGirdle_4 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_4_plus()
{
	DelAngGirdle_4 = DelAngGirdle_4 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_4 = DelAngGirdle_4 - DEGREE;
		recalc();
	}		
}
//
function DelAngGirdle_8_minus()
{
	DelAngGirdle_8 = DelAngGirdle_8 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_8 = DelAngGirdle_8 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_8_plus()
{
	DelAngGirdle_8 = DelAngGirdle_8 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_8 = DelAngGirdle_8 - DEGREE;
		recalc();
	}		
}
//
function DelAngGirdle_12_minus()
{
	DelAngGirdle_12 = DelAngGirdle_12 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_12 = DelAngGirdle_12 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_12_plus()
{
	DelAngGirdle_12 = DelAngGirdle_12 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_12 = DelAngGirdle_12 - DEGREE;
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
//
function table_length_minus() 
{ 
	table_length = table_length - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		table_length = table_length + 0.01;
		recalc();
	}
}

function table_length_plus() 
{ 
	table_length = table_length + 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		table_length = table_length - 0.01;
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

function hp_minus() 
{ 
	hp = hp - 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		hp = hp + 0.1; 
		recalc();
	}
}

function hp_plus() 
{ 
	hp = hp + 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		hp = hp - 0.1; 
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

function culetX_minus() 
{ 
	CuletX = CuletX - 0.01; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		CuletX = CuletX + 0.01; 
		recalc();
	}
}

function culetX_plus() 
{ 
	CuletX = CuletX + 0.01; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		CuletX = CuletX - 0.01; 
		recalc();
	}
}

function MoonFacetAngle_minus() 
{ 
	MoonFacetAngle = MoonFacetAngle - DEGREE; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		MoonFacetAngle = MoonFacetAngle + DEGREE; 
		recalc();
	}
}

function MoonFacetAngle_plus() 
{ 
	MoonFacetAngle = MoonFacetAngle + DEGREE; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		MoonFacetAngle = MoonFacetAngle - DEGREE; 
		recalc();
	}
}

function MoonRotateAngle_minus() 
{ 
	MoonRotateAngle = MoonRotateAngle - DEGREE; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		MoonRotateAngle = MoonRotateAngle + DEGREE; 
		recalc();
	}
}

function MoonRotateAngle_plus() 
{ 
	MoonRotateAngle = MoonRotateAngle + DEGREE; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		MoonRotateAngle = MoonRotateAngle - DEGREE; 
		recalc();
	}
}



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

	text = "Girdle thickness ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 130);
	text = roundNumber(r*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 130);	
	
//	text = "vp ";
	var s_vp = String.fromCharCode(948);
	var quot = String.fromCharCode(34);
	var text_ang = s_vp + "  ( otherwise " + quot + "vp" + quot + ")";
	ctx.fillStyle = text_color;
	ctx.fillText(text_ang, 5, 150);	
	ctx.fillStyle = value_color;
	text = roundNumber(Math.degrees(vp), 3) + "°";
	ctx.fillText(text, 120, 150);	
	
	text = "Square deviation ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 170);	
	ctx.fillStyle = value_color;
	text = roundNumber(square_deviation*100, 2) + "%";
	ctx.fillText(text, 120, 170);	
	
	text = "Del.ang.gd.4";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 190);	
	text = roundNumber(Math.degrees(DelAngGirdle_4), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 190);	
	
	text = "Del.ang.gd.8";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 210);	
	text = roundNumber(Math.degrees(DelAngGirdle_8), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 210);		
	
	text = "Del.ang.gd.12";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 230);	
	text = roundNumber(Math.degrees(DelAngGirdle_12), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 230);		
	
	text = "Table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 260);	
	text = roundNumber(t*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 260);
	
	text = "Table length";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 280);	
	text = roundNumber(table_length*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 280);	
	
	text = "Crown angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 300);	
	text = roundNumber(Math.degrees(beta), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 300);	
	
	text = "Square table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 320);	
	text = roundNumber(dSquare*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 320);

	text = "Pavilion depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 350);	
	text = roundNumber(hp*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 350);	
	
	text = "Lower facets depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 370);	
	text = roundNumber(hPavFacet*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 370);

	text = "Culet X ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 390);	
	text = roundNumber(CuletX*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 390);	

	text = "Moon facet angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 410);	
	text = roundNumber(Math.degrees(MoonFacetAngle), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 410);	

	text = "Moon rotate angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 430);	
	text = roundNumber(Math.degrees(MoonRotateAngle), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 430);	
}	
	
function cut_value()
{
	var text_color = "#F5F";
	var value_color = "#F75";
	
	// Text before buttons
	ctx.font = "italic 10pt Arial";
	
	var text = "Wireframe ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 110);	
	
	text = "Facet color ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 130);	

	text = "Solid ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 150);		
	
	text = "Fresnel ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 170);	

	text = "Dispersion ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 190);	
	
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
	ctx.fillText('MoonMarquise', window.innerWidth/2 - window.innerWidth/4, 60);
	ctx.font = '20px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Crown - 32 facets, Girdle - 64 facets, Pavilion - 36 facets', 
							window.innerWidth/4 - window.innerWidth/4 + window.innerWidth/8, 85);
}
	
