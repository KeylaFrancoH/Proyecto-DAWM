create database dbz;

use dbz;

create table personajes(
	id varchar(250) NOT NULL,
    nombre varchar(250) NOT NULL,
    raza varchar(250) NOT NULL,
    genero varchar(10) NOT NULL,
    kiLevel int(10) NOT NULL,
    imagen varchar(250) NOT NULL,
    PRIMARY KEY (id) );
    
create table transformaciones(
	codigo varchar(250) NOT NULL,
	saga  varchar(250) NOT NULL,
    id varchar(250) NOT NULL,
    transformacion varchar(250),
    PRIMARY KEY (codigo),
  FOREIGN KEY (id) REFERENCES personajes(id)
);

 CREATE TABLE usuarios (
  nombre varchar(250) NOT NULL,
  contrasena varchar(250) NOT NULL,
 PRIMARY KEY (nombre) );


INSERT INTO personajes VALUES
('goku', 'Goku / Kakarotto', 'sayajin', 'masculino', 50000, 'assets/goku.png'),
('vegeta', 'Vegeta IV', 'sayajin', 'masculino', 50000, 'assets/vegeta.png'),
('piccolo', 'Piccolo', 'namekusejin', 'masculino', 50000, 'assets/piccolo.png'),
('gohan', 'Son Gohan', 'hibrido', 'masculino', 50000, 'assets/gohan.png'),
('freezer', 'Freezer', 'icejin', 'masculino', 50000, 'assets/frieza.png'),
('cell', 'Cell', 'androide', 'masculino', 50000, 'assets/cell.png'),
('buu', 'Majin Buu', 'demonio', 'masculino', 50000, 'assets/buu.png'),
('beerus', 'Bills', 'dios', 'masculino', 50000, 'assets/beerus.png'),
('gotenks', 'Gotenks', 'hibrido', 'masculino', 50000, 'assets/gotenks.png'),
('hit', 'Hit', 'desconocido', 'masculino', 50000, 'assets/hit.png'),
('krillin', 'Krillin', 'humano', 'masculino', 50000, 'assets/krillin.png'),
('jiren', 'Jiren', 'desconocido', 'masculino', 50000, 'assets/jiren.png'),
('tien', 'Tien Shin Han ', 'humano', 'masculino', 50000, 'assets/tien.png'),
('17', 'Androide 17', 'androide', 'masculino', 50000, 'assets/android17.png'),
('18', 'Androide 18', 'androide', 'femenino', 50000, 'assets/android18.png'),
('broly', 'Broly', 'sayajin', 'masculino', 50000, 'assets/broly.png'),
('vegitto', 'Vegitto', 'sayajin', 'masculino', 50000, 'assets/vegito.png'),
('gogeta', 'Gogeta', 'sayajin', 'masculino', 50000, 'assets/gogeta.png'),
('black', 'Goku Black / zamasu', 'hibrido', 'masculino', 50000, 'assets/gokublack.png');
INSERT INTO personajes VALUES ('trunks', 'Trunks Briefs', 'hibrido', 'masculino', 50000, 'assets/trunks.png');


 insert into transformaciones (codigo, saga, id, transformacion ) values
  ('GkSSJ1', 'Freezer', 'goku', 'super sayajin'),
 ('GkSSJ3', 'Majin Buu', 'goku', 'super sayajin 3'),
 ('GSSJ2','Cell', 'gohan', 'super sayajin 2'),
 ('GDef','Majin Buu', 'gohan', 'Gohan Definitivo'),
 ('VSSJ1','Cell', 'vegeta', 'super sayajin'),
 ('VSSJ2','Majin Buu', 'vegeta', 'super sayajin 2'),
 ('TSSJ1','OVA', 'trunks', 'super sayajin 1'),
 ('GTSSJ1','Majin buu', 'gotenks', 'super sayajin 1'),
('GTSSJ3','Majin buu', 'gotenks', 'super sayajin 3'),
('F1', 'Freezer', 'freezer', 'primera forma'),
('F2', 'Freezer', 'freezer', 'segunda forma'),
('F3', 'Freezer', 'freezer', 'tercera forma'),
('F4', 'Freezer', 'freezer', 'full power'),
('BGR', 'Black', 'black', 'super sayajin rosé'),
('PO', 'Super Hero', 'piccolo', 'orange piccolo');

INSERT INTO  usuarios VALUES ('jimmy','jlam2000'), ('keyla','kffh2001'),('user','12345');

select *from dbz.usuarios;
select *from dbz.personajes;
select *from dbz.transformaciones;