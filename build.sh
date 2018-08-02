#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/colmar-nginx/build && \
cp -r services/react/build/client services/colmar-nginx/build && \
docker build -t trzl/portfolio:colmar-react.1 -f ./services/colmar-nginx/build.Dockerfile ./services/colmar-nginx && \
# docker push trzl/portfolio:colmar-react.1 && \
docker build -t trzl/portfolio:colmar-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
# docker push trzl/portfolio:colmar-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/colmar-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"