# Allok8

⚓️⚡️🔦

Allok8 is a dynamic, conventional, and uncomplicated web-based UI Kubernetes visualization tool. Current tooling only enables resource portraits at the pod level. When the application adds layers of complexity, it is advantageous to visualize when pods have multiple containers. This enables users to manage resource levels, navigate clusters, and display all relevant information down to the container level.

The standard practice of one container per pod works most of the time because it lends to better portability, but when containers are interdependent, keeping track of the resource utilization is sparse. Allok8 wishes to showcase that hidden data in hopes of empowering users to further synthesize their K8s implementation.

Further data within containers that is provided (but not limited to):

- CPU
- Memory
- Capacity
- Addresses

## Getting Started

🏗⚙️🛠

In order to access the dashboard, the user must input the K8s cluster API and token which is typically provided by the system administrator. If you need more information to obtain this, we've provided additional instructions on our landing page.

To check the location and credentials that kubectl knows about, use the following command:

```
kubectl config view
```

Alternatively, you can refer to the offical K8s documents for more [information](https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-api/).

To access a cluster, you would need the location of the cluster and have credentials to access it. Once aquired, simply type in the credentials in the input fields provided, hit fetch, and enjoy! ~

## How To Use

🗺📙📊

**Deployment**

- make sure the metrics-server addon is enable
- Deploy metrics-server-yaml (kubectl apply -f metrics-server-yaml/)
- Deploy Allok8 and DB (kubectl apply -f deploy.yaml)
- Navigate to allok8 service
  **Usage**
- Enter API and TOKEN in Allok8
- Allow for time as server will aggregate data
- Navigate to Allok8

## Contributing

🕊💫👋

We love feedback! We are always looking to improve. For major changes, please open an issue first to discuss what you would like to change, pull requests are welcome.

## Built With

🧰🚢🐳

- [Nivo](https://github.com/plouc/nivo)
- [Docker](https://github.com/docker/cli)
- [Express](https://github.com/expressjs/express)
- [Jest](https://github.com/facebook/jest)
- [Kubernetes](https://github.com/kubernetes/kubernetes)
- [React](https://github.com/facebook/react)
- [React-Router](https://github.com/ReactTraining/react-router)
- [Supertest](https://github.com/visionmedia/supertest)
- [Travis-CI](https://github.com/travis-ci/travis-ci)
- [Webpack](https://github.com/webpack/webpack)

## Authors

✏️👩‍💻👨‍💻📓

- Raphael Bargues - [rbargues](https://github.com/rbargues)
- Alec Below - [georgia0nmymind](https://github.com/georgia0nmymind)
- Jordan Kelly - [jorbreezy](https://github.com/jorbreezy)
- Justin Gillespie - [jgillespie0715](https://github.com/jgillespie0715)
- Natalia Vargas-Caba - [nataliavc08](https://github.com/nataliavc08)

Previous Authors:

- Bahram B - [@bahrambds](https://github.com/bahrambds)
- Jason Seidler - [@jsonseidler](https://github.com/jsonseidler)
- Rella Cruz - [@rllzrc](https://github.com/rllzrc)
- Rex Osariemen - [@rexosariemen](https://github.com/rexosariemen)
- Tyler Meyerson - [@tdmeyerson](https://github.com/Tdmeyerson)

## License

🔖⛴
