import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
    it('Renders board',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board');

        
        const boardTitle = result.props.children[0];
        boardTitle.type.should.equal('h1');
        boardTitle.props.children.should.equal('Board Title');
        
        
    });
});