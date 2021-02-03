const R = require('ramda');
const DbEntryRepo = require('./repos/dbEntry-repo');

const addAPI = async (req, res, next) => {
  const { api, token } = req.body;
  await DbEntryRepo.addAPI(api, token);

  return next();
};

const getAPI = async (req, res, next) => {
  try {
    const { api, token } = await DbEntryRepo.getAPI();
    res.locals.api = api;
    res.locals.token = token;
    return api && token ? next() : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};
const addNode = async (req, res, next) => {
  const { k8Data } = res.locals;

  R.map(async function insertNodeData(item) {
    const addNodeResponse = await DbEntryRepo.addNode(item);
    const addPodResponse = await DbEntryRepo.curriedAddPod(
      addNodeResponse,
      item
    );
    await DbEntryRepo.curriedAddContainer(
      addNodeResponse,
      addPodResponse,
      item
    );
  })(k8Data);

  return next();
};

module.exports = {
  addAPI,
  getAPI,
  addNode,
};
