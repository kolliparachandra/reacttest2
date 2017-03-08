import * as actionTypes from '../../constants/actionTypes';
import sort from './index';
import * as sortTypes from '../../constants/sortTypes'

describe('sort reducer', () => {

  describe('SORT_STREAM', () => {

    it('sets sort type', () => {
      const SORT_TYPE = sortTypes.SORT_FAVORITES;

      const action = {
        type: actionTypes.SORT_STREAM,
        sort: SORT_TYPE
      }

      const expectedState = {
        sort:sortTypes.SORT_FAVORITES
      };

      expect(sort(undefined, action)).to.eql(expectedState);
    })
  })
});