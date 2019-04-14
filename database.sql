use test;

-- drop table `person`;

create table if not exists `person` (
  `id` int unsigned auto_increment,
  `first_name` varchar(50) not null,
  `last_name` varchar(50) not null,
  `gender` int(1) default(0),
  `email` varchar(50),
  `create_on` dateTime not null,
  `update_on` dateTime,
  primary key(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- -- select * from info;

insert into test.person (first_name, last_name, gender, email, create_on)
values ('Lily', 'Link', 1, 'LilyLink@ww.com', now());

insert into test.person (first_name, last_name, gender, email, create_on)
values ('Menny', 'Liang', 0, 'MennyLiang@ww.com', now());


update test.person set first_name = 'Men' , last_name = 'lan', update_on = null where id = 2;

select count(id) from test.person where first_name = 'Li';

delete from test.person where id = 2;

select * from test.person