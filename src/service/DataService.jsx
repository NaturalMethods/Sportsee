import * as MockService from "./MockService";
import * as ApiService from "./APIService";


/**
 * Dynamic import to switch between MOCK Data and API Data
 * @type {boolean}
 */
const USE_MOCK = false;

const service = USE_MOCK
    ? MockService
    : ApiService;

export default service;