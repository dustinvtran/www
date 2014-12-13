server {
    listen 80;
    listen [::]:80;
    server_name www.dustintran.com dustinvtran.com www.dustinvtran.com;
    return 301 $scheme://dustintran.com$request_uri;
}
