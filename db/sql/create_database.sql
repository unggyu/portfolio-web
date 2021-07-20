CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE projects
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(32) NOT NULL,
  start_date INT(11) NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE project_images
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  project_id INT(11) UNSIGNED NOT NULL,
  path VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES projects (id)
);

CREATE TABLE project_technologies
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  project_id INT(11) UNSIGNED NOT NULL,
  class_name VARCHAR(32) NOT NULL,
  name VARCHAR(32) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES projects (id)
);

CREATE TABLE experiences
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  company VARCHAR(32) NOT NULL,
  title VARCHAR(64) NOT NULL,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE experience_technologies
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  experience_id INT(11) UNSIGNED NOT NULL,
  name VARCHAR(32) NOT NULL,
  is_main TINYINT(1) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (experience_id) REFERENCES experience (id)
);

CREATE TABLE socials
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(16) NOT NULL,
  url VARCHAR(64) NOT NULL,
  class_name VARCHAR(32) NOT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
);

CREATE TABLE skills
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(16) NOT NULL,
  class_name VARCHAR(32) NOT NULL,
  level INT(11) NOT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
);

CREATE TABLE representative_skills
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(16) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE titles
(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL,
  PRIMARY KEY (id)
);