# simplest-node-health-indicator

- [simplest-node-health-indicator](#simplest-node-health-indicator)
  - [About](#about)
  - [Installation](#installation)
  - [Development](#development)
  - [Run](#run)
  - [Configure as systemd service](#configure-as-systemd-service)


## About 
Really, this is just a simple Hello World app with CORS enabled. But the app serves it very limited purpose perfectly fine.

## Installation

Run `npm install`

## Development
Run `npm run watch` for instantaneous reloads.

## Run
Execute `npm start`

## Configure as systemd service

Adapt the template file `simplest-node-health-indicator.service` and store it in the right location:

```bash
sudo nano /etc/systemd/system/simplest-node-health-indicator.service
#enter systemd file content
sudo systemctl --system daemon-reload
sudo systemctl enable simplest-node-health-indicator
sudo systemctl start simplest-node-health-indicator
sudo systemctl status simplest-node-health-indicator
```

> Hint, make sure that the port `3005` is enabled in your firewall configuration.