-- MySQL dump 10.13  Distrib 5.6.33, for osx10.9 (x86_64)
--
-- Host: localhost    Database: codeqdb
-- ------------------------------------------------------
-- Server version	5.6.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL,
  `answer` varchar(500) NOT NULL,
  `is_correct` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_answer_fk` (`question_id`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `question_answer_fk` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=291 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,10,'If a class have multiple methods by same name but different parameters, it is known as Method Overloading. It increases the readability of the program',1),(2,10,'Creating more than one method with different unique identifiers in a Class',0),(3,9,'It is a keyword that refers to the immediate parent class object.',1),(4,9,'It is a keyword that refers to the no argument constructor.',0),(5,8,'Inheritance is a mechanism in which one object acquires all the properties and behaviour of another object of another class. It represents IS-A relationship. It is used for Code Resusability and Method Overriding.',1),(8,7,'Static variable is used to refer the common property of all objects (that is not unique for each object) e.g. company name of employees,college name of students etc.',1),(10,6,'In case of static binding type of object is determined at compile time whereas in dynamic binding type of object is determined at runtime.',1),(11,5,'If you make any variable as final, you cannot change the value of final variable(It will be constant)',1),(12,4,'Constructor is just like a method that is used to initialize the state of an object. It is invoked at the time of object creation.',1),(13,3,'Object based programming languages follow all the features of OOPs except they are untyped languages.',0),(14,2,'A singleton is an array with only one value.',0),(15,1,'An abstract class must implement an interface, not the other way around.',0),(16,1,'Abstract class can extend only one class or one abstract class at a time, an Interface can extend any number of interfaces at a time. (Change question to What is one difference between an interface and an abstract class)',1),(17,3,'Object based programming languages follow all the features of OOPs except Inheritance.',1),(19,2,'An object that exists as only one instance in the java virtual machine.',1),(20,4,'The Constructor defines the object so that the JVM can provide a boolean',0),(21,5,'If you make a variable final, then it won\'t be included in your constructor.',0),(22,6,'Dynamic binding is determined at compile and will throw a null pointer error, whereas Static binding is at runtime and won\'t present any errors',0),(23,7,'A Static variable is not able to be passed into methods.',0),(24,8,'Inheritance allocates the class variables that are passed into various methods.',0),(25,11,'Spring enables developers to develop enterprise-class applications using POJOs.',0),(26,11,'Spring is organized in a modular fashion.',0),(27,11,'Testing an application written with spring is simple because environment-dependent code is moved into this framework.',0),(28,11,'All of above.',1),(29,12,'FileSystemXmlApplicationContext, ClassPathXmlApplicationContext, WebXmlApplicationContext',1),(30,12,'FileSystemApplicationContext, ClassPathApplicationContext, WebApplicationContext',0),(31,12,'AdvancedApplicationContext, FileApplicationContext',0),(32,12,'FileSystemApplicationContext, ClassPathApplicationContext',0),(33,13,'This scopes a bean definition to an HTTP Application/ Global session.',1),(34,13,'This scopes the bean definition to Spring IoC container.',0),(35,13,'This scopes the bean definition to HTTP request.',0),(36,13,'This scopes the bean definition to HTTP Session.',0),(37,14,'This annotation indicates that bean property must be populated by the user.',0),(38,14,'This annotation indicates that bean property is required while saving the bean data to database.',0),(39,14,'This annotation simply indicates that the affected bean property must be populated at configuration time, through an explicit property value in a bean definition or through autowiring.',1),(40,14,'This annotation indicates that bean property is required while serializing the bean.',0),(41,15,'This represents a point in your application which joins two objects.',0),(42,15,'This represents a point in your object where you join values.',0),(43,15,'This represents a point in your object where you join injected values.',0),(44,15,'This represents a point in your application where you can plug-in AOP aspect.',1),(45,16,'Run advice before and after the advised method is invoked.',1),(46,16,'Run advice before and after a class is loaded.',0),(47,16,'Run advice before and after http response is returned.',0),(48,16,'Run advice before and after http request is processed.',0),(49,17,'Beans',0),(50,17,'Aspects',0),(51,17,'JMS',1),(52,17,'Context',0),(53,18,'singleton',1),(54,18,'global-session',0),(55,18,'prototype',0),(56,18,'request',0),(57,19,'Using init() only',0),(58,19,'Using InitializingBean class only',0),(59,19,'Using DisposableBean class only',0),(60,19,'Using All of above',1),(61,20,'Accurate, Controlled, Isolation, Durability',0),(62,20,'Atomicity, Consistency, Independent, Done',0),(63,20,'Atomicity, Consistency, Isolation, Durability',1),(64,20,'Accurate, Controlled, Independent, Done',0),(65,21,'BeanFactory, ApplicationContext',1),(66,21,'BeanFactory, ApplicationContext, IocContextFactory',0),(67,21,'BeanFactory, BeanContext, IocContextFactory',0),(68,21,'BeanFactory, ApplicationContext, BeanContext',0),(69,22,'This scopes a bean definition to an HTTP session.',1),(70,22,'This scopes the bean definition to Spring IoC container.',0),(71,22,'This scopes the bean definition to HTTP request.',0),(72,22,'This scopes the bean definition to HTTP Application/ Global session.',0),(73,23,'Similar to byType, but type applies to constructor arguments. If there is not exactly one bean of the constructor argument type in the container, a fatal error is raised.',0),(74,23,'Autowiring by property name. Spring tries to match and wire its properties with the beans defined by the same names in the configuration file.',0),(75,23,'Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.',1),(76,23,'Autowiring by property type. Spring tries to match and wire a property if its type matches with exactly one of the beans name in configuration file.',0),(77,24,'This represents a point in your application which joins two objects.',0),(78,24,'This represents a point in your object where you join values.',0),(79,24,'This represents a point in your object where you join injected values.',0),(80,24,'This represents a point in your application where you can plug-in AOP aspect.',1),(81,25,'XML Schema based aspect implementation',0),(82,25,'@AspectJ based aspect implementation',0),(83,25,'Both of above.',1),(84,25,'None of above.',0),(85,26,'var txt = new Array(1:\"tim\",2:\"kim\",3:\"jim\")',0),(86,26,'var txt = new Array:1=(\"tim\")2=(\"kim\")3=(\"jim\")',0),(87,26,'var txt = new Array(\"tim\",\"kim\",\"jim\")',1),(88,26,'var txt = new Array=\"tim\",\"kim\",\"jim\"',0),(89,27,'Enclose text to be displayed by non-JavaScript browsers.',1),(90,27,'Prevents scripts on the page from executing.',0),(91,27,'Describes certain low-budget movies.',0),(92,27,'None of the above',0),(93,28,'New Text\"?',0),(94,28,'para1.value=\"New Text\";',1),(95,28,'para1.firstChild.nodeValue= \"New Text\";',0),(96,28,'para1.nodeValue=\"New Text\";',0),(97,29,'Semicolon, colon',0),(98,29,'Semicolon, Ampersand',0),(99,29,'Ampersand, colon',0),(100,29,'Ampersand, semicolon',1),(101,30,'a low-level programming language.',0),(102,30,'a scripting language precompiled in the browser.',0),(103,30,'a compiled scripting language.',0),(104,30,'an object-oriented scripting language.',1),(105,31,'FileUpLoad',0),(106,31,'Function',0),(107,31,'File',1),(108,31,'Date',0),(109,32,'Database',0),(110,32,'Cursor',0),(111,32,'Client',0),(112,32,'FileUpLoad',1),(113,33,'new',0),(114,33,'this',1),(115,33,'delete',0),(116,33,'typeof',0),(117,34,'Eval',1),(118,34,'ParseInt',0),(119,34,'ParseFloat',0),(120,34,' Efloat',0),(121,35,'onfocus',0),(122,35,'onblur',1),(123,35,'onclick',0),(124,35,'ondblclick',0),(125,36,'[objectName.]eval(numeriC.',0),(126,36,'[objectName.]eval(string)',1),(127,36,'[EvalName.]eval(string)',0),(128,36,'[EvalName.]eval(numeriC.',0),(129,37,'Client',1),(130,37,'Server',0),(131,37,'Object',0),(132,37,'None of the above',0),(133,38,'Select',0),(134,38,'If',1),(135,38,'Switch',0),(136,38,'For',0),(137,39,'if (conditional expression is true) thenexecute this codeend if',0),(138,39,' if (conditional expression is true)execute this codeend if',0),(139,39,'if (conditional expression is true)   {then execute this code>->}',1),(140,39,'if (conditional expression is true) then {execute this code}',0),(141,40,'dateObjectName = new Date([parameters])',1),(142,40,'dateObjectName.new Date([parameters])',0),(143,40,'dateObjectName := new Date([parameters])',0),(144,40,'dateObjectName Date([parameters])',0),(145,41,'Reverse',0),(146,41,'Shift',0),(147,41,'Slice',0),(148,41,'Splice',1),(149,42,'window.captureEvents(Event.CLICK);',1),(150,42,'window.handleEvents (Event.CLICK);',0),(151,42,'window.routeEvents(Event.CLICK );',0),(152,42,'window.raiseEvents(Event.CLICK );',0),(153,43,'<IMG>',0),(154,43,'<A>',1),(155,43,'<BR>',0),(156,43,'None of the above',0),(157,44,'Pathname',0),(158,44,'Protocol',0),(159,44,'Defaultstatus',1),(160,44,'Host',0),(161,45,'ENABLE_TAINT',0),(162,45,'MS_ENABLE_TAINT',0),(163,45,'NS_ENABLE_TAINT',1),(164,45,'ENABLE_TAINT_NS',0),(165,46,'a wrapper',1),(166,46,'a link',0),(167,46,'a cursor',0),(168,46,'a form',0),(169,47,'Structured Query Language',1),(170,47,'Structured Query List',0),(171,47,'Simple Query Language',0),(172,48,'Data Definition Language(DDL)',1),(173,48,'Data Manipulation Language(DML)',0),(174,48,'Both of above',0),(175,49,'BETWEEN operator',0),(176,49,'LIKE operator',1),(177,49,'EXISTS operator',0),(178,50,'EXISTS operator',0),(179,50,'NOT operator',0),(180,50,'IS NULL operator',1),(181,51,'ALTER TABLE',1),(182,51,'MODIFY TABLE',0),(183,51,'CHANGE TABLE',0),(184,52,'VMC',0),(185,52,'MVC',1),(186,52,'MCV',0),(187,52,'CVM',0),(188,53,'HTML and PHP',0),(189,53,'HTML and CrossScript',0),(190,53,'HTML and AngularScript',0),(191,53,'HTML and JavaScript',1),(192,54,'ng-app',1),(193,54,'ag-app',0),(194,54,'js-app',0),(195,54,'aj-app',0),(196,55,'$param',0),(197,55,'$control',0),(198,55,'$scope',1),(199,55,'$scont',0),(200,56,'Debug',0),(201,56,'Interpolation',1),(202,56,'Matching',0),(203,56,'Controller',0),(204,57,'JavaScript file is loaded,',0),(205,57,'the angular global object is created,',0),(206,57,'your JavaScript which registers controller functions is executed,',0),(207,57,'all of above',1),(208,58,'True',0),(209,58,'False',1),(210,59,'SQL injection attacks',0),(211,59,'JS injection attacks',0),(212,59,'HTML injection attacks',1),(213,59,'Python injection attacks',0),(214,60,'ng-shown, ng-hidden',0),(215,60,'ng-show, ng-hide',1),(216,60,'nt-show, nt-hide',0),(217,60,'ng-shows, ng-hides',0),(218,61,'ng-switch',1),(219,61,'ng-model ',0),(220,61,'ng-Disabled',0),(221,61,'ng-Cloak',0),(222,63,'heading',0),(223,63,'paragraph',0),(224,63,'list',0),(225,63,'All of these',1),(226,64,'Hyper Text Markup Language',1),(228,64,'High Text Markup Language',0),(229,64,'Hyper Tabular Markup Language',0),(230,64,'None of these',0),(231,65,'<TD>',0),(232,65,'<br>',0),(233,65,'<P>',1),(234,65,'<TR>',0),(235,66,'<LL>',0),(236,66,'<DD>',0),(237,66,'<DL>',1),(238,66,'<DS>',0),(239,67,'<head>',0),(240,67,'<h6>',0),(241,67,'<heading>',0),(242,67,'<h1>',1),(243,68,'Method',0),(244,68,'Action',0),(245,68,'Both (a)&(c)',1),(246,68,'None of these',0),(247,69,'How to organize the page',0),(248,69,'How to display the page',1),(249,69,'How to display message box on page',0),(250,69,'None of these',0),(251,70,'CSS is used to control the style of a web document in a simple and easy way.',0),(252,70,'CSS is the acronym for \"Cascading Style Sheet\".',0),(253,70,'You can write CSS once and then reuse same sheet in multiple HTML pages.',0),(254,70,'All of the above.',1),(255,71,'p[lang]',0),(256,71,'p[lang=\"fr\"]',0),(257,71,'p[lang~=\"fr\"]',0),(258,71,'p[lang|=\"fr\"]',1),(259,72,'px',0),(260,72,'vh',1),(261,72,'vw',0),(262,72,'vmin',0),(263,73,'font-family',1),(264,73,'font-style',0),(265,73,'font-variant',0),(266,73,'font-weight',0),(267,74,'color',0),(268,74,'direction',0),(269,74,'letter-spacing',0),(270,74,'word-spacing',1),(271,75,'white-space',0),(272,75,'text-shadow',1),(273,75,'text-decoration',0),(274,75,'text-transform',0),(275,76,':border-color',1),(276,76,':border-style',0),(277,76,':border-width',0),(278,76,':border-bottom-color',0),(279,77,':border-top-color',0),(280,77,':border-left-color',1),(281,77,':border-right-color',0),(282,77,':border-bottom-color',0),(283,78,'list-style-type',0),(284,78,'list-style-position',0),(285,78,'list-style-image',0),(286,78,'list-style',1),(287,79,'padding-bottom',0),(288,79,'padding-top',0),(289,79,'padding-left',1),(290,79,'padding-right',0);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Java'),(2,'JavaScript'),(3,'SQL'),(4,'AngularJS'),(5,'HTML'),(6,'CSS'),(7,'SpringMVC');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(500) NOT NULL,
  `category_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_question_fk` (`category_id`),
  KEY `user_question_fk` (`user_id`),
  CONSTRAINT `category_question_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `question_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `user_question_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'What is the difference between an abstract class and an interface',1,1),(2,'What is a singleton?',1,1),(3,'What is difference between object oriented programming language and object based programming language?',1,1),(4,'What is constructor?',1,1),(5,'What is final variable?',1,1),(6,'What is the difference between static binding and dynamic binding?',1,1),(7,'What is static variable?',1,1),(8,'What is Inheritance?',1,1),(9,'What is super in java?',1,1),(10,' What is method overloading?',1,1),(11,'Which of the following is correct assertion about spring?',7,1),(12,'Which are the correct implementation classes of ApplicationContext?',7,1),(13,'What is global-session scope?',7,1),(14,'What does @Required annotation mean?',7,1),(15,'What is Join point?',7,1),(16,'How around advice works?',7,1),(17,'Which of the following is part of Data Access layer in Spring framework?',7,1),(18,'If a bean is created once per Ioc Container, scope is',7,1),(19,'How bean life cycle can be controlled?',7,1),(20,'What is ACID in transactional management?',7,1),(21,'Which are the IoC containers in Spring?',7,1),(22,'What is session scope?',7,1),(23,'What is autodetect mode of autowiring?',7,1),(24,'What is Join point?',7,1),(25,'Which of the following aspect implementation spring supports?',7,1),(26,'Which is the correct way to write a JavaScript array?',2,1),(27,'What does the <noscript> tag do?',2,1),(28,'If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?',2,1),(29,'JavaScript entities start with _______ and end with _________.',2,1),(30,'Which of the following best describes JavaScript?',2,1),(31,'Choose the server-side JavaScript object?',2,1),(32,'Choose the client-side JavaScript object?',2,1),(33,'Which of the following is not considered a JavaScript operator?',2,1),(34,'______method evaluates a string of JavaScript code in the context of the specified object.',2,1),(35,'Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?',2,1),(36,'The syntax of Eval is ________________',2,1),(37,'JavaScript is interpreted by _________',2,1),(38,'Using _______ statement is how you test for a specific condition.',2,1),(39,'Which of the following is the structure of an if statement?',2,1),(40,'How to create a Date object in JavaScript?',2,1),(41,'The _______ method of an Array object adds and/or removes elements from an array.',2,1),(42,'To set up the window to capture all Click events, we use which of the following statement?',2,1),(43,'Which tag(s) can handle mouse events in Netscape?',2,1),(44,'____________ is the tainted property of a window object.',2,1),(45,'To enable data tainting, the end user sets the _________ environment variable.',2,1),(46,'In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.',2,1),(47,'What is the full form of SQL?',3,1),(48,'Which is the subset of SQL commands used to manipulate Oracle Database structures, including tables?',3,1),(49,'Which operator performs pattern matching?',3,1),(50,'What operator tests column for the absence of data?',3,1),(51,'In SQL, which command(s) is(are) used to change a table\'s storage characteristics?',3,1),(52,'AngularJS is based on the . . . . . . pattern.',4,1),(53,'AngularJS applications are a mix of . . . . . . ',4,1),(54,'We need to tell AngularJS what part of our HTML page contains the AngularJS app. You do so by adding the . . . . attribute to the root HTML element of the AngularJS app. ',4,1),(55,'There is a controller which takes single parameter. We call it . . . . . parameter. ',4,1),(56,'The . . . . . . directive is one of the most fundamental directives in AngujarJS. The . . . . . directive inserts the result of an expression into the HTML template. ',4,1),(57,'First the HTML document is loaded into the browser, and evaluated by the browser. At this time the AngularJS . . . . . . . ',4,1),(58,'You cannot use AngularJS directives to tell AnguluarJS how to mix the data into the HTML template. ',4,1),(59,'If the data obtained from the model contains HTML elements, these are escaped before being inserted into the HTML template. The escaping means that the HTML is displayed as text, and not as HTML. This is done to prevent . . . . ',4,1),(60,'AngularJS can show or hide HTML depending on the state of data in the model. You do so using a set of AngularJS directives such as . . . . . . which are created specifically for that purpose. ',4,1),(61,'The . . . . . directive is used if you want to add or remove HTML elements from the DOM based on data in the model. ',4,1),(63,'The common element which describe the web page, is ?',5,1),(64,'HTML stands for?',5,1),(65,'which of the following tag is used to mark a begining of paragraph ?',5,1),(66,'From which tag descriptive list starts ?',5,1),(67,'Correct HTML tag for the largest heading is',5,1),(68,'The attribute of <form> tag',5,1),(69,'Markup tags tell the web browser',5,1),(70,'Which of the following is correct about CSS?',6,1),(71,'Which of the following selector selects all paragraph elements whose lang attribute contains values that are exactly \"fr\", or begin with \"fr-\"?',6,1),(72,'Which of the following defines 1% of viewport height?',6,1),(73,'Which of the following property is used to change the face of a font?',6,1),(74,'Which of the following property is used to add or subtract space between the words of a sentence?',6,1),(75,'Which of the following property is used to set the text shadow around a text?',6,1),(76,'Which of the following property specifies the color of a border?',6,1),(77,'Which of the following property changes the color of left border?',6,1),(78,'Which of the following property serves as shorthand for the marker properties?',6,1),(79,'Which of the following property specifies the left padding of an element?',6,1);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `score` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_user_fk` (`user_id`),
  KEY `test_category_fk` (`category_id`),
  CONSTRAINT `test_category_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `test_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `test_user_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,1,1,NULL),(2,3,1,NULL),(3,2,2,NULL),(4,2,1,NULL),(5,2,1,NULL),(6,2,3,NULL),(7,2,3,NULL),(8,2,3,NULL),(9,2,3,NULL),(10,2,7,NULL),(11,2,3,NULL),(12,2,7,NULL),(13,2,1,NULL),(14,2,1,NULL),(15,2,1,NULL),(16,2,1,NULL),(17,2,1,NULL),(18,2,2,NULL);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_question`
--

DROP TABLE IF EXISTS `test_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test_question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `is_right` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_testquestion_fk` (`test_id`),
  KEY `question_testquestion_fk` (`question_id`),
  CONSTRAINT `question_testquestion_fk` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `test_question_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `test_question_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `test` (`id`),
  CONSTRAINT `test_testquestion_fk` FOREIGN KEY (`test_id`) REFERENCES `test` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_question`
--

LOCK TABLES `test_question` WRITE;
/*!40000 ALTER TABLE `test_question` DISABLE KEYS */;
INSERT INTO `test_question` VALUES (1,1,1,0),(2,1,2,0),(3,1,3,0),(4,1,4,0),(5,1,5,0),(6,1,6,1),(7,1,7,1),(8,1,8,1),(9,1,9,1),(10,1,10,1),(11,3,26,0),(12,3,27,0),(13,3,31,1),(14,3,30,0),(15,3,29,0),(16,3,28,0),(17,3,32,1),(18,3,33,0),(19,3,34,0),(20,3,35,0),(21,3,36,1),(22,3,37,0),(23,3,38,0),(24,3,39,0),(25,3,40,0),(26,3,41,0),(27,3,42,0),(28,3,43,0),(29,3,44,1),(30,3,45,0),(31,3,46,0),(32,4,1,0),(33,4,2,1),(34,4,4,1),(35,4,6,1),(36,4,3,0),(37,4,5,1),(38,4,7,1),(39,4,8,1),(40,4,9,1),(41,4,10,1),(42,5,4,0),(43,5,3,0),(44,5,5,0),(45,5,2,0),(46,5,1,0),(47,5,6,0),(48,5,7,0),(49,5,9,0),(50,5,10,0),(51,5,8,0),(52,10,12,0),(53,10,13,0),(54,10,16,0),(55,10,15,0),(56,10,11,0),(57,10,14,0),(58,10,17,0),(59,10,18,0),(60,10,19,0),(61,10,20,0),(62,10,21,0),(63,10,23,0),(64,10,22,0),(65,10,24,0),(66,10,25,0),(67,12,12,0),(68,12,13,0),(69,12,16,0),(70,12,14,0),(71,12,11,0),(72,12,15,0),(73,12,18,0),(74,12,19,0),(75,12,17,0),(76,12,20,0),(77,12,21,0),(78,12,22,0),(79,12,23,0),(80,12,24,0),(81,12,25,0),(82,13,3,0),(83,13,2,1),(84,13,5,0),(85,13,6,0),(86,13,4,0),(87,13,1,0),(88,13,7,0),(89,13,8,0),(90,13,9,0),(91,13,10,0),(92,14,6,0),(93,14,2,0),(94,14,3,0),(95,14,1,0),(96,14,10,0),(97,14,8,0),(98,14,4,0),(99,14,5,0),(100,14,7,0),(101,14,9,0),(102,15,4,0),(103,15,3,0),(104,15,9,0),(105,15,10,0),(106,15,6,0),(107,15,5,0),(108,15,1,0),(109,15,7,0),(110,15,2,0),(111,15,8,0),(112,16,9,0),(113,16,6,0),(114,16,10,0),(115,16,3,0),(116,16,2,0),(117,16,7,0),(118,16,1,0),(119,16,4,0),(120,16,5,0),(121,16,8,0),(122,17,7,0),(123,17,4,0),(124,17,1,0),(125,17,9,0),(126,17,8,0),(127,17,2,0),(128,17,10,0),(129,17,5,0),(130,17,6,0),(131,17,3,0),(132,18,46,0),(133,18,39,0),(134,18,42,0),(135,18,41,0),(136,18,37,0),(137,18,45,0),(138,18,38,0),(139,18,29,0),(140,18,35,0),(141,18,26,0),(142,18,28,0),(143,18,43,0),(144,18,33,0),(145,18,34,0),(146,18,30,0),(147,18,40,0),(148,18,27,0);
/*!40000 ALTER TABLE `test_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user1','user1'),(2,'user5','$2a$10$uN28hSWkqhweM/xvFKf18eWM4H5pOr/gD8G9ODpTIfRNeAPusQG/a'),(3,'user6','$2a$10$qEKfw/OuPg/SAMNQvJHVA.ch0TV26zWEg5s2.MPNVgCjhFvALQ6xu');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-19  8:51:50
