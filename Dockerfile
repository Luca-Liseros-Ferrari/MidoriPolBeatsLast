# Usa l'immagine di Tomcat 9 con JDK 17
FROM tomcat:9-jdk17-openjdk

# Copia il file WAR nell'immagine di Tomcat e rinominalo come ROOT.war per la deployment di default
ADD target/MIDORIBEATS.war /usr/local/tomcat/webapps/ROOT.war

# Copia il file JAR con le dipendenze nel container
COPY target/MIDORIBEATS-jar-with-dependencies.jar /usr/local/tomcat/MIDORIBEATS-jar-with-dependencies.jar

# Copia lo script di inizializzazione del database nel container e imposta i permessi di esecuzione
COPY ./scripts/init_db.sh /usr/local/tomcat/init_db.sh
RUN chmod +x /usr/local/tomcat/init_db.sh

# Esponi la porta 8080 per Tomcat
EXPOSE 8080

# CMD per avviare Tomcat e l'applicazione Java
CMD ["/usr/local/tomcat/init_db.sh"]
