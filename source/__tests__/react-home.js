import React from 'react';
import ReactDOM from 'react-dom';

import ReactHome from '../ReactHome';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Foo.test.js');
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('React Home Test', () => {

    it('is true true?', function() {
        expect(true).toBe(true);
    });

    it('renders default value of H1 tag', () => {
        const wrapper = shallow(<ReactHome/>);
        const nineSign = <h1>An H1 element in a React Component</h1>
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    })
});