-- --------------------------------------  CREACIÓN DE BASE DE DATOS ----------------------------------------------------

CREATE DATABASE blue_corner; 

USE blue_corner;

-- --------------------------------------- CREACIÓN DE TABLAS -----------------------------------------------------------

-- TABLA DE PRODUCTOS (PK) = 1 

CREATE TABLE IF NOT EXISTS Productos (
	Id_producto		INT(11) AUTO_INCREMENT,
    Nombre			VARCHAR(50) NOT NULL,
	PRIMARY KEY (Id_producto)
);

-- TABLA DE ETIQUETAS (PK) = 1

CREATE TABLE IF NOT EXISTS Etiquetas (
	Id_etiqueta		INT(11) AUTO_INCREMENT,
    Id_producto 	INT(11) NOT NULL,
    Nombre 			VARCHAR(50) NOT NULL,
    PRIMARY KEY (Id_etiqueta),
    FOREIGN KEY (Id_producto) REFERENCES Productos(Id_producto)
);

-- --------------------------------------  CREACIÓN DE MÉTODOS Y FUNCIONES ----------------------------------------------

-- USARÉ PROCEDIMIENTOS ALMACENADOS PARA PODER TRABAJAR CON PROMESAS, Y NO EXPONER LAS SENTENCIAS

-- ---------------- GUARDAR UN PRODUCTO

USE `blue_corner`;
DROP procedure IF EXISTS `SaveNewProducto`;

DELIMITER $$
USE `blue_corner`$$
CREATE PROCEDURE `SaveNewProducto` (NombreProducto VARCHAR(50))
BEGIN
	INSERT INTO Productos(Nombre)
    VALUES (NombreProducto);
END$$

DELIMITER ;

-- EJEMPLO DE USO 
-- call blue_corner.SaveNewProducto('JW RedL 0.7cl');


-- -------------- OBTENER TODOS LOS PRODUCTOS

USE `blue_corner`;
DROP procedure IF EXISTS `GetAllProductos`;

DELIMITER $$
USE `blue_corner` $$
CREATE PROCEDURE `GetAllProductos` () 
BEGIN 
	SELECT *
    FROM Productos;
END$$
DELIMITER ;

-- ------ EJEMPLO DE USO 
-- call blue_corner.GetAllProductos();


-- ------------- ELIMINAR PRODUCTO POR ID

USE `blue_corner`;
DROP procedure IF EXISTS `delete_Producto`;

DELIMITER $$
USE `blue_corner`$$
CREATE PROCEDURE `delete_Producto` (IdProducto INT(11))
BEGIN
	DELETE
    FROM Etiquetas
    WHERE Id_producto = IdProducto;
    
    DELETE 
    FROM Productos 
    WHERE Id_producto = IdProducto;
END$$

DELIMITER ;

-- ------ EJEMPLO DE USO 
-- call blue_corner.delete_Producto(3);


-- -------------- GUARDAR ETIQUETAS

USE `blue_corner`;
DROP procedure IF EXISTS `update_etiquetas`;

DELIMITER $$
USE `blue_corner`$$
CREATE PROCEDURE `update_etiquetas` (IdProducto INT(11), NewEtiqueta VARCHAR(50))
BEGIN
	INSERT INTO Etiquetas(Id_producto, Nombre)
    VALUES (IdProducto, NewEtiqueta);
END$$

DELIMITER ;

-- ------ EJEMPLO DE USO 
-- call blue_corner.update_etiquetas(1, 'Limpieza');


-- -------------- OBTENER ETIQUETAS POR ID

USE `blue_corner`;
DROP procedure IF EXISTS `getLabelsById`;

DELIMITER $$
USE `blue_corner`$$
CREATE PROCEDURE `getLabelsById` (IdProducto INT(11))
BEGIN
	SELECT Nombre 
    FROM Etiquetas
    WHERE Id_producto = IdProducto;
END$$

DELIMITER ;

-- ------ EJEMPLO DE USO 
-- call blue_corner.getLabelsById(1);


-- -------------- OBTENER ID DE UN PRODUCTO

USE `blue_corner`;
DROP procedure IF EXISTS `GetIdByName`;
DELIMITER $$
USE `blue_corner`$$
CREATE PROCEDURE `GetIdByName` (NombreProducto VARCHAR(50))
BEGIN
    SELECT Id_producto
    FROM Productos 
    WHERE Nombre = NombreProducto;
END$$

DELIMITER ;

-- ------ EJEMPLO DE USO 
-- call blue_corner.GetIdByName('Lejía Patito');