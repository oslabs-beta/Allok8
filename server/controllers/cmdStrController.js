// should namespace ever need to change
const namespace = 'default';
// curl Commands
const commandStrings = (req, res, next) => {
  let { api, token } = req.body;
  if (!api & !token) {
    api = res.locals.api;
    token = res.locals.token;
  }

  const getNodesInfoStr = `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`;

  const getPodsInfoStr = `curl https://${api}/api/v1/namespaces/${namespace}/pods?limit=500 --header "Authorization: Bearer ${token}" --insecure`;

  const getNodesUsageStr = `curl https://${api}/apis/metrics.k8s.io/v1beta1/nodes --header "Authorization: Bearer ${token}" --insecure`;

  const getPodsUsageStr = `curl https://${api}/apis/metrics.k8s.io/v1beta1/namespaces/${namespace}/pods --header "Authorization: Bearer ${token}" --insecure`;

  res.locals = {
    ...res.locals,
    namespace,
    getNodesInfoStr,
    getPodsInfoStr,
    getNodesUsageStr,
    getPodsUsageStr,
  };
  return next();
};

module.exports = {
  commandStrings,
  namespace,
};
