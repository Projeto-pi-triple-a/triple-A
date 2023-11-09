create database db_Itegreer_project;
use db_Itegreer_project;

create table login(
id int not null auto_increment primary key,
nome varchar(200) not null,
email varchar(200) not null,
senha varchar(200) not null
);
create table microsoft(
id int not null primary key auto_increment,
gameName varchar(80) not null,
descriptionGame varchar(4000),
linkVideo varchar(200),
oficialPrice double null,
oficialDate date null
);
create table sony(
id int not null primary key auto_increment,
gameName varchar(80) not null,
descriptionGame varchar(4000),
linkVideo varchar(200),
oficialPrice double null,
oficialDate date null
);
create table nintendo(
id int not null primary key auto_increment,
gameName varchar(80) not null,
descriptionGame varchar(4000),
linkVideo varchar(200),
oficialPrice double null,
oficialDate date null
);
create table pc(
id int not null primary key auto_increment,
gameName varchar(80) not null,
descriptionGame varchar(4000),
linkVideo varchar(200),
oficialPrice double null,
oficialDate date null
);
create table game_not_exclusive(
idGameNE int not null primary key auto_increment,
gameName varchar(80) not null,
descriptionGame varchar(4000),
linkVideo varchar(200),
oficialPrice double null,
oficialDate date null,
plataformMicrosoft boolean not null,
plataformSony boolean not null,
plataformNintendo boolean not null,
plataformPc boolean not null
);
create table data_eventos(
id int not null auto_increment primary key,
idCompany int not null,
lastEvent date,
nextEvent date
);

insert into microsoft values(null,"1 teste de jogo para a requisição 1","descrição para jogo da requisição","JVrZVdEnxHE",199.99,'2023-05-15'),
                            (null,"2 teste de jogo para a requisição 2","descrição para jogo da requisição","JVrZVdEnxHE",199.99,'2023-05-15'),
                            (null,"3 teste de jogo para a requisição 3","descrição para jogo da requisição","JVrZVdEnxHE",199.99,'2023-05-15');
INSERT INTO game_not_exclusive VALUES
(null,'Jogo 1', 'Descrição do Jogo 1', 'https://video1.com', 49.99, '2023-10-01', false, false, true, false),
(null,'Jogo 2', 'Descrição do Jogo 2', 'https://video2.com', 39.99, '2023-09-15', false, false, false, false),
(null,'Jogo 3', 'Descrição do Jogo 3', 'https://video3.com', 29.99, '2023-08-20', false, false, false, false),
(null,'Jogo 4', 'Descrição do Jogo 4', 'https://video4.com', 59.99, '2023-07-05', false, false, false, false),
(null,'Jogo 5', 'Descrição do Jogo 5', 'https://video5.com', 19.99, '2023-06-15', false, false, false, false),
(null,'Jogo 6', 'Descrição do Jogo 6', 'https://video6.com', 44.99, '2023-05-10', false, false, false, false),
(null,'Jogo 7', 'Descrição do Jogo 7', 'https://video7.com', 34.99, '2023-04-02', false, false, false, false),
(null,'Jogo 8', 'Descrição do Jogo 8', 'https://video8.com', 54.99, '2023-03-25', false, false, false, false),
(null,'Jogo 9', 'Descrição do Jogo 9', 'https://video9.com', 24.99, '2023-02-10', false, false, false, false),
(null,'Jogo 10', 'Descrição do Jogo 10', 'https://video10.com', 49.99, '2023-01-01', false, false, false, false),
(null,'Jogo 11', 'Descrição do Jogo 11', 'https://video11.com', 49.99, '2023-01-01', false, false, false, false);

-- Inserindo no mínimo 10 registros na tabela com idCompany variando de 1 a 5
INSERT INTO data_eventos (idCompany, lastEvent, nextEvent) VALUES
    (1, '2023-11-04', '2023-11-10'),
    (2, '2023-11-05', '2023-11-11'),
    (3, '2023-11-06', '2023-11-12'),
    (4, '2023-11-07', '2023-11-13'),
    (5, '2023-11-08', '2023-11-14'),
    (1, '2023-11-09', '2023-11-15'),
    (2, '2023-11-10', '2023-11-16'),
    (3, '2023-11-11', '2023-11-17'),
    (4, '2023-11-12', '2023-11-18'),
    (5, '2023-11-13', '2023-11-19');


insert into login values (null,'lucas pedroso','pedrosolucas1745@gmail.com','senha1234');
insert into data_eventos values (null,1,'2023-02-20','2023-05-15');

insert into microsoft values
 (1,1,"Postal: Brain Damaged",": POSTAL: Brain Damaged é uma nova versão orientada para a ação da série de jogos cult Running With Scissors com gráficos de retrocesso e jogabilidade moderna e em ritmo acelerado. Faça um passeio de montanha-russa selvagem pelo país das maravilhas retorcido envolto na mente confusa do POSTAL DUDE",null),
 (2,2,"The Quarry",": The Quarry é um futuro jogo eletrônico de drama interativo desenvolvido pela Supermassive Games e publicado pela 2K Games. É considerado um sucessor espiritual de Until Dawn e está previsto para ser lançado para Microsoft Windows",269),
(3,3,"Zorro The Chronicles",":Jogue com Zorro ou sua irmã, Inês, neste jogo de combate e furtividade inspirado na série animada Zorro. Liberte os cidadãos, lute pela justiça e assine seu nome com a ponta da espada para fazer o sargento Garcia passar vergonha!",199),
(4,4,"Fall Guys: Free For All ",": Fall Guys é um party game para multijogador com até 60 jogadores online, em uma louca corrida free-for-all, com rounds e rounds cada vez mais caóticos até sobrar um único vencedor!",null),
(5,5,"Sonic Origins",":Tenha uma nova experiência das aventuras clássicas de Sonic The Hedgehog, Sonic The Hedgehog 2, Sonic 3 & Knuckles e Sonic CD no Sonic Origins remasterizado! Da emblemática Zona Green Hill ao traiçoeiro Robô Death Egg, você vai percorrer uma infinidade de momentos memoráveis na sua missão para frustrar os planos do Dr. Robotnik em alta definição! Esta versão atualizada contém áreas inéditas, animações adicionais e um novo Modo Aniversário!",225); 



insert into Game_not_exclusive values (null,"Postal: Brain Damaged"," Brain Damaged é uma nova versão orientada para a ação da série de jogos cult Running With Scissors com gráficos de retrocesso e jogabilidade moderna e em ritmo acelerado. Faça um passeio de montanha-russa selvagem pelo país das maravilhas retorcido envolto na mente confusa do POSTAL DUDE.",00,"2022-06-09",1,1,1,1),
									  (null,"The Quarry",": The Quarry é um futuro jogo eletrônico de drama interativo desenvolvido pela Supermassive Games e publicado pela 2K Games. É considerado um sucessor espiritual de Until Dawn e está previsto para ser lançado para Microsoft Windows",269,"2022-07-10",2,2,2,2),
									  (null,"Horizon Forbidden West","Horizon Forbidden West é um jogo eletrônico de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. Foi lançado em 18 de fevereiro de 2022 para PlayStation 4 e PlayStation 5.",259,"2022-02-18",3,3,3,3), 
									  (null,"Sonic Origins",":Tenha uma nova experiência das aventuras clássicas de Sonic The Hedgehog, Sonic The Hedgehog 2, Sonic 3 & Knuckles e Sonic CD no Sonic Origins remasterizado! Da emblemática Zona Green Hill ao traiçoeiro Robô Death Egg, você vai percorrer uma infinidade de momentos memoráveis na sua missão para frustrar os planos do Dr. Robotnik em alta definição! Esta versão atualizada contém áreas inéditas, animações adicionais e um novo Modo Aniversário!",225,"2022-06-22",5,5,5,5);



drop database db_itegreer_project;						

select * from data_eventos where idCompany = 1 order by id desc;

SELECT * FROM microsoft
UNION
SELECT * FROM game_not_exclusive WHERE plataformMicrosoft = true;


select * from microsoft;
















