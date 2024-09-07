create table if not exists users (
    id bigint auto_increment primary key,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    password varchar(255)
);

