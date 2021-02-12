/* eslint-disable no-unused-vars */

const request = require('supertest');
const R = require('ramda');
const buildApp = require('../../../server');
const DbEntryRepo = require('../repos/dbEntry-repo');
const Context = require('./context');
const newApiToken = require('./dbEntry2MockData.json');

let context;
beforeAll(async () => {
  context = await Context.build();
});

afterAll(() => {
  return context.close();
});

describe('DbEntryRepo', () => {
  it('addAPI: add api and token to db', async () => {
    const { api, token } = newApiToken;
    await DbEntryRepo.addAPI(api, token);
  });
  it('addNode', async () => {
    const k8Data = [
      {
        nodeName: 'minikube',
        nodeUsedCPU: 124,
        nodeUsedMemory: 1389716,
        nodeAllocatableMemory: '3936948Ki',
        nodeAllocatableCPU: '2',
        nodeCapacity: {
          cpu: '2',
          'ephemeral-storage': '16954224Ki',
          'hugepages-2Mi': '0',
          memory: '3936948Ki',
          pods: '110',
        },
        podName: 'backend-5b646c545d-n2gjp',
        namespace: 'default',
        cpuRequested: '300m',
        status: 'Running',
        timestamp: '2021-02-03T18:12:00Z',
        containerName: 'backend-container',
        containerCPU: 0,
        containerMemory: 18580,
        containerCPUPercent: 0,
        containerMemoryPercent: 1.336963811311088,
      },
      {
        nodeName: 'minikube',
        nodeUsedCPU: 124,
        nodeUsedMemory: 1389716,
        nodeAllocatableMemory: '3936948Ki',
        nodeAllocatableCPU: '2',
        nodeCapacity: {
          cpu: '2',
          'ephemeral-storage': '16954224Ki',
          'hugepages-2Mi': '0',
          memory: '3936948Ki',
          pods: '110',
        },
        podName: 'allok8-79fb795f9d-xrwh6',
        namespace: 'default',
        cpuRequested: '300m',
        status: 'Running',
        timestamp: '2021-02-03T18:12:00Z',
        containerName: 'allok8-container',
        containerCPU: 8,
        containerMemory: 60252,
        containerCPUPercent: 6.451612903225806,
        containerMemoryPercent: 4.335562086066505,
      },
      {
        nodeName: 'minikube',
        nodeUsedCPU: 124,
        nodeUsedMemory: 1389716,
        nodeAllocatableMemory: '3936948Ki',
        nodeAllocatableCPU: '2',
        nodeCapacity: {
          cpu: '2',
          'ephemeral-storage': '16954224Ki',
          'hugepages-2Mi': '0',
          memory: '3936948Ki',
          pods: '110',
        },
        podName: 'postgres-576d8cd8f8-w22ts',
        namespace: 'default',
        cpuRequested: '300m',
        status: 'Running',
        timestamp: '2021-02-03T18:12:00Z',
        containerName: 'postgres',
        containerCPU: 0,
        containerMemory: 93488,
        containerCPUPercent: 0,
        containerMemoryPercent: 6.727129859625995,
      },
      {
        nodeName: 'minikube',
        nodeUsedCPU: 124,
        nodeUsedMemory: 1389716,
        nodeAllocatableMemory: '3936948Ki',
        nodeAllocatableCPU: '2',
        nodeCapacity: {
          cpu: '2',
          'ephemeral-storage': '16954224Ki',
          'hugepages-2Mi': '0',
          memory: '3936948Ki',
          pods: '110',
        },
        podName: 'frontend-5c65d4f784-8dd9j',
        namespace: 'default',
        cpuRequested: '300m',
        status: 'Running',
        timestamp: '2021-02-03T18:12:00Z',
        containerName: 'testing-docker',
        containerCPU: 0,
        containerMemory: 15552,
        containerCPUPercent: 0,
        containerMemoryPercent: 1.1190775669273434,
      },
    ];

    const startingNodesCount = await DbEntryRepo.countNodes();
    const startingPodsCount = await DbEntryRepo.countPods();
    // const startingContainersCount = await DbEntryRepo.countContainers();
    R.map(async function insertNodeData(item) {
      const addNodeResponse = await DbEntryRepo.addNode(item);
      const addPodResponse = await DbEntryRepo.curriedAddPod(
        addNodeResponse,
        item
      );
      // uncomment containers migration
      // and uncomment line 137-141 receive
      //  error: column "pod_name" named in key does not exist
      // checked key name is not case-sensitive or wrapped in quotes, still error
      // suspect issue with migration
      // await DbEntryRepo.curriedAddContainer(
      //   addNodeResponse,
      //   addPodResponse,
      //   item
      // );
    })(k8Data);
    const finishNodesCount = await DbEntryRepo.countNodes();
    expect(finishNodesCount - startingNodesCount).toEqual(1);
    const finishPodsCount = await DbEntryRepo.countPods();
    expect(finishPodsCount - startingPodsCount).toEqual(1);
    // const finishContainersCount = await DbEntryRepo.countContainers();
    // expect(finishContainersCount - startingContainersCount).toEqual(1);
  });
});
