"""
Django settings for core project.

Generated by 'django-admin startproject' using Django 4.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/


# Application definition

INSTALLED_APPS = [
    "article",
    "home",
    "search",
    "work",
    "wagtail.contrib.forms",
    "wagtail.contrib.redirects",
    "wagtail.embeds",
    "wagtail.sites",
    "wagtail.users",
    "wagtail.snippets",
    "wagtail.documents",
    "wagtail.images",
    "wagtail.search",
    "wagtail.admin",
    "wagtail.core",
    "wagtail.api.v2",
    "corsheaders",
    "modelcluster",
    "rest_framework",
    "taggit",
    "wagtailcodeblock",
    "wagtailmath",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "wagtail.contrib.redirects.middleware.RedirectMiddleware",
]

ROOT_URLCONF = "core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            os.path.join(PROJECT_DIR, "templates"),
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "core.wsgi.application"


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]

STATICFILES_DIRS = [
    os.path.join(PROJECT_DIR, "static"),
]

# ManifestStaticFilesStorage is recommended in production, to prevent outdated
# JavaScript / CSS assets being served from cache (e.g. after a Wagtail upgrade).
# See https://docs.djangoproject.com/en/4.0/ref/contrib/staticfiles/#manifeststaticfilesstorage
STATICFILES_STORAGE = (
    "django.contrib.staticfiles.storage.ManifestStaticFilesStorage"
)

STATIC_ROOT = os.path.join(BASE_DIR, "static")
STATIC_URL = "/static/"

MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"


# Wagtail settings

WAGTAIL_SITE_NAME = "core"

# Search
# https://docs.wagtail.org/en/stable/topics/search/backends.html
WAGTAILSEARCH_BACKENDS = {
    "default": {
        "BACKEND": "wagtail.search.backends.database",
    }
}

WAGTAIL_CODE_BLOCK_LANGUAGES = (
    ("abap", "ABAP"),
    ("abnf", "Augmented Backus–Naur form"),
    ("actionscript", "ActionScript"),
    ("ada", "Ada"),
    ("antlr4", "ANTLR4"),
    ("apacheconf", "Apache Configuration"),
    ("apl", "APL"),
    ("applescript", "AppleScript"),
    ("aql", "AQL"),
    ("arduino", "Arduino"),
    ("arff", "ARFF"),
    ("asciidoc", "AsciiDoc"),
    ("asm6502", "6502 Assembly"),
    ("aspnet", "ASP.NET (C#)"),
    ("autohotkey", "AutoHotkey"),
    ("autoit", "AutoIt"),
    ("bash", "Bash + Shell"),
    ("basic", "BASIC"),
    ("batch", "Batch"),
    ("bison", "Bison"),
    ("bnf", "Backus–Naur form + Routing Backus–Naur form"),
    ("brainfuck", "Brainfuck"),
    ("bro", "Bro"),
    ("c", "C"),
    ("clike", "C-like"),
    ("cmake", "CMake"),
    ("csharp", "C#"),
    ("cpp", "C++"),
    ("cil", "CIL"),
    ("coffeescript", "CoffeeScript"),
    ("clojure", "Clojure"),
    ("crystal", "Crystal"),
    ("csp", "Content-Security-Policy"),
    ("css", "CSS"),
    ("css-extras", "CSS Extras"),
    ("d", "D"),
    ("dart", "Dart"),
    ("diff", "Diff"),
    ("django", "Django/Jinja2"),
    ("dns-zone-file", "DNS Zone File"),
    ("docker", "Docker"),
    ("ebnf", "Extended Backus–Naur form"),
    ("eiffel", "Eiffel"),
    ("ejs", "EJS"),
    ("elixir", "Elixir"),
    ("elm", "Elm"),
    ("erb", "ERB"),
    ("erlang", "Erlang"),
    ("etlua", "Embedded LUA Templating"),
    ("fsharp", "F#"),
    ("flow", "Flow"),
    ("fortran", "Fortran"),
    ("ftl", "Freemarker Template Language"),
    ("gcode", "G-code"),
    ("gdscript", "GDScript"),
    ("gedcom", "GEDCOM"),
    ("gherkin", "Gherkin"),
    ("git", "Git"),
    ("glsl", "GLSL"),
    ("gml", "GameMaker Language"),
    ("go", "Go"),
    ("graphql", "GraphQL"),
    ("groovy", "Groovy"),
    ("haml", "Haml"),
    ("handlebars", "Handlebars"),
    ("haskell", "Haskell"),
    ("haxe", "Haxe"),
    ("hcl", "HCL"),
    ("http", "HTTP"),
    ("hpkp", "HTTP Public-Key-Pins"),
    ("hsts", "HTTP Strict-Transport-Security"),
    ("ichigojam", "IchigoJam"),
    ("icon", "Icon"),
    ("inform7", "Inform 7"),
    ("ini", "Ini"),
    ("io", "Io"),
    ("j", "J"),
    ("java", "Java"),
    ("javadoc", "JavaDoc"),
    ("javadoclike", "JavaDoc-like"),
    ("javascript", "JavaScript"),
    ("javastacktrace", "Java stack trace"),
    ("jolie", "Jolie"),
    ("jq", "JQ"),
    ("jsdoc", "JSDoc"),
    ("js-extras", "JS Extras"),
    ("js-templates", "JS Templates"),
    ("json", "JSON"),
    ("jsonp", "JSONP"),
    ("json5", "JSON5"),
    ("julia", "Julia"),
    ("keyman", "Keyman"),
    ("kotlin", "Kotlin"),
    ("latex", "LaTeX"),
    ("less", "Less"),
    ("lilypond", "Lilypond"),
    ("liquid", "Liquid"),
    ("lisp", "Lisp"),
    ("livescript", "LiveScript"),
    ("lolcode", "LOLCODE"),
    ("lua", "Lua"),
    ("makefile", "Makefile"),
    ("markdown", "Markdown"),
    ("markup", "Markup + HTML + XML + SVG + MathML"),
    ("markup-templating", "Markup templating"),
    ("matlab", "MATLAB"),
    ("mel", "MEL"),
    ("mizar", "Mizar"),
    ("monkey", "Monkey"),
    ("n1ql", "N1QL"),
    ("n4js", "N4JS"),
    ("nand2tetris-hdl", "Nand To Tetris HDL"),
    ("nasm", "NASM"),
    ("nginx", "nginx"),
    ("nim", "Nim"),
    ("nix", "Nix"),
    ("nsis", "NSIS"),
    ("objectivec", "Objective-C"),
    ("ocaml", "OCaml"),
    ("opencl", "OpenCL"),
    ("oz", "Oz"),
    ("parigp", "PARI/GP"),
    ("parser", "Parser"),
    ("pascal", "Pascal + Object Pascal"),
    ("pascaligo", "Pascaligo"),
    ("pcaxis", "PC Axis"),
    ("perl", "Perl"),
    ("php", "PHP"),
    ("phpdoc", "PHPDoc"),
    ("php-extras", "PHP Extras"),
    ("plsql", "PL/SQL"),
    ("powershell", "PowerShell"),
    ("processing", "Processing"),
    ("prolog", "Prolog"),
    ("properties", ".properties"),
    ("protobuf", "Protocol Buffers"),
    ("pug", "Pug"),
    ("puppet", "Puppet"),
    ("pure", "Pure"),
    ("python", "Python"),
    ("q", "Q (kdb+ database)"),
    ("qore", "Qore"),
    ("r", "R"),
    ("jsx", "React JSX"),
    ("tsx", "React TSX"),
    ("renpy", "Ren'py"),
    ("reason", "Reason"),
    ("regex", "Regex"),
    ("rest", "reST (reStructuredText)"),
    ("rip", "Rip"),
    ("roboconf", "Roboconf"),
    ("robot-framework", "Robot Framework"),
    ("ruby", "Ruby"),
    ("rust", "Rust"),
    ("sas", "SAS"),
    ("sass", "Sass (Sass)"),
    ("scss", "Sass (Scss)"),
    ("scala", "Scala"),
    ("scheme", "Scheme"),
    ("shell-session", "Shell Session"),
    ("smalltalk", "Smalltalk"),
    ("smarty", "Smarty"),
    ("solidity", "Solidity (Ethereum)"),
    ("sparql", "SPARQL"),
    ("splunk-spl", "Splunk SPL"),
    ("sqf", "SQF: Status Quo Function (Arma 3)"),
    ("sql", "SQL"),
    ("soy", "Soy (Closure Template)"),
    ("stylus", "Stylus"),
    ("swift", "Swift"),
    ("tap", "TAP"),
    ("tcl", "Tcl"),
    ("textile", "Textile"),
    ("toml", "TOML"),
    ("tt2", "Template Toolkit 2"),
    ("twig", "Twig"),
    ("typescript", "TypeScript"),
    ("t4-cs", "T4 Text Templates (C#)"),
    ("t4-vb", "T4 Text Templates (VB)"),
    ("t4-templating", "T4 templating"),
    ("vala", "Vala"),
    ("vbnet", "VB.Net"),
    ("velocity", "Velocity"),
    ("verilog", "Verilog"),
    ("vhdl", "VHDL"),
    ("vim", "vim"),
    ("visual-basic", "Visual Basic"),
    ("wasm", "WebAssembly"),
    ("wiki", "Wiki markup"),
    ("xeora", "Xeora + XeoraCube"),
    ("xojo", "Xojo (REALbasic)"),
    ("xquery", "XQuery"),
    ("yaml", "YAML"),
    ("zig", "Zig"),
)

# The maximum number of results a user can request at a time
WAGTAILAPI_LIMIT_MAX = 10

# Base URL to use when referring to full URLs within the Wagtail admin backend -
# e.g. in notification emails. Don't include '/admin' or a trailing slash
BASE_URL = "http://example.com"
