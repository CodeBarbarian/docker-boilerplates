<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">


<h3 align="center">Docker Boilerplates</h3>

  <p align="center">
    Easy to use boilerplates for self-hosting and development
    <br />
    <a href="https://github.com/codebarbarian/docker-boilerplates"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/codebarbarian/docker-boilerplates/issues">Report Bug</a>
    ·
    <a href="https://github.com/codebarbarian/docker-boilerplates/issues">Request help or features</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#still-needs-doing">Still needs doing</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#reverse-proxy-server-with-traefik">Reverse Proxy Server with Traefik</a></li>
        <li><a href="#adding-ssl-certificates-to-local-environment">Adding SSL certificates to local environment</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Who does not love boilerplates? This will be the project where I collect and publish all kinds of boilerplates. My main focus for this project will be on providing good documentation and tested docker configurations for rapid deployment and development.

<p align="right">(<a href="#top">back to top</a>)</p>

## Still needs doing
Unsure...

Maybe even try to get done with the syntax folder, adding helpful tips and tricks for future use

<!-- GETTING STARTED -->
## Getting Started
Download project, go into directory for what you would like to run and issue:

```bash
docker-compose up -d
```
### Prerequisites

* Docker
* Docker Compose


### Reverse Proxy Server with Traefik
This allows you to use Traefik as your Reverse Proxy. This also adds the certificate from the certificate resolver you want. in this case production. 

* Production = Lets Encrypt Production
* Staging = Lets Encrypt Staging
* Cloudflare = Cloudflare


```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.your-router-name.entrypoints=web, websecure"
  - "traefik.http.routers.your-router-name.rule=Host(`servicename.example.com`)"
  - "traefik.http.routers.your-router-name.tls=true"
  - "traefik.http.routers.your-router-name.tls.certresolver=production"
```

To get everything working it also needs to be on the same network as traefik is controlling.
This needs to be added to the services as well, I usually put it on the bottom of the docker-compose.yml file.
```yaml
networks:
  - web

networks:
  web:
    external: true
```

### Adding SSL certificates to local environment
Add this to the labels for the traefik container
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.traefik.entrypoints=web"
  - "traefik.http.routers.traefik.rule=Host(`traefik-dashboard-internal.local.example.com`)"
  - "traefik.http.middlewares.sslheader.headers.customrequestheaders.X-Forwarded-Proto=https"
  - "traefik.http.routers.traefik-secure.entrypoints=websecure"
  - "traefik.http.routers.traefik-secure.rule=Host(`traefik-dashboard-internal.local.example.com`)"
  - "traefik.http.routers.traefik-secure.middlewares=traefik-auth"
  - "traefik.http.routers.traefik-secure.tls=true"
  - "traefik.http.routers.traefik-secure.tls.certresolver=cloudflare"
  - "traefik.http.routers.traefik-secure.tls.domains[0].main=local.example.com"
  - "traefik.http.routers.traefik-secure.tls.domains[0].sans=*.local.example.com"
  - "traefik.http.routers.traefik-secure.service=api@internal"
```



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Morten Haugstad - [@codebarbarian](https://twitter.com/codebarbarian) 

Project Link: [https://github.com/codebarbarian/docker-boilerplates](https://github.com/codebarbarian/docker-boilerplates)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Most of the selfhosted software comes from [https://linuxserver.io](https://linuxserver.io)! They have a fantastic documentation at [https://docs.linuxserver.io/](https://docs.linuxserver.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/codebarbarian/docker-boilerplates.svg?style=for-the-badge
[contributors-url]: https://github.com/codebarbarian/docker-boilerplates/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/codebarbarian/docker-boilerplates.svg?style=for-the-badge
[forks-url]: https://github.com/codebarbarian/docker-boilerplates/network/members
[stars-shield]: https://img.shields.io/github/stars/codebarbarian/docker-boilerplates.svg?style=for-the-badge
[stars-url]: https://github.com/codebarbarian/docker-boilerplates/stargazers
[issues-shield]: https://img.shields.io/github/issues/codebarbarian/docker-boilerplates.svg?style=for-the-badge
[issues-url]: https://github.com/codebarbarian/docker-boilerplates/issues
[license-shield]: https://img.shields.io/github/license/codebarbarian/docker-boilerplates.svg?style=for-the-badge
[license-url]: https://github.com/codebarbarian/docker-boilerplates/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mortenhaugstad
[product-screenshot]: images/screenshot.png