FROM tomcat:latest
COPY tomcat-users.xml /usr/local/tomcat/conf/
COPY target/*.war.war /usr/local/tomcat/webapps/
EXPOSE 8080
