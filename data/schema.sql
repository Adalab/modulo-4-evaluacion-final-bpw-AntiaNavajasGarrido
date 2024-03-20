/*
-- Query: SELECT * FROM recetas_db.recetas
LIMIT 0, 1000*/

CREATE TABLE `recetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(5000) NOT NULL,
  `ingredientes` varchar(5000) NOT NULL,
  `instrucciones` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*-- Date: 2024-03-20 20:05
*/
