
var DEGREE = 0.01745329251994;

var lw = 1.2;      // отношение длина/ширина
// Корона
var alpha = 45*DEGREE;	// верхний угол короны
var alpha1 = 35*DEGREE;	// верхний угловой угол короны
var beta = 53*DEGREE;    // нижний угол короны
var beta1 = 40*DEGREE;	// нижний угловой угол короны
var t = 0.3;		// размер площадки
var hCrown = 0.16;	// Высота верхней части короны
var H2H = 0.5;	// Отношение высоты нижней части короны ко всей ее высоте
// Рундист
var r = 0.02;       // высота рундиста
var corner_break_ratio = 0.3;
var corner_break_angle = 45*DEGREE;
// Павильон
var hp = 0.62;		// Высота павильона
var angleA = 67*DEGREE;	// Угол наклона грани A
var angleB = 47*DEGREE;	// Угол наклона грани B
var angleC = 57*DEGREE;	// Угол наклона грани C
var hLowerFaset = 0.8;	// Отношение высоты LowerFacet к hp
var hMiddleFaset = 0.4;	// Отношение высоты MiddleFacet к hp

var girdle = [16];
var vertices = [];

// Расчет координат вершин огранки (модели).
function VerticesCalculation()
{
	var i;
	var Z1 = new Vector3D(0, 0, 1);
	var crown = [];
	var pavil = [];	
	
	InitGirdle(); // Расчет координат вершин рундиста
	
	// Crown
	// Рассчитываем три наклонные к горизонтали плоскости planeBeta1, planeBeta2 и planeBeta3
	// beta - нижний угол короны
	var planeBeta1 = new Plane3D();
	planeBeta1.CreateInclinePlane(beta, girdle[7], girdle[0], girdle[7]);
	
	var planeBeta2 = new Plane3D();
	planeBeta2.CreateInclinePlane(beta, girdle[0], girdle[1], girdle[0]);
	
	var planeBeta3 = new Plane3D();
	planeBeta3.CreateInclinePlane(beta, girdle[1], girdle[2], girdle[1]);	
	
	// Рассчитываем горизонтальную плоскость planeHor_1 лежащую на высоте hCrown*H2H + r/2
	var planeHor_1 = new Plane3D();
	planeHor_1.CreatePlaneNormalDistOXYZ(Z1, hCrown*H2H + r/2);
	// crown[8] и crown[9] определяются как точки пересечения трех соответствующих плоскостей
	crown[8] = planeHor_1.IntersectionThreePlanes(planeBeta1, planeBeta2);
	crown[9] = planeHor_1.IntersectionThreePlanes(planeBeta3, planeBeta2);
	
	var planeBeta4 = new Plane3D();
	planeBeta4.CreateInclinePlane(beta, girdle[2], girdle[3], girdle[3]);	
	crown[10] = planeHor_1.IntersectionThreePlanes(planeBeta4, planeBeta3);	
	
	var planeBeta5 = new Plane3D();
	planeBeta5.CreateInclinePlane(beta, girdle[3], girdle[4], girdle[4]);	
	crown[11] = planeHor_1.IntersectionThreePlanes(planeBeta4, planeBeta5);		
	
	var planeBeta6 = new Plane3D();
	planeBeta6.CreateInclinePlane(beta, girdle[4], girdle[5], girdle[4]);	
	crown[12] = planeHor_1.IntersectionThreePlanes(planeBeta6, planeBeta5);			

	var planeBeta7 = new Plane3D();
	planeBeta7.CreateInclinePlane(beta, girdle[5], girdle[6], girdle[5]);	
	crown[13] = planeHor_1.IntersectionThreePlanes(planeBeta7, planeBeta6);	

	var planeBeta8 = new Plane3D();
	planeBeta8.CreateInclinePlane(beta, girdle[6], girdle[7], girdle[7]);	
	crown[14] = planeHor_1.IntersectionThreePlanes(planeBeta8, planeBeta7);		
	
	crown[15] = planeHor_1.IntersectionThreePlanes(planeBeta1, planeBeta8);	
/*	
	// исходя из учета симметрии огранки можно было расчитать вершины короны 
	// 10, 11, 12, 13, 14, 15 гораздо проще:
	crown[14] = new Point3D(-crown[9][0],  crown[9][1],  crown[9][2]);
	crown[15] = new Point3D(-crown[8][0],  crown[8][1],  crown[8][2]);
	crown[10] = new Point3D( crown[9][0], -crown[9][1],  crown[9][2]);
	crown[11] = new Point3D( crown[8][0], -crown[8][1],  crown[8][2]);
	crown[12] = new Point3D(-crown[11][0], crown[11][1], crown[11][2]);
	crown[13] = new Point3D(-crown[10][0], crown[10][1], crown[10][2]);
*/	
	// Рассчитываем три наклонные к горизонтали плоскости planeCrown1, planeCrown2 и planeCrown3
	// alpha - верхний угол короны
	// alpha1 - верхний угловой угол короны
	var planeCrown1 = new Plane3D();
	planeCrown1.CreateInclinePlane(alpha, crown[15], crown[8], crown[15]);	
	
	var planeCrown2 = new Plane3D();
	planeCrown2.CreateInclinePlane(alpha1, crown[8], crown[9], crown[8]);
	
	var planeCrown3 = new Plane3D();
	planeCrown3.CreateInclinePlane(alpha, crown[9], crown[10], crown[9]);
	
	// Рассчитываем горизонтальную плоскость planeHor_2 лежащую на высоте ht
	var ht = hCrown + r/2;
	var planeHor_2 = new Plane3D();
	planeHor_2.CreatePlaneNormalDistOXYZ(Z1, ht);
	
	// Рассчитываем вертикальную плоскость planeVertX0  ( плоскость OYZ )
	var planeVertX0 = new Plane3D();
	planeVertX0.CreatePlaneThreePoints(new Point3D(0,0,0), new Point3D(0,0,1), new Point3D(0,1,0));

	// Рассчитываем вертикальную плоскость planeVertY0 ( плоскость OXZ)
	var planeVertY0 = new Plane3D();
	planeVertY0.CreatePlaneThreePoints(new Point3D(0,0,0), new Point3D(0,0,1), new Point3D(1,0,0));	
	
	// Создаем две 2D прямые являющиеся проекциями прямых gd0 - cr8 и gd1 - cr9 на плоскость OXY.
	var ln1 = new Line2D(new Point2D(girdle[0][0], girdle[0][1]), new Point2D(crown[8][0], crown[8][1]));
	var ln2 = new Line2D(new Point2D(girdle[1][0], girdle[1][1]), new Point2D(crown[9][0], crown[9][1]));
	
	// Определяем точку пересечения двумерных прямых.
	var pt_cross = ln1.IntersectionTwoLines(ln2);
	
	//   Создаем вертикальную плоскость проходящую через pt_cross и точку переечения 
	// прямых gd0 - gd7 и gd1 - gd2.
	// Следует запустить Octagon_text.html и посмотреть нумерацию вершин  в режиме Crown-Gd.-Pav.
	var planeVertXY = new Plane3D();
	planeVertXY.CreatePlaneThreePoints(new Point3D(pt_cross[0], pt_cross[1], 0),  
									   new Point3D(pt_cross[0], pt_cross[1], 1), 
									   new Point3D(0.5 * lw, 0.5, 0));
	// crown[0], crown[1] и crown[2] определяются как точки пересечения трех соответствующих плоскостей							   
	crown[0] = planeHor_2.IntersectionThreePlanes(planeVertX0, planeCrown1);
	crown[1] = planeHor_2.IntersectionThreePlanes(planeVertXY, planeCrown2); // угловая вершина короны
	crown[2] = planeHor_2.IntersectionThreePlanes(planeVertY0, planeCrown3);
	// исходя из учета симметрии огранки
	crown[3] = new Point3D(crown[1][0], -crown[1][1], crown[1][2]);
	crown[4] = new Point3D(crown[0][0], -crown[0][1], crown[0][2]);
	crown[5] = new Point3D(-crown[3][0], crown[3][1], crown[3][2]);
	crown[6] = new Point3D(-crown[2][0], crown[2][1], crown[2][2]);
	crown[7] = new Point3D(-crown[1][0], crown[1][1], crown[1][2]);
	
	// Pavilion
	// Глубина павильона равна -r/2 - hp
	pavil[16] = new Point3D(0, 0, -r/2 - hp);
	
	// Рассчитываем три наклонные к горизонтали плоскости planeA, planeB и planeC
	// angleA, angleB и angleC - углы накдона граней павильона примыкающих к рундисту
	var planeA = new Plane3D();
	planeA.CreateInclinePlane(-angleA, girdle[15], girdle[8], girdle[8]);
	var planeB = new Plane3D();
	planeB.CreateInclinePlane(-angleB, girdle[8], girdle[9], girdle[9]);
	var planeC = new Plane3D();
	planeC.CreateInclinePlane(-angleC, girdle[9], girdle[10], girdle[10]);
	
	// На глубине -r/2 - hp * hMiddleFaset лежат вершины 0, 1, 2, 3, 4, 5, 6 павильона
	// Следует запустить Octagon_text.html и посмотреть нумерацию вершин  в режиме Crown-Gd.-Pav.
	var h = -r/2 - hp * hMiddleFaset;
	
	// горизонтальная плоскость на уровне вершин 0, 1, 2, 3, 4, 5, 6 павильона
	var planeHor_3 = new Plane3D();
	planeHor_3.CreatePlaneNormalDistOXYZ(Z1, h); 
	
	pavil[0] = planeHor_3.IntersectionThreePlanes(planeA, planeVertX0);
	
	// Создаем диагональную вертикальную плоскость огранки
	var planeVertXY_2 = new Plane3D();
	planeVertXY_2.CreatePlaneThreePoints(new Point3D(0,0,0), new Point3D(0,0,1), new Point3D(0.5*lw, 0.5, 0));
	pavil[1] = planeHor_3.IntersectionThreePlanes(planeB, planeVertXY_2);
	
	pavil[2] = planeHor_3.IntersectionThreePlanes(planeC, planeVertY0);
	
	var planeF = new Plane3D();
	planeF.CreateInclinePlane(-angleB, girdle[12], girdle[13], girdle[13]);
	pavil[5] = planeHor_3.IntersectionThreePlanes(planeF, planeVertXY_2);
	
	//////////////////////////////////////////////////////////////////////////////////////////////
	
	// Создаем два вектора a1 и b1. Их векторное произведение определит нормальный вектор плоскости pav.
	var a1 = new Vector3D(pavil[16][0] - pavil[0][0], pavil[16][1] - pavil[0][1], pavil[16][2] - pavil[0][2]);
	var b1 = new Vector3D(1, 0, 0);
	var vecPav = a1.Cross(b1); // вектор перпендикулярный к плоскости p
	vecPav.Normer();
	var pav = new Plane3D(); 
	pav.CreatePlaneNormalVectorPoint(vecPav, pavil[16]);
	
	// Создаем два вектора a2 и b2. Их векторное произведение определит нормальный вектор плоскости.
	var a2 = new Vector3D(pavil[16][0] - pavil[1][0], pavil[16][1] - pavil[1][1], pavil[16][2] - pavil[1][2]);
	var b2 = new Vector3D(girdle[9][0] - girdle[8][0], girdle[9][1] - girdle[8][1], 0);
	var vec_p16_p8_p1 = a2.Cross(b2); // вектор перпендикулярный к плоскости p1-p8-p9-p16
	vec_p16_p8_p1.Normer();
	var p16_p8_p1 = new Plane3D(); 
	p16_p8_p1.CreatePlaneNormalVectorPoint(vec_p16_p8_p1, pavil[16]);// создание плоскости p1-p8-p9-p16

	// горизонтальная плоскость на уровне вершин 8, 9, 10, 11, 12, 13, 14, 15 павильона
	var h4 = - r/2 - hp * hLowerFaset;
	var planeHor_4 = new Plane3D();
	planeHor_4.CreatePlaneNormalDistOXYZ(Z1, h4);
	// Находим pav.8 как точку пересечения трех плоскостей.
	pavil[8] = planeHor_4.IntersectionThreePlanes(pav, p16_p8_p1);

	var a3 = new Vector3D(pavil[16][0] - pavil[2][0], pavil[16][1] - pavil[2][1], pavil[16][2] - pavil[2][2]);
	var b3 = new Vector3D(0, 1, 0);
	var vec_p16_p9_p2= a3.Cross(b3); // вектор перпендикулярный к плоскости p2-p9-p16-p10
	vec_p16_p9_p2.Normer();
	var p16_p9_p2 = new Plane3D(); 
	p16_p9_p2.CreatePlaneNormalVectorPoint(vec_p16_p9_p2, pavil[16]); // создание плоскости p2-p9-p16-p10
	// Находим pav.9 как точку пересечения трех плоскостей.
	pavil[9] = planeHor_4.IntersectionThreePlanes(p16_p9_p2, p16_p8_p1);

	// исходя из учета симметрии огранки
	pavil[4] = new Point3D(pavil[0][0], - pavil[0][1], pavil[0][2]);
	pavil[6] = new Point3D(- pavil[2][0], pavil[2][1], pavil[2][2]);
	pavil[3] = new Point3D(pavil[1][0], - pavil[1][1], pavil[1][2]);
	//pavil[5] = new Point3D(- pavil[3][0], pavil[3][1], pavil[3][2]);
	pavil[7] = new Point3D(- pavil[1][0], pavil[1][1], pavil[1][2]);
	pavil[15] = new Point3D(- pavil[8][0], pavil[8][1], pavil[8][2]);
	pavil[10] = new Point3D(pavil[9][0], - pavil[9][1], pavil[9][2]);
	pavil[11] = new Point3D(pavil[8][0], - pavil[8][1], pavil[8][2]);
	pavil[12] = new Point3D(pavil[15][0], - pavil[15][1], pavil[15][2]);
	pavil[13] = new Point3D(- pavil[10][0], pavil[10][1], pavil[10][2]);
	pavil[14] = new Point3D(- pavil[9][0], pavil[9][1], pavil[9][2]);

	// В массиве vertices хранятся координаты (x, y, z) всех вершин огранки подряд.
	for(i = 0; i < 16; i++)
	{
		vertices.push(crown[i][0]);
		vertices.push(crown[i][1]);
		vertices.push(crown[i][2]);
	}
	for(i = 0; i < 16; i++)
	{
		vertices.push(girdle[i][0]);
		vertices.push(girdle[i][1]);
		vertices.push(girdle[i][2]);
	}
	for(i = 0; i < 17; i++)
	{
		vertices.push(pavil[i][0]);
		vertices.push(pavil[i][1]);
		vertices.push(pavil[i][2]);
	}
}

function InitGirdle()
{
	// Координаты вершин рундиста.
	var d1 = 0.5 * lw;
	var d2 = 0.5;
	var dy = corner_break_ratio/2;
	var dx = dy * Math.tan(corner_break_angle);

	girdle[0] =  new Point3D(   d1 - dx,   d2,      r/2);
	girdle[1] =  new Point3D(   d1,        d2 - dy, r/2);
	girdle[2] =  new Point3D(   d1,      - d2 + dy, r/2);
	girdle[3] =  new Point3D(   d1 - dx, - d2,      r/2);
	girdle[4] =  new Point3D( - d1 + dx, - d2,      r/2);
	girdle[5] =  new Point3D( - d1,      - d2 + dy, r/2);
	girdle[6] =  new Point3D( - d1,        d2 - dy, r/2);
	girdle[7] =  new Point3D( - d1 + dx,   d2,      r/2);

	girdle[8] =  new Point3D(   d1 - dx,   d2,      - r/2);
	girdle[9] =  new Point3D(   d1,        d2 - dy, - r/2);
	girdle[10] = new Point3D(   d1,      - d2 + dy, - r/2);
	girdle[11] = new Point3D(   d1 - dx, - d2,      - r/2);
	girdle[12] = new Point3D( - d1 + dx, - d2,      - r/2);
	girdle[13] = new Point3D( - d1,      - d2 + dy, - r/2);
	girdle[14] = new Point3D( - d1,        d2 - dy, - r/2);
	girdle[15] = new Point3D( - d1 + dx,   d2,      - r/2);
}
