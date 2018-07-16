var DEGREE = 0.01745329251994;
var M_PI =   3.14159265358979;
var SQRT2 =  1.41421356237309;

var lw = 1.8;        // Отношение длины огранки к ее ширине

// Корона
var beta = 35*DEGREE;    // Угол короны 
var t = 0.60;            // Ширина площадки
var table_length = 0.72; // Позволяет изменять длину площадки (вдоль оси X)
var dSquare = 0.0;          // Задает положение средних вершин короны.

// Форма и толщиа рундиста
var r = 0.05;            // Толщина рундиста
var vp = 0.0;            // Угол, определяющий величину отклонения кривой от окружности
var square_deviation = 0.0; // Параметр задающий степень суперэллипса

// Павильон
var hp = 0.464;               // Задает глубину павильона
var hPavFacet = 0.8;        // Определяет положение нижних вершин клиньев павильона
var CuletX = 0;           // Смещение калетты вдоль оси X
var MoonFacetAngle = 53.5*DEGREE; // Угол наклона лунных граней павильона
var MoonRotateAngle = 17.9*DEGREE;  // Угол наклна плоскости planePitch

// Расстановка вершин на рундисте
var DelAngGirdle_4 = 2.0*DEGREE;   // Задает положение вершины рундиста g4
var DelAngGirdle_8 = 2.0*DEGREE;   // Задает положение вершины рундиста g8
var DelAngGirdle_12 = 2.0*DEGREE;  // Задает положение вершины рундиста g12

var vertices = [];
var girdle = [64];

function VerticesCalculation()
{
	InitGirdle();
	
	var i;
	var Y1 = new Vector3D(0, 1, 0);
	var Z1 = new Vector3D(0, 0, 1);
	var nCrown  = 16;
	var nGirdle = 64;
	var nPav    = 19;
	var crown = [];
	var pavil = [];	
	
	// Конструируем корону
	var upPoint = 0.5 * Math.tan(beta) + r/2; 
	var h_cr = 0.5 * Math.tan(beta) * (1 - t);	
	
	//  Определение уравнений касательных в заданных вершинах рундиста к самому рундисту. 
	// Для решения этой задачи поступим следующим образом. 
	// Найдем направляющий вектор отрезка, соединяющего две вершины рундиста, 
	// ближайшие к той его вершине, через которую требуется провести касательную. 
	// Причем эти две вершины, через которые проходит отрезок, должны лежать 
	//  по разные стороны от вершины рундиста через которую проводится касательная.  
	// Исходя из построенного отрезка, находим его направляющий вектор. 
	// Теперь у нас есть все необходимые составляющие, чтобы составить уравнение 
	// касательной к рундисту на плоскости – направляющий вектор касательной и точка (вершина рундиста),
    // через которую эта касательная проходит.	
	
	// Касательные к рундисту в его вершинах g56 и g0
	var ln_g56 = new Line2D();
	ln_g56.CreateLineVectorPoint(new Vector2D(girdle[57][0] - girdle[55][0],girdle[57][1] - girdle[55][1]),
							       new Point2D(girdle[56][0], girdle[56][1]));
								   
	var ln_g0 = new Line2D();
	ln_g0.CreateLineVectorPoint(new Vector2D(girdle[1][0] - girdle[63][0], girdle[1][1] - girdle[63][1]),
	       					       new Point2D(girdle[0][0], girdle[0][1]));
	// Находим точку пересечения касательных
	var point = ln_g56.IntersectionTwoLines(ln_g0);	
	
	// При расчете мы учитываем, что ширина огранки равна 1, а ширина площадки равна t.
	
	// Коэффициент пропорциональности m задаем следующей формулой:	
	
    // Точки звезды короны пропорциональны этой точке относительно upPoint
    var mm = (1 + SQRT2) / 2 * t;
    if ( dSquare <= 0 ) 
		mm = mm + dSquare * (mm - 1 + t);
    else 
		mm = mm + dSquare * (1 - mm);
	
	// Если dSquare = 0, то m =(1 + √2)*(t/2)

	// Используя значение парметра dSquare находим координаты вершины
	// короны 15. Впоследствии эти координаты будут пересчитаны.	
	var dir = new Vector3D(point[0], point[1], r/2 - upPoint);
	crown[15] = new Point3D(mm * dir[0], mm * dir[1], upPoint + mm * dir[2]);
	
	// Определяем координаты вершины 6 короны
	crown[6] = new Point3D(-lw * table_length / 2, 0.0, h_cr + r/2);
	
	//  Рассчитываем уравнение плоскости в которой лежит грань g48-cr14-cr6-cr13 с учетом того, 
	// что эта плоскость параллельна координатной прямой OY.
	var plane_A = new Plane3D();
	plane_A.CreatePlaneVectorTwoPoints(Y1, girdle[48], crown[6]);
		                                 
	// Для того, чтобы корона огранки выглядела красивой требуется чтобы ребра проходящие через
	// вершины crown[14] и girdle[52], crown[15] и girdle[60] подходили к рундисту под прямым углом.
	// Это также касается всех остальных подобных ребер короны.
										 
	// Вектора идущие вдоль линий касательных к рундисту в его вершинах 52, 60
	var dir_52 = new Vector3D(girdle[53][0] - girdle[51][0], girdle[53][1] - girdle[51][1], 0);
	dir_52.Normer();
	var dir_60 = new Vector3D(girdle[61][0] - girdle[59][0], girdle[61][1] - girdle[59][1], 0);
	dir_60.Normer();
		                
	//  Плоскости проходящие перпендикулярно к линиям, 
	// касательным к рундисту в его вершинах 52 и 60
	var pl_g52 = new Plane3D();
	pl_g52.CreatePlaneNormalVectorPoint(dir_52, girdle[52]);
	var pl_g60 = new Plane3D();
	pl_g60.CreatePlaneNormalVectorPoint(dir_60, girdle[60]);
	
	// Плоскость проходящая через вершину girdle[0] и имеющую наклон beta к плоскости OXY.
	var plane_C = Facet(beta, girdle[60], girdle[4], girdle[0]);
	
	// Проводим горизонтальную плоскость на уровне средних вершин короны.
	// В дальнейшем будем считать, что этот уровень определяет рассчитанное н
	// (на данный момент времени) положение вершины 15 короны.
	var pl_middle = new Plane3D();  
	pl_middle.CreatePlaneNormalVectorPoint(Z1, crown[15]);	
	
	//  Определяем координаты вершин короны 14 
	// и пересчитываем координаты вершины короны 15
	crown[14] = pl_middle.IntersectionThreePlanes(plane_A, pl_g52);
	crown[15] = pl_middle.IntersectionThreePlanes(plane_C, pl_g60);
	
	var plane_B = new Plane3D(); // Плоскость B короны
	plane_B.CreatePlaneThreePoints(girdle[56], crown[14], crown[15]);	
	
	// Горизонтальная плоскость на уровне площадки
	var pl_table = new Plane3D();
	pl_table.CreatePlaneNormalDistOXYZ(Z1, h_cr + r/2);

	// Две вспомогательные плоскости.
	var OXZ = new Plane3D();
	OXZ.CreatePlaneThreePoints(new Point3D(1,0,0), new Point3D(0,0,1), new Point3D(0,0,0));	
	var OYZ = new Plane3D();
	OYZ.CreatePlaneThreePoints(new Point3D(0,0,0), new Point3D(0,0,1), new Point3D(0,1,0));
	
	// Определяем координаты вершины короны 0.
	crown[0] = pl_table.IntersectionThreePlanes(plane_C, OYZ);	
	
	// Определяем координаты вершины короны 7
	var pB = new Point3D( (crown[14][0] + crown[15][0])/2.0, (crown[14][1] + crown[15][1])/2.0, 1.0);
	var vec_B = new Vector3D(crown[14][0] - crown[15][0], crown[14][1] - crown[15][1], 0.0);
	var pl_B_Vert = new Plane3D();
	pl_B_Vert.CreatePlaneNormalVectorPoint(vec_B, pB);
	crown[7] = pl_table.IntersectionThreePlanes(pl_B_Vert, plane_B);
	
	// исходя из учета симметрии огранки
	crown[1] = new Point3D(-crown[7][0], crown[7][1], crown[7][2]);
	crown[2] = new Point3D(-crown[6][0], crown[6][1], crown[6][2]);
	crown[8] = new Point3D(-crown[15][0], crown[15][1], crown[15][2]);
	crown[9] = new Point3D(-crown[14][0], crown[14][1], crown[14][2]);
	crown[3] = new Point3D(crown[1][0], -crown[1][1], crown[1][2]);
	crown[4] = new Point3D(crown[0][0], -crown[0][1], crown[0][2]);
	crown[5] = new Point3D(crown[7][0], -crown[7][1], crown[7][2]);
	crown[10] = new Point3D(crown[9][0], -crown[9][1], crown[9][2]);
	crown[11] = new Point3D(crown[8][0], -crown[8][1], crown[8][2]);
	crown[12] = new Point3D(crown[15][0], -crown[15][1], crown[15][2]);
	crown[13] = new Point3D(crown[14][0], -crown[14][1], crown[14][2]);

	// Корректировка высоты вершин рундиста со стороны короны огранки.
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
		
	// исходя из учета симметрии огранки
	for (i = 1; i < 16; i++)
	{
		girdle[16+i][2] = girdle[16-i][2];
		girdle[48-i][2] = girdle[16-i][2];
		girdle[48+i][2] = girdle[16-i][2];
	}
	
	//     Pavilion
	
	//  Находим уравнение плоскости planePitch проходящей под заданным углом 
	// MoonRotateAngle к горизонтальной плоскости.
	var vecPitch = new Vector3D(0, 0, 1);
	vecPitch[0] = 0.0;
	vecPitch[1] = - Math.sin(MoonRotateAngle);
	vecPitch[2] = - Math.cos(MoonRotateAngle);
	vecPitch.Normer();
	var planePitch = new Plane3D();
	planePitch.CreatePlaneNormalVectorPoint(vecPitch, girdle[64+12]);

	// Находим уравнения плоскотей в которых лежат лунные грани павильона огранки
	var planeMoon1 = Facet(- MoonFacetAngle, girdle[116], girdle[120], girdle[116]);
	var planeMoon2 = Facet(- MoonFacetAngle, girdle[120], girdle[124], girdle[120]);
	var planeMoon3 = Facet(- MoonFacetAngle, girdle[124], girdle[64], girdle[124]);
	var planeMoon4 = Facet(- MoonFacetAngle, girdle[64], girdle[68], girdle[64]);
	var planeMoon5 = Facet(- MoonFacetAngle, girdle[68], girdle[72], girdle[68]);
	var planeMoon6 = Facet(- MoonFacetAngle, girdle[72], girdle[76], girdle[72]);

	//  Вершины павильона 0, 1, 2, 9, 8 находятся как точки пересечения 
	// соответствующих лунных граней с плоскостью planePitch.
	pavil[8] = planePitch.IntersectionThreePlanes(planeMoon1, planeMoon2);
	pavil[9] = planePitch.IntersectionThreePlanes(planeMoon2, planeMoon3);
	pavil[0] = planePitch.IntersectionThreePlanes(planeMoon3, planeMoon4);
	pavil[1] = planePitch.IntersectionThreePlanes(planeMoon4, planeMoon5);
	pavil[2] = planePitch.IntersectionThreePlanes(planeMoon5, planeMoon6);
	
	// исходя из учета симметрии огранки
	pavil[3] = new Point3D(pavil[2][0], -pavil[2][1], pavil[2][2]);
	pavil[4] = new Point3D(pavil[1][0], -pavil[1][1], pavil[1][2]);
	pavil[5] = new Point3D(pavil[0][0], -pavil[0][1], pavil[0][2]);
	pavil[6] = new Point3D(pavil[9][0], -pavil[9][1], pavil[9][2]);
	pavil[7] = new Point3D(pavil[8][0], -pavil[8][1], pavil[8][2]);

	// kolett - самая нижняя вершина павильона
	pavil[18] = new Point3D(CuletX, 0.0, - hp - r/2);
	
	// Горизонтальная плоскость на уровне фасет павильона
	var planeHorPav = new Plane3D();
	planeHorPav.CreatePlaneNormalDistOXYZ(Z1, - hPavFacet * hp - r/2);

	// !!! Азимуты граней павильона (НЕ лунных граней) определяются направлением касательных к рундисту.
	
	// Касательная к рундисту в вершине girdle[116]  // Грань A
	var vec_A_pav = new Vector3D(girdle[114][0] - girdle[115][0], girdle[114][1] - girdle[115][1], 0);
	vec_A_pav.Normer();
	var pl_A = new Plane3D(); // Грань A
	pl_A.CreatePlaneVectorTwoPoints(vec_A_pav, pavil[18], girdle[116]);

	// Касательная к рундисту в вершине girdle[124]
	var vec_B_pav = new Vector3D(girdle[123][0] - girdle[125][0], girdle[123][1] - girdle[125][1], 0);
	vec_B_pav.Normer();
	var pl_B = new Plane3D(); // Грань B
	pl_B.CreatePlaneVectorTwoPoints(vec_B_pav, pavil[18], pavil[9]);

	// Касательная к рундисту в вершине girdle[68]
	var vec_C_pav = new Vector3D(girdle[67][0] - girdle[69][0], girdle[67][1] - girdle[69][1], 0);
	vec_C_pav.Normer();
	var pl_C = new Plane3D(); // Грань C
	pl_C.CreatePlaneVectorTwoPoints(vec_C_pav, pavil[18], pavil[1]);

	// Касательная к рундисту в вершине girdle[76]
	var vec_D_pav = new Vector3D(girdle[77][0] - girdle[78][0], girdle[77][1] - girdle[78][1], 0);
	vec_D_pav.Normer();
	var pl_D = new Plane3D();
	pl_D.CreatePlaneVectorTwoPoints(vec_D_pav, pavil[18], girdle[76]);
	
	pavil[16] = planeHorPav.IntersectionThreePlanes(OXZ, pl_A,);
	pavil[17] = planeHorPav.IntersectionThreePlanes(pl_A, pl_B);
	pavil[10] = planeHorPav.IntersectionThreePlanes(pl_B, pl_C);
	pavil[11] = planeHorPav.IntersectionThreePlanes(pl_C, pl_D);
	pavil[12] = planeHorPav.IntersectionThreePlanes(OXZ, pl_D);
	
	// исходя из учета симметрии огранки
	pavil[13] = new Point3D(pavil[11][0], -pavil[11][1], pavil[11][2]);
	pavil[14] = new Point3D(pavil[10][0], -pavil[10][1], pavil[10][2]);
	pavil[15] = new Point3D(pavil[17][0], -pavil[17][1], pavil[17][2]);
	
	// Корректировка глубин вершин рундиста со стороны павильона огранки.
	// Первый квадрант -  1
	girdle[1+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[1], girdle[1+64], pavil[0]);
	girdle[2+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[2], girdle[2+64], pavil[0]);
	girdle[3+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[3], girdle[3+64], pavil[0]);	
	// Первый квадрант -  2
	girdle[5+64] = corr_gd_pav(girdle[68], girdle[72], girdle[5], girdle[5+64], pavil[1]);
	girdle[6+64] = corr_gd_pav(girdle[68], girdle[72], girdle[6], girdle[6+64], pavil[1]);
	girdle[7+64] = corr_gd_pav(girdle[68], girdle[72], girdle[7], girdle[7+64], pavil[1]);	
	// Первый квадрант -  3
	girdle[9+64] = corr_gd_pav(girdle[72], girdle[76], girdle[9], girdle[9+64], pavil[2]);
	girdle[10+64] = corr_gd_pav(girdle[72], girdle[76], girdle[10], girdle[10+64], pavil[2]);
	girdle[11+64] = corr_gd_pav(girdle[72], girdle[76], girdle[11], girdle[11+64], pavil[2]);
	// Первый квадрант -  4
	girdle[13+64] = corr_gd_pav(girdle[76], girdle[80], girdle[13], girdle[13+64], pavil[12]);
	girdle[14+64] = corr_gd_pav(girdle[76], girdle[80], girdle[14], girdle[14+64], pavil[12]);
	girdle[15+64] = corr_gd_pav(girdle[76], girdle[80], girdle[15], girdle[15+64], pavil[12]);	
	
	// Второй квадрант -  1
	girdle[125] = corr_gd_pav(girdle[124], girdle[64], girdle[61], girdle[61+64], pavil[0]);
	girdle[126] = corr_gd_pav(girdle[124], girdle[64], girdle[62], girdle[62+64], pavil[0]);
	girdle[127] = corr_gd_pav(girdle[124], girdle[64], girdle[63], girdle[63+64], pavil[0]);
	// Второй квадрант -  2
	girdle[121] = corr_gd_pav(girdle[120], girdle[124], girdle[57], girdle[57+64], pavil[9]);
	girdle[122] = corr_gd_pav(girdle[120], girdle[124], girdle[58], girdle[58+64], pavil[9]);
	girdle[123] = corr_gd_pav(girdle[120], girdle[124], girdle[59], girdle[59+64], pavil[9]);	
	// Второй квадрант -  3
	girdle[117] = corr_gd_pav(girdle[116], girdle[120], girdle[53], girdle[53+64], pavil[8]);
	girdle[118] = corr_gd_pav(girdle[116], girdle[120], girdle[54], girdle[54+64], pavil[8]);
	girdle[119] = corr_gd_pav(girdle[116], girdle[120], girdle[55], girdle[55+64], pavil[8]);	
	// Второй квадрант -  4
	girdle[113] = corr_gd_pav(girdle[112], girdle[116], girdle[49], girdle[49+64], pavil[16]);
	girdle[114] = corr_gd_pav(girdle[112], girdle[116], girdle[50], girdle[50+64], pavil[16]);
	girdle[115] = corr_gd_pav(girdle[112], girdle[116], girdle[51], girdle[51+64], pavil[16]);		
	
	// Производим вычисление вершин рундиста для остальных квадрантов
	// исходя из учета симметрии огранки.
	for(i = 0; i < 16; i++)
	{
		girdle[80+i][0] = girdle[80-i][0];
		girdle[80+i][1] = -girdle[80-i][1];
		girdle[80+i][2] = girdle[80-i][2];
	}

	for(i = 1; i < 16; i++)
	{
		girdle[96+i][0] = girdle[128-i][0];
		girdle[96+i][1] = - girdle[128-i][1];
		girdle[96+i][2] = girdle[128-i][2];
	}	
	
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
	// следует запустить MarquiseGirdle.html .
	// следует учесть, что параметр vp обозначен как δ .
	
	// Данная программа (данный текст) работает точно также как и MarquiseGirdle.html,
	// за исключением того, что параметр square_deviation в MarquiseGirdle.html 
	// для простоты понимания отсутствует.
	
	var u =  lw;
    if ( u < 0 ) 
		return null;

	var fi = Math.asin ( ( u + u ) / ( u * u + 1.) );
	var psi = fi + vp;  // δ - это угол vp

    var t = u * Math.tan(psi);
    if ( t <= 2.0) 
		return null;

	var a = ( t - 1.0 ) / ( t - 2.0 );
	var q = a - 1.;
	var b = u * ( 1.- t ) / Math.sqrt( t * t - ( t + t ) );

    var p = 2 / (1 - square_deviation);

	// Расчет сегментов на рундисте.
	var interval_all = Math.acos ( q / a );
	var interval_0_8 = interval_all / 2 + DelAngGirdle_8;
	var interval_8_16 = interval_all - interval_0_8;

	var interval_0_4 = interval_0_8 / 2 + DelAngGirdle_4;
	var interval_4_8 = interval_0_8 - interval_0_4;

	var interval_8_12 = interval_8_16 / 2 + DelAngGirdle_12;
	var interval_12_16 = interval_8_16 - interval_8_12;

	var delta = 0;

	var i = 0;
	var fi_curr = 0.0;

	var center = new Point2D(-q, 0.0);
	var cir = new Circle2D(center, a);

	b = -b;

    var x, y, w;

	for ( i = 0; i < 17; i++ )
	{
		x = Math.cos(fi_curr);
		y = Math.sin(fi_curr);

		w = Math.pow (Math.abs(x), p) + Math.pow(Math.abs (y), p);
		w = 1 / Math.pow ( w, 1/p );		
		
		girdle[i] = new Point3D( (b * w * y)/2, (a * w * x - q)/2, r/2);

		if (i < 4)
		{
			delta = interval_0_4 / 4;
		}
		else if (i < 8)
		{
			delta = interval_4_8 / 4;
		}
		else if (i < 12)
		{
			delta = interval_8_12 / 4;
		}
		else
		{
			delta = interval_12_16 / 4;
		}

		fi_curr = fi_curr + delta;
	}

	girdle[16] = new Point3D(u/2, 0, r/2);

	for (i = 1; i < 16; i++)
	{
		girdle[64-i] = new Point3D(- girdle[i][0], girdle[i][1], r/2);
	}

	for (i = 1; i <= 16; i++)
	{
		girdle[16+i] = new Point3D(girdle[16-i][0], - girdle[16-i][1], r/2);
	}

	for (i = 1; i < 16; i++)
	{
		girdle[48-i] = new Point3D(- girdle[16+i][0], girdle[16+i][1], r/2);
	}
	
	girdle[48] = new Point3D(- girdle[16][0], girdle[16][1], r/2);

    // Заполняем второй уровень рундиста
    for (i = 0; i < 64; i++)
    {
		girdle[i+64] = new Point3D(girdle[i][0], girdle[i][1], -r/2);
    }
}

function corr_gd_crown(gd1, gd2, gd3, gd4, cr)
{
	var planeT = new Plane3D();
	planeT.CreatePlaneThreePoints(gd1, gd2, cr);
	var vert_line = new Line3D(gd3, gd4);
	var pt = vert_line.IntersectionLinePlane(planeT);
	return pt;
}

function corr_gd_pav(gd1, gd2, gd3, gd4, pav)
{
	var planeT = new Plane3D(0, 0);
	planeT.CreatePlaneThreePoints(gd1, gd2, pav);
	var vert_line = new Line3D(gd3, gd4);
	var pt = vert_line.IntersectionLinePlane(planeT);
	return pt;
}