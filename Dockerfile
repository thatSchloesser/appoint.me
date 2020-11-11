FROM node:12.0
RUN mkdir /Appoint_me
ADD . /Appoint_me
WORKDIR /Appoint_me
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]