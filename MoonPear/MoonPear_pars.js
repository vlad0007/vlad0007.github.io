var btn_lw_minus, btn_lw_plus;
var btn_r_minus, btn_r_plus;
var btn_vp_minus, btn_vp_plus;
var btn_square_dev_minus, btn_square_dev_plus;
var btn_Lh_minus, btn_Lh_plus;
var btn_vLh_minus, btn_vLh_plus;
var btn_t_minus, btn_t_plus;
var btn_beta_minus, btn_beta_plus;
var btn_dSquare_minus,  btn_dSquare_plus;
var btn_hp_minus, btn_hp_plus;
var btn_hPavFacet_minus, btn_hPavFacet_plus;
var btn_culetX_minus, btn_culetX_plus;
var btn_MoonFacetAngle_minus, btn_MoonFacetAngle_plus;
var btn_MoonRotateAngle_minus, btn_MoonRotateAngle_plus;
var btn_DelAngGirdle_4_minus, btn_DelAngGirdle_4_plus;
var btn_DelAngGirdle_8_minus, btn_DelAngGirdle_8_plus;
var btn_DelAngGirdle_12_minus, btn_DelAngGirdle_12_plus;
var btn_DelAngGirdle_16_minus, btn_DelAngGirdle_16_plus;
var btn_DelAngGirdle_20_minus, btn_DelAngGirdle_20_plus;
var btn_DelAngGirdle_24_minus, btn_DelAngGirdle_24_plus;
var btn_DelAngGirdle_28_minus, btn_DelAngGirdle_28_plus;

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

	btn_Lh_minus = new Btn("<", "button", "170px", "175px" );
	btn_Lh_plus = new Btn(">", "button", "200px", "175px" );
	btn_Lh_minus.name.addEventListener("click", Lh_minus);
	btn_Lh_plus.name.addEventListener("click", Lh_plus);	
	
	btn_DelAngGirdle_4_minus = new Btn("<", "button", "170px", "195px" );
	btn_DelAngGirdle_4_plus = new Btn(">", "button", "200px", "195px" );
	btn_DelAngGirdle_4_minus.name.addEventListener("click", DelAngGirdle_4_minus);
	btn_DelAngGirdle_4_plus.name.addEventListener("click", DelAngGirdle_4_plus);

	btn_DelAngGirdle_8_minus = new Btn("<", "button", "170px", "215px" );
	btn_DelAngGirdle_8_plus = new Btn(">", "button", "200px", "215px" );
	btn_DelAngGirdle_8_minus.name.addEventListener("click", DelAngGirdle_8_minus);
	btn_DelAngGirdle_8_plus.name.addEventListener("click", DelAngGirdle_8_plus);
	
	btn_DelAngGirdle_12_minus = new Btn("<", "button", "170px", "235px" );
	btn_DelAngGirdle_12_plus = new Btn(">", "button", "200px", "235px" );
	btn_DelAngGirdle_12_minus.name.addEventListener("click", DelAngGirdle_12_minus);
	btn_DelAngGirdle_12_plus.name.addEventListener("click", DelAngGirdle_12_plus);

	btn_DelAngGirdle_16_minus = new Btn("<", "button", "170px", "255px" );
	btn_DelAngGirdle_16_plus = new Btn(">", "button", "200px", "255px" );
	btn_DelAngGirdle_16_minus.name.addEventListener("click", DelAngGirdle_16_minus);
	btn_DelAngGirdle_16_plus.name.addEventListener("click", DelAngGirdle_16_plus);	

	btn_DelAngGirdle_20_minus = new Btn("<", "button", "170px", "275px" );
	btn_DelAngGirdle_20_plus = new Btn(">", "button", "200px", "275px" );
	btn_DelAngGirdle_20_minus.name.addEventListener("click", DelAngGirdle_20_minus);
	btn_DelAngGirdle_20_plus.name.addEventListener("click", DelAngGirdle_20_plus);		
	
	btn_DelAngGirdle_24_minus = new Btn("<", "button", "170px", "295px" );
	btn_DelAngGirdle_24_plus = new Btn(">", "button", "200px", "295px" );
	btn_DelAngGirdle_24_minus.name.addEventListener("click", DelAngGirdle_24_minus);
	btn_DelAngGirdle_24_plus.name.addEventListener("click", DelAngGirdle_24_plus);		

	btn_DelAngGirdle_28_minus = new Btn("<", "button", "170px", "315px" );
	btn_DelAngGirdle_28_plus = new Btn(">", "button", "200px", "315px" );
	btn_DelAngGirdle_28_minus.name.addEventListener("click", DelAngGirdle_28_minus);
	btn_DelAngGirdle_28_plus.name.addEventListener("click", DelAngGirdle_28_plus);			
	
	// vLh
	btn_vLh_minus = new Btn("<", "button", "170px", "345px" );
	btn_vLh_plus = new Btn(">", "button", "200px", "345px" );
	btn_vLh_minus.name.addEventListener("click", vLh_minus);
	btn_vLh_plus.name.addEventListener("click", vLh_plus);		
	
	// table
	btn_t_minus = new Btn("<", "button", "170px", "375px" );
	btn_t_plus = new Btn(">", "button", "200px", "375px" );
	btn_t_minus.name.addEventListener("click", t_minus);
	btn_t_plus.name.addEventListener("click", t_plus);	
	
	btn_beta_minus = new Btn("<", "button", "170px", "395px" );
	btn_beta_plus = new Btn(">", "button", "200px", "395px" );
	btn_beta_minus.name.addEventListener("click", beta_minus);
	btn_beta_plus.name.addEventListener("click", beta_plus);	
	
	btn_dSquare_minus = new Btn("<", "button", "170px", "415px" );
	btn_dSquare_plus = new Btn(">", "button", "200px", "415px" );
	btn_dSquare_minus.name.addEventListener("click", dSquare_minus);
	btn_dSquare_plus.name.addEventListener("click", dSquare_plus);	
	
	// pavilion
	btn_hp_minus = new Btn("<", "button", "170px", "445px" );
	btn_hp_plus = new Btn(">", "button", "200px", "445px" );
	btn_hp_minus.name.addEventListener("click", hp_minus);
	btn_hp_plus.name.addEventListener("click", hp_plus);	
	
	btn_hPavFacet_minus = new Btn("<", "button", "170px", "465px" );
	btn_hPavFacet_plus = new Btn(">", "button", "200px", "465px" );
	btn_hPavFacet_minus.name.addEventListener("click", hPavFacet_minus);
	btn_hPavFacet_plus.name.addEventListener("click", hPavFacet_plus);	
		
	btn_culetX_minus = new Btn("<", "button", "170px", "485px" );
	btn_culetX_plus = new Btn(">", "button", "200px", "485px" );
	btn_culetX_minus.name.addEventListener("click", culetX_minus);
	btn_culetX_plus.name.addEventListener("click", culetX_plus);

	btn_MoonFacetAngle_minus = new Btn("<", "button", "170px", "505px" );
	btn_MoonFacetAngle_plus = new Btn(">", "button", "200px", "505px" );
	btn_MoonFacetAngle_minus.name.addEventListener("click", MoonFacetAngle_minus);
	btn_MoonFacetAngle_plus.name.addEventListener("click", MoonFacetAngle_plus);
	
	btn_MoonRotateAngle_minus = new Btn("<", "button", "170px", "525px" );
	btn_MoonRotateAngle_plus = new Btn(">", "button", "200px", "525px" );
	btn_MoonRotateAngle_minus.name.addEventListener("click", MoonRotateAngle_minus);
	btn_MoonRotateAngle_plus.name.addEventListener("click", MoonRotateAngle_plus);
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
	
	// дополнительная проверка
	var v = lw * Lh - 0.5;
	var e = square_deviation;

    var g = 1. + v + v;
    if ( g < 0 )
	{
		square_deviation = square_deviation + 0.05;
		return;
	}
    var u = 2*lw - g;
    if ( u < 0 )
	{
		square_deviation = square_deviation + 0.05;
		return;
	}
    var fi = Math.asin ( ( u + u ) / ( u * u + 1.0) );
	var psi = fi + vp;
	if ( vp >= Math.PI/2 ) 
	{
		square_deviation = square_deviation + 0.05;
		return;
	}
	var temp = Math.sqrt(0.5) + 2*square_deviation / Math.sqrt ( 1.+ g * g );
    if ( temp > 0.99 || temp < 0.5 )
	{		
		square_deviation = square_deviation + 0.05;
		return;
	}
	var p1 = Math.log(0.5);
	var p2 = Math.log(temp);
	var p = 2 / (1 - square_deviation);
    var t = u * Math.tan(psi);
    if ( t <= 2.0) 
	{
		square_deviation = square_deviation + 0.05;
		return;
	}

	recalc(); 
	if (isCorrect() == -1)
	{
		square_deviation = square_deviation + 0.05;
		recalc();
	}
}

function square_dev_plus()	
{ 
	square_deviation = square_deviation + 0.05; 
	// дополнительная проверка
	var v = lw * Lh - 0.5;
	var e = square_deviation;

    var g = 1. + v + v;
    if ( g < 0 )
	{
		square_deviation = square_deviation - 0.05;
		return;
	}
    var u = 2*lw - g;
    if ( u < 0 )
	{
		square_deviation = square_deviation - 0.05;
		return;
	}
    var fi = Math.asin ( ( u + u ) / ( u * u + 1.0) );
	var psi = fi + vp;
	if ( vp >= Math.PI/2 ) 
	{
		square_deviation = square_deviation - 0.05;
		return;
	}
	var temp = Math.sqrt(0.5) + 2*square_deviation / Math.sqrt ( 1.+ g * g );
    if ( temp > 0.99 || temp < 0.5 )
	{		
		square_deviation = square_deviation - 0.05;
		return;
	}
	var p1 = Math.log(0.5);
	var p2 = Math.log(temp);
	var p = 2 / (1 - square_deviation);
    var t = u * Math.tan(psi);
    if ( t <= 2.0) 
	{
		square_deviation = square_deviation - 0.05;
		return;
	}
	
	recalc(); 
	if (isCorrect() == -1)
	{
		square_deviation = square_deviation - 0.05;
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
//

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

//
function DelAngGirdle_16_minus()
{
	DelAngGd_16 = DelAngGd_16 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGd_16 = DelAngGd_16 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_16_plus()
{
	DelAngGd_16 = DelAngGd_16 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGd_16 = DelAngGd_16 - DEGREE;
		recalc();
	}		
}


//
function DelAngGirdle_20_minus()
{
	DelAngGirdle_20 = DelAngGirdle_20 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_20 = DelAngGirdle_20 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_20_plus()
{
	DelAngGirdle_20 = DelAngGirdle_20 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_20 = DelAngGirdle_20 - DEGREE;
		recalc();
	}		
}
//

function DelAngGirdle_24_minus()
{
	DelAngGirdle_24 = DelAngGirdle_24 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_24 = DelAngGirdle_24 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_24_plus()
{
	DelAngGirdle_24 = DelAngGirdle_24 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_24 = DelAngGirdle_24 - DEGREE;
		recalc();
	}		
}

//
function DelAngGirdle_28_minus()
{
	DelAngGirdle_28 = DelAngGirdle_28 - DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_28 = DelAngGirdle_28 + DEGREE;
		recalc();
	}		
}

function DelAngGirdle_28_plus()
{
	DelAngGirdle_28 = DelAngGirdle_28 + DEGREE; 
	recalc();
	if (isCorrect() == -1) 
	{
		DelAngGirdle_28 = DelAngGirdle_28 - DEGREE;
		recalc();
	}		
}

function vLh_minus() 
{ 
	vLh = vLh - 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		vLh = vLh + 0.01;
		recalc();
	}
}

function vLh_plus() 
{ 
	vLh = vLh + 0.01; 
	recalc();
	if (isCorrect() == -1)
	{
		vLh = vLh - 0.01;
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
	
	//text = "vp ";
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
	
	text = "Lh ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 190);	
	ctx.fillStyle = value_color;
	text = roundNumber(Lh*100, 2) + "%";
	ctx.fillText(text, 120, 190);		
	
	text = "Del.ang.gd.4";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 210);	
	text = roundNumber(Math.degrees(DelAngGirdle_4), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 210);	
	
	text = "Del.ang.gd.8";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 230);	
	text = roundNumber(Math.degrees(DelAngGirdle_8), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 230);		
	
	text = "Del.ang.gd.12";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 250);	
	text = roundNumber(Math.degrees(DelAngGirdle_12), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 250);		
	
	text = "Del.ang.gd.16";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 270);	
	text = roundNumber(Math.degrees(DelAngGd_16), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 270);	
	
	text = "Del.ang.gd.20";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 290);	
	text = roundNumber(Math.degrees(DelAngGirdle_20), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 290);	
	
	text = "Del.ang.gd.24";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 310);	
	text = roundNumber(Math.degrees(DelAngGirdle_24), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 310);
	
	text = "Del.ang.gd.28";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 330);	
	text = roundNumber(Math.degrees(DelAngGirdle_28), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 330);	
	
	text = "vLh ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 360);	
	text = roundNumber(vLh*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 360);	
	
	text = "Table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 390);	
	text = roundNumber(t*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 390);
	
	text = "Crown angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 410);	
	text = roundNumber(Math.degrees(beta), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 410);	
	
	text = "Square table ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 430);	
	text = roundNumber(dSquare*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 430);
	
	// pavilion
	text = "Pavilion depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 460);	
	text = roundNumber(hp*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 460);	
	
	text = "Lower facets depth ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 480);	
	text = roundNumber(hPavFacet*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 480);

	text = "Culet X ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 500);	
	text = roundNumber(CuletX*100, 3) + "%";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 500);	

	text = "Moon facet angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 520);	
	text = roundNumber(Math.degrees(MoonFacetAngle), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 520);	

	text = "Moon rotate angle ";
	ctx.fillStyle = text_color;
	ctx.fillText(text, 5, 540);	
	text = roundNumber(Math.degrees(MoonRotateAngle), 3) + "°";
	ctx.fillStyle = value_color;
	ctx.fillText(text, 120, 540);	
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
	ctx.fillText('MoonPear', window.innerWidth/2 - window.innerWidth/4, 60);
	ctx.font = '20px "Times New Roman"';
	ctx.fillStyle = 'rgba(100, 255, 255, 1)'
	ctx.fillText('Crown - 32 facets + Table, Girdle - 64 facets, Pavilion - 36 facets', 
							window.innerWidth/4 - window.innerWidth/4 + window.innerWidth/8, 85);
}
	
