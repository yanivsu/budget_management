-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: budget_app
-- ------------------------------------------------------
-- Server version	5.7.41

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
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `transaction_name` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `type` enum('income','expense') DEFAULT NULL,
  `date` date DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `transaction_details` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  UNIQUE KEY `transaction_id_UNIQUE` (`transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (17,'Coffee Purchase',30.00,'expense','2024-04-03',2,'Bought a coffee'),(18,'Online Course',200.00,'expense','2024-04-04',2,'Purchased an online course'),(19,'Movie Streaming',15.00,'expense','2024-04-05',2,'Subscribed to a movie service'),(20,'Item Sale',80.00,'income','2024-04-06',2,'Sold a personal item online'),(21,'Taxi Ride',20.00,'expense','2024-04-07',2,'Took a taxi to work'),(22,'Bonus Received',500.00,'income','2024-04-08',2,'Received a work bonus'),(23,'New Shoes',100.00,'expense','2024-04-09',2,'Bought a pair of shoes'),(24,'Lottery Winning',150.00,'income','2024-04-10',2,'Won a small lottery prize'),(25,'Phone Bill',50.00,'expense','2024-04-11',2,'Monthly mobile phone bill'),(26,'Investment Return',300.00,'income','2024-04-12',2,'Return on investment'),(89,'Grocery Shopping',150.00,'expense','2024-04-03',1,'Bought weekly groceries'),(90,'Concert Ticket',90.00,'expense','2024-04-04',1,'Attended a concert'),(91,'Book Purchase',45.00,'expense','2024-04-05',1,'Bought a new book'),(92,'Freelance Work',600.00,'income','2024-04-06',1,'Completed a freelance project'),(93,'Gym Membership',75.00,'expense','2024-04-07',1,'Monthly gym fee'),(94,'Interest Income',25.00,'income','2024-04-08',1,'Bank savings interest'),(95,'Utility Bill',120.00,'expense','2024-04-09',1,'Electricity bill payment'),(96,'Dividend Income',50.00,'income','2024-04-10',1,'Received stock dividends'),(97,'Dining Out',60.00,'expense','2024-04-11',1,'Restaurant meal with friends'),(98,'Gift Received',100.00,'income','2024-04-12',1,'Received a cash gift');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `token` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ron','$2b$10$1Mk3pibZfFwvV/3Iq5SBSOOMBie1ay8OewYvSSGfN6IZlenDKDodC',NULL),(2,'Jhon','$2b$10$zI8KD.2VDJedf5jyARi.X.s09nxEsOxy8xvkJLHkf02FArgoitFIe',NULL),(3,'Tom','$2b$10$1PlJhtwjwgGGC7.3ydE.tuhdlgCqCfHrXo7OFdjoMA8tWls5E/I3a',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04 12:09:38
