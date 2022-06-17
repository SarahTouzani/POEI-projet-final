-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: authtest
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `entreprises`
--

DROP TABLE IF EXISTS `entreprises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entreprises` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) DEFAULT NULL,
  `departement` varchar(255) DEFAULT NULL,
  `entreprise` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `version` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entreprises`
--

LOCK TABLES `entreprises` WRITE;
/*!40000 ALTER TABLE `entreprises` DISABLE KEYS */;
INSERT INTO `entreprises` VALUES (1,'16 Rue du Guesclin','33 - Gironde','Arbre et Histoire de Bois','arbre-bois@mail.fr','Menuiserie','06 79 48 06 55',0),(2,'29 Rue Esprit des Lois','33 - Gironde','Menuiserie Bordeaux','menuis-bdx@mail.fr','Menuiserie','05 56 01 01 02',0),(3,'7 Imp. ZA Landegrand','33 - Gironde','Casa Fermetures','casa-menuis@mail.fr','Menuiserie','05 56 57 87 69',0),(4,'91 Cr du Maréchal Gallieni','33 - Gironde','DEPANN\' PLOMBERIE','depann-plomberie@mail.fr','Plomberie','06 48 56 65 03',0),(5,'2 Rue Sarrazin','44 - Loire-Atlantique','ADORÉNOV PLOMBERIE','adorenov-plomberie@mail.fr','Plomberie','06 67 51 51 97',0),(6,'28 Bd Jean Monnet','44 - Loire-Atlantique','Menuiserie Lebeaupin','lebeaupin@mail.fr','Menuiserie','02 40 75 69 36',0),(7,'28 Rue de Toulouse','24 - Dordogne','CONCEPT BOIS','lebeaupin@mail.fr','Menuiserie','05 55 36 66 56',0),(8,'57 Avenue des Pins','16 - Charente','Brico\'Menuiserie','brico-menuis@mail.fr','Menuiserie','05 45 36 88 32',0),(9,'4 Impasse de la Vallée du Pont','16 - Charente','Vriet et Fils','vriet-plomberie@mail.fr','Plomberie','05 49 56 81 19',0),(10,'240 Rue Peydavant','16 - Charente','AL\'EAU','al-eau@mail.fr','Plomberie','06 20 93 39 95',0),(11,'54 Bis Rue Paul Painlevé','24 - Dordogne','Plomberie Multi Services','plomb-multiservices@mail.fr','Plomberie','06 98 02 21 76',0),(12,'12 Rue Thalès','24 - Dordogne','H2O Plomberie','h2o-plomberie@mail.fr','Plomberie','06 34 87 38 94',0),(13,'419 Rue Pasteur','24 - Dordogne','Ocordo Travaux','ocordo-travaux@mail.fr','Maçonnerie','05 56 80 71 52',0),(14,'30 Rue Bigot','16 - Charente','Batimax','batimax@mail.fr','Maçonnerie','06 59 26 77 63',0),(15,'309 Bd Jean Jacques Bosc','16 - Charente','ALL RENOVATION','all-renovation@mail.fr','Maçonnerie','06 58 26 35 01',0),(16,'25 Rue du Carros','33 - Gironde','Bordeaux TDB','tdb-maçonnerie@mail.fr','Maçonnerie','06 50 00 51 56',0),(17,'3 Rue Jean Forton','33 - Gironde','Abreu Maçonnerie','abreu-maçonnerie@mail.fr','Maçonnerie','06 79 77 37 12',0),(18,'13 Rue Claude Chappe','44 - Loire-Atlantique','Ets Flaneuse','abreu-maçonnerie@mail.fr','Maçonnerie','05 56 46 36 90',0),(19,'3 Rue des Petites Industries','44 - Loire-Atlantique','BTP Renov\'tout','renov-tout@mail.fr','Maçonnerie','02 40 54 83 30',0),(20,'5 Allées de Tourny','33 - Gironde','Colombar Artisan','colombar-artisan@mail.fr','Peinture','06 66 16 49 65',0),(21,'24 Avenue du Dr Fernand Grosse','33 - Gironde','Esprit Peinture d\'Aquitaine','esprit-peinture@mail.fr','Peinture','06 69 48 34 38',0),(22,'204 Avenue Victor Hugo','44 - Loire-Atlantique','Garance Rénovation','garance-renovation@mail.fr','Peinture','05 56 04 46 28',0),(23,'7 Allées de Chartres','44 - Loire-Atlantique','Tyler Peinture Entreprise','tyler-peinture@mail.fr','Peinture','06 86 13 78 57',0),(24,'1 Rue des Orfèvres','24 - Dordogne','Caméléon','cameleon-services@mail.fr','Peinture','02 53 97 10 80',0),(25,'7 Rue du Nouveau Bêle','16 - Charente','AXIRENOV','axirenov-peinture@mail.fr','Peinture','02 40 30 37 48',0);
/*!40000 ALTER TABLE `entreprises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestations`
--

DROP TABLE IF EXISTS `prestations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prestation` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `version` int NOT NULL,
  `tarif` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestations`
--

LOCK TABLES `prestations` WRITE;
/*!40000 ALTER TABLE `prestations` DISABLE KEYS */;
INSERT INTO `prestations` VALUES (1,'Pose de portes intérieures','Menuiserie',0,350),(2,'Pose d\'escaliers','Menuiserie',0,1500),(3,'Pose de rangements intérieurs','Menuiserie',0,300),(4,'Pose de portes extérieures','Menuiserie',0,400),(5,'Pose de volets','Menuiserie',0,400),(6,'Pose de portails','Menuiserie',0,950),(7,'Pose d\'abris de jardins','Menuiserie',0,1550),(8,'Pose de terrasses en bois','Menuiserie',0,1850),(9,'Réparation de fuite d\'eau','Plomberie',0,300),(18,'Construction de la tuyauterie générale','Plomberie',0,1500),(11,'Raccordement tuyauteries divers','Plomberie',0,850),(12,'Installation de chaudière','Plomberie',0,750),(13,'Pose de carrelage','Maçonnerie',0,800),(14,'Construction de mur porteur','Maçonnerie',0,1850),(15,'Construction de mur non porteur','Maçonnerie',0,1300),(16,'Pose de terrasse en bêton','Maçonnerie',0,1600),(17,'Construction de fondations','Maçonnerie',0,5000),(19,'Peinture de cloisons extérieures','Peinture',0,800),(20,'Peinture de murs intérieurs','Peinture',0,550),(21,'Décapage de murs ou plafonds','Peinture',0,700),(22,'Peinture de plafonds','Peinture',0,850);
/*!40000 ALTER TABLE `prestations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `version` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_ADMIN',0),(2,'ROLE_USER',0);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-17 12:31:01
