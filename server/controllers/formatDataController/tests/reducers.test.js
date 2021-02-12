const {
  nodeUsageReducer,
  nodeInfoReducer,
  podsInfoReducer,
  podsUsageReducer,
  specContainerReducer,
  containerReducer,
  cleanUpReducer2,
  percentReducer,
} = require('../reducers/reducers');

const nodesInfo = {
  kind: 'NodeList',
  apiVersion: 'v1',
  metadata: {
    selfLink: '/api/v1/nodes',
    resourceVersion: '208597',
  },
  items: [
    {
      metadata: {
        name: 'minikube',
        selfLink: '/api/v1/nodes/minikube',
        uid: 'bc69a77e-272d-4a67-a4b9-8f4620b14ed6',
        resourceVersion: '208367',
        creationTimestamp: '2020-04-27T17:39:49Z',
        labels: {
          'beta.kubernetes.io/arch': 'amd64',
          'beta.kubernetes.io/os': 'linux',
          'kubernetes.io/arch': 'amd64',
          'kubernetes.io/hostname': 'minikube',
          'kubernetes.io/os': 'linux',
          'minikube.k8s.io/commit': '93af9c1e43cab9618e301bc9fa720c63d5efa393',
          'minikube.k8s.io/name': 'minikube',
          'minikube.k8s.io/updated_at': '2020_04_27T13_39_52_0700',
          'minikube.k8s.io/version': 'v1.9.2',
          'node-role.kubernetes.io/master': '',
        },
        annotations: {
          'kubeadm.alpha.kubernetes.io/cri-socket': '/var/run/dockershim.sock',
          'node.alpha.kubernetes.io/ttl': '0',
          'volumes.kubernetes.io/controller-managed-attach-detach': 'true',
        },
        managedFields: [
          {
            manager: 'kubeadm',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-04-27T17:39:52Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:annotations': {
                  'f:kubeadm.alpha.kubernetes.io/cri-socket': {},
                },
                'f:labels': {
                  'f:node-role.kubernetes.io/master': {},
                },
              },
            },
          },
          {
            manager: 'kubectl',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-04-27T17:39:52Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:labels': {
                  'f:minikube.k8s.io/commit': {},
                  'f:minikube.k8s.io/name': {},
                  'f:minikube.k8s.io/updated_at': {},
                  'f:minikube.k8s.io/version': {},
                },
              },
            },
          },
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-04-27T17:39:59Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:annotations': {
                  'f:node.alpha.kubernetes.io/ttl': {},
                },
              },
            },
          },
          {
            manager: 'kubelet',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-04-29T17:13:44Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:annotations': {
                  '.': {},
                  'f:volumes.kubernetes.io/controller-managed-attach-detach': {},
                },
                'f:labels': {
                  '.': {},
                  'f:beta.kubernetes.io/arch': {},
                  'f:beta.kubernetes.io/os': {},
                  'f:kubernetes.io/arch': {},
                  'f:kubernetes.io/hostname': {},
                  'f:kubernetes.io/os': {},
                },
              },
              'f:status': {
                'f:addresses': {
                  '.': {},
                  'k:{"type":"Hostname"}': {
                    '.': {},
                    'f:address': {},
                    'f:type': {},
                  },
                  'k:{"type":"InternalIP"}': {
                    '.': {},
                    'f:address': {},
                    'f:type': {},
                  },
                },
                'f:allocatable': {
                  '.': {},
                  'f:cpu': {},
                  'f:ephemeral-storage': {},
                  'f:hugepages-2Mi': {},
                  'f:memory': {},
                  'f:pods': {},
                },
                'f:capacity': {
                  '.': {},
                  'f:cpu': {},
                  'f:ephemeral-storage': {},
                  'f:hugepages-2Mi': {},
                  'f:memory': {},
                  'f:pods': {},
                },
                'f:conditions': {
                  '.': {},
                  'k:{"type":"DiskPressure"}': {
                    '.': {},
                    'f:lastHeartbeatTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"MemoryPressure"}': {
                    '.': {},
                    'f:lastHeartbeatTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"PIDPressure"}': {
                    '.': {},
                    'f:lastHeartbeatTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Ready"}': {
                    '.': {},
                    'f:lastHeartbeatTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
                'f:daemonEndpoints': {
                  'f:kubeletEndpoint': {
                    'f:Port': {},
                  },
                },
                'f:images': {},
                'f:nodeInfo': {
                  'f:architecture': {},
                  'f:bootID': {},
                  'f:containerRuntimeVersion': {},
                  'f:kernelVersion': {},
                  'f:kubeProxyVersion': {},
                  'f:kubeletVersion': {},
                  'f:machineID': {},
                  'f:operatingSystem': {},
                  'f:osImage': {},
                  'f:systemUUID': {},
                },
              },
            },
          },
        ],
      },
      spec: {},
      status: {
        capacity: {
          cpu: '2',
          'ephemeral-storage': '16954224Ki',
          'hugepages-2Mi': '0',
          memory: '3936948Ki',
          pods: '110',
        },
        allocatable: {
          cpu: '2',
          'ephemeral-storage': '16954224Ki',
          'hugepages-2Mi': '0',
          memory: '3936948Ki',
          pods: '110',
        },
        conditions: [
          {
            type: 'MemoryPressure',
            status: 'False',
            lastHeartbeatTime: '2020-04-29T17:13:44Z',
            lastTransitionTime: '2020-04-27T17:39:45Z',
            reason: 'KubeletHasSufficientMemory',
            message: 'kubelet has sufficient memory available',
          },
          {
            type: 'DiskPressure',
            status: 'False',
            lastHeartbeatTime: '2020-04-29T17:13:44Z',
            lastTransitionTime: '2020-04-27T17:39:45Z',
            reason: 'KubeletHasNoDiskPressure',
            message: 'kubelet has no disk pressure',
          },
          {
            type: 'PIDPressure',
            status: 'False',
            lastHeartbeatTime: '2020-04-29T17:13:44Z',
            lastTransitionTime: '2020-04-27T17:39:45Z',
            reason: 'KubeletHasSufficientPID',
            message: 'kubelet has sufficient PID available',
          },
          {
            type: 'Ready',
            status: 'True',
            lastHeartbeatTime: '2020-04-29T17:13:44Z',
            lastTransitionTime: '2020-04-27T17:39:53Z',
            reason: 'KubeletReady',
            message: 'kubelet is posting ready status',
          },
        ],
        addresses: [
          {
            type: 'InternalIP',
            address: '192.168.64.6',
          },
          {
            type: 'Hostname',
            address: 'minikube',
          },
        ],
        daemonEndpoints: {
          kubeletEndpoint: {
            Port: 10250,
          },
        },
        nodeInfo: {
          machineID: 'a2938b62bfca4e209ea9780b08ade21b',
          systemUUID: '03da11ea-0000-0000-ad0a-acde48001122',
          bootID: 'dfd46ff7-c0ea-447a-9679-0c72e6701bd0',
          kernelVersion: '4.19.107',
          osImage: 'Buildroot 2019.02.10',
          containerRuntimeVersion: 'docker://19.3.8',
          kubeletVersion: 'v1.18.0',
          kubeProxyVersion: 'v1.18.0',
          operatingSystem: 'linux',
          architecture: 'amd64',
        },
        images: [
          {
            names: [
              'rbargues32/frontend@sha256:b0ec84d5f920a7427fafc7f47124c9794370fdb6b8dcec49f52ca99502b10299',
              'rbargues32/frontend:test',
            ],
            sizeBytes: 914739867,
          },
          {
            names: [
              'rbargues32/backend@sha256:4af8afface41afe1a7a46a58ff02145b77e37dea0d9b49813b8784653dcb6469',
              'rbargues32/backend:test',
            ],
            sizeBytes: 914491453,
          },
          {
            names: [
              'postgres@sha256:d96835c9032988c8a899cb8a3c54467dae81daaa99485de70e8c9bddd5432d92',
              'postgres:12.2',
            ],
            sizeBytes: 313745184,
          },
          {
            names: [
              'rbargues32/allok8@sha256:cd4dd3b342f8e92b3bf632ade2a7630d1c679246cefcf1758891a662a0f76454',
              'rbargues32/allok8:latest',
            ],
            sizeBytes: 307959834,
          },
          {
            names: [
              'k8s.gcr.io/etcd@sha256:4afb99b4690b418ffc2ceb67e1a17376457e441c1f09ab55447f0aaf992fa646',
              'k8s.gcr.io/etcd:3.4.3-0',
            ],
            sizeBytes: 288426917,
          },
          {
            names: [
              'kubernetesui/dashboard@sha256:06868692fb9a7f2ede1a06de1b7b32afabc40ec739c1181d83b5ed3eb147ec6e',
              'kubernetesui/dashboard:v2.0.0',
            ],
            sizeBytes: 221895031,
          },
          {
            names: [
              'kubernetesui/dashboard@sha256:61f9c378c427a3f8a9643f83baa9f96db1ae1357c67a93b533ae7b36d71c69dc',
              'kubernetesui/dashboard:v2.0.0-rc6',
            ],
            sizeBytes: 220762712,
          },
          {
            names: [
              'k8s.gcr.io/kube-apiserver@sha256:fc4efb55c2a7d4e7b9a858c67e24f00e739df4ef5082500c2b60ea0903f18248',
              'k8s.gcr.io/kube-apiserver:v1.18.0',
            ],
            sizeBytes: 172964371,
          },
          {
            names: [
              'k8s.gcr.io/kube-controller-manager@sha256:d926b172b8fc3568d8eab9736b2f79a1afefcb809d030dd4465cbb0d444ce293',
              'k8s.gcr.io/kube-controller-manager:v1.18.0',
            ],
            sizeBytes: 162368019,
          },
          {
            names: [
              'k8s.gcr.io/kube-proxy@sha256:9e858386d52d0abaf936c1d10a763648ab7d85c8eb0af08a50a64238146e5571',
              'k8s.gcr.io/kube-proxy:v1.18.0',
            ],
            sizeBytes: 116534263,
          },
          {
            names: [
              'k8s.gcr.io/kube-scheduler@sha256:33063bc856e99d12b9cb30aab1c1c755ecd458d5bd130270da7c51c70ca10cf6',
              'k8s.gcr.io/kube-scheduler:v1.18.0',
            ],
            sizeBytes: 95275539,
          },
          {
            names: [
              'gcr.io/k8s-minikube/storage-provisioner@sha256:088daa9fcbccf04c3f415d77d5a6360d2803922190b675cb7fc88a9d2d91985a',
              'gcr.io/k8s-minikube/storage-provisioner:v1.8.1',
            ],
            sizeBytes: 80815640,
          },
          {
            names: [
              'kindest/kindnetd@sha256:bc1833b3da442bb639008dd5a62861a0419d3f64b58fce6fb38b749105232555',
              'kindest/kindnetd:0.5.3',
            ],
            sizeBytes: 78486107,
          },
          {
            names: [
              'k8s.gcr.io/coredns@sha256:2c8d61c46f484d881db43b34d13ca47a269336e576c81cf007ca740fa9ec0800',
              'k8s.gcr.io/coredns:1.6.7',
            ],
            sizeBytes: 43794147,
          },
          {
            names: [
              'k8s.gcr.io/metrics-server-amd64@sha256:49a9f12f7067d11f42c803dbe61ed2c1299959ad85cb315b25ff7eef8e6b8892',
              'k8s.gcr.io/metrics-server-amd64:v0.2.1',
            ],
            sizeBytes: 42541759,
          },
          {
            names: [
              'kubernetesui/metrics-scraper@sha256:2026f9f7558d0f25cc6bab74ea201b4e9d5668fbc378ef64e13fddaea570efc0',
              'kubernetesui/metrics-scraper:v1.0.2',
            ],
            sizeBytes: 40101552,
          },
          {
            names: [
              'k8s.gcr.io/metrics-server-amd64@sha256:c9c4e95068b51d6b33a9dccc61875df07dc650abbf4ac1a19d58b4628f89288b',
              'k8s.gcr.io/metrics-server-amd64:v0.3.6',
            ],
            sizeBytes: 39944451,
          },
          {
            names: [
              'kubernetesui/metrics-scraper@sha256:555981a24f184420f3be0c79d4efb6c948a85cfce84034f85a563f4151a81cbf',
              'kubernetesui/metrics-scraper:v1.0.4',
            ],
            sizeBytes: 36937728,
          },
          {
            names: [
              'appropriate/curl@sha256:c8bf5bbec6397465a247c2bb3e589bb77e4f62ff88a027175ecb2d9e4f12c9d7',
              'appropriate/curl:latest',
            ],
            sizeBytes: 5496756,
          },
          {
            names: [
              'k8s.gcr.io/pause@sha256:927d98197ec1141a368550822d18fa1c60bdae27b78b0c004f705f548c07814f',
              'k8s.gcr.io/pause:3.2',
            ],
            sizeBytes: 682696,
          },
        ],
      },
    },
  ],
};

const nodesUsage = {
  kind: 'NodeMetricsList',
  apiVersion: 'metrics.k8s.io/v1beta1',
  metadata: {
    selfLink: '/apis/metrics.k8s.io/v1beta1/nodes',
  },
  items: [
    {
      metadata: {
        name: 'minikube',
        selfLink: '/apis/metrics.k8s.io/v1beta1/nodes/minikube',
        creationTimestamp: '2020-10-26T23:40:32Z',
      },
      timestamp: '2020-10-26T23:40:00Z',
      window: '1m0s',
      usage: {
        cpu: '167m',
        memory: '1374392Ki',
      },
    },
  ],
};

const podsInfo = {
  kind: 'PodList',
  apiVersion: 'v1',
  metadata: {
    selfLink: '/api/v1/namespaces/default/pods',
    resourceVersion: '532643',
  },
  items: [
    {
      metadata: {
        name: 'allok8-79fb795f9d-xrwh6',
        generateName: 'allok8-79fb795f9d-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/allok8-79fb795f9d-xrwh6',
        uid: '9855f2e6-243c-43a8-8b7f-b23b62739633',
        resourceVersion: '525273',
        creationTimestamp: '2020-04-27T17:42:16Z',
        labels: {
          app: 'app',
          'pod-template-hash': '79fb795f9d',
          tier: 'allok8',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'allok8-79fb795f9d',
            uid: '9cc7f9c6-5e47-45df-bbca-59793c70c210',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T22:35:27Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                  'f:tier': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"9cc7f9c6-5e47-45df-bbca-59793c70c210"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"allok8-container"}': {
                    '.': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":3000,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
              },
            },
          },
          {
            manager: 'kubelet',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-26T14:13:59Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  'k:{"type":"ContainersReady"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Initialized"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Ready"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
                'f:containerStatuses': {},
                'f:hostIP': {},
                'f:phase': {},
                'f:podIP': {},
                'f:podIPs': {
                  '.': {},
                  'k:{"ip":"172.17.0.7"}': {
                    '.': {},
                    'f:ip': {},
                  },
                },
                'f:startTime': {},
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        containers: [
          {
            name: 'allok8-container',
            image: 'docker.io/rbargues32/allok8:latest',
            ports: [
              {
                containerPort: 3000,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'Always',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        nodeName: 'minikube',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Initialized',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-04-27T17:42:16Z',
          },
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:13:53Z',
          },
          {
            type: 'ContainersReady',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:13:53Z',
          },
          {
            type: 'PodScheduled',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-04-27T17:42:16Z',
          },
        ],
        hostIP: '192.168.64.6',
        podIP: '172.17.0.7',
        podIPs: [
          {
            ip: '172.17.0.7',
          },
        ],
        startTime: '2020-04-27T17:42:16Z',
        containerStatuses: [
          {
            name: 'allok8-container',
            state: {
              running: {
                startedAt: '2020-10-26T14:13:52Z',
              },
            },
            lastState: {
              terminated: {
                exitCode: 255,
                reason: 'Error',
                startedAt: '2020-10-20T21:25:14Z',
                finishedAt: '2020-10-26T14:13:31Z',
                containerID:
                  'docker://4c1f5e8e909a3382e5b3ce073a5aec9886e1ebf7f5f207043f654bc69817ff24',
              },
            },
            ready: true,
            restartCount: 6,
            image: 'rbargues32/allok8:latest',
            imageID:
              'docker-pullable://rbargues32/allok8@sha256:443112f5cf594fc3d0d00af9e5394a92dcd49eb89d175aba39102b96d99909f2',
            containerID:
              'docker://e3c86bbf7a278a2ba7d1a8ffb5dc4be10fbe80c9bebdea98932e3957fb1223d6',
            started: true,
          },
        ],
        qosClass: 'Burstable',
      },
    },
    {
      metadata: {
        name: 'allok8-d474845bf-l5xjp',
        generateName: 'allok8-d474845bf-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/allok8-d474845bf-l5xjp',
        uid: 'd480f440-b8b7-4459-95ce-6ddd6a31fd87',
        resourceVersion: '514792',
        creationTimestamp: '2020-10-20T21:16:43Z',
        labels: {
          app: 'app',
          'pod-template-hash': 'd474845bf',
          tier: 'allok8',
        },
        annotations: {
          'kubectl.kubernetes.io/restartedAt': '2020-10-20T17:16:43-04:00',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'allok8-d474845bf',
            uid: 'd8ba63f2-703c-4832-b131-68413ea02bfd',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:16:43Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:annotations': {
                  '.': {},
                  'f:kubectl.kubernetes.io/restartedAt': {},
                },
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                  'f:tier': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"d8ba63f2-703c-4832-b131-68413ea02bfd"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"allok8-container"}': {
                    '.': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":3000,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
              },
            },
          },
          {
            manager: 'kube-scheduler',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:16:43Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  '.': {},
                  'k:{"type":"PodScheduled"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        containers: [
          {
            name: 'allok8-container',
            image: 'docker.io/rbargues32/allok8:latest',
            ports: [
              {
                containerPort: 3000,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'Always',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Pending',
        conditions: [
          {
            type: 'PodScheduled',
            status: 'False',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-20T21:16:43Z',
            reason: 'Unschedulable',
            message: '0/1 nodes are available: 1 Insufficient cpu.',
          },
        ],
        qosClass: 'Burstable',
      },
    },
    {
      metadata: {
        name: 'backend-5b646c545d-n2gjp',
        generateName: 'backend-5b646c545d-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/backend-5b646c545d-n2gjp',
        uid: 'a2e3993b-686a-4b5c-9802-f0317c984d30',
        resourceVersion: '525268',
        creationTimestamp: '2020-04-27T17:42:16Z',
        labels: {
          app: 'app',
          'pod-template-hash': '5b646c545d',
          tier: 'backend',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'backend-5b646c545d',
            uid: '6852c9e5-140c-4721-acc5-0b5d4d2cae61',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T22:35:27Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                  'f:tier': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"6852c9e5-140c-4721-acc5-0b5d4d2cae61"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"backend-container"}': {
                    '.': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":3000,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
              },
            },
          },
          {
            manager: 'kubelet',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-26T14:13:58Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  'k:{"type":"ContainersReady"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Initialized"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Ready"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
                'f:containerStatuses': {},
                'f:hostIP': {},
                'f:phase': {},
                'f:podIP': {},
                'f:podIPs': {
                  '.': {},
                  'k:{"ip":"172.17.0.6"}': {
                    '.': {},
                    'f:ip': {},
                  },
                },
                'f:startTime': {},
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        containers: [
          {
            name: 'backend-container',
            image: 'docker.io/rbargues32/backend:test',
            ports: [
              {
                containerPort: 3000,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'IfNotPresent',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        nodeName: 'minikube',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Initialized',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-04-27T17:42:16Z',
          },
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:13:53Z',
          },
          {
            type: 'ContainersReady',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:13:53Z',
          },
          {
            type: 'PodScheduled',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-04-27T17:42:16Z',
          },
        ],
        hostIP: '192.168.64.6',
        podIP: '172.17.0.6',
        podIPs: [
          {
            ip: '172.17.0.6',
          },
        ],
        startTime: '2020-04-27T17:42:16Z',
        containerStatuses: [
          {
            name: 'backend-container',
            state: {
              running: {
                startedAt: '2020-10-26T14:13:51Z',
              },
            },
            lastState: {
              terminated: {
                exitCode: 255,
                reason: 'Error',
                startedAt: '2020-10-20T21:25:13Z',
                finishedAt: '2020-10-26T14:13:31Z',
                containerID:
                  'docker://357a52c500ea226bec09681b90cd34e60720d8ca045ccda7378eeae3dd96646e',
              },
            },
            ready: true,
            restartCount: 6,
            image: 'rbargues32/backend:test',
            imageID:
              'docker-pullable://rbargues32/backend@sha256:4af8afface41afe1a7a46a58ff02145b77e37dea0d9b49813b8784653dcb6469',
            containerID:
              'docker://91cb918ffc8bcb9c3bd9c39c058326326b89f4b9a9791dd919bdd89ed9b9ae0e',
            started: true,
          },
        ],
        qosClass: 'Burstable',
      },
    },
    {
      metadata: {
        name: 'backend-688796b9c7-p2kl2',
        generateName: 'backend-688796b9c7-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/backend-688796b9c7-p2kl2',
        uid: 'f05eed7b-1879-4d36-8070-361867443496',
        resourceVersion: '514824',
        creationTimestamp: '2020-10-20T21:16:52Z',
        labels: {
          app: 'app',
          'pod-template-hash': '688796b9c7',
          tier: 'backend',
        },
        annotations: {
          'kubectl.kubernetes.io/restartedAt': '2020-10-20T17:16:52-04:00',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'backend-688796b9c7',
            uid: '810ad67f-e38e-4c64-9006-53456e7b6437',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:16:52Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:annotations': {
                  '.': {},
                  'f:kubectl.kubernetes.io/restartedAt': {},
                },
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                  'f:tier': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"810ad67f-e38e-4c64-9006-53456e7b6437"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"backend-container"}': {
                    '.': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":3000,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
              },
            },
          },
          {
            manager: 'kube-scheduler',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:16:52Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  '.': {},
                  'k:{"type":"PodScheduled"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        containers: [
          {
            name: 'backend-container',
            image: 'docker.io/rbargues32/backend:test',
            ports: [
              {
                containerPort: 3000,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'IfNotPresent',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Pending',
        conditions: [
          {
            type: 'PodScheduled',
            status: 'False',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-20T21:16:52Z',
            reason: 'Unschedulable',
            message: '0/1 nodes are available: 1 Insufficient cpu.',
          },
        ],
        qosClass: 'Burstable',
      },
    },
    {
      metadata: {
        name: 'frontend-5c65d4f784-8dd9j',
        generateName: 'frontend-5c65d4f784-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/frontend-5c65d4f784-8dd9j',
        uid: '0ede4f46-9e95-4f1b-9186-062b6816286b',
        resourceVersion: '525276',
        creationTimestamp: '2020-04-27T17:42:16Z',
        labels: {
          app: 'app',
          'pod-template-hash': '5c65d4f784',
          tier: 'frontend',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'frontend-5c65d4f784',
            uid: '90c1b141-0664-4678-86f2-ac5f19e0e72c',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T22:35:27Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                  'f:tier': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"90c1b141-0664-4678-86f2-ac5f19e0e72c"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"testing-docker"}': {
                    '.': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":8080,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
              },
            },
          },
          {
            manager: 'kubelet',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-26T14:13:59Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  'k:{"type":"ContainersReady"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Initialized"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Ready"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
                'f:containerStatuses': {},
                'f:hostIP': {},
                'f:phase': {},
                'f:podIP': {},
                'f:podIPs': {
                  '.': {},
                  'k:{"ip":"172.17.0.9"}': {
                    '.': {},
                    'f:ip': {},
                  },
                },
                'f:startTime': {},
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        containers: [
          {
            name: 'testing-docker',
            image: 'docker.io/rbargues32/frontend:test',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'IfNotPresent',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        nodeName: 'minikube',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Initialized',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-04-27T17:42:16Z',
          },
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:13:53Z',
          },
          {
            type: 'ContainersReady',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:13:53Z',
          },
          {
            type: 'PodScheduled',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-04-27T17:42:16Z',
          },
        ],
        hostIP: '192.168.64.6',
        podIP: '172.17.0.9',
        podIPs: [
          {
            ip: '172.17.0.9',
          },
        ],
        startTime: '2020-04-27T17:42:16Z',
        containerStatuses: [
          {
            name: 'testing-docker',
            state: {
              running: {
                startedAt: '2020-10-26T14:13:51Z',
              },
            },
            lastState: {
              terminated: {
                exitCode: 255,
                reason: 'Error',
                startedAt: '2020-10-20T21:25:13Z',
                finishedAt: '2020-10-26T14:13:31Z',
                containerID:
                  'docker://5abcf7d11b102ebc91675cdde22d19f5f59c32879a29aec5ba68fbfe962481f9',
              },
            },
            ready: true,
            restartCount: 6,
            image: 'rbargues32/frontend:test',
            imageID:
              'docker-pullable://rbargues32/frontend@sha256:b0ec84d5f920a7427fafc7f47124c9794370fdb6b8dcec49f52ca99502b10299',
            containerID:
              'docker://4cc6b2f6bf706245e3bc7ffbe8018a6f4fa18f471a168018b63840fa1060a8b3',
            started: true,
          },
        ],
        qosClass: 'Burstable',
      },
    },
    {
      metadata: {
        name: 'frontend-9677cff58-xgws5',
        generateName: 'frontend-9677cff58-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/frontend-9677cff58-xgws5',
        uid: '2fe31709-1d5c-4f72-ab6a-de14ec09fec1',
        resourceVersion: '514859',
        creationTimestamp: '2020-10-20T21:17:02Z',
        labels: {
          app: 'app',
          'pod-template-hash': '9677cff58',
          tier: 'frontend',
        },
        annotations: {
          'kubectl.kubernetes.io/restartedAt': '2020-10-20T17:17:01-04:00',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'frontend-9677cff58',
            uid: 'a38c0127-2146-4288-97fd-6db8e5de10fb',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:17:02Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:annotations': {
                  '.': {},
                  'f:kubectl.kubernetes.io/restartedAt': {},
                },
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                  'f:tier': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"a38c0127-2146-4288-97fd-6db8e5de10fb"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"testing-docker"}': {
                    '.': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":8080,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
              },
            },
          },
          {
            manager: 'kube-scheduler',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:17:02Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  '.': {},
                  'k:{"type":"PodScheduled"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        containers: [
          {
            name: 'testing-docker',
            image: 'docker.io/rbargues32/frontend:test',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'IfNotPresent',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Pending',
        conditions: [
          {
            type: 'PodScheduled',
            status: 'False',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-20T21:17:02Z',
            reason: 'Unschedulable',
            message: '0/1 nodes are available: 1 Insufficient cpu.',
          },
        ],
        qosClass: 'Burstable',
      },
    },
    {
      metadata: {
        name: 'postgres-576d8cd8f8-w22ts',
        generateName: 'postgres-576d8cd8f8-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/postgres-576d8cd8f8-w22ts',
        uid: 'a816caf0-467b-4d6d-8399-8bbace63954c',
        resourceVersion: '525479',
        creationTimestamp: '2020-04-27T17:42:16Z',
        labels: {
          app: 'postgres',
          'pod-template-hash': '576d8cd8f8',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'postgres-576d8cd8f8',
            uid: 'd2aae0c0-040d-4cd6-9f54-6382667d3849',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-scheduler',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-04-27T17:42:16Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  '.': {},
                  'k:{"type":"PodScheduled"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
              },
            },
          },
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T22:35:27Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"d2aae0c0-040d-4cd6-9f54-6382667d3849"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"postgres"}': {
                    '.': {},
                    'f:envFrom': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":5432,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                    'f:volumeMounts': {
                      '.': {},
                      'k:{"mountPath":"/docker-entrypoint-initdb.d"}': {
                        '.': {},
                        'f:mountPath': {},
                        'f:name': {},
                      },
                      'k:{"mountPath":"/var/lib/postgresql/data"}': {
                        '.': {},
                        'f:mountPath': {},
                        'f:name': {},
                      },
                    },
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:initContainers': {
                  '.': {},
                  'k:{"name":"init-script-download"}': {
                    '.': {},
                    'f:args': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:resources': {},
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                    'f:volumeMounts': {
                      '.': {},
                      'k:{"mountPath":"/tmp/data"}': {
                        '.': {},
                        'f:mountPath': {},
                        'f:name': {},
                      },
                    },
                  },
                },
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
                'f:volumes': {
                  '.': {},
                  'k:{"name":"init-script"}': {
                    '.': {},
                    'f:name': {},
                    'f:persistentVolumeClaim': {
                      '.': {},
                      'f:claimName': {},
                    },
                  },
                  'k:{"name":"postgresdb"}': {
                    '.': {},
                    'f:name': {},
                    'f:persistentVolumeClaim': {
                      '.': {},
                      'f:claimName': {},
                    },
                  },
                },
              },
            },
          },
          {
            manager: 'kubelet',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-26T14:14:47Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  'k:{"type":"ContainersReady"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Initialized"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                  'k:{"type":"Ready"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
                'f:containerStatuses': {},
                'f:hostIP': {},
                'f:initContainerStatuses': {},
                'f:phase': {},
                'f:podIP': {},
                'f:podIPs': {
                  '.': {},
                  'k:{"ip":"172.17.0.3"}': {
                    '.': {},
                    'f:ip': {},
                  },
                },
                'f:startTime': {},
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'postgresdb',
            persistentVolumeClaim: {
              claimName: 'postgres-pv-claim',
            },
          },
          {
            name: 'init-script',
            persistentVolumeClaim: {
              claimName: 'init-script',
            },
          },
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        initContainers: [
          {
            name: 'init-script-download',
            image: 'appropriate/curl',
            args: [
              '-o',
              'tmp/data/init.sql',
              'https://raw.githubusercontent.com/rbargues/kubernetes-practice/master/init.sql',
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'init-script',
                mountPath: '/tmp/data',
              },
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'Always',
          },
        ],
        containers: [
          {
            name: 'postgres',
            image: 'postgres:12.2',
            ports: [
              {
                containerPort: 5432,
                protocol: 'TCP',
              },
            ],
            envFrom: [
              {
                configMapRef: {
                  name: 'postgres-config',
                },
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'postgresdb',
                mountPath: '/var/lib/postgresql/data',
              },
              {
                name: 'init-script',
                mountPath: '/docker-entrypoint-initdb.d',
              },
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'IfNotPresent',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        nodeName: 'minikube',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Initialized',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:14:46Z',
          },
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:14:47Z',
          },
          {
            type: 'ContainersReady',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-26T14:14:47Z',
          },
          {
            type: 'PodScheduled',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2020-04-27T17:42:18Z',
          },
        ],
        hostIP: '192.168.64.6',
        podIP: '172.17.0.3',
        podIPs: [
          {
            ip: '172.17.0.3',
          },
        ],
        startTime: '2020-04-27T17:42:18Z',
        initContainerStatuses: [
          {
            name: 'init-script-download',
            state: {
              terminated: {
                exitCode: 0,
                reason: 'Completed',
                startedAt: '2020-10-26T14:14:45Z',
                finishedAt: '2020-10-26T14:14:45Z',
                containerID:
                  'docker://35fc5b1b83dc770915d2224ff2c66783ec2be4aedc6f844711a03a6cd56d9f42',
              },
            },
            lastState: {},
            ready: true,
            restartCount: 12,
            image: 'appropriate/curl:latest',
            imageID:
              'docker-pullable://appropriate/curl@sha256:c8bf5bbec6397465a247c2bb3e589bb77e4f62ff88a027175ecb2d9e4f12c9d7',
            containerID:
              'docker://35fc5b1b83dc770915d2224ff2c66783ec2be4aedc6f844711a03a6cd56d9f42',
          },
        ],
        containerStatuses: [
          {
            name: 'postgres',
            state: {
              running: {
                startedAt: '2020-10-26T14:14:46Z',
              },
            },
            lastState: {
              terminated: {
                exitCode: 255,
                reason: 'Error',
                startedAt: '2020-10-20T21:25:17Z',
                finishedAt: '2020-10-26T14:13:31Z',
                containerID:
                  'docker://326a674359b2c38426a4a149b239e4070beb94f6c6cf2a818b752f8e4e8eb330',
              },
            },
            ready: true,
            restartCount: 6,
            image: 'postgres:12.2',
            imageID:
              'docker-pullable://postgres@sha256:d96835c9032988c8a899cb8a3c54467dae81daaa99485de70e8c9bddd5432d92',
            containerID:
              'docker://ad37a3a06a77e55562bd7228e1c2baf888bf72c39db41f4ceab435c0b0fb9796',
            started: true,
          },
        ],
        qosClass: 'Burstable',
      },
    },
    {
      metadata: {
        name: 'postgres-7f5f9d9fd9-mvv6t',
        generateName: 'postgres-7f5f9d9fd9-',
        namespace: 'default',
        selfLink: '/api/v1/namespaces/default/pods/postgres-7f5f9d9fd9-mvv6t',
        uid: 'b2ea9639-d682-4cf4-a7ab-5c0402feea80',
        resourceVersion: '514893',
        creationTimestamp: '2020-10-20T21:17:11Z',
        labels: {
          app: 'postgres',
          'pod-template-hash': '7f5f9d9fd9',
        },
        annotations: {
          'kubectl.kubernetes.io/restartedAt': '2020-10-20T17:17:11-04:00',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'postgres-7f5f9d9fd9',
            uid: '8e75c574-50bb-4a64-a1d6-f5fd75bc1a03',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        managedFields: [
          {
            manager: 'kube-controller-manager',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:17:11Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:metadata': {
                'f:annotations': {
                  '.': {},
                  'f:kubectl.kubernetes.io/restartedAt': {},
                },
                'f:generateName': {},
                'f:labels': {
                  '.': {},
                  'f:app': {},
                  'f:pod-template-hash': {},
                },
                'f:ownerReferences': {
                  '.': {},
                  'k:{"uid":"8e75c574-50bb-4a64-a1d6-f5fd75bc1a03"}': {
                    '.': {},
                    'f:apiVersion': {},
                    'f:blockOwnerDeletion': {},
                    'f:controller': {},
                    'f:kind': {},
                    'f:name': {},
                    'f:uid': {},
                  },
                },
              },
              'f:spec': {
                'f:containers': {
                  'k:{"name":"postgres"}': {
                    '.': {},
                    'f:envFrom': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:ports': {
                      '.': {},
                      'k:{"containerPort":5432,"protocol":"TCP"}': {
                        '.': {},
                        'f:containerPort': {},
                        'f:protocol': {},
                      },
                    },
                    'f:resources': {
                      '.': {},
                      'f:limits': {
                        '.': {},
                        'f:cpu': {},
                      },
                      'f:requests': {
                        '.': {},
                        'f:cpu': {},
                      },
                    },
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                    'f:volumeMounts': {
                      '.': {},
                      'k:{"mountPath":"/docker-entrypoint-initdb.d"}': {
                        '.': {},
                        'f:mountPath': {},
                        'f:name': {},
                      },
                      'k:{"mountPath":"/var/lib/postgresql/data"}': {
                        '.': {},
                        'f:mountPath': {},
                        'f:name': {},
                      },
                    },
                  },
                },
                'f:dnsPolicy': {},
                'f:enableServiceLinks': {},
                'f:initContainers': {
                  '.': {},
                  'k:{"name":"init-script-download"}': {
                    '.': {},
                    'f:args': {},
                    'f:image': {},
                    'f:imagePullPolicy': {},
                    'f:name': {},
                    'f:resources': {},
                    'f:terminationMessagePath': {},
                    'f:terminationMessagePolicy': {},
                    'f:volumeMounts': {
                      '.': {},
                      'k:{"mountPath":"/tmp/data"}': {
                        '.': {},
                        'f:mountPath': {},
                        'f:name': {},
                      },
                    },
                  },
                },
                'f:restartPolicy': {},
                'f:schedulerName': {},
                'f:securityContext': {},
                'f:terminationGracePeriodSeconds': {},
                'f:volumes': {
                  '.': {},
                  'k:{"name":"init-script"}': {
                    '.': {},
                    'f:name': {},
                    'f:persistentVolumeClaim': {
                      '.': {},
                      'f:claimName': {},
                    },
                  },
                  'k:{"name":"postgresdb"}': {
                    '.': {},
                    'f:name': {},
                    'f:persistentVolumeClaim': {
                      '.': {},
                      'f:claimName': {},
                    },
                  },
                },
              },
            },
          },
          {
            manager: 'kube-scheduler',
            operation: 'Update',
            apiVersion: 'v1',
            time: '2020-10-20T21:17:11Z',
            fieldsType: 'FieldsV1',
            fieldsV1: {
              'f:status': {
                'f:conditions': {
                  '.': {},
                  'k:{"type":"PodScheduled"}': {
                    '.': {},
                    'f:lastProbeTime': {},
                    'f:lastTransitionTime': {},
                    'f:message': {},
                    'f:reason': {},
                    'f:status': {},
                    'f:type': {},
                  },
                },
              },
            },
          },
        ],
      },
      spec: {
        volumes: [
          {
            name: 'postgresdb',
            persistentVolumeClaim: {
              claimName: 'postgres-pv-claim',
            },
          },
          {
            name: 'init-script',
            persistentVolumeClaim: {
              claimName: 'init-script',
            },
          },
          {
            name: 'default-token-wkqfs',
            secret: {
              secretName: 'default-token-wkqfs',
              defaultMode: 420,
            },
          },
        ],
        initContainers: [
          {
            name: 'init-script-download',
            image: 'appropriate/curl',
            args: [
              '-o',
              'tmp/data/init.sql',
              'https://raw.githubusercontent.com/rbargues/kubernetes-practice/master/init.sql',
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'init-script',
                mountPath: '/tmp/data',
              },
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'Always',
          },
        ],
        containers: [
          {
            name: 'postgres',
            image: 'postgres:12.2',
            ports: [
              {
                containerPort: 5432,
                protocol: 'TCP',
              },
            ],
            envFrom: [
              {
                configMapRef: {
                  name: 'postgres-config',
                },
              },
            ],
            resources: {
              limits: {
                cpu: '300m',
              },
              requests: {
                cpu: '300m',
              },
            },
            volumeMounts: [
              {
                name: 'postgresdb',
                mountPath: '/var/lib/postgresql/data',
              },
              {
                name: 'init-script',
                mountPath: '/docker-entrypoint-initdb.d',
              },
              {
                name: 'default-token-wkqfs',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            terminationMessagePolicy: 'File',
            imagePullPolicy: 'IfNotPresent',
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        securityContext: {},
        schedulerName: 'default-scheduler',
        tolerations: [
          {
            key: 'node.kubernetes.io/not-ready',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
          {
            key: 'node.kubernetes.io/unreachable',
            operator: 'Exists',
            effect: 'NoExecute',
            tolerationSeconds: 300,
          },
        ],
        priority: 0,
        enableServiceLinks: true,
      },
      status: {
        phase: 'Pending',
        conditions: [
          {
            type: 'PodScheduled',
            status: 'False',
            lastProbeTime: null,
            lastTransitionTime: '2020-10-20T21:17:11Z',
            reason: 'Unschedulable',
            message: '0/1 nodes are available: 1 Insufficient cpu.',
          },
        ],
        qosClass: 'Burstable',
      },
    },
  ],
};

const podsUsage = {
  kind: 'PodMetricsList',
  apiVersion: 'metrics.k8s.io/v1beta1',
  metadata: {
    selfLink: '/apis/metrics.k8s.io/v1beta1/namespaces/default/pods',
  },
  items: [
    {
      metadata: {
        name: 'backend-5b646c545d-n2gjp',
        namespace: 'default',
        selfLink:
          '/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/backend-5b646c545d-n2gjp',
        creationTimestamp: '2020-10-27T01:51:26Z',
      },
      timestamp: '2020-10-27T01:51:00Z',
      window: '1m0s',
      containers: [
        {
          name: 'backend-container',
          usage: {
            cpu: '0',
            memory: '18632Ki',
          },
        },
      ],
    },
    {
      metadata: {
        name: 'postgres-576d8cd8f8-w22ts',
        namespace: 'default',
        selfLink:
          '/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/postgres-576d8cd8f8-w22ts',
        creationTimestamp: '2020-10-27T01:51:26Z',
      },
      timestamp: '2020-10-27T01:51:00Z',
      window: '1m0s',
      containers: [
        {
          name: 'postgres',
          usage: {
            cpu: '1m',
            memory: '93592Ki',
          },
        },
      ],
    },
    {
      metadata: {
        name: 'allok8-79fb795f9d-xrwh6',
        namespace: 'default',
        selfLink:
          '/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/allok8-79fb795f9d-xrwh6',
        creationTimestamp: '2020-10-27T01:51:26Z',
      },
      timestamp: '2020-10-27T01:51:00Z',
      window: '1m0s',
      containers: [
        {
          name: 'allok8-container',
          usage: {
            cpu: '10m',
            memory: '67484Ki',
          },
        },
      ],
    },
    {
      metadata: {
        name: 'frontend-5c65d4f784-8dd9j',
        namespace: 'default',
        selfLink:
          '/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/frontend-5c65d4f784-8dd9j',
        creationTimestamp: '2020-10-27T01:51:26Z',
      },
      timestamp: '2020-10-27T01:51:00Z',
      window: '1m0s',
      containers: [
        {
          name: 'testing-docker',
          usage: {
            cpu: '0',
            memory: '15716Ki',
          },
        },
      ],
    },
  ],
};

const preSpecContainer = {
  items: [
    {
      nodeName: 'minikube',
      podName: 'allok8-79fb795f9d-xrwh6',
      status: 'Running',
      namespace: 'default',
      timestamp: '2020-10-27T01:51:00Z',
      specContainers: [
        {
          name: 'allok8-container',
          image: 'docker.io/rbargues32/allok8:latest',
          ports: [
            {
              containerPort: 3000,
              protocol: 'TCP',
            },
          ],
          resources: {
            limits: {
              cpu: '300m',
            },
            requests: {
              cpu: '300m',
            },
          },
          volumeMounts: [
            {
              name: 'default-token-wkqfs',
              readOnly: true,
              mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
            },
          ],
          terminationMessagePath: '/dev/termination-log',
          terminationMessagePolicy: 'File',
          imagePullPolicy: 'Always',
        },
      ],
    },
  ],
};
describe('nodeUsageReducer', () => {
  const testArr = [];

  const returnedArr = [
    {
      nodeName: 'minikube',
      usedMemory: 1374392,
      usedCPU: 167,
    },
  ];
  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(nodeUsageReducer(testArr, nodesUsage.items[0])).toEqual(returnedArr);
  });
  it('does not modify the original input', () => {
    const input = Object.freeze({
      kind: 'NodeMetricsList',
      apiVersion: 'metrics.k8s.io/v1beta1',
      metadata: {
        selfLink: '/apis/metrics.k8s.io/v1beta1/nodes',
      },
      items: [
        Object.freeze({
          metadata: {
            name: 'minikube',
            selfLink: '/apis/metrics.k8s.io/v1beta1/nodes/minikube',
            creationTimestamp: '2020-10-26T23:40:32Z',
          },
          timestamp: '2020-10-26T23:40:00Z',
          window: '1m0s',
          usage: Object.freeze({
            cpu: '167m',
            memory: '1374392Ki',
          }),
        }),
      ],
    });
    expect(() => nodeUsageReducer(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => nodeUsageReducer(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    expect(nodeUsageReducer(testArr, nodesUsage.items[0])).toMatchSnapshot();
  });

  //
});
describe('nodeInfoReducer', () => {
  const testArr = [];
  const returnedArr = [
    {
      nodeName: 'minikube',
      allocatableMemory: '3936948Ki',
      allocatableCPU: '2',
      capacity: {
        cpu: '2',
        'ephemeral-storage': '16954224Ki',
        'hugepages-2Mi': '0',
        memory: '3936948Ki',
        pods: '110',
      },
      minikube: [],
    },
  ];

  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(nodeInfoReducer(testArr, nodesInfo.items[0])).toEqual(returnedArr);
  });
  it('does not modify the original input', () => {
    const input = Object.freeze({
      kind: 'NodeMetricsList',
      apiVersion: 'metrics.k8s.io/v1beta1',
      metadata: {
        selfLink: '/apis/metrics.k8s.io/v1beta1/nodes',
      },
      items: [
        Object.freeze({
          metadata: Object.freeze({
            name: 'minikube',
          }),
          spec: {},
          status: Object.freeze({
            capacity: {
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            },
            allocatable: Object.freeze({
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            }),
            nodeInfo: {
              machineID: 'a2938b62bfca4e209ea9780b08ade21b',
              systemUUID: '03da11ea-0000-0000-ad0a-acde48001122',
              bootID: 'dfd46ff7-c0ea-447a-9679-0c72e6701bd0',
              kernelVersion: '4.19.107',
              osImage: 'Buildroot 2019.02.10',
              containerRuntimeVersion: 'docker://19.3.8',
              kubeletVersion: 'v1.18.0',
              kubeProxyVersion: 'v1.18.0',
              operatingSystem: 'linux',
              architecture: 'amd64',
            },
          }),
        }),
      ],
    });
    expect(() => nodeInfoReducer(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => nodeInfoReducer(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    expect(nodeInfoReducer(testArr, nodesInfo.items[0])).toMatchSnapshot();
  });

  //
});
describe('podsInfoReducer', () => {
  const testArr = [];
  const returnedArr = [
    {
      podName: 'allok8-79fb795f9d-xrwh6',
      nodeName: 'minikube',
      status: 'Running',
      specContainers: [
        {
          name: 'allok8-container',
          image: 'docker.io/rbargues32/allok8:latest',
          ports: [
            {
              containerPort: 3000,
              protocol: 'TCP',
            },
          ],
          resources: {
            limits: {
              cpu: '300m',
            },
            requests: {
              cpu: '300m',
            },
          },
          volumeMounts: [
            {
              name: 'default-token-wkqfs',
              readOnly: true,
              mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
            },
          ],
          terminationMessagePath: '/dev/termination-log',
          terminationMessagePolicy: 'File',
          imagePullPolicy: 'Always',
        },
      ],
    },
  ];

  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(podsInfoReducer(testArr, podsInfo.items[0])).toEqual(returnedArr);
  });
  it('does not modify the original input', () => {
    const input = Object.freeze({
      kind: 'NodeMetricsList',
      apiVersion: 'metrics.k8s.io/v1beta1',
      metadata: {
        selfLink: '/apis/metrics.k8s.io/v1beta1/nodes',
      },
      items: [
        Object.freeze({
          metadata: Object.freeze({
            name: 'minikube',
          }),
          spec: Object.freeze({
            containers: Object.freeze([
              {
                name: 'allok8-container',
                image: 'docker.io/rbargues32/allok8:latest',
                ports: [
                  {
                    containerPort: 3000,
                    protocol: 'TCP',
                  },
                ],
                resources: {
                  limits: {
                    cpu: '300m',
                  },
                  requests: {
                    cpu: '300m',
                  },
                },
                volumeMounts: [
                  {
                    name: 'default-token-wkqfs',
                    readOnly: true,
                    mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
                  },
                ],
              },
            ]),
          }),
          status: Object.freeze({
            capacity: {
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            },
            allocatable: Object.freeze({
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            }),
            phase: 'Running',
          }),
        }),
      ],
    });
    expect(() => podsInfoReducer(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => podsInfoReducer(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    expect(podsInfoReducer(testArr, podsInfo.items[0])).toMatchSnapshot();
  });

  //
});

describe('podsUsageReducer', () => {
  const testArr = [];
  const returnedArr = [
    {
      podName: 'backend-5b646c545d-n2gjp',
      namespace: 'default',
      timestamp: '2020-10-27T01:51:00Z',
      containers: [
        {
          name: 'backend-container',
          usage: {
            cpu: '0',
            memory: '18632Ki',
          },
        },
      ],
    },
  ];

  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(podsUsageReducer(testArr, podsUsage.items[0])).toEqual(returnedArr);
  });
  it('does not modify the original input', () => {
    const input = Object.freeze({
      kind: 'NodeMetricsList',
      apiVersion: 'metrics.k8s.io/v1beta1',
      metadata: {
        selfLink: '/apis/metrics.k8s.io/v1beta1/nodes',
      },
      items: [
        Object.freeze({
          metadata: Object.freeze({
            name: 'minikube',
          }),
          spec: {},
          status: Object.freeze({
            capacity: {
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            },
            allocatable: Object.freeze({
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            }),
            nodeInfo: {
              machineID: 'a2938b62bfca4e209ea9780b08ade21b',
              systemUUID: '03da11ea-0000-0000-ad0a-acde48001122',
              bootID: 'dfd46ff7-c0ea-447a-9679-0c72e6701bd0',
              kernelVersion: '4.19.107',
              osImage: 'Buildroot 2019.02.10',
              containerRuntimeVersion: 'docker://19.3.8',
              kubeletVersion: 'v1.18.0',
              kubeProxyVersion: 'v1.18.0',
              operatingSystem: 'linux',
              architecture: 'amd64',
            },
          }),
        }),
      ],
    });
    expect(() => podsUsageReducer(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => podsUsageReducer(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    expect(podsUsageReducer(testArr, podsUsage.items[0])).toMatchSnapshot();
  });

  //
});
describe('specContainerReducer', () => {
  const testArr = [];
  const returnedArr = [
    [
      {
        nodeName: 'minikube',
        podName: 'allok8-79fb795f9d-xrwh6',
        status: 'Running',
        namespace: 'default',
        timestamp: '2020-10-27T01:51:00Z',
        containerName: 'allok8-container',
        cpuRequested: '300m',
      },
    ],
  ];

  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(specContainerReducer(testArr, preSpecContainer.items[0])).toEqual(
      returnedArr
    );
  });
  it('does not modify the original input', () => {
    const input = Object.freeze({
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'allok8-79fb795f9d-xrwh6',
          status: 'Running',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          specContainers: [
            Object.freeze({
              name: 'allok8-container',
              image: 'docker.io/rbargues32/allok8:latest',
              ports: [
                {
                  containerPort: 3000,
                  protocol: 'TCP',
                },
              ],
              resources: Object.freeze({
                limits: {
                  cpu: '300m',
                },
                requests: Object.freeze({
                  cpu: '300m',
                }),
              }),
              volumeMounts: [
                {
                  name: 'default-token-wkqfs',
                  readOnly: true,
                  mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
                },
              ],
              terminationMessagePath: '/dev/termination-log',
              terminationMessagePolicy: 'File',
              imagePullPolicy: 'Always',
            }),
          ],
        }),
      ],
    });
    expect(() => specContainerReducer(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => specContainerReducer(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    const input = Object.freeze({
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'allok8-79fb795f9d-xrwh6',
          status: 'Running',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          specContainers: [
            Object.freeze({
              name: 'allok8-container',
              image: 'docker.io/rbargues32/allok8:latest',
              ports: [
                {
                  containerPort: 3000,
                  protocol: 'TCP',
                },
              ],
              resources: Object.freeze({
                limits: {
                  cpu: '300m',
                },
                requests: Object.freeze({
                  cpu: '300m',
                }),
              }),
              volumeMounts: [
                {
                  name: 'default-token-wkqfs',
                  readOnly: true,
                  mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
                },
              ],
              terminationMessagePath: '/dev/termination-log',
              terminationMessagePolicy: 'File',
              imagePullPolicy: 'Always',
            }),
          ],
        }),
      ],
    });
    expect(specContainerReducer(testArr, input.items[0])).toMatchSnapshot();
  });

  //
});
describe('containerReducer', () => {
  const testArr = [];
  const returnedArr = [
    [
      {
        nodeName: 'minikube',
        podName: 'backend-5b646c545d-n2gjp',
        containerCPU: '0',
        containerMemory: '18632Ki',
        cpuPercent: -1,
        memoryPercent: -1,
        containerName: 'backend-container',
      },
    ],
  ];

  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(
      containerReducer(
        testArr,
        [
          {
            nodeName: 'minikube',
            podName: 'backend-5b646c545d-n2gjp',
            namespace: 'default',
            timestamp: '2020-10-27T01:51:00Z',
            containers: [
              {
                name: 'backend-container',
                usage: {
                  cpu: '0',
                  memory: '18632Ki',
                },
              },
            ],
          },
        ][0]
      )
    ).toEqual(returnedArr);
  });
  it('does not modify the original input', () => {
    const input = Object.freeze({
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'backend-5b646c545d-n2gjp',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          containers: [
            Object.freeze({
              name: 'backend-container',
              usage: {
                cpu: '0',
                memory: '18632Ki',
              },
            }),
          ],
        }),
      ],
    });
    expect(() => containerReducer(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => containerReducer(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    const input = Object.freeze({
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'backend-5b646c545d-n2gjp',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          containers: [
            Object.freeze({
              name: 'backend-container',
              usage: {
                cpu: '0',
                memory: '18632Ki',
              },
            }),
          ],
        }),
      ],
    });
    expect(containerReducer(testArr, input.items[0])).toMatchSnapshot();
  });

  //
});
describe('cleanUpReducer2', () => {
  const testArr = [];
  const returnedArr = [
    {
      nodeName: 'minikube',
      usedMemory: 1374392,
      usedCPU: 167,
      allocatableMemory: '3936948Ki',
      allocatableCPU: '2',
      capacity: {
        cpu: '2',
        'ephemeral-storage': '16954224Ki',
        'hugepages-2Mi': '0',
        memory: '3936948Ki',
        pods: '110',
      },
      containers: [
        {
          nodeName: 'minikube',
          podName: 'backend-5b646c545d-n2gjp',
          containerCPU: '0',
          containerMemory: '18632Ki',
          cpuPercent: -1,
          memoryPercent: -1,
          containerName: 'backend-container',
          status: 'Running',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          cpuRequested: '300m',
        },
      ],
    },
  ];

  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(
      cleanUpReducer2(
        testArr,
        [
          {
            nodeName: 'minikube',
            podName: 'backend-5b646c545d-n2gjp',
            namespace: 'default',
            timestamp: '2020-10-27T01:51:00Z',
            allocatableMemory: '3936948Ki',
            allocatableCPU: '2',
            capacity: {
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            },
            usedMemory: 1374392,
            usedCPU: 167,
            minikube: [
              {
                nodeName: 'minikube',
                podName: 'backend-5b646c545d-n2gjp',
                containerCPU: '0',
                containerMemory: '18632Ki',
                cpuPercent: -1,
                memoryPercent: -1,
                containerName: 'backend-container',
                status: 'Running',
                namespace: 'default',
                timestamp: '2020-10-27T01:51:00Z',
                cpuRequested: '300m',
              },
            ],
          },
        ][0]
      )
    ).toEqual(returnedArr);
  });
  it('does not modify the original input', () => {
    const input = {
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'backend-5b646c545d-n2gjp',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          allocatableMemory: '',
          allocatableCPU: '',
          capacity: '',
          usedMemory: 1374392,
          usedCPU: 167,
          minikube: [
            Object.freeze({
              nodeName: 'minikube',
              podName: 'backend-5b646c545d-n2gjp',
              containerCPU: '0',
              containerMemory: '18632Ki',
              cpuPercent: -1,
              memoryPercent: -1,
              containerName: 'backend-container',
              status: 'Running',
              namespace: 'default',
              timestamp: '2020-10-27T01:51:00Z',
              cpuRequested: '300m',
            }),
          ],
        }),
      ],
    };

    expect(() => cleanUpReducer2(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => cleanUpReducer2(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    const input = {
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'backend-5b646c545d-n2gjp',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          allocatableMemory: '',
          allocatableCPU: '',
          capacity: '',
          usedMemory: 1374392,
          usedCPU: 167,
          minikube: [
            Object.freeze({
              nodeName: 'minikube',
              podName: 'backend-5b646c545d-n2gjp',
              containerCPU: '0',
              containerMemory: '18632Ki',
              cpuPercent: -1,
              memoryPercent: -1,
              containerName: 'backend-container',
              status: 'Running',
              namespace: 'default',
              timestamp: '2020-10-27T01:51:00Z',
              cpuRequested: '300m',
            }),
          ],
        }),
      ],
    };

    expect(cleanUpReducer2(testArr, input.items[0])).toMatchSnapshot();
  });

  //
});
describe('percentReducer', () => {
  const testArr = [];
  const returnedArr = [
    [
      {
        nodeName: 'minikube',
        nodeUsedMemory: 1374392,
        nodeUsedCPU: 167,
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
        containerCPU: 0,
        containerMemory: 18632,
        containerCPUPercent: 0,
        containerMemoryPercent: 1.3556539910011118,
        containerName: 'backend-container',
        status: 'Running',
        namespace: 'default',
        timestamp: '2020-10-27T01:51:00Z',
        cpuRequested: '300m',
      },
    ],
  ];

  it('should return a new object with the item name as the key and the schema as its value ', () => {
    expect(
      percentReducer(
        testArr,
        [
          {
            nodeName: 'minikube',
            usedMemory: 1374392,
            usedCPU: 167,
            allocatableMemory: '3936948Ki',
            allocatableCPU: '2',
            capacity: {
              cpu: '2',
              'ephemeral-storage': '16954224Ki',
              'hugepages-2Mi': '0',
              memory: '3936948Ki',
              pods: '110',
            },
            containers: [
              {
                nodeName: 'minikube',
                podName: 'backend-5b646c545d-n2gjp',
                containerCPU: '0',
                containerMemory: '18632Ki',
                cpuPercent: -1,
                memoryPercent: -1,
                containerName: 'backend-container',
                status: 'Running',
                namespace: 'default',
                timestamp: '2020-10-27T01:51:00Z',
                cpuRequested: '300m',
              },
            ],
          },
        ][0]
      )
    ).toEqual(returnedArr);
  });
  it('does not modify the original input', () => {
    const input = {
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'backend-5b646c545d-n2gjp',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          allocatableMemory: '3936948Ki',
          allocatableCPU: '2',
          capacity: Object.freeze({
            cpu: '2',
            'ephemeral-storage': '16954224Ki',
            'hugepages-2Mi': '0',
            memory: '3936948Ki',
            pods: '110',
          }),
          usedMemory: 1374392,
          usedCPU: 167,
          containers: [
            Object.freeze({
              nodeName: 'minikube',
              podName: 'backend-5b646c545d-n2gjp',
              containerCPU: '0',
              containerMemory: '18632Ki',
              cpuPercent: -1,
              memoryPercent: -1,
              containerName: 'backend-container',
              status: 'Running',
              namespace: 'default',
              timestamp: '2020-10-27T01:51:00Z',
              cpuRequested: '300m',
            }),
          ],
        }),
      ],
    };

    expect(() => percentReducer(testArr, input.items[0])).not.toThrow();
  });
  it('cannot reduce null input', () => {
    expect(() => percentReducer(testArr, null)).toThrow(/null/);
  });
  it('matchSnapshot', () => {
    const input = {
      items: [
        Object.freeze({
          nodeName: 'minikube',
          podName: 'backend-5b646c545d-n2gjp',
          namespace: 'default',
          timestamp: '2020-10-27T01:51:00Z',
          allocatableMemory: '3936948Ki',
          allocatableCPU: '2',
          capacity: {
            cpu: '2',
            'ephemeral-storage': '16954224Ki',
            'hugepages-2Mi': '0',
            memory: '3936948Ki',
            pods: '110',
          },
          usedMemory: 1374392,
          usedCPU: 167,
          containers: [
            Object.freeze({
              nodeName: 'minikube',
              podName: 'backend-5b646c545d-n2gjp',
              containerCPU: '0',
              containerMemory: '18632Ki',
              cpuPercent: -1,
              memoryPercent: -1,
              containerName: 'backend-container',
              status: 'Running',
              namespace: 'default',
              timestamp: '2020-10-27T01:51:00Z',
              cpuRequested: '300m',
            }),
          ],
        }),
      ],
    };
    expect(percentReducer(testArr, input.items[0])).toMatchSnapshot();
  });

  //
});

module.exports = {
  nodesInfo,
  nodesUsage,
  podsInfo,
  podsUsage,
};
