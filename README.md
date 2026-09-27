# AnaAlAhly | Al Ahly SC Fan Site

A fan-site concept for Al Ahly SC, created alongside an experiment in making it easier for fans to reach a football match prediction portal with a QR code.

## Project Overview

The website presents Al Ahly-inspired club information in a single-page layout, with sections for news, match fixtures, and club achievements. A small Python utility generates QR code files that link to the prediction portal.

The website is a static frontend: its news and match information are sample content and are not connected to a live data source.

## Features

- Al Ahly-themed landing page and navigation
- News, match fixture, and club achievement sections
- Navigation menu interaction and active-section highlighting
- QR code generation in SVG and PNG formats

## Built With

- HTML
- CSS
- JavaScript
- Python with PyQRCode and pypng for QR code generation

## Run Locally

No build step or JavaScript dependencies are required. Open `index.html` in a browser, or use the VS Code Live Server extension to serve it locally.

Some fonts, icons, and images load from external services, so an internet connection is needed for those assets.

## Generate the Prediction Portal QR Code

The QR code script currently points to [the prediction portal](https://t9cms.arenaapp.io/). From the project directory, install its Python dependencies and run the script:

```bash
python -m pip install PyQRCode pypng
python trial-qrcode.py
```

The script creates `myqr.svg` and `myqr.png` in the current directory. Update the `redirect_url` value in `trial-qrcode.py` if the portal address changes.