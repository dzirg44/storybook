ARG CONSUL_TEMPLATE_VERSION=0.25.1-scratch
ARG NGINX_VERSION=1.19.3-alpine
ARG NODE_VERSION=13.12.0-alpine

FROM hashicorp/consul-template:${CONSUL_TEMPLATE_VERSION} as consul-template
FROM node:${NODE_VERSION} as node-builder

WORKDIR /code
COPY . .
RUN npm config set puppeteer_skip_chromium_download true -g \
    && npm install \
    && yarn build-storybook -c .storybook

FROM nginx:${NGINX_VERSION}

WORKDIR /usr/share/nginx/html
COPY --from=consul-template /consul-template /usr/local/bin

RUN rm -rf /usr/share/nginx/html \
    && mkdir -p /etc/consul-template \
    && mkdir -p /etc/consul-template/template

COPY --from=node-builder /code/storybook-static /usr/share/nginx/html

CMD if [ -n "${VAULT_ADDR}" ]; \
    then echo "${VAULT_ADDR}" && consul-template -vault-addr="${VAULT_ADDR}" -config="/etc/consul-template/config.hcl"; \
    else \
    nginx -g 'daemon off;'; \
    fi