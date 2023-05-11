-- Active: 1674740046543@@127.0.0.1@3306

CREATE DATABASE authenticket DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE authenticket;
CREATE TABLE api_promoter (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    url_api VARCHAR(255) NOT NULL,
    identifiant VARCHAR(255),
    password_id VARCHAR(255),
    token VARCHAR(255)
);
CREATE TABLE events (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    date_event DATETIME,
    deletion_date DATETIME NOT NULL,
    location VARCHAR(100),
    name_event VARCHAR(50),
    promoter VARCHAR(50),
    is_deleted BOOLEAN
);

CREATE TABLE api_events (
    id INT(11) PRIMARY KEY AUTO_INCREMENT, 
    api_id INT(11),
    event_id INT(11) 
);

CREATE TABLE ticket (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_event INT(11),
    id_user INT(11)
);

CREATE TABLE users (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR (50),
    first_name VARCHAR (50),
    pseudo VARCHAR (50),
    mail VARCHAR (150),
    password VARCHAR (255),
    is_registered BOOLEAN,
    is_connected BOOLEAN
);
CREATE TABLE eventStored (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_user INT (11),
    location VARCHAR (255),
    name_event VARCHAR (255),
    date_event DATETIME,
    id_event INT(11)
    
);

ALTER TABLE `ticket` ADD CONSTRAINT `ticket_event` FOREIGN KEY (`id_event`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `eventStored` ADD CONSTRAINT `event_eventStored` FOREIGN KEY (`id_event`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE SET NULL;

ALTER TABLE `ticket` ADD CONSTRAINT `ticket_user` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE SET NULL;

ALTER TABLE `api_events` ADD CONSTRAINT `id_event` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE SET NULL;

ALTER TABLE `api_events` ADD CONSTRAINT `id_api` FOREIGN KEY (`api_id`) REFERENCES `api_promoter`(`id`) ON DELETE CASCADE ON UPDATE SET NULL;



