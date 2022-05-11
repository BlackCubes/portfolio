#!/usr/bin/env python
import os
import sys

from dotenv import load_dotenv

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)


if __name__ == "__main__":
    load_dotenv()

    DJANGO_SETTINGS_MODULE = "core.settings.dev"

    if os.getenv("IN_PRODUCTION") == "yes":
        DJANGO_SETTINGS_MODULE = "core.settings.production"

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", DJANGO_SETTINGS_MODULE)

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
