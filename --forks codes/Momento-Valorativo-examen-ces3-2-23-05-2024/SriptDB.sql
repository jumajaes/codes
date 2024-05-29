-- quiz1.project definition
CREATE TABLE `project` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` varchar(100) NOT NULL,
   `manager` varchar(100) NOT NULL,
   `details` text DEFAULT NULL,
   `createdAt` timestamp NULL DEFAULT current_timestamp(),
   `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
   `deletedAt` timestamp NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- quiz1.task definition
CREATE TABLE `task` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(100) DEFAULT NULL,
    `description` varchar(100) DEFAULT NULL,
    `status` varchar(100) DEFAULT NULL,
    `priority` int(11) DEFAULT NULL,
    `createdAt` timestamp NULL DEFAULT current_timestamp(),
    `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `deletedAt` timestamp NULL DEFAULT NULL,
    `id_project` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `task_project_FK` (`id_project`),
    CONSTRAINT `task_project_FK` FOREIGN KEY (`id_project`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

---------------project---------------
INSERT INTO quiz1.project
(name, manager, details)
VALUES('Ces3', 'Denilson', 'Quiz1');

INSERT INTO quiz1.project
(name, manager, details)
VALUES('Ces4', 'Profe', 'React');

---------------task---------------
INSERT INTO quiz1.task
(title, description, status, priority, id_project)
VALUES('Levantar requisitos', 'reunion con el cliente', 'Proceso', 1, 1);

INSERT INTO quiz1.task
(title, description, status, priority, id_project)
VALUES('Levantar requisitos1', 'reunion con el cliente1', 'Realizado', 1, 1);

INSERT INTO quiz1.task
(title, description, status, priority, id_project)
VALUES('realizar desarrollo', 'login', 'Pendiente', 2, 2);

UPDATE quiz1.task
SET title=test, description='no description', status='Pending', priority=3, id_project=1
WHERE id=1;

UPDATE quiz1.task
SET title=test2, description='no description2', status='Pending', priority=1, id_project=2
WHERE id=1;

select * from project
select * from task