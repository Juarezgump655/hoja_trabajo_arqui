
create user juarezgump with password 'desa123';
grant all privileges on database postgres to juarezgump;


create SCHEMA hoja_trabajo;

create table hoja_trabajo.usuarios (
  id_usuario BigSerial,
  nombre varchar(150) not null,
  email varchar(25) not null,
  contrasenia varchar(150) not null
);



