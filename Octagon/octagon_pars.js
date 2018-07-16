var btn_lw_minus, btn_lw_plus;
var btn_r_minus, btn_r_plus;
var btn_break_ratio_minus, btn_break_ratio_plus;
var btn_break_angle_minus, btn_break_angle_plus;
var btn_r_minus, btn_r_plus;
var btn_alpha_minus, btn_alpha_plus;
var btn_alpha1_minus, btn_alpha1_plus;
var btn_beta_minus, btn_beta_plus;
var btn_beta1_minus, btn_beta1_plus;
var btn_t_minus, btn_t_plus;
var btn_hCrown_minus, btn_hCrown_plus;
var btn_H2H_minus, btn_H2H_plus;
var btn_hp_minus, btn_hp_plus;
var btn_angleA_minus, btn_angleA_plus;
var btn_angleB_minus, btn_angleB_plus;
var btn_angleC_minus, btn_angleC_plus;
var btn_hLowerFaset_minus, btn_hLowerFaset_plus;
var btn_hMiddleFaset_minus, btn_hMiddleFaset_plus;


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
	
	btn_break_ratio_minus = new Btn("<", "button", "170px", "135px" );
	btn_break_ratio_plus = new Btn(">", "button", "200px", "135px" );
	btn_break_ratio_minus.name.addEventListener("click", break_ratio_minus);
	btn_break_ratio_plus.name.addEventListener("click", break_ratio_plus);	

	btn_break_angle_minus = new Btn("<", "button", "170px", "155px" );
	btn_break_angle_plus = new Btn(">", "button", "200px", "155px" );
	btn_break_angle_minus.name.addEventListener("click", break_angle_minus);
	btn_break_angle_plus.name.addEventListener("click", break_angle_plus);	
	
	// Crown
	btn_alpha_minus = new Btn("<", "button", "170px", "185px" );
	btn_alpha_plus = new Btn(">", "button", "200px", "185px" );
	btn_alpha_minus.name.addEventListener("click", alpha_minus);
	btn_alpha_plus.name.addEventListener("click", alpha_plus);	
	
	btn_alpha1_minus = new Btn("<", "button", "170px", "205px" );
	btn_alpha1_plus = new Btn(">", "button", "200px", "205px" );
	btn_alpha1_minus.name.addEventListener("click", alpha1_minus);
	btn_alpha1_plus.name.addEventListener("click", alpha1_plus);	
	
	btn_beta_minus = new Btn("<", "button", "170px", "225px" );
	btn_beta_plus = new Btn(">", "button", "200px", "225px" );
	btn_beta_minus.name.addEventListener("click", beta_minus);
	btn_beta_plus.name.addEventListener("click", beta_plus);			
	
	btn_hCrown_minus = new Btn("<", "button", "170px", "245px" );
	btn_hCrown_plus = new Btn(">", "button", "200px", "245px" );
	btn_hCrown_minus.name.addEventListener("click", hCrown_minus);
	btn_hCrown_plus.name.addEventListener("click", hCrown_plus);	
	
	btn_H2H_minus = new Btn("<", "button", "170px", "265px" );
	btn_H2H_plus = new Btn(">", "button", "200px", "265px" );
	btn_H2H_minus.name.addEventListener("click", H2H_minus);
	btn_H2H_plus.name.addEventListener("click", H2H_plus);
	
	// Pavilion
	btn_hp_minus = new Btn("<", "button", "170px", "295px" );
	btn_hp_plus = new Btn(">", "button", "200px", "295px" );
	btn_hp_minus.name.addEventListener("click", hp_minus);
	btn_hp_plus.name.addEventListener("click", hp_plus);

	btn_angleA_minus = new Btn("<", "button", "170px", "315px" );
	btn_angleA_plus = new Btn(">", "button", "200px", "315px" );	
	btn_angleA_minus.name.addEventListener("click", angleA_minus);
	btn_angleA_plus.name.addEventListener("click", angleA_plus);
	
	btn_angleB_minus = new Btn("<", "button", "170px", "335px" );
	btn_angleB_plus = new Btn(">", "button", "200px", "335px" );	
	btn_angleB_minus.name.addEventListener("click", angleB_minus);
	btn_angleB_plus.name.addEventListener("click", angleB_plus);
	
	btn_angleC_minus = new Btn("<", "button", "170px", "355px" );
	btn_angleC_plus = new Btn(">", "button", "200px", "355px" );	
	btn_angleC_minus.name.addEventListener("click", angleC_minus);
	btn_angleC_plus.name.addEventListener("click", angleC_plus);

	btn_hLowerFaset_minus = new Btn("<", "button", "170px", "375px" );
	btn_hLowerFaset_plus = new Btn(">", "button", "200px", "375px" );	
	btn_hLowerFaset_minus.name.addEventListener("click", hLowerFaset_minus);
	btn_hLowerFaset_plus.name.addEventListener("click", hLowerFaset_plus);

	btn_hMiddleFaset_minus = new Btn("<", "button", "170px", "395px" );
	btn_hMiddleFaset_plus = new Btn(">", "button", "200px", "395px" );	
	btn_hMiddleFaset_minus.name.addEventListener("click", hMiddleFaset_minus);
	btn_hMiddleFaset_plus.name.addEventListener("click", hMiddleFaset_plus);	
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


function break_ratio_minus()	
{ 
	corner_break_ratio = corner_break_ratio - 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		corner_break_ratio = corner_break_ratio + 0.01;
		recalc();
	}
}

function break_ratio_plus()	
{ 
	corner_break_ratio = corner_break_ratio + 0.01; 
	recalc(); 
	if (isCorrect() == -1)
	{
		corner_break_ratio = corner_break_ratio - 0.01;
		recalc();
	}
}

function break_angle_minus()	
{ 
	corner_break_angle = corner_break_angle - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		corner_break_angle = corner_break_angle + DEGREE;
		recalc();
	}
}

function break_angle_plus()	
{ 
	corner_break_angle = corner_break_angle + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		corner_break_angle = corner_break_angle - DEGREE;
		recalc();
	}
}

function alpha_minus()	
{ 
	alpha = alpha - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		alpha = alpha + DEGREE;
		recalc();
	}
}

function alpha_plus()	
{ 
	alpha = alpha + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		alpha = alpha - DEGREE;
		recalc();
	}
}

function alpha1_minus()	
{ 
	alpha1 = alpha1 - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		alpha1 = alpha1 + DEGREE;
		recalc();
	}
}

function alpha1_plus()	
{ 
	alpha1 = alpha1 + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		alpha1 = alpha1 - DEGREE;
		recalc();
	}
}

function beta_minus()	
{ 
	beta = beta - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		beta = beta + DEGREE;
		recalc();
	}
}

function beta_plus()	
{ 
	beta = beta + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		beta = beta - DEGREE;
		recalc();
	}
}

function hCrown_minus() 
{ 
	hCrown = hCrown - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		hCrown = hCrown + 0.01; 
		recalc();
	}
}

function hCrown_plus() 
{ 
	hCrown = hCrown + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		hCrown = hCrown - 0.01; 
		recalc();
	}
}

function H2H_minus() 
{ 
	H2H = H2H - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		H2H = H2H + 0.01; 
		recalc();
	}
}

function H2H_plus() 
{ 
	H2H = H2H + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		H2H = H2H - 0.01; 
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

function angleA_minus()	
{ 
	angleA = angleA - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		angleA = angleA + DEGREE;
		recalc();
	}
}

function angleA_plus()	
{ 
	angleA = angleA + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		angleA = angleA - DEGREE;
		recalc();
	}
}

function angleB_minus()	
{ 
	angleB = angleB - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		angleB = angleB + DEGREE;
		recalc();
	}
}

function angleB_plus()	
{ 
	angleB = angleB + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		angleB = angleB - DEGREE;
		recalc();
	}
}

function angleC_minus()	
{ 
	angleC = angleC - DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		angleC = angleC + DEGREE;
		recalc();
	}
}

function angleC_plus()	
{ 
	angleC = angleC + DEGREE; 
	recalc(); 
	if (isCorrect() == -1)
	{
		angleC = angleC - DEGREE;
		recalc();
	}
}

function hLowerFaset_minus() 
{ 
	hLowerFaset = hLowerFaset - 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		hLowerFaset = hLowerFaset + 0.1; 
		recalc();
	}
}

function hLowerFaset_plus() 
{ 
	hLowerFaset = hLowerFaset + 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		hLowerFaset = hLowerFaset - 0.1; 
		recalc();
	}
}

function hMiddleFaset_minus() 
{ 
	hMiddleFaset = hMiddleFaset - 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		hMiddleFaset = hMiddleFaset + 0.1; 
		recalc();
	}
}

function hMiddleFaset_plus() 
{ 
	hMiddleFaset = hMiddleFaset + 0.1; 
	recalc();
	if (isCorrect() == -1)
	{
		hMiddleFaset = hMiddleFaset - 0.1; 
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
	
	text = "Corner break ratio ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 150);	
	text = roundNumber(corner_break_ratio, 3);
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 150);	

	text = "Corner break ang. ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 170);	
	text = roundNumber(Math.degrees(corner_break_angle), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 170);	
	
	text = "Upper crown angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 200);	
	text = roundNumber(Math.degrees(alpha), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 200);
	
	text = "Up.corner cr.angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 220);	
	text = roundNumber(Math.degrees(alpha1), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 220);	
	
	text = "Low crown angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 240);
	text = roundNumber(Math.degrees(beta), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 240);
			
	text = "Crown height ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 260);
	text = roundNumber(hCrown*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 260);	
	
	text = "Crown parts ratio ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 280);	
	text = roundNumber(H2H*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 280);	
	
	text = "Pavilion depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 310);	
	text = roundNumber(hp*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 310);	
	
	text = "Pavilion angle A";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 330);	
	text = roundNumber(Math.degrees(angleA), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 330);	
	
	text = "Pavilion angle C ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 350);	
	text = roundNumber(Math.degrees(angleB), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 350);

	text = "Pavilion angle B ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 370);	
	text = roundNumber(Math.degrees(angleC), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 370);		
	
	text = "Lower facets ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 390);	
	text = roundNumber(hLowerFaset*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 390);		
	
	text = "Middle facets";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 410);	
	text = roundNumber(hMiddleFaset*100, 3)  + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 410);	
	
	text = "Table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 450);	
	var Dt = 0.5 - (hCrown * H2H / Math.tan(beta));
	var t = Dt - (hCrown - hCrown * H2H) / Math.tan(alpha);
	var value = t * 2;
	text = roundNumber(value*100, 1) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 140, 450);
	
	text = "Total height ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 50, 470);	
	var value = hCrown + hp + r;
	text = roundNumber(value*100, 1) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 140, 470);
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
	ctx.fillText('Octagon', window.innerWidth/2 - window.innerWidth/4 + window.innerWidth/8, 60);
	ctx.font = '20px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Crown - 16 facets + Table, Girdle - 8 facets, Pavilion - 28 facets', 
							window.innerWidth/4 - window.innerWidth/4 + window.innerWidth/5, 85);
}
