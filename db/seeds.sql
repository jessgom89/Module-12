INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finace"),
       ("Legal");
       

INSERT INTO role (title,salary, department_id)
VALUES ("Sales Lead",100000,1),
       ("Salesperson",80000,1),
       ("Lead Engineer",150000,2),
       ("Soft Enginner",120000,2),
       ("Accont Manager",160000,3),
       ("Accountant",120000,3),
       ("Legal Team Lead",250000,4),
       ("Lawyer",190000,4);
       
       
       
       

       INSERT Into  employee (first_name,last_name,role_id)
       VALUES("John","Doe",1),
       ("Mike","Chan",2),
       ("Ashely","Rodriguez",3),
       ("Kevin","Tupic",4),
       ("kunal","Singh",5),
       ("Malia","Brown",6),
       ("Sarah","Lourd",7),
       ("Tom","Allen",8);
       update employee set manager_id=1 where id=2;
       update employee set manager_id=3 where id=4;
       update employee set manager_id=5 where id=6;
       update employee set manager_id=7 where id=8;

            
       
