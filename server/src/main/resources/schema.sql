create table if not exists users (
    id bigint auto_increment primary key,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    password varchar(255)
);

create table if not exists spaces (
    id bigint auto_increment primary key,
    name varchar(255),
    address varchar(255),
    description varchar(255),
    category varchar(255),
    rating float
);
