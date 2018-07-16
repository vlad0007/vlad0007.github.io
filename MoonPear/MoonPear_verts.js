var DEGREE = 0.01745329251994;
var SQRT2 =  1.41421356237309;

var lw = 1.5;           // Отношение длины огранки к ее ширине 
// Корона
var beta = 35*DEGREE;         // Угол короны
var t = 0.6;            // Ширина площадки
var dSquare = 0.0;      // Задает положение средних вершин короны.
var vLh = 0.0;          // определяет смещение центральной точки огранки
// Форма и толщиа рундиста
var r = 0.04;            // Толщина рундиста
var vp = 0.0; // Угол, определяющий величину отклонения кривой от окружности
var Lh = 0.34;           // отклонение смещения самого широкого места рундиста 
var square_deviation = 0;  // степень отклонения рундиста от эллипса
// Павильон
var hp = 0.44;          // Задает глубину павильона
var hPavFacet = 0.8;	// Определяет положение нижних вершин клиньев павильона
var CuletX = 0.0;	    // смещение калетты вдоль оси X
var MoonFacetAngle = 64*DEGREE; // угол наклона лунных граней
var MoonRotateAngle = 17*DEGREE; // угол наклона плоскости пересекающей лунные грани
// Следующие параметры задают положение узловых вершин на рундисте
var DelAngGirdle_4 = 0;
var DelAngGirdle_8 = 0.0*DEGREE;
var DelAngGirdle_12 = 0.0*DEGREE;
var DelAngGd_16 = -2.0*DEGREE;
var DelAngGirdle_20 = 0.0*DEGREE;
var DelAngGirdle_24 = 0.0*DEGREE;
var DelAngGirdle_28 = 0.0*DEGREE;

var vertices = [];
var girdle = [64];
var crown = [];
var pavil = [];	

function VerticesCalculation()
{
	var i;
	var X1 = new Vector3D(1, 0, 0);
	var Y1 = new Vector3D(0, 1, 0);
	var Z1 = new Vector3D(0, 0, 1);
	var nCrown  = 16;
	var nGirdle = 64;
	var nPav    = 19;

	InitGirdle();
	
	// Crown
	var offset = vLh + lw * Lh - 0.5; // сдвиг центральной точки
	var upPoint = new Point3D(offset, 0, r/2 + 0.5 * Math.tan(beta));	
    for ( i = 0; i < 8; i++ )
    {
        var dir = new Vector3D(girdle[i*8][0] - upPoint[0], girdle[i*8][1] - upPoint[1], girdle[i*8][2] - upPoint[2]);
		// Значение параметра t (ширина площадки) выступает в качестве коэффициентата пропорциональности при нахождении
		// координат вершин короны лежащих на площадке.
		crown[i] = new Point3D(upPoint[0] + t * dir[0], upPoint[1] + t * dir[1], upPoint[2] + t * dir[2]);
    }	
	
	//    Определение уравнений касательных в заданных вершинах рундиста. 
	// Для решения этой задачи поступим следующим образом. 
	// Найдем направляющий вектор отрезка, соединяющего две вершины рундиста, 
	// ближайшие к той его вершине, через которую требуется провести касательную. 
	// Причем эти две вершины, через которые проходит отрезок, должны лежать 
	// по разные стороны от вершины рундиста через которую проводится касательная.  
	// Исходя из построенного отрезка, находим его направляющий вектор. 
	// Теперь у нас есть все необходимые составляющие, чтобы составить уравнение 
	// касательной к рундисту на плоскости – направляющий вектор касательной и точка (вершина рундиста),
    // через которую эта касательная проходит.
	
	var line = []; // касательные к 8 узловым точкам на рундисте
    for ( i = 0; i < 8; i++ )
    {
		var i1 = 1 + i*8;
		var i2 = (63 + i*8) % 64;

		var dir = new Vector2D(girdle[1+i*8][0] - girdle[(63+i*8)%64][0], girdle[1+i*8][1] - girdle[(63+i*8)%64][1]);
		dir.Normer();

		var pt = new Point2D(girdle[i*8][0], girdle[i*8][1]);
		line[i] = new Line2D();
		line[i].CreateLineVectorPoint(dir, pt);
	}	
	
	// Находим точки пересечения касательных между собой	
	var g2 = []; 
	for ( i = 0; i < 8; i++ )
	{
		var i3 = (i + 1) % 8;
		var pt = line[i].IntersectionTwoLines(line[(i+1)%8]);
		g2[i] = new Point2D(pt[0], pt[1]);
	}
	
	// При расчете мы учитываем, что ширина огранки равна 1, а ширина площадки равна t.
	
	// Коэффициент пропорциональности m задаем следующей формулой:
    var m = (1 + SQRT2) / 2 * t; 
    if ( dSquare <= 0 ) 
	{
		m = m + dSquare * (m - 1 + t);
	}
    else 
	{
		m = m + dSquare * (1 - m);
	}
	
	// Если dSquare = 0, то m =(1 + √2)*(t/2)
	
	//  Предварительное определение координат вершин короны, которые расположены между площадкой и рундистом огранки.
	//      Построение можно объяснить приблизительно следующим образом:
	//  Мы строим восемь отрезков, каждый из которых соединяет точку upPoint с одной из точек пересечения касательных к рундисту.
	// Затем  полученные отрезки делятся на две части в определенном отношении. 
	// Величина этого отношения вычисляется при помощи значения значения m и величины параметра dSquare.
    for ( i = 0; i < 8; i++ )
    {
		var dir = new Vector3D(g2[i][0] - upPoint[0], g2[i][1] - upPoint[1], r/2 - upPoint[2]);
		crown[i+8] = new Point3D(upPoint[0] + m * dir[0], upPoint[1] + m * dir[1], upPoint[2] + m * dir[2]);
    }
	
	// Корректировка положения вершин лежащих на площадке огранки.
	// Создаем горизонтальную плоскость на уровне площадки.
	var plane_table = new Plane3D(); 
	plane_table.CreatePlaneThreePoints(crown[0], crown[1], crown[2]);

	// Создаем три плоскости в которых лежат боковые грани короны огранки.
	// Всего боковых граней короны шесть, но мы считаем корону симметричной.
	var plane_B = new Plane3D();
	plane_B.CreatePlaneThreePoints(crown[14], crown[15], crown[7]);
	var plane_C = new Plane3D();
	plane_C.CreatePlaneThreePoints(crown[15], crown[8], crown[0]);
	var plane_D = new Plane3D();
	plane_D.CreatePlaneThreePoints(crown[1], crown[8], crown[9]);
	
	// Корректировка положения вершины корон 3 и 1 с целью "улучшения красоты" короны. 
	
	// Точка pt1 выбирается посередине  между точками crown[8] и crown[9] в горизонтальной плоскости.
	var pt1 = new Point3D( (crown[8][0] + crown[9][0])/2.0,
						   (crown[8][1] + crown[9][1])/2.0, 1.0);
	// 	Строим вектор dir_8_9 от crown[8] до  crown[9] в горизонтальной плоскости  . 
	var dir_8_9 = new Vector3D(crown[8][0] - crown[9][0], 
							   crown[8][1] - crown[9][1], 0.0);
	dir_8_9.Normer();				
	
	// Находим уравнение плоскости проходящей через pt1 и имеющую в качестве вектора нормали dir_8_9.
	var plane_Vert_1 = new Plane3D();
	plane_Vert_1.CreatePlaneNormalVectorPoint(dir_8_9, pt1);
	// Корректируем положение вершины 3 короны.
	crown[1] = plane_table.IntersectionThreePlanes(plane_Vert_1, plane_D);
	crown[3][0] = crown[1][0];
	crown[3][1] = - crown[1][1]; // из условия симметрии короны

	// Корректировку положения вершин короны 4 и 0 осуществляем также как и вершин 1 и 3 короны.
	var pt2 = new Point3D( (crown[15][0] + crown[8][0])/2.0,
						   (crown[15][1] + crown[8][1])/2.0, 1.0);
	var dir_15_8 = new Vector3D(crown[15][0] - crown[8][0], 
								crown[15][1] - crown[8][1], 0.0);
	var plane_Vert_2 = new Plane3D();
	plane_Vert_2.CreatePlaneNormalVectorPoint(dir_15_8, pt2);
	crown[0] = plane_table.IntersectionThreePlanes(plane_Vert_2, plane_C);
	crown[4][0] = crown[0][0];
	crown[4][1] = - crown[0][1];	// из условия симметрии короны
	
	// Корректировка положения вершин короны 5 и 7 осуществляем также как и вершин 1 и 3 короны.
	var pt3 = new Point3D( (crown[14][0] + crown[15][0])/2.0,
						   (crown[14][1] + crown[15][1])/2.0, 1.0);
	var dir_14_15 = new Vector3D(crown[14][0] - crown[15][0], 
								 crown[14][1] - crown[15][1], 0.0);
	var plane_Vert_3 = new Plane3D();
	plane_Vert_3.CreatePlaneNormalVectorPoint(dir_14_15, pt3);
	crown[7] = plane_table.IntersectionThreePlanes(plane_Vert_3, plane_B);
	crown[5][0] = crown[7][0];
	crown[5][1] = - crown[7][1]; // из условия симметрии короны
	
	GIRDLE_CROWN_POINTS(0, 4, 8)
	GIRDLE_CROWN_POINTS(4, 8, 8)
	GIRDLE_CROWN_POINTS(8, 12, 9)
	GIRDLE_CROWN_POINTS(12, 16, 9)

	GIRDLE_CROWN_POINTS(16, 20, 10)
	GIRDLE_CROWN_POINTS(20, 24, 10)
	GIRDLE_CROWN_POINTS(24, 28, 11)
	GIRDLE_CROWN_POINTS(28, 32, 11)

	GIRDLE_CROWN_POINTS(32, 36, 12)
	GIRDLE_CROWN_POINTS(36, 40, 12)
	GIRDLE_CROWN_POINTS(40, 44, 13)
	GIRDLE_CROWN_POINTS(44, 48, 13)

	GIRDLE_CROWN_POINTS(48, 52, 14)
	GIRDLE_CROWN_POINTS(52, 56, 14)
	GIRDLE_CROWN_POINTS(56, 60, 15)
	GIRDLE_CROWN_POINTS(60, 0, 15)	
	
	//  Pavilion
	var norm2d = new Vector2D(girdle[116][1] - girdle[76][1],  girdle[76][0] - girdle[116][0]);
	norm2d.Normer();
	var normPlaneVector = new Vector3D(-Math.sin(- MoonRotateAngle) * norm2d[0],
									   -Math.sin(- MoonRotateAngle) * norm2d[1],
									    Math.cos(- MoonRotateAngle)); 
	normPlaneVector.Normer();
	var planePitch = new Plane3D();
	planePitch.CreatePlaneNormalVectorPoint(normPlaneVector, girdle[76]);

	var planeMoon1 = Facet(- MoonFacetAngle, girdle[116], girdle[120], girdle[116]);
	var planeMoon2 = Facet(- MoonFacetAngle, girdle[120], girdle[124], girdle[120]);
	var planeMoon3 = Facet(- MoonFacetAngle, girdle[124], girdle[64], girdle[124]);
	var planeMoon4 = Facet(- MoonFacetAngle, girdle[64], girdle[68], girdle[64]);
	var planeMoon5 = Facet(- MoonFacetAngle, girdle[68], girdle[72], girdle[68]);
	var planeMoon6 = Facet(- MoonFacetAngle, girdle[72], girdle[76], girdle[72]);

	pavil[8] = planePitch.IntersectionThreePlanes(planeMoon1, planeMoon2);
	pavil[9] = planePitch.IntersectionThreePlanes(planeMoon2, planeMoon3);
	pavil[0] = planePitch.IntersectionThreePlanes(planeMoon3, planeMoon4);
	pavil[1] = planePitch.IntersectionThreePlanes(planeMoon4, planeMoon5);
	pavil[2] = planePitch.IntersectionThreePlanes(planeMoon5, planeMoon6);
	
	pavil[3] = new Point3D(pavil[2][0], -pavil[2][1], pavil[2][2]);
	pavil[4] = new Point3D(pavil[1][0], -pavil[1][1], pavil[1][2]);
	pavil[5] = new Point3D(pavil[0][0], -pavil[0][1], pavil[0][2]);
	pavil[6] = new Point3D(pavil[9][0], -pavil[9][1], pavil[9][2]);
	pavil[7] = new Point3D(pavil[8][0], -pavil[8][1], pavil[8][2]);

	pavil[18] = new Point3D(CuletX + vLh, 0.0, - hp - r/2);
	
	var planePavFacets = new Plane3D();
	planePavFacets.CreatePlaneNormalDistOXYZ(Z1, - hPavFacet * hp - r/2);
	
	var OXZ = new Plane3D();
	OXZ.CreatePlaneNormalDistOXYZ(Y1, 0);
	
	// Находим уравнение плоскости d павильона
	var vec_d = new Vector3D(girdle[78][0] - girdle[77][0],
							 girdle[78][1] - girdle[77][1], 0);
	var d = new Plane3D();
	d.CreatePlaneVectorTwoPoints(vec_d, pavil[18], girdle[76]);
	pavil[12] = OXZ.IntersectionThreePlanes(d, planePavFacets);							 
					
	// Находим уравнение вертикальной плоскости проходящей через g72 и верт. ось  
	var plane_kollet_g72 = new Plane3D();;
	plane_kollet_g72.CreatePlaneThreePoints(new Point3D(pavil[18][0], pavil[18][1], 0), 
										 new Point3D(pavil[18][0], pavil[18][1], 1), 
										 girdle[72]);
	// Находим координаты вершины pav. 11
	pavil[11] = planePavFacets.IntersectionThreePlanes(d, plane_kollet_g72);
	
	// Находим уравнение плоскости c павильона
	var c = new Plane3D();
	c.CreatePlaneThreePoints(pavil[18], pavil[1], pavil[11]);

	// Находим уравнение плоскости a павильона
	var vec_a = new Vector3D(girdle[118][0] - girdle[114][0],
							 girdle[118][1] - girdle[114][1], 0);
	var a = new Plane3D();
	a.CreatePlaneVectorTwoPoints(vec_a, pavil[18], girdle[116]);
	pavil[16] = OXZ.IntersectionThreePlanes(a, planePavFacets);	
	
	// Находим уравнение вертикальной плоскости проходящей через g72 и ось
	var plane_kollet_g120 = new Plane3D();
	plane_kollet_g120.CreatePlaneThreePoints(new Point3D(pavil[18][0], pavil[18][1], 0), 
										    new Point3D(pavil[18][0], pavil[18][1], 1), 
										    girdle[120]);

	// Находим координаты вершины pav. 17
	pavil[17] = planePavFacets.IntersectionThreePlanes(a, plane_kollet_g120);

	// Находим уравнение плоскости b павильона
	var b = new Plane3D();
	b.CreatePlaneThreePoints(pavil[18], pavil[9], pavil[17]);

	// И, наконец, находим координаты вершины pavil[10]
	pavil[10] = planePavFacets.IntersectionThreePlanes(b, c);

	pavil[13] = new Point3D(pavil[11][0], - pavil[11][1], pavil[11][2]);
	pavil[14] = new Point3D(pavil[10][0], - pavil[10][1], pavil[10][2]);
	pavil[15] = new Point3D(pavil[17][0], - pavil[17][1], pavil[17][2]);

	GIRDLE_PAV_POINTS(64, 68, 0)
	GIRDLE_PAV_POINTS(68, 72, 1)
	GIRDLE_PAV_POINTS(72, 76, 2)
	GIRDLE_PAV_POINTS(76, 80, 12)

	GIRDLE_PAV_POINTS(124, 64, 0)
	GIRDLE_PAV_POINTS(120, 124, 9)
	GIRDLE_PAV_POINTS(116, 120, 8)
	GIRDLE_PAV_POINTS(112, 116, 16)
	
	// Производим вычисления рундиста для остальных квадрантов
	for(i = 0; i < 16; i++)
	{
		girdle[80+i][2] = girdle[80-i][2];
	}
	for(i = 1; i < 16; i++)
	{
		girdle[96+i][2] = girdle[128-i][2];
	}
	
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
	
	for(i = 0; i < 19; i++)
	{
		vertices.push(pavil[i][0]);
		vertices.push(pavil[i][1]);
		vertices.push(pavil[i][2]);
	}	
}

function InitGirdle()
{
	// Для понимания действия параметров на форму рундиста
	// следует запустить PearGirdle.html .
	// следует учесть, что параметр vp обозначен как δ на экране при запуске программы.
	
	var i;
	// Вспомогательный массив для хранения координат X и Y рундиста
	var girdle2 = [];
	//  Названия приняты такими для совместимости с ранее
	// используемыми названиями.
	var v = lw * Lh - 0.5;
	var e = square_deviation;
    var g = 1. + v + v;
    if ( g < 0 )
		return null;
    var u = 2*lw - g;
    if ( u < 0 )
		return null;
    var fi = Math.asin ( ( u + u ) / ( u * u + 1.0) );
	var psi = fi + vp;
	if ( vp >= Math.Pi/2 ) 
		return null;
	var temp = Math.sqrt(0.5) + 2*square_deviation / Math.sqrt ( 1.+ g * g );
    if ( temp > 0.99 || temp < 0.5 ) 
		return null;
	var p = 2 / (1 - square_deviation);
    var t = u * Math.tan(psi);
    if ( t <= 2.0) 
		return null;
	var n = 64;
    var n2 = n / 2;
    var n4 = n / 4;
	var h = Math.PI / n2;

	var a = ( t - 1. ) / ( t - 2. );
	var s = a - 1.;
	var b = u * ( 1.- t ) / Math.sqrt ( t * t - ( t + t ) );

	// Переменные A, B и C определяют уравнение A*x + B*y + C = 0
	var A, B, C;
	var angle_current;
	var delta, x, y, w, x_rez, y_rez;
	var bRez;

	//   Вершина рундиста 16 изначально находится в точке сопряжения двух кривых, а именно ellipse 2 и ellipse 3
	// (это можно увидеть, усли запустить программу PearGirdle.html).
	// Поэтому, если мы хотим двигать вершину 16 рундиста по линии рундиста, то необходимо рассмотреть два
	// случая - когда значение DelAngGd_16 меньше или равно нулю, и когда значение DelAngGd_16 больше нуля.
	// Соответственно будут меняться координаты остальных вершин рундиста.
	// Заметим, что в программе PearGirdle.html регулировка положения вершины рундиста 16 отсутствует,
	// (также как и другие регулировки разбиения рундиста на сегменты) для того, 
	// чтобы не затенять построение собственно формы линии рундиста.
	if (DelAngGd_16 <= 0.0)
	{
		//  Сдвиг центральной точки рундиста в сторону
		// противоположную от носика груши.
		var ang_0_16 = Math.PI/2 + DelAngGd_16;
		var E = new Point2D(Math.sin(ang_0_16), Math.cos(ang_0_16));
		var alpha = Math.atan2(E[1], (E[0] + s));

		// Вершины в квадранте (X > 0; Y > 0)
		var ang_0_8 = ang_0_16 / 2 + DelAngGirdle_8;
		var ang_8_16 = ang_0_16 - ang_0_8;
		var ang_0_4 = ang_0_8 / 2 + DelAngGirdle_4;
		var ang_4_8 = ang_0_8 - ang_0_4;
		var ang_8_12 = ang_8_16 / 2 + DelAngGirdle_12;
		var ang_12_16 = ang_8_16 - ang_8_12;
		
		angle_current = 0.0;
		for ( i = 0; i <= 16; i++ )
		{
			x = Math.sin(angle_current);
			y = Math.cos (angle_current);
			w = Math.pow( y, p ) + Math.pow ( x, p );
			w = 1. / Math.pow ( w, 1./p );
			
			girdle2[i] = new Point2D( w * x, w * y * g);

			if (i < 4)
				delta = ang_0_4 / 4;
			else if (i < 8)
				delta = ang_4_8 / 4;
			else if (i < 12)
				delta = ang_8_12 / 4;
			else
				delta = ang_12_16 / 4;
			
			angle_current = angle_current + delta;
		}
		var v16_1_x = girdle2[16][0];
		var v16_1_y = girdle2[16][1];
		
		// Вершины в квадранте (X > 0; Y < 0)
		var ang_32 = Math.acos (s / a);
		var ang_16 = - alpha;
		var ang_24 = ang_32 - (ang_32 - ang_16 )/ 2.0 + DelAngGirdle_24;
		var ang_20 = ang_24 - (ang_24 - ang_16) / 2.0 + DelAngGirdle_20;
		var ang_28 = ang_32 - (ang_32 - ang_24) / 2.0 + DelAngGirdle_28;

		var j = 31;
		angle_current = ang_32;
		
		for ( i = 15; i >= 0; i-- )
		{
		
			if (i < 4)
				delta = (ang_20 - ang_16) / 4.0;
			else if ( (i >= 4) && (i < 8) )
				delta = (ang_24 - ang_20) / 4.0;
			else if ( (i >= 8) && (i < 12) )
				delta = (ang_28 - ang_24) / 4.0;
			else
				delta = (ang_32 - ang_28) / 4.0;

			angle_current = angle_current - delta;
			if (angle_current <= 0)
			{
				// x и y - координаты точки L
				x = a * Math.cos ( angle_current ) - s;
				y = b * Math.sin ( angle_current );
				// k - угловой коэффициент прямой DL
				var k = y / (x + s);
				//  Находим координаты точки K,
				// лежащей на пересечении прямой DL с Ellipse_1
				A = g*g + k*k;
				B = 2*k*k*s;
				C = s*s*k*k - g*g;
				// x_rez и x_yez - координаты точки K
				var pts = []; // Две точки пересечения
				bRez = QuadraticEquation(A, B, C, pts);
				if (pts[0] > pts[1])
					x_rez = pts[0];
				else
					x_rez = pts[1];
				y_rez = (x_rez + s)*k;
				girdle2[j] = new Point2D(x_rez, y_rez);
				j--;
			}
			else
			{
				girdle2[j] = new Point2D(a * Math.cos(angle_current) - s, b * Math.sin(angle_current));
				j--;
			}
		}
		girdle2[16] = new Point2D(v16_1_x, v16_1_y);
	}
	else
	{
		
		// DelAngGd_16 > 0.0
		//  Сдвиг центральной точки рундиста в сторону носика груши.
		// Определяем координаты точки N (g16)
		var N = new Point2D(a * Math.cos(DelAngGd_16) - s, b * Math.sin(DelAngGd_16)); 
		// Находим точку M пересечения прямой ON с Ellipse_1
		var k = N[1] / N[0];
		var beta = Math.atan2(-N[1], N[0]);
		var ang_0_16 = Math.PI/2 + beta;

		// Вершины g0 - g16
		var ang_0 = 0.0;
		var ang_8 = ang_0_16 / 2.0 + DelAngGirdle_8;
		var ang_4 = ang_0 + (ang_8 - ang_0) / 2.0 + DelAngGirdle_4;
		var ang_12 = ang_8 + (ang_0_16 - ang_8) / 2.0 + DelAngGirdle_12;
		var ang_16 = ang_0_16;
		
		angle_current = 0.0;
		for ( i = 0; i <= 15; i++ )
		{
			if (i <= 4)
				delta = (ang_4 - ang_0) / 4.0;
			else if ( (i >= 5) && (i <= 8) )
				delta = (ang_8 - ang_4) / 4.0;
			else if ( (i >= 9) && (i <= 12) )
				delta = (ang_12 - ang_8) / 4.0;
			else
				delta = (ang_16 - ang_12) / 4.0;
			// Это могут быть и координаты точки R
			// если окжется, что angle_current > Math.PI/2
			var x = Math.sin(angle_current);
			var y = g * Math.cos (angle_current);
			
			if (angle_current > Math.PI/2)
			{
				//  Находим точку P пересечения  
				// прямой OR с Ellipse_2
				k = y / x;	
				A = b*b + a*a*k*k;
				B = 2*b*b*s;
				C = b*b*s*s - a*a*b*b;
				var pts = [];
				bRez = QuadraticEquation(A, B, C, pts);
				if (pts[0] > pts[1])
					x_rez = pts[0];
				else
					x_rez = pts[1];
				y_rez = k * x_rez;

				girdle2[i] = new Point2D(x_rez, y_rez);
			}
			else
			{
				w = Math.pow ( y, p ) + Math.pow ( x, p );
				w = 1. / Math.pow ( w, 1./p );
				girdle2[i] = new Point2D(w * x, w * y * g);
			}
			angle_current = angle_current + delta;
		}
		
		// Вершины g16 - g32
		var ang_32 = Math.acos(s / a);
		ang_16 = DelAngGd_16; 
		var ang_24 = ang_32 - (ang_32 - ang_16 )/ 2.0 + DelAngGirdle_24;
		var ang_20 = ang_24 - (ang_24 - ang_16) / 2.0 + DelAngGirdle_20;
		var ang_28 = ang_32 - (ang_32 - ang_24) / 2.0 + DelAngGirdle_28;

		var j = 31;
		angle_current = Math.acos(s / a);
		for ( i = 16; i > 0; i-- )
		{
			if (i <= 4)
				delta = (ang_20 - ang_16) / 4.0;
			else if ( (i > 4) && (i <= 8) )
				delta = (ang_24 - ang_20) / 4.0;
			else if ( (i > 8) && (i <= 12) )
				delta = (ang_28 - ang_24) / 4.0;
			else
				delta = (ang_32 - ang_28) / 4.0;

			angle_current = angle_current - delta;
			girdle2[j] = new Point2D(a * Math.cos(angle_current) - s, b * Math.sin(angle_current));
			j--;
		}
	}

	// Остальные вершины
	girdle2[n2] = new Point2D(0.0, -u);
	for ( i = 1; i < n2; ++ i )
	{
		girdle2[i+n2] = new Point2D(-girdle2[n2-i][0], girdle2[n2-i][1]);
	}

	// Координату y вершины 0 рундиста удобно сделать равной нулю.
    var d = 1.0 - girdle2[0][1];
    for (i = 0; i < 64; ++ i)
    {
		girdle2[i][1] += d; // сдвиг координаты y всех вершин рундиста 
							// на величину d
	}
 
	//  Разворачиваем рундист в горизонтальной плоскости 
	// таким образом, чтобы основной диаметр рундиста
	// был направлен вдоль оси Y (разворот на 90°)
	for(i = 0; i < 48; i++)
	{
		girdle[i] = new Point3D(-0.5 * girdle2[i+16][1], 0.5 * girdle2[i+16][0], r/2);
		girdle[i+64] = new Point3D(girdle[i][0], girdle[i][1], -r/2);
	}

	for(i = 48; i < 64; i++)
	{
		girdle[i] = new Point3D(-0.5 * girdle2[i - 48][1], 0.5 * girdle2[i - 48][0], r/2);
		girdle[i+64] = new Point3D(girdle[i][0], girdle[i][1], -r/2);
	}

	return 1;
}

function GIRDLE_CROWN_POINTS(gd1, gd2, cr)
{
	var i;
	var crownPlane = new Plane3D();
	crownPlane.CreatePlaneThreePoints(girdle[(gd1)],girdle[(gd2)],crown[(cr)]); 
	for(i = 1; i < 4; i++) 
	{ 
		var vert_line = new Line3D(girdle[i+(gd1)], girdle[64+i+(gd1)]);
		girdle[i+gd1] = vert_line.IntersectionLinePlane(crownPlane);
	}
}

function GIRDLE_PAV_POINTS(gd1, gd2, pav)
{
	var i;
	var pavPlane = new Plane3D();
	pavPlane.CreatePlaneThreePoints(girdle[(gd1)], girdle[(gd2)], pavil[(pav)]); 
	for(i = 1; i < 4; i++) 
	{
		var vert_line = new Line3D(girdle[i+(gd1)], girdle[i+(gd1) - 64]);
		girdle[i+gd1] = vert_line.IntersectionLinePlane(pavPlane);
	}
}
