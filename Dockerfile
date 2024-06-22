FROM tomcat:9-jdk17-openjdk
# Copia il WAR file nella cartella webapps di Tomcat
ADD target/MIDORIBEATS.war /usr/local/tomcat/webapps/ROOT.war
EXPOSE 8080
CMD ["catalina.sh", "run"]
