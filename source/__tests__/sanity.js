import React from 'react';
import ReactDOM from 'react-dom';

import ReactHome from '../ReactHome';
import HomeButtons from "../HomeButtons";
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Foo.test.js');

import '../temp-poly-fills';
//import raf from '../temp-poly-fills';


import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('basic sanity test', function() {

    it('is true true?', function() {
        expect(true).toBe(true);
    });

    it('tests if we can load ReactHome', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReactHome/>, div);
    });

    it('tests if we can load HomeButtons', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeButtons/>, div);
    });


});