var btn_lw_minus, btn_lw_plus;
var btn_square_dev_minus, btn_square_dev_plus;
var btn_r_minus, btn_r_plus;
var btn_vp_minus, btn_vp_plus;
var btn_Lh_minus, btn_Lh_plus;
var btn_t_minus, btn_t_plus;
var btn_t_length_minus, btn_t_length_plus;
var btn_lambda_minus, btn_lambda_plus;
var btn_crown_angle_minus, btn_crown_angle_plus;
var btn_dSquare_minus,  btn_dSquare_plus;
var btn_pav_angle_minus, btn_pav_angle_plus;
var btn_hPavFacet_minus, btn_hPavFacet_plus;
var btn_culet_minus, btn_culet_plus;
var btn_culetX_minus, btn_culetX_plus, btn_culetY_minus, btn_culetY_plus;
var btn_DelAngGirdle_6_minus, btn_DelAngGirdle_6_plus;
var btn_DelAngGirdle_12_minus, btn_DelAngGirdle_12_plus;
var btn_DelAngGirdle_18_minus, btn_DelAngGirdle_18_plus;
var btn_DelAngGirdle_26_minus, btn_DelAngGirdle_26_plus;
var btn_DelAngGirdle_34_minus, btn_DelAngGirdle_34_plus;
var btn_DelAngGirdle_38_minus, btn_DelAngGirdle_38_plus;
var btn_DelAngGirdle_46_minus, btn_DelAngGirdle_46_plus;

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
	
	btn_lambda_minus = new Btn("<", "button", "170px", "155px" );
	btn_lambda_plus = new Btn(">", "button", "200px", "155px" );
	btn_lambda_minus.name.addEventListener("click", lambda_minus);
	btn_lambda_plus.name.addEventListener("click", lambda_plus);

	btn_Lh_minus = new Btn("<", "button", "170px", "175px" );
	btn_Lh_plus = new Btn(">", "button", "200px", "175px" );
	btn_Lh_minus.name.addEventListener("click", Lh_minus);
	btn_Lh_plus.name.addEventListener("click", Lh_plus);	
	
	btn_DelAngGirdle_6_minus = new Btn("<", "button", "170px", "195px" );
	btn_DelAngGirdle_6_plus = new Btn(">", "button", "200px", "195px" );
	btn_DelAngGirdle_6_minus.name.addEventListener("click", DelAngGirdle_6_minus);
	btn_DelAngGirdle_6_plus.name.addEventListener("click", DelAngGirdle_6_plus);

	btn_DelAngGirdle_12_minus = new Btn("<", "button", "170px", "215px" );
	btn_DelAngGirdle_12_plus = new Btn(">", "button", "200px", "215px" );
	btn_DelAngGirdle_12_minus.name.addEventListener("click", DelAngGirdle_12_minus);
	btn_DelAngGirdle_12_plus.name.addEventListener("click", DelAngGirdle_12_plus);
	
	btn_DelAngGirdle_18_minus = new Btn("<", "button", "170px", "235px" );
	btn_DelAngGirdle_18_plus = new Btn(">", "button", "200px", "235px" );
	btn_DelAngGirdle_18_minus.name.addEventListener("click", DelAngGirdle_18_minus);
	btn_DelAngGirdle_18_plus.name.addEventListener("click", DelAngGirdle_18_plus);

	btn_DelAngGirdle_26_minus = new Btn("<", "button", "170px", "255px" );
	btn_DelAngGirdle_26_plus = new Btn(">", "button", "200px", "255px" );
	btn_DelAngGirdle_26_minus.name.addEventListener("click", DelAngGirdle_26_minus);
	btn_DelAngGirdle_26_plus.name.addEventListener("click", DelAngGirdle_26_plus);	

	btn_DelAngGirdle_34_minus = new Btn("<", "button", "170px", "275px" );
	btn_DelAngGirdle_34_plus = new Btn(">", "button", "200px", "275px" );
	btn_DelAngGirdle_34_minus.name.addEventListener("click", DelAngGirdle_34_minus);
	btn_DelAngGirdle_34_plus.name.addEventListener("click", DelAngGirdle_34_plus);		
	
	btn_DelAngGirdle_38_minus = new Btn("<", "button", "170px", "295px" );
	btn_DelAngGirdle_38_plus = new Btn(">", "button", "200px", "295px" );
	btn_DelAngGirdle_38_minus.name.addEventListener("click", DelAngGirdle_38_minus);
	btn_DelAngGirdle_38_plus.name.addEventListener("click", DelAngGirdle_38_plus);		

	btn_DelAngGirdle_42_minus = new Btn("<", "button", "170px", "315px" );
	btn_DelAngGirdle_42_plus = new Btn(">", "button", "200px", "315px" );
	btn_DelAngGirdle_42_minus.name.addEventListener("click", DelAngGirdle_42_minus);
	btn_DelAngGirdle_42_plus.name.addEventListener("click", DelAngGirdle_42_plus);			
	
	btn_DelAngGirdle_46_minus = new Btn("<", "button", "170px", "335px" );
	btn_DelAngGirdle_46_plus = new Btn(">", "button", "200px", "335px" );
	btn_DelAngGirdle_46_minus.name.addEventListener("click", DelAngGirdle_46_minus);
	btn_DelAngGirdle_46_plus.name.addEventListener("click", DelAngGirdle_46_plus);					
	
	// crown
	btn_crown_angle_minus = new Btn("<", "button", "170px", "365px" );
	btn_crown_angle_plus = new Btn(">", "button", "200px", "365px" );
	btn_crown_angle_minus.name.addEventListener("click", crown_angle_minus);
	btn_crown_angle_plus.name.addEventListener("click", crown_angle_plus);	
	
	btn_t_minus = new Btn("<", "button", "170px", "385px" );
	btn_t_plus = new Btn(">", "button", "200px", "385px" );
	btn_t_minus.name.addEventListener("click", t_minus);
	btn_t_plus.name.addEventListener("click", t_plus);	
	
	btn_t_length_minus = new Btn("<", "button", "170px", "405px" );
	btn_t_length_plus = new Btn(">", "button", "200px", "405px" );
	btn_t_length_minus.name.addEventListener("click", t_length_minus);
	btn_t_length_plus.name.addEventListener("click", t_length_plus);	
	
	btn_dSquare_minus = new Btn("<", "button", "170px", "425px" );
	btn_dSquare_plus = new Btn(">", "button", "200px", "425px" );
	btn_dSquare_minus.name.addEventListener("click", dSquare_minus);
	btn_dSquare_plus.name.addEventListener("click", dSquare_plus);	
	
	// pavilion
	btn_pav_angle_minus = new Btn("<", "button", "170px", "455px" );
	btn_pav_angle_plus = new Btn(">", "button", "200px", "455px" );
	btn_pav_angle_minus.name.addEventListener("click", pav_angle_minus);
	btn_pav_angle_plus.name.addEventListener("click", pav_angle_plus);	
	
	btn_hPavFacet_minus = new Btn("<", "button", "170px", "475px" );
	btn_hPavFacet_plus = new Btn(">", "button", "200px", "475px" );
	btn_hPavFacet_minus.name.addEventListener("click", hPavFacet_minus);
	btn_hPavFacet_plus.name.addEventListener("click", hPavFacet_plus);	
		
	btn_culet_minus = new Btn("<", "button", "170px", "495px" );
	btn_culet_plus = new Btn(">", "button", "200px", "495px" );
	btn_culet_minus.name.addEventListener("click", culet_minus);
	btn_culet_plus.name.addEventListener("click", culet_plus);
		
	btn_culetX_minus = new Btn("<", "button", "170px", "515px" );
	btn_culetX_plus = new Btn(">", "button", "200px", "515px" );
	btn_culetX_minus.name.addEventListener("click", culetX_minus);
	btn_culetX_plus.name.addEventListener("click", culetX_plus);
	
	btn_culetY_minus = new Btn("<", "button", "170px", "535px" );
	btn_culetY_plus = new Btn(">", "button", "200px", "535px" );
	btn_culetY_minus.name.addEventListener("click", culetY_minus);
	btn_culetY_plus.name.addEventListener("click", culetY_plus);		
}


function lw_minus() 
{ 
	pearRt = pearRt - 0.05; 
	recalc(); 
//	if ( (isCorrect() == -1) || (lw < 0.2) )
	if (isCorrect() == -1)
	{
		pearRt = pearRt + 0.05;
		recalc();
	}
}

function lw_plus() 
{ 
	pearRt = pearRt + 0.05; 
	recalc(); 
//	if ( (isCorrect() == -1) || (lw > 2.0) )
	if (isCorrect() == -1)
	{
		pearRt = pearRt - 0.05;
		recalc();
	}
}

function lambda_minus()	
{ 
	lambda = lambda - DEGREE; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		lambda = lambda + DEGREE;
		recalc();
	}
}

function lambda_plus()	
{ 
	lambda = lambda + DEGREE; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		lambda = lambda - DEGREE;
		recalc();
	}
}

function r_minus() 
{ 
	r = r - 0.01; 
	recalc();
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

function Lh_minus() 
{ 
	Lh = Lh - 0.01; 
	recalc();
	if (isCorrect() == -1) 
	{
		Lh = Lh + 0.01;
		recalc();
	}
}

function Lh_plus() 
{ 
	Lh = Lh + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		Lh = Lh - 0.01;
		recalc();
	}
}

function DelAngGirdle_6_minus()
{
	DelAngGirdle_6 = DelAngGirdle_6 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_6 = DelAngGirdle_6 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_6_plus()
{
	DelAngGirdle_6 = DelAngGirdle_6 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_6 = DelAngGirdle_6 - DEGREE;
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

function DelAngGirdle_18_minus()
{
	DelAngGirdle_18 = DelAngGirdle_18 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_18 = DelAngGirdle_18 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_18_plus()
{
	DelAngGirdle_18 = DelAngGirdle_18 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_18 = DelAngGirdle_18 - DEGREE;
		recalc();
	}		
}

function DelAngGirdle_26_minus()
{
	DelAngGirdle_26 = DelAngGirdle_26 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_26 = DelAngGirdle_26 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_26_plus()
{
	DelAngGirdle_26 = DelAngGirdle_26 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_26 = DelAngGirdle_26 - DEGREE;
		recalc();
	}		
}

function DelAngGirdle_34_minus()
{
	DelAngGirdle_34 = DelAngGirdle_34 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_34 = DelAngGirdle_34 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_34_plus()
{
	DelAngGirdle_34 = DelAngGirdle_34 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_34 = DelAngGirdle_34 - DEGREE;
		recalc();
	}		
}

function DelAngGirdle_38_minus()
{
	DelAngGirdle_38 = DelAngGirdle_38 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_38 = DelAngGirdle_38 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_38_plus()
{
	DelAngGirdle_38 = DelAngGirdle_38 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_38 = DelAngGirdle_38 - DEGREE;
		recalc();
	}		
}

function DelAngGirdle_42_minus()
{
	DelAngGirdle_42 = DelAngGirdle_42 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_42 = DelAngGirdle_42 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_42_plus()
{
	DelAngGirdle_42 = DelAngGirdle_42 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_42 = DelAngGirdle_42 - DEGREE;
		recalc();
	}		
}

function DelAngGirdle_46_minus()
{
	DelAngGirdle_46 = DelAngGirdle_46 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_46 = DelAngGirdle_46 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_46_plus()
{
	DelAngGirdle_46 = DelAngGirdle_46 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_46 = DelAngGirdle_46 - DEGREE;
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
function t_length_minus() 
{ 
	table_length = table_length - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		table_length = table_length + 0.01;
		recalc();
	}
}

function t_length_plus() 
{ 
	table_length = table_length + 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		table_length = table_length - 0.01;
		recalc();
	}
}

function crown_angle_minus() 
{
	crown_angle = crown_angle - DEGREE; 
	recalc();
	if ( (isCorrect() == -1) || (crown_angle <= DEGREE) )
	{
		crown_angle = crown_angle + DEGREE; 
		recalc();
	}
}
function crown_angle_plus() 
{ 
	crown_angle = crown_angle + DEGREE; 
	recalc();
	if ( (isCorrect() == -1) || (crown_angle > 85*DEGREE) )
	{
		crown_angle = crown_angle - DEGREE; 
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

function pav_angle_minus() 
{ 
	pav_angle = pav_angle - 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		pav_angle = pav_angle + 0.1; 
		recalc();
	}
}

function pav_angle_plus() 
{ 
	pav_angle = pav_angle + 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		pav_angle = pav_angle - 0.1; 
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
	culet = culet - 0.01; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		culet = culet + 0.01; 
		recalc();
	}
}

function culet_plus() 
{ 
	culet = culet + 0.01; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		culetX = culetX - 0.01; 
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

function culetY_minus() 
{ 
	CuletY = CuletY - 0.01; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		CuletY = CuletY + 0.01; 
		recalc();
	}
}

function culetY_plus() 
{ 
	CuletY = CuletY + 0.01; 
	recalc(); 
	if ( isCorrect() == -1 )
	{
		CuletY = CuletY - 0.01; 
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
	text = roundNumber(pearRt, 2);
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 110);			

	text = "Girdle thickness ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 130);
	text = roundNumber(r*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 130);	
	
//	text = "vp ";	var s_vp = String.fromCharCode(948);
	var s_vp = String.fromCharCode(948);
	var quot = String.fromCharCode(34);
	var text_ang = s_vp; //+ "  ( otherwise " + quot + "vp" + quot + ")";
	ctx.fillStyle = text_color;
	ctx.fillText(text_ang, 5, 150);	
	ctx.fillStyle = value_color;
	text = roundNumber(Math.degrees(vp), 3) + "°";
	ctx.fillText(text, 120, 150);

	text = "lambda ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 170);	
	ctx.fillStyle = value_color;
	text = roundNumber(Math.degrees(lambda), 3) + "°";
	ctx.fillText(text, 120, 170);	
	
	text = "Lh ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 190);	
	ctx.fillStyle = value_color;
	text = roundNumber(Lh*100, 2) + "%";
	ctx.fillText(text, 120, 190);		
	
	text = "Del.ang.gd.6";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 210);	
	text = roundNumber(Math.degrees(DelAngGirdle_6), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 210);	
	
	text = "Del.ang.gd.12";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 230);	
	text = roundNumber(Math.degrees(DelAngGirdle_12), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 230);		
	
	text = "Del.ang.gd.18";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 250);	
	text = roundNumber(Math.degrees(DelAngGirdle_18), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 250);		
	
	text = "Del.ang.gd.26";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 270);	
	text = roundNumber(Math.degrees(DelAngGirdle_26), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 270);	
	
	text = "Del.ang.gd.34";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 290);	
	text = roundNumber(Math.degrees(DelAngGirdle_34), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 290);	
	
	text = "Del.ang.gd.38";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 310);	
	text = roundNumber(Math.degrees(DelAngGirdle_38), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 310);
	
	text = "Del.ang.gd.42";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 330);	
	text = roundNumber(Math.degrees(DelAngGirdle_42), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 330);	
	
	text = "Del.ang.gd.46";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 350);	
	text = roundNumber(Math.degrees(DelAngGirdle_46), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 350);	
	

	text = "Crown angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 380);	
	text = roundNumber(Math.degrees(crown_angle), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 380);		
	
	text = "Table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 400);	
	text = roundNumber(t*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 400);
	
	text = "Table length";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 420);	
	text = roundNumber(table_length*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 420);
	
	text = "Square table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 440);	
	text = roundNumber(dSquare*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 440);
	
	// pavilion
	text = "Pavilion angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 470);	
	text = roundNumber(Math.degrees(pav_angle), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 470);
	
	text = "Lower facets depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 490);	
	text = roundNumber(hPavFacet*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 490);

	text = "Culet ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 510);	
	text = roundNumber(culet*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 510);	

	text = "Culet X ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 530);	
	text = roundNumber(CuletX*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 530);	
	
	text = "Culet Y ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 550);	
	text = roundNumber(CuletY*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 550);	
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
	ctx.fillText('Heart', window.innerWidth/2 - window.innerWidth/4, 60);
	ctx.font = '20px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Crown - 33 facets + Table, Girdle - 64 facets, Pavilion - 24 facets + Culet', 
							window.innerWidth/4 - window.innerWidth/4 + window.innerWidth/8, 85);
}
	
