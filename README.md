<p align="center">
  <img src="https://user-images.githubusercontent.com/29642735/167956760-ccf50a0c-0d4a-4b2b-a7ec-9c4669a86238.png" width="108" height="108" alt="Website logo" />
</p>
<h1 align="center">Personal Portfolio</h1>
<h3 align="center">
  Full-Stack Software Engineer.<br>Creating beautiful user-centered interactivity and experiences.
</h3>
<p align="center">
    <br>
    <a href="https://www.djangoproject.com/">
        <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
    </a>
    <a href="https://nextjs.org/">
        <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next" />
    </a>
    <a href="https://redux-toolkit.js.org/">
        <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
    </a>
    <a href="https://www.django-rest-framework.org/">
        <img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray" alt="Django REST Framework" />
    </a>
    <br>
    <br>
    <a href="https://wagtail.org/">
      <img src="https://user-images.githubusercontent.com/29642735/167973915-3eac4332-48c6-4ec1-b2a2-414ff9512500.png" alt="Wagtail CMS" />
    </a>
</p>

<br>

A portfolio website to showcase my skillsets, projects, and written articles. The original version (viewed under `gh-pages` branch) was part of a final project for _Mobile Friendly Class_ at [Bitwise Industries](https://bitwiseindustries.com/), and the newer version was for my React Apprenticeship. _To view `v2` of the code that uses purely React.js without Next.js, go to the branch `non-nextjs`_.

![Portfolio screenshot](https://user-images.githubusercontent.com/29642735/167959468-9355a8bd-cf96-4a82-b513-16c0df8c90ae.png)

## 🔥 Demo

You can see a demo of the portfolio on the [production site](https://www.eliastgutierrez.com/).

## 📌 Project Requirements

- Node v16.3.0
- NPM v7.15.1
- Python v3.10.1

## 📖 Project Setup

First things first: Clone the repo. Once that is done, there are two subdirectories: An `/api` folder for the backend using Django and Wagtail CMS, and a `/web` folder for the frontend using Next.js. The following procedures are for development purposes only.

- ### Backend

  - Navigate to the `/api` folder.
  - Create your virtual environment on this path on your terminal via `python -m venv yourvirtualenvironment` where "`yourvirtualenvironment`" is whatever name you want to give it.
    - You could also use the `python3` command instead of `python` if it suits you.
    - A folder should appear on this same directory with the name of your created virtual environment.
  - Activate your virtual environment on your terminal via `yourvirtualenvironment\Scripts\activate`.
    - The above command is on Windows. For the bash shell, type `source yourvirtualenvironment/bin/activate`.
  - On this same directory, there is a `requirements.txt` file. Install the packages inside this file to make the backend work via `pip install -r requirements.txt`.
  - Next, run `pip manage.py collectstatic` which would create folders:
    - This gathers all static files that Django looks for in the apps and collects them in a folder called '/static'.
    - You should see these folders on the same directory you are in and in the app directories.
  - Next, migrate the database with the following command -> `python manage.py migrate`.
  - Create a `superuser` in the database via `python manage.py createsuperuser`.
    - It would ask you to provide a `username`, `email`, and `password`.
  - Run the server by the command `python manage.py runserver`, and go to `http://localhost:8000` or `http://127.0.0.1:8000` on your browser.
    - You should see a friendly Wagtail welcome page.
  - Check if you could login to Wagtail by typing in your browser `http://localhost:8000/admin`, and type your `username` and `password`.

- ### Frontend
  - Navigate to the `/web` folder.
  - On this same directory, there is a `package.json` file. Install the dependencies inside this file to make the frontend work via `npm install` or `npm i`.
  - Run the development server -> `npm run dev`.
    - A tab should open automatically on your browser with the landing page.

If you want to see data being displayed to the work and articles for the frontend, create some by going to the Wagtail admin panel.

## 🥼 Development Process

### Databases

During development, the default SQLite database provided by Django would be used and you could see its settings by going to `/api/core/settings/dev.py`. In production, PostgreSQL is used which the database settings for it can be viewed in `/api/core/settings/production.py` (although there are environment variables that nobody knows except for the owner 🤓).

### Secret Key (Backend)

The `SECRET_KEY` in `/api/core/settings/dev.py` is being hardcoded which is OK for development purposes ONLY. During production, this should be hidden with a secret environment variable. WARNING: NEVER COMMIT AN ACTUAL SECRET KEY THAT WILL BE DEPLOYED IN PRODUCTION!!!.

### Versioning

When starting work on a new release version, increment `minor` version (`v3.0.0` -> `v3.1.0`), `major` version (`v3.0.0` -> `v4.0.0`), or `patch` (`v3.0.0` -> `v3.0.1`).

### Updating Code Owners

In the repository there should be a `.github/` folder with a `CODEOWNERS` file inside. This file represents who the owners of the repository code are. When you clone this repo, or use it as a template for a new project, you need to update this file to represent the new owners (you and whomever may be on your project). Simply remove the current owners in the file, and replace them with you and your teamates! The syntax is simply:

```
@<github username>
```

Be sure to add the github usernames of all developers on your project. Now, anytime a pull request is created, all codeowners are added as reviews automatically! It also becomes a reference point when the project is picked back up in the future. We can easily see who has the best context for the code even years down the line. For more information you can click this link:

[Github Codeowners](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-code-owners)

### Updating Issue Templates

Currently the issue templates may have some things you don't want or need in your new project. This can be anything from the tags being set, to the person assigned for each issue. Be sure to go to the settings for the repository, and click `Set up templates` to configure them in a way that suits your needs. For more information you can click this link:

[Setting up issue templates](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/configuring-issue-templates-for-your-repository)

### Black, Mypy, and Pylint

This project uses Black to format Python code automatically according to [PEP8](https://peps.python.org/pep-0008/). Mypy is a static type checker for Python that checks the type annotations added to the code. Pylint is a Python linter that can detect programming errors and give suggestions for refactoring according to [PEP8](https://peps.python.org/pep-0008/).

Black, Mypy, and Pylint can be configured in `settings.json` in the `.vscode/` directory at the root of this repo.

### Prettier

This project uses Prettier to enforce code style. It is highly opinionated by design with relatively scant options for customization. The thought process behind it is to ignore personal styling preferences and instead embrace consistency. There is a `.prettierrc` configuration file in the `/web` directory to adjust some options.

Prettier can be configured within editors so that it formats files on save.

## 👏 Thanks

We thank the following Reactoads for their advices during development:

[**Connie Lai**](https://github.com/connielion), [**Daniel Sanchez**](https://github.com/dannysanchez559), [**Garrett Johnson**](https://github.com/Gjhnsn), [**Jay Dampitan**](https://github.com/JayDampitan), [**Jorge Villalobos**](https://github.com/JorgeLVilla), [**Kendrick Mausolf**](https://github.com/kmausolf), [**Kenneth Ferrell**](https://github.com/krferrell), [**Luis Perez**](https://github.com/Lap343), and [**Paul Gonzales**](https://github.com/gonzalespaulb).
