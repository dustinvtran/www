The github directory overall is hosted on `/var/www/dustintran.com` on the VPS.
This directory `src/` contains any system configured files that don't already
exist in `dustintran.com`, in order for git to apply revision control for all
configuration files. I apply symlinks to the following locations:

* `dustintran.com`: `/etc/nginx/sites-enabled/dustintran.com`
* `php.ini`: `/etc/php5/fpm/php.ini`
* `www.conf`: `/etc/php5/fpm/pool.d/www.conf`

Guides I followed:
+ [How To Install Linux, nginx, MySQL, PHP (LEMP) stack on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-on-ubuntu-14-04)
