export class BaseLogger {
  //babamın evi benim evim benim evim çocuğumun evi
  log(data) {
    console.log("Default logger : " + data);
  }
}

export class ElasticLogger extends BaseLogger {
  log(data) {
    console.log("Logged to Elastic" + data);
  }
}

export class MongoLogger extends BaseLogger {
  log(data) {
    console.log("Logged to Mongo" + data);
  }
}
