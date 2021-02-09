# Allok8

![image](https://raw.githubusercontent.com/rbargues/kubernetes-practice/master/allok8.png)
⚓️⚡️🔦

Allok8 is a dynamic, conventional, and uncomplicated Kubernetes visualization tool. Current tooling only enables resource portraits at the pod level. When the application adds layers of complexity, it is advantageous to visualize when pods have multiple containers. This enables users to manage resource levels, navigate clusters, and display all relevant information down to the container level.

The standard practice of one container per pod works most of the time because it lends to better portability, but when containers are interdependent, keeping track of the resource utilization is sparse. Allok8 wishes to showcase that hidden data in hopes of empowering users to further synthesize their K8s implementation.

Further data within containers that is provided (but not limited to):

- CPU
- Memory
- Capacity
- Addresses

## Screenshots

![image](https://raw.githubusercontent.com/rbargues/kubernetes-practice/master/Login.png)
![image](https://raw.githubusercontent.com/rbargues/kubernetes-practice/master/Demo.png)

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

**Minikube Installation**

- [Install minikube](https://minikube.sigs.k8s.io/docs/start/)

**Minikube Start**

- start minikube

`minikube start --driver=hyperkit`

**Minikube Start for test with applications that use ingress-nginx**

`minikube start`

`minikube addons enable ingress`

![minikube start --driver=hyperkit](https://www.github.com/jgillespie0715/microservice-proof/blob/media/minikube-ingress-start.png?raw=true)
![minikube addons enable ingress](https://www.github.com/jgillespie0715/microservice-proof/blob/media/minikube-start-ingress2.png?raw=true)
Note for Minikube Users and the Docker Driver

Recent versions of Minikube will use the docker driver by default when you run minikube start. On Windows or macOS, the docker driver is not compatible with an ingress, which we will be using throughout the course.

https://minikube.sigs.k8s.io/docs/drivers/docker/#known-issues

https://github.com/kubernetes/minikube/issues/7332

To avoid this issue, you can pass the `--driver` flag with a specific driver or `--vm=true`

macOS

`minikube start --vm=true`

or

`minikube start --driver=hyperkit`

or

`minikube start --driver=virtualbox`

Windows:

`minikube start --vm=true`

or

`minikube start --driver=hyperv`

or

`minikube start --driver=virtualbox`

- if using virtual box there is a known installation error

https://github.com/kubernetes/minikube/issues/7332

- here is a workaround
  ![virtualbox workaroud](https://www.github.com/jgillespie0715/microservice-proof/blob/media/virtualbox.png?raw=true)

**Enable Addons**

- enable metrics-server addon

`minikube addons enable metrics-server`

**Deployment**

- In Allok8 directory, deploy metrics-server-yaml

`kubectl apply -f metrics-server-yaml/`

- Deploy Allok8 with postgres database

`kubectl apply -f deploy.yaml`

- If using for testing of other application, deploy
  yaml files for that application

`kubectl apply -f yourApplicationsYamls.yaml`

- verify running pods and services

`kubectl get pods -A`

`kubectl get svc -A`

**Usage**

- In Allok8 directory, start Allok8 in development

`npm run dev`

- navigate to localhost in browser

`http://localhost:3000`

- Click on GET API/ TOKEN

- Copy and paste approriate string into terminal concatenating 'echo' on beginning of command

`echo $(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')`

![api-command](https://www.github.com/jgillespie0715/microservice-proof/blob/media/api-command.png?raw=true)

`echo $(kubectl get secret $(kubectl get serviceaccount default -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 --decode )`

- Enter API and TOKEN into Allok8

- Allow for time as server will aggregate data

- Refresh page enter API and TOKEN into Allok8 again

- Enjoy your data!

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
- [Node](https://github.com/nodejs/node)
- [React](https://github.com/facebook/react)
- [React-Router](https://github.com/ReactTraining/react-router)
- [Supertest](https://github.com/visionmedia/supertest)
- [Travis-CI](https://github.com/travis-ci/travis-ci)
- [Webpack](https://github.com/webpack/webpack)
- [Ramda.js](https://github.com/ramda/ramda)

## Authors

✏️👩‍💻👨‍💻📓

- Raphael Bargues - [rbargues](https://github.com/rbargues)
- Alec Below - [georgia0nmymind](https://github.com/georgia0nmymind)
- Jordan Kelly - [jorbreezy](https://github.com/jorbreezy)
- Justin Gillespie - [jgillespie0715](https://github.com/jgillespie0715)
- Natalia Vargas-Caba - [nataliavc08](https://github.com/nataliavc08)

Previous Authors:

- Bahram B - [@bahrambds](https://github.com/bbagher)
- Jason Seidler - [@jsonseidler](https://github.com/jsonseidler)
- Rella Cruz - [@rllzrc](https://github.com/rllzrc)
- Rex Osariemen - [@rexosariemen](https://github.com/rexosariemen)
- Tyler Meyerson - [@tdmeyerson](https://github.com/Tdmeyerson)

## License

🔖⛴
