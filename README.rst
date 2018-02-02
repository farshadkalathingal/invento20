Invento18
=========

 Website of Invento 18, annual national multifest of GEC Palakkad

.. image:: https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg
     :target: https://github.com/pydanny/cookiecutter-django/
     :alt: Built with Cookiecutter Django


:License: MIT


Settings
--------

Moved to settings_.

.. _settings: http://cookiecutter-django.readthedocs.io/en/latest/settings.html

Basic Commands
--------------
Installation
^^^^^^^^^^^^^^^^^^^^^
* Use virtualenv to create a new virtual environment.
* Activate the virtual environment.
* Install all dependencies using the command
    `pip install -r requirements/local.txt`
* Install Postgres 9.5 using
   https://tutorial-extensions.djangogirls.org/en/optional_postgresql_installation/
* Create a postgres database using the command
    `$ createdb inventodb`
* Create .env file in the project root. An example can be found at
    https://gist.github.com/biswaz/53674d5afc210b229972ca13946e40b3
* Type this in terminal
    `export DJANGO_READ_DOT_ENV_FILE=True`
* Change the DATABASE_URL in the following format

```$ DATABASE_URL="postgres://<pg_user_name>:<pg_user_password>@127.0.0.1:<pg_port>/<pg_database_name>"```

* Perform migrations and start the server.

  ```$ python manage.py migrate```

  ```$ python manage.py runserver```

* For Google login to work, Create a new social application at http://127.0.0.1:8000/admin/socialaccount/socialapp/
  Add the client id and secret key obtained from registering at google.
  Learn how to do that from the link below:
  http://django-allauth.readthedocs.io/en/latest/providers.html#google


Deploying to heroku
^^^^^^^^^^^^^^^^^^^^^
* Set environment variables:
    * DJANGO_SECRET_KEY


Setting Up Your Users
^^^^^^^^^^^^^^^^^^^^^

* To create a **normal user account**, just go to Sign Up and fill out the form. Once you submit it, you'll see a "Verify Your E-mail Address" page. Go to your console to see a simulated email verification message. Copy the link into your browser. Now the user's email should be verified and ready to go.

* To create an **superuser account**, use this command::

    $ python manage.py createsuperuser

For convenience, you can keep your normal user logged in on Chrome and your superuser logged in on Firefox (or similar), so that you can see how the site behaves for both kinds of users.




Email Server
^^^^^^^^^^^^

In development, it is often nice to be able to see emails that are being sent from your application.
Download `MailHog`_ binary

Run the downloaded file using:

  $ ./MailHog_something

Assuming the downloaded file is named MailHog_something

This will start an email server that listens on ``127.0.0.1:1025`` in addition to starting your Django project and a watch task for live reload.

To view messages that are sent by your application, open your browser and go to ``http://127.0.0.1:8025``

The email server will exit when you exit on the CLI with Ctrl+C.

.. _mailhog: https://github.com/mailhog/MailHog/releases



Sentry
^^^^^^

Sentry is an error logging aggregator service. You can sign up for a free account at  https://sentry.io/signup/?code=cookiecutter  or download and host it yourself.
The system is setup with reasonable defaults, including 404 logging and integration with the WSGI application.

You must set the DSN url in production.


Deployment
----------


TODO: Turn off DJANGO_DEBUG
