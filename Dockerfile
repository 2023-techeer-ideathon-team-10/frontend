FROM node:latest
USER root

WORKDIR /frontend

COPY . /frontend

RUN yarn --ignore-platform
COPY . .

# RUN yarn run build
RUN yarn
# RUN yarn run build
CMD ["yarn", "dev"]