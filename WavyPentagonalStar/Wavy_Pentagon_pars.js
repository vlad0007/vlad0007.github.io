
var btn_lw_minus, btn_lw_plus;
var btn_r_minus, btn_r_plus;
var btn_e_minus, btn_e_plus;
var btn_hCrownUp_minus, btn_hCrownUp_plus;
var btn_hCrownDown_minus, btn_hCrownDown_plus;
var btn_ang_crown_down_minus, btn_ang_crown_down_plus;
var btn_ang_crown_up_minus, btn_ang_crown_up_plus;
var btn_hp_minus, btn_hp_plus;
var btn_h1_minus, btn_h1_plus;
var btn_ang_pav_down_minus, btn_ang_pav_down_plus;
var btn_ang_pav_up_minus, btn_ang_pav_up_plus;
var btn_num_minus, btn_num_plus;


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
	
	btn_e_minus = new Btn("<", "button", "170px", "135px" );
	btn_e_plus = new Btn(">", "button", "200px", "135px" );
	btn_e_minus.name.addEventListener("click", e_minus);
	btn_e_plus.name.addEventListener("click", e_plus);	

	btn_num_minus = new Btn("<", "button", "170px", "155px" );
	btn_num_plus = new Btn(">", "button", "200px", "155px" );
	btn_num_minus.name.addEventListener("click", num_minus);
	btn_num_plus.name.addEventListener("click", num_plus);	
	
	btn_hCrownUp_minus = new Btn("<", "button", "170px", "185px" );
	btn_hCrownUp_plus = new Btn(">", "button", "200px", "185px" );
	btn_hCrownUp_minus.name.addEventListener("click", hCrownUp_minus);
	btn_hCrownUp_plus.name.addEventListener("click", hCrownUp_plus);		
	
	btn_hCrownDown_minus = new Btn("<", "button", "170px", "205px" );
	btn_hCrownDown_plus = new Btn(">", "button", "200px", "205px" );
	btn_hCrownDown_minus.name.addEventListener("click", hCrownDown_minus);
	btn_hCrownDown_plus.name.addEventListener("click", hCrownDown_plus);		

	btn_ang_crown_up_minus = new Btn("<", "button", "170px", "225px" );
	btn_ang_crown_up_plus = new Btn(">", "button", "200px", "225px" );
	btn_ang_crown_up_minus.name.addEventListener("click", ang_crown_up_minus);
	btn_ang_crown_up_plus.name.addEventListener("click", ang_crown_up_plus);			
	
	btn_ang_crown_down_minus = new Btn("<", "button", "170px", "245px" );
	btn_ang_crown_down_plus = new Btn(">", "button", "200px", "245px" );
	btn_ang_crown_down_minus.name.addEventListener("click", ang_crown_down_minus);
	btn_ang_crown_down_plus.name.addEventListener("click", ang_crown_down_plus);		
	
	btn_hp_minus = new Btn("<", "button", "170px", "275px" );
	btn_hp_plus = new Btn(">", "button", "200px", "275px" );
	btn_hp_minus.name.addEventListener("click", hp_minus);
	btn_hp_plus.name.addEventListener("click", hp_plus);	
	
	btn_h1_minus = new Btn("<", "button", "170px", "295px" );
	btn_h1_plus = new Btn(">", "button", "200px", "295px" );
	btn_h1_minus.name.addEventListener("click", h1_minus);
	btn_h1_plus.name.addEventListener("click", h1_plus);	
	
	btn_ang_pav_up_minus = new Btn("<", "button", "170px", "315px" );
	btn_ang_pav_up_plus = new Btn(">", "button", "200px", "315px" );
	btn_ang_pav_up_minus.name.addEventListener("click", ang_pav_up_minus);
	btn_ang_pav_up_plus.name.addEventListener("click", ang_pav_up_plus);
	
	btn_ang_pav_down_minus = new Btn("<", "button", "170px", "335px" );
	btn_ang_pav_down_plus = new Btn(">", "button", "200px", "335px" );
	btn_ang_pav_down_minus.name.addEventListener("click", ang_pav_down_minus);
	btn_ang_pav_down_plus.name.addEventListener("click", ang_pav_down_plus);			
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

function e_minus() 
{ 
	e = e - 0.01; 
	recalc();
	if (isCorrect() == -1) 
	{
		e = e + 0.01;
		recalc();
	}
}

function e_plus() 
{ 
	e = e + 0.01; 
	recalc();
	if ( (isCorrect() == -1) || (e > 0.061) )
	{
		e = e - 0.01;
		recalc();
	}
}
/*
function m_minus() 
{ 
	m = m - 1;
	recalc();
}

function m_plus() 
{ 
	m = m + 1;
	recalc();
}
*/
function num_minus() 
{ 
	num = num - 1;
	recalc();
	if ( (isCorrect() == -1) || (num < 1) )
	{
		num = num + 1;
		recalc();
	}
}

function num_plus() 
{ 
	num = num + 1;
	recalc();
	if ( (isCorrect() == -1) || (num >= 10) )
	{
		num = num - 1;
		recalc();
	}
}

function hCrownUp_minus() 
{ 
	hCrownUp = hCrownUp - 0.01; 
	recalc();
	if (isCorrect() == -1) 
	{
		hCrownUp = hCrownUp + 0.01;
		recalc();
	}
}

function hCrownUp_plus() 
{ 
	hCrownUp = hCrownUp + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		hCrownUp = hCrownUp - 0.01;
		recalc();
	}
}

function hCrownDown_minus() 
{ 
	hCrownDown = hCrownDown - 0.01; 
	recalc();
	if (isCorrect() == -1) 
	{
		hCrownDown = hCrownDown + 0.01;
		recalc();
	}
}

function hCrownDown_plus() 
{ 
	hCrownDown = hCrownDown + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		hCrownDown = hCrownDown - 0.01;
		recalc();
	}
}

function ang_crown_down_minus() 
{ 
	ang_crown_down = ang_crown_down - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		ang_crown_down = ang_crown_down + DEGREE;
		recalc();
	}
}

function ang_crown_down_plus() 
{ 
	ang_crown_down = ang_crown_down + DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		ang_crown_down = ang_crown_down - DEGREE;
		recalc();
	}
}

function ang_crown_up_minus() 
{ 
	ang_crown_up = ang_crown_up - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		ang_crown_up = ang_crown_up + DEGREE;
		recalc();
	}
}

function ang_crown_up_plus() 
{ 
	ang_crown_up = ang_crown_up + DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		ang_crown_up = ang_crown_up - DEGREE;
		recalc();
	}
}

function hp_minus() 
{ 
	hp = hp - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		hp = hp + 0.01; 
		recalc();
	}
}

function hp_plus() 
{ 
	hp = hp + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		hp = hp - 0.01; 
		recalc();
	}
}

function h1_minus() 
{ 
	h1 = h1 - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		h1 = h1 + 0.01; 
		recalc();
	}
}

function h1_plus() 
{ 
	h1 = h1 + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		h1 = h1 - 0.01; 
		recalc();
	}
}

function ang_pav_up_minus() 
{ 
	ang_pav_up = ang_pav_up - DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		ang_pav_up = ang_pav_up + DEGREE; 
		recalc();
	}
}

function ang_pav_up_plus() 
{ 
	ang_pav_up = ang_pav_up + DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		ang_pav_up = ang_pav_up - DEGREE; 
		recalc();
	}
}

function ang_pav_down_minus() 
{ 
	ang_pav_down = ang_pav_down - DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		ang_pav_down = ang_pav_down + DEGREE; 
		recalc();
	}
}

function ang_pav_down_plus() 
{ 
	ang_pav_down = ang_pav_down + DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		ang_pav_down = ang_pav_down - DEGREE; 
		recalc();
	}
}

function angC_minus() 
{ 
	angC = angC - DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		angC = angC + DEGREE; 
		recalc();
	}
}

function angC_plus() 
{ 
	angC = angC + DEGREE; 
	recalc();
	if (isCorrect() == -1)
	{
		angC = angC - DEGREE; 
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
	
	text = "Girdle convexity ";
	ctx.fillStyle = "#FAA";
	ctx.fillText(text, 5, 150);	
	text = roundNumber(e, 3);
	ctx.fillStyle = "#FAC";
	ctx.fillText(text, 120, 150);	

	text = "Wavy ";
	ctx.fillStyle = "#FAA";
	ctx.fillText(text, 5, 170);		
	text = roundNumber(num, 2);
	ctx.fillStyle = "#FAC";
	ctx.fillText(text, 120, 170);		
	
	text = "Crown ht.(up) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 200);	
	text = roundNumber(hCrownUp*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 200);	
	
	text = "Crown ht.(down)";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 220);	
	text = roundNumber(hCrownDown*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 220);

	text = "Crown ang.(up) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 240);	
	text = roundNumber(Math.degrees(ang_crown_up), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 240);	
	
	text = "Crown ang.(down) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 260);
	text = roundNumber(Math.degrees(ang_crown_down), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 260);
			
	text = "Pavilion depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 290);
	text = roundNumber(hp*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 290);	
	
	text = "Pav. corner depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 310);	
	text = roundNumber(h1*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 310);	

	text = "Pav.angle(up) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 330);	
	text = roundNumber(Math.degrees(ang_pav_up), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 330);	
	
	text = "Pav.angle(down) ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 350);	
	text = roundNumber(Math.degrees(ang_pav_down), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 350);	
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
	
	//////////////////////////////////////////
	
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
	ctx.fillText('Pentagonal Star', window.innerWidth/2 - window.innerWidth/4 + window.innerWidth/8, 60);
	ctx.font = '20px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Crown - 15 facets + Table, Girdle - 80 facets, Pavilion - 20 facets', 
							window.innerWidth/4 - window.innerWidth/4 + window.innerWidth/5, 85);
}
