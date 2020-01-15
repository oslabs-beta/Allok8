# Allok8

⚓️⚡️ 

Allok8 is a dynamic, conventional, and uncomplicated web-based UI Kubernetes visualization tool. Current tooling only enables resource portraits at the pod level. When the application adds layers of complexity, it is advantageous to visualize when pods have multiple containers. This enables users to manage resource levels, navigate clusters, and display all relevant information down to the container level.

The standard practice of one container per pod works most of the time because it lends to better portability, but when containers are interdependent, keeping track of the resource utilization is sparse. Allok8 wishes to showcase that hidden data in hopes of empowering users to further synthesize their K8s implementation. 

Further data within containers that is provided (but not limited to):

* CPU
* Memory 
* Capacity 

## Getting Started 

🏗⚙️

In order to access the dashboard, the user must input the K8s cluster API and token which is typically provided by the system administrator. 

To check the location and credentials that kubectl knows about, use the following command:

```
kubectl config view
```

Alternatively, you can refer to the offical K8s documents for more [information](https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-api/).

To access a cluster, you would need the location of the cluster and have credentials to access it. Once aquired, simply type in the credentials in the input fields provided, hit fetch, and enjoy! ~

###### // A Note About Why We Are Using Without kubectl proxy //

🔑🕹

We chose not to use expose the proxy for further security and prevent MITM attacks. Connections to clusters usually happen with a self-signed server certificate that may take special configuration to get your http client to use, thus providing no protection against man-in-the-middle attacks. By passing the authentication token directly to the API server, we hope to mitigate this by creating an internal certification that secures the connection. 

## How To Use

🗺📙📊

**Navigation**

* Use the sidebar to access different views.
* Switch between tabs to get access to charts.

**Graph**

* Click on the icons to view access to various levels of information using a sunburst graph. 

**View** 

* Use the dropdown menu to toggle between graph and table views.

## Built With 

🧰🚢

* [D3](https://github.com/d3/d3)
* [Docker](https://github.com/docker/cli)
* [Express](https://github.com/expressjs/express)
* [Kubernetes](https://github.com/kubernetes/kubernetes)
* [React](https://github.com/facebook/react)
* [React-Router](https://github.com/ReactTraining/react-router)
* [Redux](https://github.com/facebook/react)
* [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
* [Webpack](https://github.com/webpack/webpack)

## Authors

✏️👩‍💻👨‍💻📓

* Bahram B - [@bahrambds](https://github.com/bahrambds)
* Jason Seidler - [@jsonseidler](https://github.com/jsonseidler)
* Rella Cruz - [@rllzrc](https://github.com/rllzrc)
* Rex Osariemen - [@rexosariemen](https://github.com/rexosariemen)
* Tyler Meyerson - [@tdmeyerson](https://github.com/Tdmeyerson)

## License

🔖⛴

This project is licensed under the MIT License - see the LICENSE.md file for details.






