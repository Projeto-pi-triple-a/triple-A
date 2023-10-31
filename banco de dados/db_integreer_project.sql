create database db_Itegreer_project;
use db_Itegreer_project;

create table microsoft(
id_game_microsoft int not null primary key auto_increment,
id_company_microsoft int not null,
game_name varchar(80) not null,
Description_game varchar(4000),
link_video varchar(200),
oficial_price double null,
ofical_date date null
);
create table sony(
id_game_sony int not null primary key auto_increment,
id_company_sony int not null,
game_name varchar(80) not null,
Description_game varchar(4000),
link_video varchar(200),
oficial_price double  null,
ofical_date date  null
);
create table nintendo(
id_game_nintendo int not null primary key auto_increment,
id_company_nintendo int not null,
game_name varchar(80) not null,
Description_game varchar(4000),
link_video varchar(200),
oficial_price double  null,
ofical_date date  null
);
create table pc(
id_game_pc int not null primary key auto_increment,
id_company_pc int not null,
game_name varchar(80) not null,
Description_game varchar(4000),
link_video varchar(200),
oficial_price double null,
ofical_date date null
);
create table game_not_exclusive(
id_game int not null auto_increment primary key,
game_name varchar(80) not null,
Description_game varchar(4000),
link_video varchar(200),
oficial_price double  null,
ofical_date date  null,
plataform_microsoft boolean not null,
plataform_sony boolean not null,
plataform_nintendo boolean not null,
plataform_pc boolean not null
);
create table data_eventos(
id_data int not null auto_increment primary key,
id_empresa int not null,
lastEvent date,
nextevent date
);

insert into microsoft values(null,1,"1 teste de jogo para a requisição 1","descrição para jogo da requisição","https://www.youtube.com/watch?v=JVrZVdEnxHE",199.99,'2023-05-15'),
                            (null,1,"2 teste de jogo para a requisição 2","descrição para jogo da requisição","https://www.youtube.com/watch?v=JVrZVdEnxHE",199.99,'2023-05-15'),
                            (null,1,"3 teste de jogo para a requisição 3","descrição para jogo da requisição","https://www.youtube.com/watch?v=JVrZVdEnxHE",199.99,'2023-05-15');

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


insert into data_eventos values (null,1,'2023-02-20','2023-05-15');
drop database db_itegreer_project;						





select * from microsoft;
















