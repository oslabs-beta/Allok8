const R = require('ramda');

const {
  mergeNodeInfoAndUsage,
  mergePodsAndNodes,
  mergePodInfoAndUsage,
} = require('./reducers/reducers');
const {
  nodesInfo,
  nodesUsage,
  podsInfo,
  podsUsage,
} = require('./reducers/reducers.test.js');

describe('mergePodsAndNodes', () => {
  it('matchSnapshot', () => {
    expect(
      mergePodsAndNodes(
        mergeNodeInfoAndUsage(nodesInfo.items, nodesUsage.items),
        mergePodInfoAndUsage(podsInfo.items, podsUsage.items)
      )
    ).toMatchSnapshot();
  });

  //
});
describe('mergePodsAndNodes edgecases', () => {
  [42, null, undefined, '42', () => {}].forEach((input) => {
    it(`cannot mergePodsAndNodes input that === ${input}`, () => {
      expect(() => mergePodsAndNodes(input)).toThrow();
    });
  });
});
