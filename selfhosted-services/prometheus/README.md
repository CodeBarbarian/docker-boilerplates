# Prometheus
Prometheus is a free software application used for event monitoring and alerting. It records real-time metrics in a time series database built using a HTTP pull model, with flexible queries and real-time alerting.

## How to run
I recommend using the compose file in the root of this, since it will spin up prometheus with the exporters node-exporter, and cadvisor.

```bash
docker-compose up -d
```