# Import QRCode from pyqrcode
import pyqrcode
import png
from pyqrcode import QRCode


# String which represents the QR code
redirect_url = "https://t9cms.arenaapp.io/"

# Generate QR code
url = pyqrcode.create(redirect_url)

# Create and save the svg file naming "myqr.svg"
url.svg("myqr.svg", scale = 8)

# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)