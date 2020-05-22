const cmd = require('node-cmd');
const httpMocks = require("node-mocks-http")
const k8 = require("../../server/controllers/curlController");
const { api }  = require("../mock-data/api-token-mock-data")
const  { token } = require("../mock-data/api-token-mock-data")
const originalObj = require("../mock-data/getNodeInfo-mock-data/originalObject.json")
const nodeInfo = require("../mock-data/getNodeInfo-mock-data/nodeInfo.json")

// mock function
cmd.get = jest.fn(); 


let req, res, next;

const commandString = `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});

// getNodeInfo tests
describe("k8.getNodeInfo", () => {
    it("should have a getNodeInfo function", () => {
        expect(typeof k8.getNodeInfo).toBe("function");
    });
    it("should call cmd.get() with api and token in string", () => { 
        req.body = { api , token }
        k8.getNodeInfo(req, res, next);
        expect(cmd.get).toBeCalled();
        expect(cmd.get).toBeCalledWith(commandString, expect.any(Function))
        
    });
    xit("res.locals.nodeInfo should contain mock data after being parsed through", () => {
        k8.getNodeInfo(req, res, next);
        cmd.get.mockReturnValue(nodeInfo);
        expect(res.locals).toBe(nodeInfo)
    });
});