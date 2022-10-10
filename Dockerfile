FROM openjdk:17

LABEL maintainer="Mirko"

ADD backend/target/Cheat%20Sheet.jar Cheat%20Sheet.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /Cheat%20Sheet.jar"]