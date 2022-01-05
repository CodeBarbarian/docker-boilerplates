# Traefik
Traefik (pronounced traffic) is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy.

## Requirements
The file acme.json in data directory needs to have the following permission scheme(600). To do this execute the following command on the host:


```bash
$ chmod 600 acme.json
```

## traefik-basic
Traefik basic contains the composer files to setup traefik at its most basic. 
Port exposure and so on. 

The configuration files for traefik is located in data directory

Only external dns is required for this setup. (Cloudflare is used here)

## traefik-advanced
Traefik-Advanced contains the composer files to setup traefik with both internal ssl certificate as well as external. 

Remember that you have to have a internal as well as a external dns server. 
Cloudflare has been used as the external dns and pihole as the internal one.

