var DEGREE = 0.01745329251994;
var M_PI =   3.14159265358979;
var SQRT2 =  1.41421356237309;

var lw = 1.0; 
var e = 0.04;
var m = 5.0;
var num = 1;

var r = 0.06;       // Толщина рундиста
var hp = 0.44;		// Высота павильона
var h1 = 0.16;
var hCrownUp = 0.12;
var hCrownDown = 0.06;
var ang_crown_up = 25*DEGREE;
var ang_crown_down = 35*DEGREE;
var ang_pav_up = 48*DEGREE;
var ang_pav_down = 32*DEGREE;


var vertices = [];
var girdle = [];
var crown = [];
var pavil = [];

function VerticesCalculation()
{
	InitGirdle();
	
	var i;
	var Z1 = new Vector3D(1, 0, 0);
	var Y1 = new Vector3D(0, 1, 0);
	var Z1 = new Vector3D(0, 0, 1);
	var nCrown  = 10;
	var nPav    = 16;
	
	// Построение короны
	// Уравнения плоскостей в которых лежат 5 граней короны примыкающих к рундисту.
	// При расчете учитываем, что угол наклона этих плоскостей задается параметром ang_crown_down.
	var A1 = Facet(ang_crown_down, girdle[0], girdle[16], girdle[0]);
	var A2 = Facet(ang_crown_down, girdle[16], girdle[32], girdle[16]);
	var A3 = Facet(ang_crown_down, girdle[32], girdle[48], girdle[32]);
	var A4 = Facet(ang_crown_down, girdle[48], girdle[64], girdle[48]);
	var A5 = Facet(ang_crown_down, girdle[64], girdle[0], girdle[64]);
	
	// Горизонтальная плоскость лежащая на высоте hCrownDown + r/2.
	var planeHorMiddle = new Plane3D();
	planeHorMiddle.CreatePlaneNormalDistOXYZ(Z1, hCrownDown + r/2);
	
	// Находим координаты короны 5 - 9
	crown[5] = planeHorMiddle.IntersectionThreePlanes(A5, A1);
	crown[6] = planeHorMiddle.IntersectionThreePlanes(A1, A2);
	crown[7] = planeHorMiddle.IntersectionThreePlanes(A2, A3);
	crown[8] = planeHorMiddle.IntersectionThreePlanes(A3, A4);
	crown[9] = planeHorMiddle.IntersectionThreePlanes(A4, A5);
	
	// Уравнения плоскостей в которых лежат 5 граней короны примыкающих одной своей вершинойк площадке..
	// При расчете учитываем, что угол наклона этих плоскостей задается параметром ang_crown_up.
	var B1 = Facet(ang_crown_up, crown[5], crown[6], crown[5]);
	var B2 = Facet(ang_crown_up, crown[6], crown[7], crown[6]);
	var B3 = Facet(ang_crown_up, crown[7], crown[8], crown[7]);
	var B4 = Facet(ang_crown_up, crown[8], crown[9], crown[8]);
	var B5 = Facet(ang_crown_up, crown[9], crown[5], crown[9]);
	
	// Две вспомогательные точки.
	var pt000 = new Point3D(0.0, 0.0, 0.0);
	var pt001 = new Point3D(0.0, 0.0, 1.0);	
	
	// Строим пять вспомогательных плоскостей.
	var B1p = new Plane3D();
	B1p.CreatePlaneThreePoints(girdle[8], pt000, pt001);
	var B2p = new Plane3D();
	B2p.CreatePlaneThreePoints(girdle[24], pt000, pt001);
	var B3p = new Plane3D();
	B3p.CreatePlaneThreePoints(girdle[40], pt000, pt001);
	var B4p = new Plane3D();
	B4p.CreatePlaneThreePoints(girdle[56], pt000, pt001);
	var B5p = new Plane3D();
	B5p.CreatePlaneThreePoints(girdle[72], pt000, pt001);	
	
	// Горизонтальная плоскость на уровне площадки.
	var planeTable = new Plane3D();;
	planeTable.CreatePlaneNormalDistOXYZ(Z1, hCrownUp + r/2);	
	
	// Находим координаты короны 0 - 4
	crown[0] = planeTable.IntersectionThreePlanes(B1, B1p);
	crown[1] = planeTable.IntersectionThreePlanes(B2, B2p);
	crown[2] = planeTable.IntersectionThreePlanes(B3, B3p);
	crown[3] = planeTable.IntersectionThreePlanes(B4, B4p);
	crown[4] = planeTable.IntersectionThreePlanes(B5, B5p);
	
	// Коррекция высоты вершин рундиста со стороны короны.
	GIRDLE_CROWN_POINTS(0, 16, 5);
	GIRDLE_CROWN_POINTS(16, 32, 6)
	GIRDLE_CROWN_POINTS(32, 48, 7)
	GIRDLE_CROWN_POINTS(48, 64, 8)
	GIRDLE_CROWN_POINTS(64, 0, 9)
	
	// Построение павильона.
	
	// Самая низшая вершина павильона - калетта.
	pavil[15] = new Point3D(0, 0, - hp - r/2);
	
	// Уравнения плоскостей в которых лежат 5 основных граней короны примыкающих к рундисту.
	// При расчете учитываем, что угол наклона этих плоскостей задается параметром -ang_pav_up.
	var C1 = Facet(-ang_pav_up, girdle[84], girdle[92], girdle[84]);
	var C2 = Facet(-ang_pav_up, girdle[100], girdle[108], girdle[100]);
	var C3 = Facet(-ang_pav_up, girdle[116], girdle[124], girdle[116]);
	var C4 = Facet(-ang_pav_up, girdle[132], girdle[140], girdle[132]);
	var C5 = Facet(-ang_pav_up, girdle[148], girdle[156], girdle[148]);

	// Уравнения плоскостей в которых лежат 5 граней короны примыкающих одной своей вершиной к калетте.
	// При расчете учитываем, что угол наклона этих плоскостей задается параметром -ang_pav_down.	
	var D1 = Facet(-ang_pav_down, girdle[156], girdle[84], pavil[15]); 
	var D2 = Facet(-ang_pav_down, girdle[92], girdle[100], pavil[15]); 
	var D3 = Facet(-ang_pav_down, girdle[108], girdle[116], pavil[15]); 
	var D4 = Facet(-ang_pav_down, girdle[124], girdle[132], pavil[15]); 
	var D5 = Facet(-ang_pav_down, girdle[140], girdle[148], pavil[15]); 
	
	// Строим пять вспомогательных плоскостей.
	var V1 = new Plane3D();
	V1.CreatePlaneThreePoints(pt000, pt001, girdle[80]);
	var V2 = new Plane3D();
	V2.CreatePlaneThreePoints(pt000, pt001, girdle[96]);
	var V3 = new Plane3D();
	V3.CreatePlaneThreePoints(pt000, pt001, girdle[112]);
	var V4 = new Plane3D();
	V4.CreatePlaneThreePoints(pt000, pt001, girdle[128]);
	var V5 = new Plane3D();
	V5.CreatePlaneThreePoints(pt000, pt001, girdle[144]);	
	
	// Горизонтальная плоскость лежащая на глубине -h1 - r/2.
	var planePavHor = new Plane3D();
	planePavHor.CreatePlaneNormalDistOXYZ(Z1, -h1 - r/2);	
	
	// Определяем положение оставшихся вершин павильона.
	pavil[0] = planePavHor.IntersectionThreePlanes(C5, C1);
	pavil[1] = planePavHor.IntersectionThreePlanes(C1, C2);
	pavil[2] = planePavHor.IntersectionThreePlanes(C2, C3);
	pavil[3] = planePavHor.IntersectionThreePlanes(C3, C4);
	pavil[4] = planePavHor.IntersectionThreePlanes(C4, C5);	
	
	pavil[5] = D1.IntersectionThreePlanes(C5, C1);
	pavil[6] = D2.IntersectionThreePlanes(C1, C2);
	pavil[7] = D3.IntersectionThreePlanes(C2, C3);
	pavil[8] = D4.IntersectionThreePlanes(C3, C4);
	pavil[9] = D5.IntersectionThreePlanes(C4, C5);

	pavil[10] = C1.IntersectionThreePlanes(D1, D2);
	pavil[11] = C2.IntersectionThreePlanes(D2, D3);
	pavil[12] = C3.IntersectionThreePlanes(D3, D4);
	pavil[13] = C4.IntersectionThreePlanes(D4, D5);
	pavil[14] = C5.IntersectionThreePlanes(D5, D1);

	// Коррекция глубины вершин рундиста со стороны павильона.
	GIRDLE_PAV_POINTS_1(156, 80, 0);
	GIRDLE_PAV_POINTS_1(80, 84, 0);
	GIRDLE_PAV_POINTS_1(92, 96, 1);
	GIRDLE_PAV_POINTS_1(96, 100, 1);
	GIRDLE_PAV_POINTS_1(108, 112, 2);
	GIRDLE_PAV_POINTS_1(112, 116, 2);
	GIRDLE_PAV_POINTS_1(124, 128, 3);
	GIRDLE_PAV_POINTS_1(128, 132, 3);
	GIRDLE_PAV_POINTS_1(140, 144, 4);
	GIRDLE_PAV_POINTS_1(144, 148, 4);
	
	GIRDLE_PAV_POINTS_2(84, 92, 10)
	GIRDLE_PAV_POINTS_2(100, 108, 11)
	GIRDLE_PAV_POINTS_2(116, 124, 12)
	GIRDLE_PAV_POINTS_2(132, 140, 13)
	GIRDLE_PAV_POINTS_2(148, 156, 14)
	
	// Заполнение массива vertices.
	for (i = 0; i < 10; i++)
	{
		vertices.push(crown[i][0]);
		vertices.push(crown[i][1]);
		vertices.push(crown[i][2]);
	}
	for(i = 0; i < 160; i++)
	{
		vertices.push(girdle[i][0]);
		vertices.push(girdle[i][1]);
		vertices.push(girdle[i][2]);
	}
	for (i = 0; i < 16; i++)
	{
		vertices.push(pavil[i][0]);
		vertices.push(pavil[i][1]);
		vertices.push(pavil[i][2]);
	}
}

function InitGirdle()
{
	var R = 0.5;
	var m1 = 1/m; 
	var kf = 0.5 / (R + m1*R + e);

	var gd = [80];

	var i;
	var fi = 0;

	var nPoints = 80; // количество сегментов рундиста

	var del = m * 2 * M_PI / nPoints;
	var t = 0.0;
	var h = e;

	var d = DEGREE * 90;

	for (i = 0; i < nPoints; i++)
	{
		t = i * del;

		if (num >= 1 && num < 2)
		{
			h = e;
		}
		if (num >= 2 && num < 3)
		{
			h = e * Math.cos(t) * Math.cos(t);
		}
		else if (num >= 3 && num < 4)
		{
			h = e * Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t);
		}
		else if (num >= 4 && num < 5)
		{
			h = e * Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t);
		}
		else if (num >= 5 && num < 6)
		{
			h = e * Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t);
		}
		else if (num >= 6 && num < 7)
		{
			h = e * Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t);
		}
		else if (num >= 7 && num < 8)
		{
			h = e * Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t);
		}
		else if (num >= 8 && num < 9)
		{
			h = e * Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t)*Math.cos(t);
		}
		else if (num >= 9 && num < 10)
		{
			h = e * Math.cos(t) * Math.cos(2*t) * Math.cos(t) * Math.cos(2*t);
		}

		gd[i] = new Point2D();
		// Линия рундиста данной огранки является кривой, которая имеет название эпитрохоида.
		// При Wavy = 1 ( num = 1 ) имеем классическую эпитрохоиду.
		// Классическая эпитрохоида получается при h = const.
		// Коэффициент h если, если он не "const" и задается набором произведений косинусов параметра t, 
		// то он задает дополнительную "волнистость" линии рундиста.
		// Волнистость меняется при помощи параметра Wavy, который изменяет значение num
		// определяющего количество cos(t) или даже cos(n*t), где n = 1,2,3....
		// Замечание.
		// При помощи достаточно большого количества слагаемых в которые входят
		// синусы и косинусы можно воспроизвести форму самых разных кривых.
		
		// Параметрические уравнения эпитрохоиды
		// m1 = 1/m где m - в настоящей программе опредедяет "количество лепестков".
		gd[i][0] = (R + m1*R)*Math.cos(m1*t+d) - h*Math.cos(t + m1*t+d);
		gd[i][1] = (R + m1*R)*Math.sin(m1*t+d) - h*Math.sin(t + m1*t+d);

		gd[i][0] = gd[i][0] * kf;
		gd[i][1] = gd[i][1] * kf;
	}

	for (i = 1; i < nPoints/2; i++)
	{
		girdle[i] = new Point3D();
		girdle[i][0] = -gd[nPoints/2 - i][0] * lw;
		girdle[i][1] = -gd[nPoints/2 - i][1];
		girdle[i][2] = r/2;
	}

	for (i = 1; i < nPoints/2; i++)
	{
		girdle[nPoints - i] = new Point3D();
		girdle[nPoints - i][0] = -gd[nPoints/2 + i][0] * lw;
		girdle[nPoints - i][1] = -gd[nPoints/2 + i][1];
		girdle[nPoints - i][2] = r/2;
	}

	girdle[0] = new Point3D();
	girdle[0][0] = -gd[nPoints/2][0];
	girdle[0][1] = -gd[nPoints/2][1];
	girdle[0][2] = r/2;

	girdle[nPoints/2] = new Point3D();
	girdle[nPoints/2][0] = -gd[0][0];
	girdle[nPoints/2][1] = -gd[0][1];
	girdle[nPoints/2][2] = r/2;
	
	for(i = 0; i < 80; i++)
	{
		girdle[i+80] = new Point3D(girdle[i][0], girdle[i][1], -r/2);
	}
}

// Коррекция высоты пятнадцати вершин рундиста со стороны короны.
function GIRDLE_CROWN_POINTS(gd1, gd2, cr)
{
	var i;
	var crownPlane = new Plane3D();
	crownPlane.CreatePlaneThreePoints(girdle[(gd1)],girdle[(gd2)],crown[(cr)]); 
	for(i = 1; i < 16; i++) 
	{ 
		var vert_line = new Line3D(girdle[i+(gd1)], girdle[80+i+(gd1)]);
		girdle[i+gd1] = vert_line.IntersectionLinePlane(crownPlane);
	}
}

// Коррекция глубины трех вершин рундиста со стороны павильона.
function GIRDLE_PAV_POINTS_1(gd1, gd2, pav)
{
	var i;
	var pavPlane = new Plane3D();
	pavPlane.CreatePlaneThreePoints(girdle[(gd1)], girdle[(gd2)], pavil[(pav)]); 
	for(i = 1; i < 4; i++) 
	{
		var vert_line = new Line3D(girdle[i+(gd1)], girdle[i+(gd1) - 80]);
		girdle[i+gd1] = vert_line.IntersectionLinePlane(pavPlane);
	}
}

// Коррекция глубины семи вершин рундиста со стороны павильона.
function GIRDLE_PAV_POINTS_2(gd1, gd2, pav)
{
	var i;
	var pavPlane = new Plane3D();
	pavPlane.CreatePlaneThreePoints(girdle[(gd1)], girdle[(gd2)], pavil[(pav)]); 
	for(i = 1; i < 8; i++) 
	{
		var vert_line = new Line3D(girdle[i+(gd1)], girdle[i+(gd1) - 80]);
		girdle[i+gd1] = vert_line.IntersectionLinePlane(pavPlane);
	}
}
