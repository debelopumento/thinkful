import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/listContainer';

describe('listContainer component', function() {
    it('Renders List',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<List />);
        const result = renderer.getRenderOutput();
        //result.props.className.should.equal('list');
        console.log(22, result.props.className);

        
        const listTitle = result.props.children[0];
        listTitle.type.should.equal('h3');
        listTitle.props.children.should.equal('List Title');
        
        
    });
});