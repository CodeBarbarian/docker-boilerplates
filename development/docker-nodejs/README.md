# docker-nodejs

To build image: 
```bash
docker build -t NAME:TAG .
```

Push to dockerhub or other configured repository:
```bash
docker push NAME:TAG
```

To run with docker:
```bash
docker run -d -p 8080:8080 NAME:TAG
```

To run with docker-compose:
```bash
docker-compose up -d
```

