# Allok8

⚓️⚡️🔦

Allok8 is a dynamic, conventional, and uncomplicated web-based UI Kubernetes visualization tool. Current tooling only enables resource portraits at the pod level. When the application adds layers of complexity, it is advantageous to visualize when pods have multiple containers. This enables users to manage resource levels, navigate clusters, and display all relevant information down to the container level.

The standard practice of one container per pod works most of the time because it lends to better portability, but when containers are interdependent, keeping track of the resource utilization is sparse. Allok8 wishes to showcase that hidden data in hopes of empowering users to further synthesize their K8s implementation. 

Further data within containers that is provided (but not limited to):

* CPU
* Memory 
* Capacity 
* Addresses

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

**Navigation**

* Enter API and Token and hit fetch!
* Default viewer will be under the cards layout.
* Information panel below will populate reports on usage based on the level selected: Node, Pod, or Container. 

**Graph**

* The tree nodes will expand upon load, selecting the gray nodes will compress to the particular level of choice.
* Zoom in and out to access information accordingly, click to grab structure to move across the main viewer.

**Views** 

* Information panel will dynamically change based on the card selected.
* Once the card is selected it will be highlighted as a feedback to the user to cue that they are in the right area. 

## Contributing

🕊💫👋

We love feedback! We are always looking to improve. For major changes, please open an issue first to discuss what you would like to change, pull requests are welcome.

## Built With 

🧰🚢🐳

* [Nivo](https://github.com/plouc/nivo) 
* [Docker](https://github.com/docker/cli)
* [Express](https://github.com/expressjs/express)
* [Jest](https://github.com/facebook/jest)
* [Kubernetes](https://github.com/kubernetes/kubernetes)
* [React](https://github.com/facebook/react)
* [React-Router](https://github.com/ReactTraining/react-router)
* [Supertest](https://github.com/visionmedia/supertest)
* [Travis-CI](https://github.com/travis-ci/travis-ci)
* [Webpack](https://github.com/webpack/webpack)

## Authors

✏️👩‍💻👨‍💻📓

* Raphael Bargues - (https://github.com/rbargues)
* Alec Below - (https://github.com/georgia0nmymind)
* Jordan Kelly - (https://github.com/jorbreezy)
* Justin Gillespie - (https://github.com/jgillespie0715)
* Natalia Vargas-Caba - (https://github.com/nataliavc08)

## License

🔖⛴

This project is licensed under the MIT License - see the LICENSE.md file for details.






