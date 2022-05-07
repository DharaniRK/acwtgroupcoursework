### After mysql server is up and running, get password using
docker logs gbuymysql 2>&1 | grep GENERATED

###Connecting to MySQL Server from within the Container
docker exec -it gbuymysql mysql -uroot -p

#provide the generated password to be above command

## Change mysql onetimepassword by
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';



