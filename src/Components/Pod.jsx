import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './Container.jsx';
import { select } from '../Actions/actionCreator';

// * this is the pod component that is being displayed via the node component
const mapStateToProps = (store) => ({
  selected: store.state.selected,
});

const mapDispatchToProps = (dispatch) => ({
  select: (obj) => dispatch(select(obj)),
});

class Pod extends Component {
  render() {
    // console.log('****PODS PROPS IN POD:', this.props.podInfo);
    // * create a variable to store pod information to refer to later
    const { podInfo } = this.props;

    // * create a variable to store data for containers
    const containerArr = [];

    // * to loop through podInfo obj to grab pertinent data in regards to container resources
    for (let i = 0; i < podInfo.spec.containers.length; i += 1) {
      const contInfo = podInfo.spec.containers[i];
      contInfo.usage = podInfo.podUsage.containers[i].usage;
      containerArr.push(<Container key={contInfo.name} spec={contInfo} />);
      // console.log('container info in pod', contInfo);
    }


    return (
      <div
        className="pod card"
        onClick={(e) => {
          e.stopPropagation();
          return this.props.select({ props: this.props, el: e.target });
        }}
      >
        <h4>{podInfo.metadata.name}</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {containerArr}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pod);
