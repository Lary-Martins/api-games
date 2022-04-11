DROP DATABASE IF EXISTS api_games;

CREATE DATABASE api_games;

USE api_games;

CREATE TABLE platforms(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);
CREATE TABLE games (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(350) NOT NULL,
    platformId VARCHAR(100) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
      FOREIGN KEY (platformId)
      REFERENCES platforms(id)
);
