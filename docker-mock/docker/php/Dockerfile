FROM php:7.3-fpm 
RUN apt update && apt upgrade -y 
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    libxml2 libxml2-utils \
    libxml2-dev \
    bzip2  libbz2-dev \
    libcurl4 \
    libcurl4-openssl-dev \
    # libtidy \
    libtidy-dev \
    libzip4 \
    libzip-dev \
    libxslt1-dev

RUN  CFLAGS="-I/usr/src/php" docker-php-ext-install \
        gd mysqli  bz2 opcache \
        pdo pdo_mysql shmop intl exif \
        curl \
        simplexml soap sockets tidy tokenizer bcmath \
        xml xmlreader  xmlrpc xsl zip

RUN apt-get update && apt-get install -y vim curl wget git && apt-get clean

