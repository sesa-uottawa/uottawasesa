Software Engineering Student Association (SESA) | L'Association des Étudiants en Génie Logiciel (AÉGL)
===
# Welcome
This is the repo for the SESA website.
Want to know more about SESA? Go check our [*home page*](http://sesa-uottawa.ca/)

# Install guide
This project works perfectly with ruby 2.3.3 and rails 5.0.1, you will need to use these specific versions.


## First step :  install rbenv (ruby version manager)

If you are on Windows 10, you can use [*Cygwin*](https://cygwin.com/) or [*Bash on Ubuntu on Windows*](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide) to install rbenv.

Then you just have to run the following commands (from this  [*tutorial*](https://gorails.com/setup/ubuntu/17.04) )

```
sudo apt-get update

sudo apt-get install git-core curl zlib1g-dev build-essential libssl1.0-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs

cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.3.3

rbenv global 2.3.3

ruby -v

gem install bundler

gem install rails -v 5.0.1

cd [path to this project]

bundler install
```

## Second step :  install postgresql
You will need to install postgresql and update the /config/database.yml to connect properly to the database.

## Final step : Launch the server
Just start the server with rails from the root of the project.
`rails server`
# Original by

* [Menelik Tucker](http://meneliktucker.me/)
* [Katarina Drobnjakovic](http://katarina.rocks/)

# Maintained by

* [Everyone](https://github.com/sesa-uottawa/uottawasesa/graphs/contributors)

See an error? Feel free to submit a pull request, open up an issue, or post on our [facebook page](https://www.facebook.com/groups/uOttawaSESA/).

Live,
Laugh,
Learn.
