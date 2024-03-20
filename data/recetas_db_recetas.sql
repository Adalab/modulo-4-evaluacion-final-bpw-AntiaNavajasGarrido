-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: recetas_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(5000) NOT NULL,
  `ingredientes` varchar(5000) NOT NULL,
  `instrucciones` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'arroz con leche','200g arroz, 1l leche, 100g azúcar, 1 rama de canela, 1 limón, canela en polvo','Comienza colocando la leche en una cazuela. Añade la rama de canela. Saca una tira de cáscara del limón (teniendo cuidado para no coger la parte blanca) y agrégala a la cazuela. Deja que se cocine todo a fuego medio hasta que rompa a hervir. '),(2,'arroz a la cubana','200g arroz, 200ml de salsa de tomate, 1 plátano, 2 huevos, sal, 1 diente de ajo, laurel','Lo primero que haremos será pelar el plátano y dorarlo en una sartén con un poco de mantequilla. Retiramos y reservamos. Puede ser plátano o banana, eso ya a gusto de cada uno.'),(3,'curry','4 cucharadas de aceite, 3 cebollas, 5 tomates, 1/2 cp de jengibre, 4 dientes de ajo, 2 cucharadas de cilantro, chile en polvo, 3/4 cp de comino, 2 cucharadas de cúrcuma, 3/4 cp de garam masala, 2 cucharadas de pimentón dulce, sal, azúcar','Calentamos el aceite en una sartén grande, añadimos la cebolla y sofreímos unos 20 minutos hasta que quede bien dorada. Añadir el ajo y el jengibre y freír otro minuto. Añadir el polvo de coriandro y sofreír otro minuto. Añadir el resto de las especias y saltear unos segundos (que no se quemen). Añadir 200 ml de agua y el tomate con un poco de azúcar (una cucharilla) y dejar que hierva 15 minutos. Salar al gusto.');
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-20 20:20:29
