// k8 must be running to test (ie. minikube start)
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const { getStream } = require('../curlUtils');

const api = process.env.API;
const token = process.env.TOKEN;
const namespace = 'default';

const getNodesInfoStr = `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`;

const getPodsInfoStr = `curl https://${api}/api/v1/namespaces/${namespace}/pods?limit=500 --header "Authorization: Bearer ${token}" --insecure`;

const getNodesUsageStr = `curl https://${api}/apis/metrics.k8s.io/v1beta1/nodes --header "Authorization: Bearer ${token}" --insecure`;

const getPodsUsageStr = `curl https://${api}/apis/metrics.k8s.io/v1beta1/namespaces/${namespace}/pods --header "Authorization: Bearer ${token}" --insecure`;

describe('curlController unit tests', () => {
  it('gets nodesInfo from k8 metric server', async () => {
    jest.setTimeout(30000);
    const response = await getStream(getNodesInfoStr, exec);
    expect(response).toHaveProperty(['items', 0, 'metadata', 'name']);
  });

  it('gets podsInfo from k8 metric server', async () => {
    // gives time for response from metric server
    jest.setTimeout(30000);
    const response = await getStream(getPodsInfoStr, exec);

    expect(response).toHaveProperty(['items', 0, 'metadata', 'name']);
  });

  it('gets nodesUsage from k8 metric server', async () => {
    // gives time for response from metric server
    jest.setTimeout(30000);
    const response = await getStream(getNodesUsageStr, exec);

    expect(response).toHaveProperty(['items', 0, 'metadata', 'name']);
  });

  it('gets podsUsage from k8 metric server', async () => {
    // gives time for response from metric server
    jest.setTimeout(30000);
    const response = await getStream(getPodsUsageStr, exec);

    expect(response).toHaveProperty(['items', 0, 'metadata', 'name']);
  });
});
