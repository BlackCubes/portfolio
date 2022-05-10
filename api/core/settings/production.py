from .base import *

DEBUG = False

SECRET_KEY = os.getenv("SECRET_KEY")

ALLOWED_HOSTS = (
    "BlackCubes.pythonanywhere",
    "www.BlackCubes.pythonanywhere",
)

CORS_ALLOWED_ORIGINS = [
    "https://eliastgutierrez.com",
]

CORS_ALLOW_METHODS = [
    "GET",
]

# HTTPS SETTINGS
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True

# HSTS SETTINGS
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_PRELOAD = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True

try:
    from .local import *
except ImportError:
    pass
