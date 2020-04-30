const dbGetController = require("../../server/controllers/dbGet");
const dbModel = require("../../server/models/dbmodel");
const httpMocks = require("node-mocks-http");

dbModel.query = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});
