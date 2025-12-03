# Build stage
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build

# Configurar encoding UTF-8
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /app

# Copy POM first for dependency caching
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Compile without resource filtering issues
RUN mvn clean package -DskipTests -Dmaven.test.skip=true

# Runtime stage
FROM eclipse-temurin:21-jre-alpine

# Configurar timezone e encoding
RUN apk add --no-cache tzdata
ENV TZ=America/Sao_Paulo
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-Dfile.encoding=UTF-8", "-jar", "app.jar"]