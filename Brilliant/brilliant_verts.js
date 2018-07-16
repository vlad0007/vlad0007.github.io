/*
var DEGREE = 0.01745329251994;
var PERCENT = 0.01;
var SQRT2 = 1.41421356237309504880

// Количество вершин частей огранки.
var nCrown  = 16;
var nGirdle = 64;
var nPav    = 16;
// Вспомогательные массивы для хранения координат вершин
// короны, рундиста и павильона.
var crown = [];
var girdle = [];
var pavil = [];
	
var lw = 1.0;      			// отношение длины огранки к ее ширине
// Рундист
var r = 0.057;       		// толщина рундиста
var square_deviation = 0.0; // квадратичность рундиста
// Корона
var beta = 30*DEGREE;//0.67831821947314540;//   34.5*DEGREE;    	// угол короны
var t = 0.57;				// размер площадки
var dSquare = 0.0; 
// Павильон
var alpha = 50*DEGREE;   // угол павильона
var hPavFacet = 0.80; 		// глубина нижних вершин фасет павильона
// Калетта
var culet = 5*PERCENT;// Размер калетты
var culet_R = 0.0; // Смещение калетты в процентах от диаметра
var culet_A = 0*DEGREE; // Направление (азимут) смещения калетты
// Азимуты
var low_az = 11.25*DEGREE;	// Азимут граней павильона
var up_az = 11.25*DEGREE;	// Азимут граней короны	
*/
	
// Расчет координат вершин огранки (модели).
function VerticesCalculation()
{

	InitGirdle(nGirdle);
	
    // Вспомогательные переменные и объекты
	var Z0 = new Vector3D(0,0,1);	// Единичный вертикально расположенный ветор.
	var norm2d = new Vector2D;
	var normPlaneVector = new Vector3D();
	var i;

	// Конструируем корону
	var r_tan_beta = 0.5 * Math.tan (beta); // beta - угол наклона граней короны
    var H1 = r/2;	// уровень верхней части рундиста
    var H2 = -r/2;	// уровень нижней части рундиста
	// точки короны пропорциональны точкам рундиста относительно upPoint (это следует
	// из предположения, что все грани пересекаются в одной точке)
	var upPoint = new Point3D(0.0, 0.0, H1 + r_tan_beta);

    for ( i = 0; i < 8; i++ )
    {
        var dir = new Vector3D(	girdle[i*8][0] - upPoint[0], 
								girdle[i*8][1] - upPoint[1], 
								girdle[i*8][2] - upPoint[2]);
		// Вектор dir нельзя нормировать !
		var pt = new Point3D(upPoint[0] + t * dir[0], upPoint[1] + t * dir[1], upPoint[2] + t * dir[2]);
		crown[i] = pt;
    }
	var angle = 0.01745329251994 * 34.5;
	var angle_1 = 34.5 * DEGREE;
	var hhh = 100;

	//  Находим точки пересечения основных граней  
	// короны между собой на уровне рундиста.
	
	// Сначала создание прямых касательных к рундисту
	var line = [];
	var dir = new Vector2D(girdle[1][0] - girdle[63][0], girdle[1][1] - girdle[63][1] );
	dir.Normer();
	var pt = new Point2D(girdle[0][0], girdle[0][1]);
	var ln = new Line2D();
	ln.CreateLineVectorPoint(dir, pt);
	line[0] = ln;
	
	for ( i = 1; i < 8; i++ ) 
	{
		var dir = new Vector2D(girdle[i*8+1][0] - girdle[i*8-1][0], girdle[i*8+1][1] - girdle[i*8-1][1]);
		dir.Normer();
		var pt = new Point2D(girdle[i*8][0], girdle[i*8][1]);
		var ln = new Line2D();
		line[i] = ln;
		ln.CreateLineVectorPoint(dir, pt);	// касательные к линии рундиста
	}
	
	// Точки пересечения предыдущих касательных между собой
	var g2 = [];
    for ( i = 0; i < 8; i++ )
	{
		var pt = line[i].IntersectionTwoLines(line[(i+1)%8]);
		g2[i] = pt;
	}
	
    // Точки звезды (вершины короны) пропорциональны  точкам g2 относительно upPoint
	// Коэффициент пропорциональности m находим по следующей формуле
    var m = (1 + SQRT2) / 2 * t;
    if ( dSquare <= 0 ) 
		m = m + dSquare * (m - 1 + t);
    else 
		m = m + dSquare * (1-m);
    // Координаты вершин звезды
    for ( i = 0; i < 8; i++ )
    {
		var dir = new Vector3D( g2[i][0] - upPoint[0], g2[i][1] - upPoint[1], H1 - upPoint[2] );
		var pt = new Point3D( upPoint[0] + m * dir[0], upPoint[1] + m * dir[1], upPoint[2] + m * dir[2] );
		crown[i+8] = pt;
    }

	girdle[1] = corr_gd_crown(girdle[0], girdle[4], girdle[1], girdle[1+64], crown[8]);
	girdle[2] = corr_gd_crown(girdle[0], girdle[4], girdle[2], girdle[2+64], crown[8]);
	girdle[3] = corr_gd_crown(girdle[0], girdle[4], girdle[3], girdle[3+64], crown[8]);
	
	girdle[5] = corr_gd_crown(girdle[4], girdle[8], girdle[5], girdle[5+64], crown[8]);
	girdle[6] = corr_gd_crown(girdle[4], girdle[8], girdle[6], girdle[6+64], crown[8]);
	girdle[7] = corr_gd_crown(girdle[4], girdle[8], girdle[7], girdle[7+64], crown[8]);
	
	girdle[9] = corr_gd_crown(girdle[8], girdle[12], girdle[9], girdle[9+64], crown[9]);
	girdle[10] = corr_gd_crown(girdle[8], girdle[12], girdle[10], girdle[10+64], crown[9]);
	girdle[11] = corr_gd_crown(girdle[8], girdle[12], girdle[11], girdle[11+64], crown[9]);	
	
	girdle[13] = corr_gd_crown(girdle[12], girdle[16], girdle[13], girdle[13+64], crown[9]);
	girdle[14] = corr_gd_crown(girdle[12], girdle[16], girdle[14], girdle[14+64], crown[9]);
	girdle[15] = corr_gd_crown(girdle[12], girdle[16], girdle[15], girdle[15+64], crown[9]);	
	
	for (i = 1; i < 16; i++)
	{
		girdle[16+i][2] = girdle[16-i][2];
		girdle[48-i][2] = girdle[16-i][2];
		girdle[48+i][2] = girdle[16-i][2];
	}
	
	/////////////////////////////////////////////////
	//            Конструируем павильон            //
	/////////////////////////////////////////////////
	var hp = Math.tan(alpha) * (1-culet) / 2;
	var kollet = new Point3D(); // Это точка в которй сходятся все
     // все 8 плоскостей в которых лежат главные грани павильона
	kollet[0] = culet_R * Math.cos(culet_A);
	kollet[1] = culet_R * Math.sin(-culet_A);
	kollet[2] = - (Math.tan(alpha)/2) - r/2;

	//  Находим точки пересечения основных граней  
	// павильона между собой на уровне рундиста.
	// На самом деле это те же самые точки из массива g2,
	// которые мы определили при построении короны.
	// Поэтому при построении короны воспользуемся значениями 
	// из этого массива.
    for (i = 0; i < 8; i++)
    {
        var dir = new Vector3D(kollet[0] - g2[i][0], kollet[1] - g2[i][1], kollet[2] + r/2);
		
		var pav1 = new Point3D(kollet[0] - (1 - hPavFacet) * dir[0], 
								kollet[1] - (1 - hPavFacet) * dir[1],
								kollet[2] - (1 - hPavFacet) * dir[2]);
		pavil[i] = pav1;
		
		var pav2 = new Point3D(kollet[0] - culet * dir[0], 
								kollet[1] - culet * dir[1], 
								kollet[2] - culet * dir[2])
		pavil[8+i] = pav2;
	}
	// Первый квадрант -  1
	girdle[1+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[1], girdle[1+64], pavil[0]);
	girdle[2+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[2], girdle[2+64], pavil[0]);
	girdle[3+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[3], girdle[3+64], pavil[0]);	
	// Первый квадрант -  2
	girdle[5+64] = corr_gd_pav(girdle[68], girdle[72], girdle[5], girdle[5+64], pavil[0]);
	girdle[6+64] = corr_gd_pav(girdle[68], girdle[72], girdle[6], girdle[6+64], pavil[0]);
	girdle[7+64] = corr_gd_pav(girdle[68], girdle[72], girdle[7], girdle[7+64], pavil[0]);	
	// Первый квадрант -  3
	girdle[9+64] = corr_gd_pav(girdle[72], girdle[76], girdle[9], girdle[9+64], pavil[1]);
	girdle[10+64] = corr_gd_pav(girdle[72], girdle[76], girdle[10], girdle[10+64], pavil[1]);
	girdle[11+64] = corr_gd_pav(girdle[72], girdle[76], girdle[11], girdle[11+64], pavil[1]);
	// Первый квадрант -  4
	girdle[13+64] = corr_gd_pav(girdle[76], girdle[80], girdle[13], girdle[13+64], pavil[1]);
	girdle[14+64] = corr_gd_pav(girdle[76], girdle[80], girdle[14], girdle[14+64], pavil[1]);
	girdle[15+64] = corr_gd_pav(girdle[76], girdle[80], girdle[15], girdle[15+64], pavil[1]);	
	
	// Второй квадрант -  1
	girdle[17+64] = corr_gd_pav(girdle[80], girdle[84], girdle[17], girdle[17+64], pavil[2]);
	girdle[18+64] = corr_gd_pav(girdle[80], girdle[84], girdle[18], girdle[18+64], pavil[2]);
	girdle[19+64] = corr_gd_pav(girdle[80], girdle[84], girdle[19], girdle[19+64], pavil[2]);
	// Второй квадрант -  2
	girdle[21+64] = corr_gd_pav(girdle[84], girdle[88], girdle[21], girdle[21+64], pavil[2]);
	girdle[22+64] = corr_gd_pav(girdle[84], girdle[88], girdle[22], girdle[22+64], pavil[2]);
	girdle[23+64] = corr_gd_pav(girdle[84], girdle[88], girdle[23], girdle[23+64], pavil[2]);	
	// Второй квадрант -  3
	girdle[25+64] = corr_gd_pav(girdle[88], girdle[92], girdle[25], girdle[25+64], pavil[3]);
	girdle[26+64] = corr_gd_pav(girdle[88], girdle[92], girdle[26], girdle[26+64], pavil[3]);
	girdle[27+64] = corr_gd_pav(girdle[88], girdle[92], girdle[27], girdle[27+64], pavil[3]);	
	// Второй квадрант -  4
	girdle[29+64] = corr_gd_pav(girdle[92], girdle[96], girdle[29], girdle[29+64], pavil[3]);
	girdle[30+64] = corr_gd_pav(girdle[92], girdle[96], girdle[30], girdle[30+64], pavil[3]);
	girdle[31+64] = corr_gd_pav(girdle[92], girdle[96], girdle[31], girdle[31+64], pavil[3]);		
	
	// Третий квадрант -  1
	girdle[33+64] = corr_gd_pav(girdle[96], girdle[100], girdle[33], girdle[33+64], pavil[4]);
	girdle[34+64] = corr_gd_pav(girdle[96], girdle[100], girdle[34], girdle[34+64], pavil[4]);
	girdle[35+64] = corr_gd_pav(girdle[96], girdle[100], girdle[35], girdle[35+64], pavil[4]);
	// Третий квадрант -  2
	girdle[37+64] = corr_gd_pav(girdle[100], girdle[104], girdle[37], girdle[37+64], pavil[4]);
	girdle[38+64] = corr_gd_pav(girdle[100], girdle[104], girdle[38], girdle[38+64], pavil[4]);
	girdle[39+64] = corr_gd_pav(girdle[100], girdle[104], girdle[39], girdle[39+64], pavil[4]);
	// Третий квадрант -  3
	girdle[41+64] = corr_gd_pav(girdle[104], girdle[108], girdle[41], girdle[41+64], pavil[5]);
	girdle[42+64] = corr_gd_pav(girdle[104], girdle[108], girdle[42], girdle[42+64], pavil[5]);
	girdle[43+64] = corr_gd_pav(girdle[104], girdle[108], girdle[43], girdle[43+64], pavil[5]);
	// Третий квадрант -  4
	girdle[45+64] = corr_gd_pav(girdle[108], girdle[112], girdle[45], girdle[45+64], pavil[5]);
	girdle[46+64] = corr_gd_pav(girdle[108], girdle[112], girdle[46], girdle[46+64], pavil[5]);
	girdle[47+64] = corr_gd_pav(girdle[108], girdle[112], girdle[47], girdle[47+64], pavil[5]);
	
	// Четвертый квадрант -  1
	girdle[49+64] = corr_gd_pav(girdle[112], girdle[116], girdle[49], girdle[49+64], pavil[6]);
	girdle[50+64] = corr_gd_pav(girdle[112], girdle[116], girdle[50], girdle[50+64], pavil[6]);
	girdle[51+64] = corr_gd_pav(girdle[112], girdle[116], girdle[51], girdle[51+64], pavil[6]);
	// Четвертый квадрант -  2
	girdle[53+64] = corr_gd_pav(girdle[116], girdle[120], girdle[53], girdle[53+64], pavil[6]);
	girdle[54+64] = corr_gd_pav(girdle[116], girdle[120], girdle[54], girdle[54+64], pavil[6]);
	girdle[55+64] = corr_gd_pav(girdle[116], girdle[120], girdle[55], girdle[55+64], pavil[6]);
	// Четвертый квадрант -  3
	girdle[57+64] = corr_gd_pav(girdle[120], girdle[124], girdle[57], girdle[57+64], pavil[7]);
	girdle[58+64] = corr_gd_pav(girdle[120], girdle[124], girdle[58], girdle[58+64], pavil[7]);
	girdle[59+64] = corr_gd_pav(girdle[120], girdle[124], girdle[59], girdle[59+64], pavil[7]);
	// Четвертый квадрант -  3
	girdle[61+64] = corr_gd_pav(girdle[124], girdle[64], girdle[61], girdle[61+64], pavil[7]);
	girdle[62+64] = corr_gd_pav(girdle[124], girdle[64], girdle[62], girdle[62+64], pavil[7]);
	girdle[63+64] = corr_gd_pav(girdle[124], girdle[64], girdle[63], girdle[63+64], pavil[7]);
	
	// В массиве vertices хранятся координаты (x, y, z) всех вершин огранки подряд.
	for(i = 0; i < 16; i++)
	{
		vertices.push(crown[i][0]);
		vertices.push(crown[i][1]);
		vertices.push(crown[i][2]);
	}
	
	for(i = 0; i < 128; i++)
	{
		vertices.push(girdle[i][0]);
		vertices.push(girdle[i][1]);
		vertices.push(girdle[i][2]);
	}
	
	for(i = 0; i < 16; i++)
	{
		vertices.push(pavil[i][0]);
		vertices.push(pavil[i][1]);
		vertices.push(pavil[i][2]);
	}	
}

// Функция находит точку пересечения вертикальной прямой (ребро рундиста)
// с наклонной плоскостью planeT, в которой лежит соответствующая грань короны.
function corr_gd_crown(gd1, gd2, gd3, gd4, cr)
{
	var planeT = new Plane3D();
	planeT.CreatePlaneThreePoints(gd1, gd2, cr);
	var vert_line = new Line3D(gd3, gd4);
	var pt = vert_line.IntersectionLinePlane(planeT);
	return pt;
}

// Функция находит точку пересечения вертикальной прямой (ребро рундиста)
// с наклонной плоскостью planeT, в которой лежит соответствующая грань павильона.
function corr_gd_pav(gd1, gd2, gd3, gd4, pav)
{
	var planeT = new Plane3D();
	planeT.CreatePlaneThreePoints(gd1, gd2, pav);
	var vert_line = new Line3D(gd3, gd4);
	var pt = vert_line.IntersectionLinePlane(planeT);
	return pt;
}

// Расчет вершин рундиста (girdle - рундист).
// Рундист является суперэллипсом разбитым на 64 части.
function InitGirdle(nGirdle)
{
	var fi_0 = -90*DEGREE;
	var r1 = 0.5 * lw; // Полуось эллипса по оси X
	var r2 = -0.5;          // Полуось эллипса по оси Y

	var dx = square_deviation;
	if ( dx < -1 || dx >= 0.995 )
		return null;
	var p = 2 / ( 1 - dx );  // Степень суперэллипса

	var del_fi = 2 * Math.PI / nGirdle; // Шаг углового параметра
	var x, y, w, fi;

	var i;
	for (i = 0; i < nGirdle; i++)
	{
		fi = fi_0 + i*del_fi; // Значение углового параметра
		x = Math.cos(fi);
		y = Math.sin(fi);
		w = Math.pow (Math.abs (x), p) + Math.pow (Math.abs (y), p);
		w = 1 / Math.pow ( w, 1/p );
		var point = new Point3D ( r1 * w * x,   r2 * w * y, r/2);
		girdle[i] = point;
	}
	for (i = 0; i < nGirdle; i++)
	{
		girdle[i+nGirdle] = new Point3D ( girdle[i][0], girdle[i][1], -r/2);
	}
}