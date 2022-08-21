create database bookRecipe;

use bookRecipe;

CREATE TABLE recetas (
	idRecetas int auto_increment ,
    nombre varchar(100),
    tipo varchar(100),
    elaboracion varchar(250),
	descripcion varchar(250),
    tiempo varchar(250),
    dificultad int(10),
    imagen varchar(250),
    fecha varchar(250),
  PRIMARY KEY (idRecetas) );


  CREATE TABLE ingredientes (
  codigo_barras int NOT NULL,
  cant_ingredientes int(10) NOT NULL,
  idRecetas int(10) NOT NULL,
  nombre_ingrediente varchar(250) NOT NULL,
  usado_receta int(10) NOT NULL,
  PRIMARY KEY (codigo_barras),
  FOREIGN KEY (idRecetas) REFERENCES recetas(idRecetas)
) ;

 CREATE TABLE usuarios (
  nombre varchar(250) NOT NULL,
  contrasena varchar(250) NOT NULL,
 PRIMARY KEY (nombre) );



INSERT INTO `recetas` (`idRecetas`, `nombre`, `tipo`, `elaboracion`, `descripcion`, `tiempo`, `dificultad`, `imagen`, `fecha`) VALUES
(1, 'pollo a la naranja', 'plato fuerte', 'Preparamos la salsa.En una sartén a fuego medio, añadimos un chorrito de aceite. Pasado el tiempo, subimos la potencia del fuego y añadimos las pechugas de pollo, que ya están previamente cortadas en tamaño de bocado y salpimentadas. Mezclamos con la cebolla y sellamos los taquitos durante un par de minutos.Hecho esto, añadimos la salsa que habíamos preparado al principio.', 'Tienen un balance perfecto entre dulce, picante y con un toque ácido', '45min - 1h',3,'https://www.mylatinatable.com/wp-content/uploads/2016/05/orange-chicken-2.jpg.webp','25-12-2022' ),
(2, 'sopa de camarón', 'sopas', 'Comenzamos por reunir los ingredientes, los camarones, volngoles, mejillones, calamares y pulpos. Luego de pelar y picar finamente la cebolla y el pimiento. ','Es una receta popular en muchos países al rededor del mundo, debido a su delicioso sabor e infinidad de maneras de prepararlo, a este caldo se lo puede acompañar con verduras, fideos, en forma de crema o incluso combinado con otros mariscos','40min - 1h',3,'https://www.cocina-brasilena.com/base/stock/Recipe/120-image/120-image_web.jpg','2-09-2021'),
(3,'ensalada de lechuga','ensaladas', 'Lavar la lechuga, secar, agregar sal, viagre de manzana al gusto','Ensalada de lechuga, manzana y maíz','10min',1,'https://www.hogarmania.com/archivos/201609/5817-2-ensalada-de-lechuga-manzana-y-maiz-xl-668x400x80xX.jpg','12-03-2012'),
(4, 'desayuno continental','desayuno','Cocinar huevos, hacer café, tostar pan','Aporta las calorías y grasas necesarias para iniciar el día, pero moderadas en comparación al desayuno inglés o americano.','15 - 30min',1,'https://www.recetasnestle.com.ec/sites/default/files/inline-images/ART_22_Desayuno_continental_Interna_7.jpg','12-08-2014'),
(5,'cordon bleu de pollo','plato fuerte', 'Abrimos la pechuga de pollo a modo de libro, o le pedimos a nuestro carnicero que nos la prepare. Colocamos la pechuga de pollo entre dos papeles transparentes y con un mazo la golpeamos para aplanarla y alisarla.','Es una receta de pechuga enrollada y rellena de queso y jamón. Es muy fácil de hacer y está delicioso.','45min',3,'https://www.recetasderechupete.com/wp-content/uploads/2017/09/Cordon-bleu-de-pollo-768x527.jpg','23-09-2009'),
(6),
(7),
(8),
(9),
(10),
(11),
(12);


INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(3741,10, 1, 'pechuga de pollo', 4),
(2121,12,1,'cebollas',2),
(2321,12,1,'naranjas',4),
(6371,23,1,'dientes de ajo',2);

INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(2122,12,2,'cebollas',1),
(6372,23,2,'dientes de ajo',2),
(4253,322,2, 'camarones', 100);


INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(4123,5,3, 'lechugas', 1),
(6732,2,3,'vinagre de manzana',1);


INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(41413,12,4, 'huevos', 2),
(1234,2,4,'pan',1),
(192,2,4,'café',1);

INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(4123,5,5, 'lechugas', 1),
(6732,2,5,'vinagre de manzana',1);

INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(4123,5,6, 'lechugas', 1),
(6732,2,6,'vinagre de manzana',1);

INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(4123,5,7, 'lechugas', 1),
(6732,2,7,'vinagre de manzana',1);

INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(4123,5,8, 'lechugas', 1),
(6732,2,8,'vinagre de manzana',1);

INSERT INTO `ingredientes` (`codigo_barras`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(4123,5,9, 'lechugas', 1),
(6732,2,9,'vinagre de manzana',1);




INSERT INTO  `usuarios` VALUES ('jimmy@ejemplo.com','jlam2000'), ('keyla@ejemplo.com','kffh2001'),('user@ejemplo.com','12345');

select *from bookrecipe.usuarios;
select *from bookrecipe.recetas;
select *from bookrecipe.ingredientes;