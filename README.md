Pour generer la bdd les differentes possibilites:

mysql -u hypertube -p hypertube < hypertube.sql

UNIX
shell> mysql hypertube < hypertube.sql

The same in Windows command prompt:
mysql -p -u hypertube hypertube < hypertube.sql

PowerShell
C:\> cmd.exe /c "mysql -u root -p hypertube < hypertube.sql"

MySQL command line
mysql> use hypertube;
mysql> source hypertube.sql;
