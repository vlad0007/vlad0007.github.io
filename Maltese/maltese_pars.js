var btn_lw_minus, btn_lw_plus;
var btn_r_minus, btn_r_plus;
var btn_rounnd_cir1_minus, btn_rounnd_cir1_plus, btn_rounnd_cir2_minus, btn_rounnd_cir2_plus,
	btn_R3_minus, btn_R3_plus, btn_gd_segments_minus, btn_gd_segments_plus,
	btn_ang_2_minus, btn_ang_2_plus, btn_ang_3_minus, btn_ang_3_plus,
	btn_ang_corner_minus, btn_ang_corner_plus, btn_del_gd_1_minus, btn_del_gd_1_plus,
	btn_del_gd_2_minus, btn_del_gd_2_plus, btn_del_gd_3_minus, btn_del_gd_3_plus;
var btn_beta_minus, btn_beta_plus, btn_t_minus, btn_t_plus, btn_starFacets_minus, btn_starFacets_plus;
var btn_hp1_minus, btn_hp1_plus,  btn_hp2_minus, btn_hp2_plus, btn_del_hp1_minus, btn_del_hp1_plus,
	btn_pav_ang_a_minus, btn_pav_ang_a_plus, btn_pav_ang_b_minus, btn_pav_ang_b_plus,
	btn_pav_ang_c_minus, btn_pav_ang_c_plus, btn_hA0_minus, btn_hA0_plus,
	btn_hA1_minus, btn_hA1_plus;

function Add_Param_Buttons()
{
	btn_lw_minus = new Btn("<",  "button", "170px", "95px" );
	btn_lw_plus = new Btn(">", "button", "200px", "95px" );				
	btn_lw_minus.name.addEventListener("click", lw_minus);
	btn_lw_plus.name.addEventListener("click", lw_plus);

	btn_r_minus = new Btn("<", "button", "170px", "115px" );
	btn_r_plus = new Btn(">", "button", "200px", "115px" );
	btn_r_minus.name.addEventListener("click", r_minus);
	btn_r_plus.name.addEventListener("click", r_plus);	
	
	btn_rounnd_cir1_minus = new Btn("<", "button", "170px", "135px" );
	btn_rounnd_cir1_plus = new Btn(">", "button", "200px", "135px" );
	btn_rounnd_cir1_minus.name.addEventListener("click", rounnd_cir1_minus);
	btn_rounnd_cir1_plus.name.addEventListener("click", rounnd_cir1_plus);	

	btn_rounnd_cir2_minus = new Btn("<", "button", "170px", "155px" );
	btn_rounnd_cir2_plus = new Btn(">", "button", "200px", "155px" );
	btn_rounnd_cir2_minus.name.addEventListener("click", rounnd_cir2_minus);
	btn_rounnd_cir2_plus.name.addEventListener("click", rounnd_cir2_plus);	
	
	btn_R3_minus = new Btn("<", "button", "170px", "175px" );
	btn_R3_plus = new Btn(">", "button", "200px", "175px" );
	btn_R3_minus.name.addEventListener("click", R3_minus);
	btn_R3_plus.name.addEventListener("click", R3_plus);	
	
	btn_gd_segments_minus = new Btn("<", "button", "170px", "195px" );
	btn_gd_segments_plus = new Btn(">", "button", "200px", "195px" );
	btn_gd_segments_minus.name.addEventListener("click", gd_segments_minus);
	btn_gd_segments_plus.name.addEventListener("click", gd_segments_plus);	
	
	btn_ang_2_minus = new Btn("<", "button", "170px", "215px" );
	btn_ang_2_plus = new Btn(">", "button", "200px", "215px" );
	btn_ang_2_minus.name.addEventListener("click", ang_2_minus);
	btn_ang_2_plus.name.addEventListener("click", ang_2_plus);	
	
	btn_ang_3_minus = new Btn("<", "button", "170px", "235px" );
	btn_ang_3_plus = new Btn(">", "button", "200px", "235px" );
	btn_ang_3_minus.name.addEventListener("click", ang_3_minus);
	btn_ang_3_plus.name.addEventListener("click", ang_3_plus);		
	
	btn_ang_corner_minus = new Btn("<", "button", "170px", "255px" );
	btn_ang_corner_plus = new Btn(">", "button", "200px", "255px" );
	btn_ang_corner_minus.name.addEventListener("click", ang_corner_minus);
	btn_ang_corner_plus.name.addEventListener("click", ang_corner_plus);		
	
	btn_del_gd_1_minus = new Btn("<", "button", "170px", "275px" );
	btn_del_gd_1_plus = new Btn(">", "button", "200px", "275px" );
	btn_del_gd_1_minus.name.addEventListener("click", del_gd_1_minus);
	btn_del_gd_1_plus.name.addEventListener("click", del_gd_1_plus);	
	
	btn_del_gd_2_minus = new Btn("<", "button", "170px", "295px" );
	btn_del_gd_2_plus = new Btn(">", "button", "200px", "295px" );
	btn_del_gd_2_minus.name.addEventListener("click", del_gd_2_minus);
	btn_del_gd_2_plus.name.addEventListener("click", del_gd_2_plus);
	
	btn_del_gd_3_minus = new Btn("<", "button", "170px", "315px" );
	btn_del_gd_3_plus = new Btn(">", "button", "200px", "315px" );
	btn_del_gd_3_minus.name.addEventListener("click", del_gd_3_minus);
	btn_del_gd_3_plus.name.addEventListener("click", del_gd_3_plus);

	btn_beta_minus = new Btn("<", "button", "170px", "345px" );
	btn_beta_plus = new Btn(">", "button", "200px", "345px" );	
	btn_beta_minus.name.addEventListener("click", beta_minus);
	btn_beta_plus.name.addEventListener("click", beta_plus);
	
	btn_t_minus = new Btn("<", "button", "170px", "365px" );
	btn_t_plus = new Btn(">", "button", "200px", "365px" );	
	btn_t_minus.name.addEventListener("click", t_minus);
	btn_t_plus.name.addEventListener("click", t_plus);
	
	btn_starFacets_minus = new Btn("<", "button", "170px", "385px" );
	btn_starFacets_plus = new Btn(">", "button", "200px", "385px" );	
	btn_starFacets_minus.name.addEventListener("click", starFacets_minus);
	btn_starFacets_plus.name.addEventListener("click", starFacets_plus);

	// Pavilion
	btn_hp1_minus = new Btn("<", "button", "170px", "415px" );
	btn_hp1_plus = new Btn(">", "button", "200px", "415px" );	
	btn_hp1_minus.name.addEventListener("click", hp1_minus);
	btn_hp1_plus.name.addEventListener("click", hp1_plus);

	btn_hp2_minus = new Btn("<", "button", "170px", "435px" );
	btn_hp2_plus = new Btn(">", "button", "200px", "435px" );	
	btn_hp2_minus.name.addEventListener("click", hp2_minus);
	btn_hp2_plus.name.addEventListener("click", hp2_plus);	

	btn_del_hp1_minus = new Btn("<", "button", "170px", "455px" );
	btn_del_hp1_plus = new Btn(">", "button", "200px", "455px" );	
	btn_del_hp1_minus.name.addEventListener("click", del_hp1_minus);
	btn_del_hp1_plus.name.addEventListener("click", del_hp1_plus);	
	
	btn_pav_ang_a_minus = new Btn("<", "button", "170px", "475px" );
	btn_pav_ang_a_plus = new Btn(">", "button", "200px", "475px" );	
	btn_pav_ang_a_minus.name.addEventListener("click", pav_ang_a_minus);
	btn_pav_ang_a_plus.name.addEventListener("click", pav_ang_a_plus);		
	
	btn_pav_ang_c_minus = new Btn("<", "button", "170px", "495px" );
	btn_pav_ang_c_plus = new Btn(">", "button", "200px", "495px" );	
	btn_pav_ang_c_minus.name.addEventListener("click", pav_ang_c_minus);
	btn_pav_ang_c_plus.name.addEventListener("click", pav_ang_c_plus);
	
	btn_pav_ang_b_minus = new Btn("<", "button", "170px", "515px" );
	btn_pav_ang_b_plus = new Btn(">", "button", "200px", "515px" );	
	btn_pav_ang_b_minus.name.addEventListener("click", pav_ang_b_minus);
	btn_pav_ang_b_plus.name.addEventListener("click", pav_ang_b_plus);
	
	btn_hA0_minus = new Btn("<", "button", "170px", "535px" );
	btn_hA0_plus = new Btn(">", "button", "200px", "535px" );	
	btn_hA0_minus.name.addEventListener("click", hA0_minus);
	btn_hA0_plus.name.addEventListener("click", hA0_plus);

	btn_hA1_minus = new Btn("<", "button", "170px", "555px" );
	btn_hA1_plus = new Btn(">", "button", "200px", "555px" );	
	btn_hA1_minus.name.addEventListener("click", hA1_minus);
	btn_hA1_plus.name.addEventListener("click", hA1_plus);	
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

function rounnd_cir1_minus()	
{ 
	rounnd_cir1 = rounnd_cir1 - 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		rounnd_cir1 = rounnd_cir1 + 0.01;
		recalc();
	}
}

function rounnd_cir1_plus()	
{ 
	rounnd_cir1 = rounnd_cir1 + 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		rounnd_cir1 = rounnd_cir1 - 0.01;
		recalc();
	}
}

function rounnd_cir2_minus()	
{ 
	rounnd_cir2 = rounnd_cir2 - 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		rounnd_cir2 = rounnd_cir2 + 0.01;
		recalc();
	}
}

function rounnd_cir2_plus()	
{ 
	rounnd_cir2 = rounnd_cir2 + 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		rounnd_cir2 = rounnd_cir2 - 0.01;
		recalc();
	}
}

function R3_minus()	
{ 
	R3 = R3 - 0.01; 
	if (R3 < 0.01)
	{
		R3 = R3 + 0.01;
		return;
	}
	recalc(); 
	if (isCorrect() == -1)
	{
		R3 = R3 + 0.01;
		recalc();
	}
}

function R3_plus()	
{ 
	R3 = R3 + 0.005; 
	recalc(); 
	if (isCorrect() == -1)
	{
		R3 = R3 - 0.005;
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

function gd_segments_minus() 
{ 
	gd_segments = gd_segments - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		gd_segments = gd_segments + 0.01;
		recalc();
	}
}

function gd_segments_plus() 
{ 
	gd_segments = gd_segments + 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		gd_segments = gd_segments - 0.01;
		recalc();
	}
}

function ang_2_minus() 
{
	ang_2 = ang_2 - DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		ang_2 = ang_2 + DEGREE; 
		recalc();
	}
}

function ang_2_plus() 
{ 
	ang_2 = ang_2 + DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		ang_2 = ang_2 - DEGREE; 
		recalc();
	}
}

function ang_3_minus() 
{
	ang_3 = ang_3 - DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		ang_3 = ang_3 + DEGREE; 
		recalc();
	}
}

function ang_3_plus() 
{ 
	ang_3 = ang_3 + DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		ang_3 = ang_3 - DEGREE; 
		recalc();
	}
}

function ang_corner_minus() 
{
	ang_corner = ang_corner - DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		ang_corner = ang_corner + DEGREE; 
		recalc();
	}
}

function ang_corner_plus() 
{
	ang_corner = ang_corner + DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		ang_corner = ang_corner - DEGREE; 
		recalc();
	}
}

function del_gd_1_minus() 
{ 
	del_gd_1 = del_gd_1 - 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		del_gd_1 = del_gd_1 + 0.01;
		recalc();
	}
}

function del_gd_1_plus() 
{ 
	del_gd_1 = del_gd_1 + 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		del_gd_1 = del_gd_1 - 0.01;
		recalc();
	}
}
///////////
function del_gd_2_minus() 
{ 
	del_gd_2 = del_gd_2 - 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		del_gd_2 = del_gd_2 + 0.01;
		recalc();
	}
}

function del_gd_2_plus() 
{ 
	del_gd_2 = del_gd_2 + 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		del_gd_2 = del_gd_2 - 0.01;
		recalc();
	}
}
//////////////////////
function del_gd_3_minus() 
{ 
	del_gd_3 = del_gd_3 - 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		del_gd_3 = del_gd_3 + 0.01;
		recalc();
	}
}

function del_gd_3_plus() 
{ 
	del_gd_3 = del_gd_3 + 0.01; 	
	recalc();
	if (isCorrect() == -1)
	{
		del_gd_3 = del_gd_3 - 0.01;
		recalc();
	}
}

function beta_minus() 
{ 
	beta = beta - DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		beta = beta + DEGREE; 
		recalc();
	}
}

function beta_plus() 
{ 
	beta = beta + DEGREE; 
	recalc();
	if ( isCorrect() == -1 )
	{
		beta = beta - DEGREE; 
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
	if ( isCorrect() == -1 )
	{
		t = t - 0.01; 
		recalc();
	}
}

function starFacets_minus() 
{ 
	starFacets = starFacets - 0.05; 
	recalc(); 
	if (isCorrect() == -1)
	{
		starFacets = starFacets + 0.05; 
		recalc();
	}
}

function starFacets_plus() 
{ 
	starFacets = starFacets + 0.05; 
	recalc(); 
	if (isCorrect() == -1)
	{
		starFacets = starFacets - 0.05; 
		recalc();
	}
}

function hp1_minus() 
{ 
	hp1 = hp1 - 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hp1 = hp1 + 0.01; 
		recalc();
	}
}

function hp1_plus() 
{ 
	hp1 = hp1 + 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hp1 = hp1 - 0.01; 
		recalc();
	}
}

function hp2_minus() 
{ 
	hp2 = hp2 - 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hp2 = hp2 + 0.01; 
		recalc();
	}
}

function hp2_plus() 
{ 
	hp2 = hp2 + 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hp2 = hp2 - 0.01; 
		recalc();
	}
}

function del_hp1_minus() 
{ 
	del_hp1 = del_hp1 - 0.005; 
	recalc(); 
	if (isCorrect() == -1)
	{
		del_hp1 = del_hp1 + 0.005; 
		recalc();
	}
}

function del_hp1_plus() 
{ 
	del_hp1 = del_hp1 + 0.005; 
	recalc(); 
	if (isCorrect() == -1)
	{
		del_hp1 = del_hp1 - 0.005; 
		recalc();
	}
}

function pav_ang_a_minus() 
{ 
	pav_ang_a = pav_ang_a - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		pav_ang_a = pav_ang_a + DEGREE; 
		recalc();
	}
}

function pav_ang_a_plus() 
{ 
	pav_ang_a = pav_ang_a + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		pav_ang_a = pav_ang_a - DEGREE; 
		recalc();
	}
}

function pav_ang_c_minus() 
{ 
	pav_ang_c = pav_ang_c - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		pav_ang_c = pav_ang_c + DEGREE; 
		recalc();
	}
}

function pav_ang_c_plus() 
{ 
	pav_ang_c = pav_ang_c + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		pav_ang_c = pav_ang_c - DEGREE; 
		recalc();
	}
}

function pav_ang_b_minus() 
{ 
	pav_ang_b = pav_ang_b - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		pav_ang_b = pav_ang_b + DEGREE; 
		recalc();
	}
}

function pav_ang_b_plus() 
{ 
	pav_ang_b = pav_ang_b + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		pav_ang_b = pav_ang_b - DEGREE; 
		recalc();
	}
}

function hA0_minus() 
{ 
	hA0 = hA0 - 0.005; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hA0 = hA0 + 0.005; 
		recalc();
	}
}

function hA0_plus() 
{ 
	hA0 = hA0 + 0.005; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hA0 = hA0 - 0.005; 
		recalc();
	}
}

function hA1_minus() 
{ 
	hA1 = hA1 - 0.005; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hA1 = hA1 + 0.005; 
		recalc();
	}
}

function hA1_plus() 
{ 
	hA1 = hA1 + 0.005; 
	recalc(); 
	if (isCorrect() == -1)
	{
		hA1 = hA1 - 0.005; 
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
	
	text = "Roundness 1 ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 150);	
	text = roundNumber(rounnd_cir1, 3);
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 150);	

	text = "Roundness 2 ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 170);	
	text = roundNumber(rounnd_cir2, 3);
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 170);	
	
	text = "Radius corner ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 190);	
	text = roundNumber(R3*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 190);
	
	text = "Size segments ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 210);	
	text = roundNumber(gd_segments*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 210);	
	
	text = "Angle 2 ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 230);
	text = roundNumber(Math.degrees(ang_2), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 230);
			
	text = "Angle 3 ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 250);
	text = roundNumber(Math.degrees(ang_3), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 250);
			
	text = "Angle corner ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 270);
	text = roundNumber(Math.degrees(ang_corner), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 270);	
	
	text = "Delta girdle 1 ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 290);	
	text = roundNumber(del_gd_1*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 290);	
	
	text = "Delta girdle 2 ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 310);	
	text = roundNumber(del_gd_2*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 310);	
	
	text = "Delta girdle 3 ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 330);	
	text = roundNumber(del_gd_3*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 330);	
	
	text = "Crown angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 360);	
	text = roundNumber(Math.degrees(beta), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 360);

	text = "Table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 380);	
	text = roundNumber(t*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 380);		
	
	text = "Star facets ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 400);	
	text = roundNumber(starFacets*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 400);		
	
	////////////////////
	// Pavilion
	text = "Pav. height (lower)";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 430);	
	text = roundNumber(hp1*100, 3)  + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 430);	
	
	text = "Pav. height (upper)";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 450);	
	text = roundNumber(hp2*100, 3)  + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 450);	

	text = "Delta pav. height";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 470);	
	text = roundNumber(del_hp1*100, 3)  + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 470);		
	
	text = "Pav.angle (facet a) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 490);	
	text = roundNumber(Math.degrees(pav_ang_a), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 490);	
	
	text = "Pav.angle (facet c) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 510);	
	text = roundNumber(Math.degrees(pav_ang_c), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 510);		
	
	text = "Pav.angle (facet b) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 530);	
	text = roundNumber(Math.degrees(pav_ang_b), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 530);			
	
	text = "Pav.facet ht.A0";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 550);	
	text = roundNumber(hA0*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 550);		
	
	text = "Pav.facet ht.A1";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 570);	
	text = roundNumber(hA1*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 570);	
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
	
	//////////////////////////////////////
	
	text = "Crown height ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 400);	
	text = roundNumber((Math.tan(beta) * (1 - t) / 2)*100, 1) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 350, 400);	
	
	text = "Pavilion depth";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 420);	
	text = roundNumber((hp1 + hp2)*100, 1) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 350, 420);	
	
	text = "Total height ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 250, 440);	
	text = roundNumber((Math.tan(beta) * (1 - t) / 2 + r + hp1 + hp2)*100, 1) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 350, 440);		
	
	///////////////////////////////////////////////////////
	
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
	ctx.fillText('Cushion Maltese Cross', window.innerWidth/2 - window.innerWidth/4, 60);
	ctx.font = '20px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Crown - 32 facets, Girdle - 64 facets, Pavilion - 48 facets', 
							window.innerWidth/4 - window.innerWidth/4 + window.innerWidth/5, 85);
}
