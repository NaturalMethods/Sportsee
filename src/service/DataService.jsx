import * as MockService from "./MockService";
import * as ApiService from "./APIService";

const USE_MOCK = false;

const service = USE_MOCK
    ? MockService
    : ApiService;

export default service;