create database recipeBook;
use recipeBook;

CREATE TABLE `recetas` (
  `id` int(10) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `tipo` varchar(250) NOT NULL,
  `elaboracion` varchar(350) NOT NULL,
  `descripcion` varchar(350) NOT NULL,
  `tiempo` varchar(250) NOT NULL,
  `dificultad` int(10) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
  CREATE TABLE `ingredientes` (
  `cant_ingredientes` int(10) NOT NULL,
  `id` int(10) NOT NULL,
  `idRecetas` int(10) NOT NULL,
  `nombre_ingrediente` varchar(250) NOT NULL,
  `usado_receta` int(10) NOT NULL,
  FOREIGN KEY (`idRecetas`) REFERENCES `recetas`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `recetas` (`id`, `nombre`, `tipo`, `elaboracion`, `descripcion`, `tiempo`, `dificultad`, `imagen`, `fecha`) VALUES
(1, 'arroz con pollo', 'plato fuerte', 'Coge los tomates(siete u ocho), los pelas, echas aceite, sal, pepino (si te gusta) un poco de sal y a tomar.', 'La receta ecuatoriana utiliza verduras, pechuga de pollo y se cocina el arroz con el caldo del pollo, suele acompañarse con tajadas de plátano maduro. ',
'1h 35 min',3,'https://t2.rg.ltmcdn.com/es/posts/7/4/9/arroz_con_pollo_ecuatoriano_56947_600.jpg','25-12-2022' );
INSERT INTO `ingredientes` (`id`,`cant_ingredientes`, `idRecetas`, `nombre_ingrediente`, `usado_receta`) VALUES
(1,10, 1, 'tomates', 7);

select * from recipeBook.recetas;
select * from recipeBook.ingredientes;

