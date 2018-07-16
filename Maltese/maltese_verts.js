// cushion maltese

var DEGREE = 0.01745329251994;

var lw = 1.0;      // Отношение длины огранки к ширине
// Рундист
var r = 0.040;     // Толщина рундиста
var del_gd_1 = 0.013; // изменяет глубину рундиста в его вершинах g64, g80 ...
var del_gd_2 = 0.004; // изменяет глубину рундиста в его вершинах g72, g88 ...
var del_gd_3 = -0.003; // изменяет глубину рундиста в его вершинах g68, g76 ...
// Форма рундиста
var rounnd_cir1 = 0.114;	// "Roundness front"
var rounnd_cir2 = 0.114;	// "Roundness flank"
var R3 = 0.034;          // "Radius corner"
// Расстановка вершин на рундисте
var ang_3 = 38*DEGREE; // "Flank angle girdle"
var ang_2 = 38*DEGREE; // "Front angle girdle"
var ang_corner = 45.0*DEGREE; // "Corner angle girdle""
var gd_segments = 0.18; // Основной параметр задающий размеры сегментов
// Корона
var beta = 35*DEGREE;  // Угол короны
var t = 0.60;     // Размер площадки
var starFacets = 0.5;    // Star facets
// Павильон
var hp1 = 0.32; //"Ht.pav.level 1"
var hp2 = 0.163; //"Ht.pav.level 2"
var del_hp1 = 0.020; // "Del.ht.level 1"
var pav_ang_a = 54*DEGREE;	// Угол грани a павильона
var pav_ang_c = 41.9*DEGREE;	// Угол грани c павильона
var pav_ang_b = 54*DEGREE;	// Угол грани b павильона
var hA0 = 0.192;	// Высота центральных вершины на гранях a и b 
var hA1 = 0.09;	// Высота боковых вершины на гранях a, b и c

var girdle = [64];

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
	var planeT = new Plane3D();
	planeT.CreatePlaneThreePoints(gd1, gd2, pav);
	var vert_line = new Line3D(gd3, gd4);
	var pt = vert_line.IntersectionLinePlane(planeT);
	return pt;
}

function InitGirdle()
{
	var i;
	var point1 = new Point2D(); 
	var point2 = new Point2D();
	
	var DEGREE = 0.01745329251994;

	// Радиус большей окружности
	var R1 = rounnd_cir1/2.0 + (lw * lw)/(8.0*rounnd_cir1);
	RR1 = R1;

	// Радиус меньшей окружности
	var R2 = rounnd_cir2/2.0 + 1/(8.0*rounnd_cir2);
	RR2 = R2;

	// Центр меньшей окружности - лежит на оси OX
	var O2 = new Point2D(lw/2 - R2, 0);
	OO2 = O2;

	// Центр большей окружности - лежит на оси OY
	var O1 = new Point2D(0, 0.5 - R1);
	OO1 = O1;

	var O3 = new Point2D(); // Центр сопрягающей окружности
	OO3 = O3;
	var g = new Point2D(); // Точки пересечения окружностей cir1
	var f = new Point2D(); // и cir2 с сопрягающей окружностью cir3

	// Меньшая окружность
	var cir2 =    new Circle2D(O2, R2);
	// Большая окружность
	var cir1 = new Circle2D(O1, R1);

	//  Окружности, используемые для вычисления центра 
	// сопрягающей окружности
	//var R3 = R3;
	var R2_R3 = new Circle2D(O2, R2 - R3); 
	var R1_R3 = new Circle2D(O1, R1 - R3); 

	if(!R2_R3.IntersectionTwoCircles(R1_R3, point1, point2))
	{
		return null;
	}

	// Центр сопрягающей окружности
	// O3 = (point1[0] > point2[0]) ? point1 : point2;
	if (point1[0] > point2[0])
	{
		O3[0] = point1[0]; O3[1] = point1[1]
	}
	else
	{
		O3[0] = point2[0]; O3[1] = point2[1]			
	}

	// Создаем сопрягающую окружность чуть большего 
	// радиуса чем R3 (для проверки)
	var cir3 = new Circle2D(O3, R3 + 0.00001); // R3+ EPSILON);

	// Проверяем пересекаются или нет окружности 
	// cir2 и cir1 с сопрягающей окружностью cir3
	// Координаты точек пересечения g и point2
	// и также f и point2 должны отличаться совершенно незначительно
	if(!cir2.IntersectionTwoCircles(cir3, g, point2))
	{
		return null;
	}
	if(!cir1.IntersectionTwoCircles(cir3, f, point2)) 
	{
		return null;
	}

	G = g;
	F = f;
	
	// Находим положение точки на луче, 
	//который будет определять направление на котором  
	//лежит угловая вершина рундиста girdle[8]. 
	// Этот луч будет использоваться в качестве 
	//начальной прямой отсчета для углов ang_2 и ang_3.
	//var ang_corner = ang_corner;      !!!!!!!!!

	var u = new Point2D();
	u[0] = O3[0] + Math.cos(ang_corner) * R3;
	u[1] = O3[1] + Math.sin(ang_corner) * R3;
	
	//Point2D O4(data.gd_segments * data.lw, data.gd_segments);
	var O4 = new Point2D(gd_segments * lw, gd_segments);
	OO4 = O4;
	uu = u;

	var t = new Point2D();	// Точки на радиусах сопрягающей окружности cir3
	var w = new Point2D();	// На рисунке они лежат на сопрягающей окружности
	t[0] = O4[0] + Math.cos(ang_corner + ang_2);
	t[1] = O4[1] + Math.sin(ang_corner + ang_2);

	w[0] = O4[0] + Math.cos(ang_corner - ang_3);
	w[1] = O4[1] + Math.sin(ang_corner - ang_3);

	// Прямые используемые для нахождения границ сегментов рундиста.
	//Line2D ln_O4_t, ln_O4_u, ln_O4_w;
	var ln_O4_t = new Line2D(O4, t);
	var ln_O4_u = new Line2D(O4, u);
	var ln_O4_w = new Line2D(O4, w);

	//  Конструируем верхнюю часть рундиста
	var s = new Point2D(); // s, v - Точки лежащие на границе сегментов seg1 и seg2
	var v = new Point2D(); // и также на границе сегментов seg3 и seg4
	girdle[0] = new Point3D(0, 0.5, r/2);  // !!!!

	if(!cir1.IntersectionLineCircle(ln_O4_t, point1, point2))
	{
		return null;
	}
	//s = (point1[1] > point2[1]) ? point1 : point2;
	if (point1[1] > point2[1])
	{
		s[0] = point1[0]; s[1] = point1[1]
	}
	else
	{
		s[0] = point2[0]; s[1] = point2[1]			
	}
	
	girdle[4] = new Point3D(s[0], s[1], r/2); // !!!!
	girdle[8] = new Point3D(u[0], u[1], r/2); // !!!!

	if(!cir2.IntersectionLineCircle(ln_O4_w, point1, point2))
	{
		return null;
	}
	
	if (point1[0] > point2[0])
	{
		v[0] = point1[0]; v[1] = point1[1]
	}
	else
	{
		v[0] = point2[0]; v[1] = point2[1]			
	}
	
	girdle[12] = new Point3D(v[0], v[1], r/2); // !!!!
	girdle[16]= new Point3D(lw/2, 0, r/2);  // !!!!

	// Остальной рундист
	var x, y;
	var Fi2 = Math.atan2((u[0] - O1[0]), (u[1] - O1[1]));
	var Fi1 = Math.atan2((s[0] - O1[0]), (s[1] - O1[1]));
	var ang = Fi2;
	var dAng = (Fi2 - Fi1)/4; // Угловой шаг

	// seg2
	for(i = 7; i > 4; i--)
	{
		ang = ang - dAng;
		x = Math.sin(ang)*R1 + O1[0];
		if(x > f[0]) // Правее точки пересечения окружностей cir1 и cir3
		{
			// Пересечение с сопрягающей окружностью cir3
			var line2 = new Line2D();
			var vector2 = new Vector2D(Math.sin(ang), Math.cos(ang));
			line2.CreateLineVectorPoint(vector2, O1);
			if(!cir3.IntersectionLineCircle(line2, point1, point2))
				return null;
			if (point1[1] > point2[1])
			{
				y = point1[1];
				x = point1[0];
			}
			else
			{
				y = point2[1];
				x = point2[0];
			}

		}
		else
		{
			y = Math.cos(ang)*R1 + O1[1];
		}
		girdle[i] = new Point3D(x, y, r/2);  // !!!!
	}

	ang = Fi1;
	dAng = Fi1 / 4;
	// seg1
	for(i = 3; i > 0; i--)
	{
		ang = ang - dAng;
		x = Math.sin(ang)*R1 + O1[0];
		if(x > f[0]) // Правее точки пересечения окружностей cir1 и cir3
		{
			// Пересечение с сопрягающей окружностью cir3
			var line1 = new Line2D();
			var vector1 = new Vector2D(Math.sin(ang), Math.cos(ang));
			line1.CreateLineVectorPoint(vector1, O1);
			if(!cir3.IntersectionLineCircle(line1, point1, point2))
			{
				return null;
			}
			if (point1[1] > point2[1])
			{
				y = point1[1];
				x = point1[0];
			}
			else
			{
				y = point2[1];
				x = point2[0];
			}

		}
		else
		{
			y = Math.cos(ang)*R1 + O1[1];
		}
		girdle[i] = new Point3D(x, y, r/2);
	}

	var Fi3 = Math.atan2((u[1] - O2[1]), (u[0] - O2[0]));
	var Fi4 = Math.atan2((v[1] - O2[1]) ,(v[0] - O2[0]));
	ang = Fi3;
	dAng = (Fi3 - Fi4)/4;

	// seg3
	for(i = 9; i < 12; i++)
	{
		ang = ang - dAng;
		y = Math.sin(ang)*R2 + O2[1];
		if(y > g[1]) // Выше точки пересечения окружностей cir2 и cir3
		{
			// Пересечение с сопрягающей окружностью cir3
			var line3 = new Line2D();
			var vector3 = new Vector2D(Math.cos(ang), Math.sin(ang));
			line3.CreateLineVectorPoint(vector3, O2);
			if(!cir3.IntersectionLineCircle(line3, point1, point2))
			{
				return null;
			}
			if (point1[0] > point2[0])
			{
				x = point1[0];
				y = point1[1];
			}
			else
			{
				x = point2[0];
				y = point2[1];
			}
		}
		else
		{
			x = Math.cos(ang)*R2 + O2[0];
		}					
		girdle[i] = new Point3D(x, y, r/2);
	}

	ang = Fi4;
	dAng = Fi4 / 4;

	// seg4
	for(i = 13; i < 16; i++)
	{
		ang = ang - dAng;
		y = Math.sin(ang)*R2 + O2[1];
		if (y > g[1]) // Выше точки пересечения окружностей cir2 и cir3
		{
			// Пересечение с сопрягающей окружностью cir3
			var line4 = new Line2D();
			var vector4 = new Vector2D(Math.cos(ang), Math.sin(ang));
			line4.CreateLineVectorPoint(vector4, O2);
			if(!cir3.IntersectionLineCircle(line4, point1, point2))
			{
				return null;
			}
			if (point1[0] > point2[0])
			{
				x = point1[0];
				y = point1[1];
			}
			else
			{
				x = point2[0];
				y = point2[1];
			}
		}
		else
		{
			x = Math.cos(ang)*R2 + O2[0];
		}
		girdle[i] = new Point3D(x, y, r/2);
	}

	// Производим вычисления вершин рундиста для остальных квадрантов
	for(i = 0; i < 16; i++)
	{
		girdle[32-i] = new Point3D();
		girdle[32-i][0] = girdle[i][0];
		girdle[32-i][1] = -girdle[i][1];
		girdle[32-i][2] = r/2;
	}
	for(i = 1; i < 32; i++)
	{
		girdle[64-i] = new Point3D();
		girdle[64-i][0] = -girdle[i][0];
		girdle[64-i][1] = girdle[i][1];
		girdle[64-i][2] = r/2;
	}
	
	for (i = 0; i < 64; i++)
	{
		girdle[i+64] = new Point3D ( girdle[i][0], girdle[i][1], -r/2);
	}
	var ff = 777;
}

function VerticesCalculation()
{
	InitGirdle();
	
	var i;
	var nCrown  = 16;
	var nGirdle = 64;
	var nPav    = 21;

	var crown = [];
	var pavil = [];
	
	var  d1 = del_gd_1;
	girdle[64+0][2] = -r/2 + d1;
	girdle[64+16][2] = -r/2 + d1;
	girdle[64+32][2] = -r/2 + d1;
	girdle[64+48][2] = -r/2 + d1;

	var d2 = del_gd_2;
	girdle[64+8][2] = -r/2 + d2;
	girdle[64+24][2] = -r/2 + d2;
	girdle[64+40][2] = -r/2 + d2;
	girdle[64+56][2] = -r/2 + d2;

	var d3 = del_gd_3;
	girdle[64+4][2] = -r/2 + d3;
	girdle[64+12][2] = -r/2 + d3;
	girdle[64+20][2] = -r/2 + d3;
	girdle[64+28][2] = -r/2 + d3;
	girdle[64+36][2] = -r/2 + d3;
	girdle[64+44][2] = -r/2 + d3;
	girdle[64+52][2] = -r/2 + d3;
	girdle[64+60][2] = -r/2 + d3;

	var X1 = new Vector3D(1, 0, 0);
	var Y1 = new Vector3D(0, 1, 0);
	var Z1 = new Vector3D(0, 0, 1);
	
	var A = Facet(beta, girdle[60], girdle[4], girdle[0]);
	var B = Facet(beta, girdle[12], girdle[20], girdle[16]);
	var C = Facet(beta, girdle[4], girdle[12], girdle[8]);
	
	// Создаем горизонтальнаую плоскость на уровне площадки
	var h_cr = 0.5 * Math.tan (beta) * (1 - t);
	
	var Z0 = new Vector3D(0, 0, 1);
	var table = new Plane3D();
	table.CreatePlaneNormalDistOXYZ(Z0, h_cr + r/2);

	// Вектора идущие вдоль линий касательных к рундисту 
	// в его вершинах 4 и 12 (52 и 60)
	var dir1 = new Vector2D(girdle[5][0] - girdle[3][0], girdle[5][1] - girdle[3][1]);
	dir1.Normer();
	var dir2 = new Vector2D(girdle[13][0] - girdle[11][0], girdle[13][1] - girdle[11][1]);	
	dir2.Normer();
					  
	// Вектора идущие вдоль линий касательных к рундисту 
	// в его вершинах 0, 8 и 16
	var dir_A = new Vector2D(girdle[1][0] - girdle[63][0], girdle[1][1] - girdle[63][1]);
	dir_A.Normer();				   
	var dir_C = new Vector2D(girdle[9][0] - girdle[7][0], girdle[9][1] - girdle[7][1]);
	dir_C.Normer();			   
	var dir_B = new Vector2D(girdle[17][0] - girdle[15][0], girdle[17][1] - girdle[15][1]);
	dir_B.Normer();			   
	
	//  Плоскости проходящие перпендикулярно к линиям, 
	// касательным к рундисту в его вершинах 0, 8 и 16
	var vA = new Vector3D(dir_A[0], dir_A[1], 0);
	vA.Normer();
	var Ap = new Plane3D();
	Ap.CreatePlaneNormalVectorPoint(vA, girdle[0]);
	
	var vB = new Vector3D(dir_B[0], dir_B[1], 0);
	vB.Normer();
	var Bp = new Plane3D();	
	Bp.CreatePlaneNormalVectorPoint(vB, girdle[16]);
									  								  
	var vC = new Vector3D(dir_C[0], dir_C[1], 0);
	vC.Normer();
	var Cp = new Plane3D();										  
	Cp.CreatePlaneNormalVectorPoint(vC, girdle[8]);
									  
	//  Плоскости проходящие перпендикулярно к линиям, 
	// касательным к рундисту в его вершинах 4 и 12
	var v1 = new Vector3D(dir1[0], dir1[1], 0);
	v1.Normer();	
	var pl_perp_g4 = new Plane3D();
	pl_perp_g4.CreatePlaneNormalVectorPoint(v1, girdle[4]);
	
	var v2 = new Vector3D(dir2[0], dir2[1], 0);
	v2.Normer();	
	var pl_perp_g12 = new Plane3D();
	pl_perp_g12.CreatePlaneNormalVectorPoint(v2, girdle[12]);
											   
	// Находим вершины короны лежащие на уровне площадки
	crown[0] = table.IntersectionThreePlanes(A, Ap);
	crown[2] = table.IntersectionThreePlanes(B, Bp);

	// Это предварительное вычисление вершины crown[1]
	crown[1] = table.IntersectionThreePlanes(C, Cp);

	// Очень долгое вычисление по Star Facet высоты средней
	// горизонтальной плоскости короны, которая определяет
	// высоту вершин 8, 9, 10, 11, 12, 13, 14 и 15.

	// Две вспомогательные плоскости
	var plane_Z0 = new Plane3D();
	plane_Z0.CreatePlaneNormalDistOXYZ(Z1, 0.0);

	var plane_Z1 = new Plane3D();
	plane_Z1.CreatePlaneNormalDistOXYZ(Z1, 1.0);

	// Две вспомогательные точки для нахождения прямой определяемой
	// пересечением плоскостей в которых лежат грани A и C
	var point_0 = plane_Z0.IntersectionThreePlanes(A, C);
	var point_1 = plane_Z1.IntersectionThreePlanes(A, C);

	// Находим прямую, проходящую по линии пересечения плоскостей A и C
	var ln_A_C = new Line3D(point_0, point_1);

	// Вертикальная плоскость прохдящая касательно 
	// к рундисту в вершине girdle[4]
	var dir_ppp = new Vector3D(dir1[1], -dir1[0], 0.0);
	dir_ppp.Normer();
	var pl_tang_g4 = new Plane3D();
	pl_tang_g4.CreatePlaneNormalVectorPoint(dir_ppp, girdle[4]);	

	// Вертикальная плоскость проходящая через вершины короны 0 и 1 
	var pl_cr0_cr1 = new Plane3D();
	pl_cr0_cr1.CreatePlaneThreePoints(crown[1], crown[0], new Point3D(crown[0][0], crown[0][1], crown[0][2] + 1.0));
				
	//  Вспомогательная точка point_0, лежащая на линии пересечения 
	// плоскостей pl_A и pl_C и pl_g4
	point_0 = pl_tang_g4.IntersectionThreePlanes(A, C);			

	//  Вспомогательная точка point_1, находящаяся в месте пересечения 
	// плоскости pl_cr0_cr1 и прямой ln_A_C
	point_1 = ln_A_C.IntersectionLinePlane(pl_cr0_cr1);	
	
	//  Средняя горизонтальная плоскость короны лежит между 
	// точками point_0 и point_1 и проходит через вершину короны 8.
	// Находим координаты короны 8 (требуется только высота этой вершины).
	var ht_8_2 = point_1[2] - (point_1[2] - point_0[2]) * starFacets;
	
	// Горизонтальная плоскость проходящая на уровне вершины 8 короны.
	var pl_hor = new Plane3D(); 
	pl_hor.CreatePlaneNormalDistOXYZ(Z1, ht_8_2);

	// Пересчитываем координаты вершины 8 короны 
	// и находим координаты вершины 9 короны.
	crown[8] = pl_hor.IntersectionThreePlanes(A, pl_perp_g4);
	crown[9] = pl_hor.IntersectionThreePlanes(B, pl_perp_g12);

	// Новое положение плоскости в которой лежит грань C
	C.CreatePlaneThreePoints(girdle[8], crown[8], crown[9]);
	
	// Точки pt_mid_1 и pt_mid_2 лежат посередине между вершинами 8 и 9
	// короны но располагаются на разной высоте (произвольной).
	var pt_mid_1 = new Point3D((crown[8][0] + crown[9][0])/2, (crown[8][1] + crown[9][1])/2, 1);
	var pt_mid_2 = new Point3D((crown[8][0] + crown[9][0])/2, (crown[8][1] + crown[9][1])/2, 2);
					 

	// Строим вертикальную плоскость проходящую 
	// через точки pt_mid_1, pt_mid_2 и вершину короны 8.
	var Cp = new Plane3D(); 
	Cp.CreatePlaneThreePoints(girdle[8], pt_mid_1, pt_mid_2);

	// Пересчитываем положение вершины 1 короны
	crown[1] = C.IntersectionThreePlanes(Cp, table);
	
	// Координаты остальных вершин короны находятся из соображений
	// симметрии огранки относительно плоскостей OXZ и OYZ	
	
	crown[15] = new Point3D(-crown[8][0], crown[8][1], crown[8][2]);
	crown[14] = new Point3D(-crown[9][0], crown[9][1], crown[9][2]);
	crown[7] = new Point3D(-crown[1][0], crown[1][1], crown[1][2]);
	crown[6] = new Point3D(-crown[2][0], crown[2][1], crown[2][2]);
	crown[10] = new Point3D(crown[9][0], -crown[9][1], crown[9][2]);
	crown[3] = new Point3D(crown[1][0], -crown[1][1], crown[1][2]);
	crown[4] = new Point3D(crown[0][0], -crown[0][1], crown[0][2]);
	crown[5] = new Point3D(crown[7][0], -crown[7][1], crown[7][2]);
	crown[11] = new Point3D(crown[8][0], -crown[8][1], crown[8][2]);
	crown[12] = new Point3D(crown[15][0], -crown[15][1], crown[15][2]);
	crown[13] = new Point3D(crown[14][0], -crown[14][1], crown[14][2]);
	
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

	//  PAVILION
	pavil[20] = new Point3D(0, 0, -r/2 - hp1 - hp2);
	
	var a = Facet(- pav_ang_a, girdle[60+64], girdle[4+64], girdle[64]);
	var b = Facet(- pav_ang_b, girdle[12+64], girdle[20+64], girdle[16+64]);
	var c = Facet(- pav_ang_c, girdle[4+64], girdle[12+64], girdle[8+64]);
	
	// Проводим горизонтальную плоскость на уровне точки hA0
	var planeHorA0 = new Plane3D();
	planeHorA0.CreatePlaneNormalVectorPoint(Z1, new Point3D(0, 0, - hA0 - r/2));
							 
	// Проводим горизонтальную плоскость на уровне точки hA1
	var planeHorA1 = new Plane3D();
	planeHorA1.CreatePlaneNormalVectorPoint(Z1, new Point3D(0, 0, - hA1 - r/2));
	
	var planeX0 = new Plane3D();
	planeX0.CreatePlaneNormalDistOXYZ(X1, 0);
	
	var planeY0 = new Plane3D();
	planeY0.CreatePlaneNormalDistOXYZ(Y1, 0);
	
	var planeXY = new Plane3D();
	planeXY.CreatePlaneThreePoints(new Point3D(0,0,0), new Point3D(0,0,1), girdle[64+8]);
							  	
	pavil[0] = planeHorA0.IntersectionThreePlanes(a, planeX0);
	pavil[3] = planeHorA0.IntersectionThreePlanes(b, planeY0);	
	
	// Горизонтальная плоскость на уровне вершины павильона 13
	//pl_hp1.CreatePlaneNormalDistOXYZ(UnitVector3D(0,0,1), -data.hp1 - data.r/2);
								 
	var pl_hp1 = new Plane3D();
	pl_hp1.CreatePlaneNormalDistOXYZ(Z1, - hp1 - r/2);
	pavil[13] = planeXY.IntersectionThreePlanes(c, pl_hp1);

	pavil[1] = planeHorA1.IntersectionThreePlanes(a, c);
	pavil[2] = planeHorA1.IntersectionThreePlanes(b, c);	
	
	var radius = Math.sqrt(pavil[13][0] * pavil[13][0] + pavil[13][1] * pavil[13][1]);
					 
	var pl_vert_A = new Plane3D();
	pl_vert_A.CreatePlaneNormalDistOXYZ(Y1, radius);
	var pl_vert_B = new Plane3D();
	pl_vert_B.CreatePlaneNormalDistOXYZ(X1, radius);
	
	// Проводим горизонтальную плоскость на уровне вершин павильона 12 и 14
	var pl_del_hp1 = new Plane3D();
	pl_del_hp1.CreatePlaneNormalVectorPoint(Z1, new Point3D(0, 0, - hp1 - del_hp1 - r/2));
		   
	pavil[12] = pl_del_hp1.IntersectionThreePlanes(pl_vert_A, planeX0);
	pavil[14] = pl_del_hp1.IntersectionThreePlanes(pl_vert_B, planeY0);
	
		// Вершины павильона в других квадрантах

	pavil[4] =  new Point3D( pavil[2][0],   -pavil[2][1],  pavil[2][2]);
	pavil[5] =  new Point3D( pavil[1][0],   -pavil[1][1],  pavil[1][2]);
	pavil[6] =  new Point3D( pavil[0][0],   -pavil[0][1],  pavil[0][2]);
	pavil[7] =  new Point3D(-pavil[5][0],    pavil[5][1],  pavil[5][2]);
	pavil[8] =  new Point3D(-pavil[4][0],    pavil[4][1],  pavil[4][2]);
	pavil[9] =  new Point3D(-pavil[3][0],    pavil[3][1],  pavil[3][2]);
	pavil[10] = new Point3D(-pavil[2][0],    pavil[2][1],  pavil[2][2]);
	pavil[11] = new Point3D(-pavil[1][0],    pavil[1][1],  pavil[1][2]);
	pavil[15] = new Point3D( pavil[13][0],  -pavil[13][1], pavil[13][2]);
	pavil[16] = new Point3D( pavil[12][0],  -pavil[12][1], pavil[12][2]);
	pavil[17] = new Point3D(-pavil[15][0],   pavil[15][1], pavil[15][2]);
	pavil[18] = new Point3D(-pavil[14][0],   pavil[14][1], pavil[14][2]);
	pavil[19] = new Point3D(-pavil[13][0],   pavil[13][1], pavil[13][2]);

	// Первый квадрант -  1
	girdle[1+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[1], girdle[1+64], pavil[1]);
	girdle[2+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[2], girdle[2+64], pavil[1]);
	girdle[3+64] = corr_gd_pav(girdle[0+64], girdle[4+64], girdle[3], girdle[3+64], pavil[1]);	
	// Первый квадрант -  2
	girdle[5+64] = corr_gd_pav(girdle[68], girdle[72], girdle[5], girdle[5+64], pavil[1]);
	girdle[6+64] = corr_gd_pav(girdle[68], girdle[72], girdle[6], girdle[6+64], pavil[1]);
	girdle[7+64] = corr_gd_pav(girdle[68], girdle[72], girdle[7], girdle[7+64], pavil[1]);	
	// Первый квадрант -  3
	girdle[9+64] = corr_gd_pav(girdle[72], girdle[76], girdle[9], girdle[9+64], pavil[2]);
	girdle[10+64] = corr_gd_pav(girdle[72], girdle[76], girdle[10], girdle[10+64], pavil[2]);
	girdle[11+64] = corr_gd_pav(girdle[72], girdle[76], girdle[11], girdle[11+64], pavil[2]);
	// Первый квадрант -  4
	girdle[13+64] = corr_gd_pav(girdle[76], girdle[80], girdle[13], girdle[13+64], pavil[2]);
	girdle[14+64] = corr_gd_pav(girdle[76], girdle[80], girdle[14], girdle[14+64], pavil[2]);
	girdle[15+64] = corr_gd_pav(girdle[76], girdle[80], girdle[15], girdle[15+64], pavil[2]);	
	
	// Производим вычисления рундиста для остальных квадрантов
	for(i = 0; i < 16; i++)
	{
		girdle[32-i][0] = girdle[i][0];
		girdle[32-i][1] = -girdle[i][1];
		girdle[32-i][2] = girdle[i][2];

		girdle[96-i][0] = girdle[i+64][0];
		girdle[96-i][1] = -girdle[i+64][1];
		girdle[96-i][2] = girdle[i+64][2];
	}

	for(i = 1; i < 32; i++)
	{
		girdle[64-i][0] = -girdle[i][0];
		girdle[64-i][1] = girdle[i][1];
		girdle[64-i][2] = girdle[i][2];

		girdle[128-i][0] = -girdle[i+64][0];
		girdle[128-i][1] = girdle[i+64][1];
		girdle[128-i][2] = girdle[i+64][2];
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
	
	for(i = 0; i < 21; i++)
	{
		vertices.push(pavil[i][0]);
		vertices.push(pavil[i][1]);
		vertices.push(pavil[i][2]);
	}	
}


	