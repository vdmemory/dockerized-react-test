FROM node:alpine as build-stage
WORKDIR /app
COPY ./test-work-react/package.json ./test-work-react/yarn.lock /app/
RUN yarn install
COPY ./test-work-react/ /app/
#RUN CI=true yarn test
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
