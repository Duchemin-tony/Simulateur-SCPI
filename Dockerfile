# Utilisez une image de base pour PHP avec les extensions requises
FROM php:8.2-fpm

# Installe les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    sqlite3 \
    libsqlite3-dev \
    git \
    unzip

# Installe les extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_sqlite mbstring exif pcntl bcmath gd

# Installe Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Installe Node.js et npm
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Copie et installe les dépendances du projet
WORKDIR /var/www/html
COPY . .

# Crée le fichier SQLite pour la base de données
RUN mkdir -p /var/www/html/database && touch /var/www/html/database/database.sqlite

# Copier le fichier .env.example en .env si le fichier .env n'existe pas
RUN cp .env.example .env || true

# Installe les dépendances Composer et Node.js
RUN composer install
RUN npm install && npm run build

# Permissions pour le dossier de l'application
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expose le port pour l'application
EXPOSE 9000

# Commande par défaut
CMD ["php", "-S", "0.0.0.0:9000", "-t", "public"]
