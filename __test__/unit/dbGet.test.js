const dbGet = require("../../server/controllers/dbGet");
const dbModel = require("../../server/models/dbmodel");
const httpMocks = require("node-mocks-http");

dbModel.query = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});

describe("dbGet.dbInformation", () => {
    it("should have a dbInformation function", () => {
        expect(typeof dbGet.dbInformation).toBe("function");
    });

});