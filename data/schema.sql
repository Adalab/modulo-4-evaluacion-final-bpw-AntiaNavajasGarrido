/*
-- Query: SELECT * FROM recetas_db.recetas
LIMIT 0, 1000*/

CREATE TABLE `recetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(5000) NOT NULL,
  `ingredientes` varchar(5000) NOT NULL,
  `instrucciones` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `usuarios` (
  `idusuarios` int NOT NULL,
  `email` varchar(60) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`idusuarios`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*-- Date: 2024-03-20 20:05
*/
