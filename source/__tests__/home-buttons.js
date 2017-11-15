import '../../public/javascripts/tools/tiny-pub-sub.js';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeButtons from "../HomeButtons";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'home-buttons');


describe('Home Button Test', () => {

    it('is true true?', function() {
        expect(true).toBe(true);
    });

    /*it ('renders state of XXX after button click', () => {
        const div = document.createElement('div');
        const button = shallow(<HomeButtons/>);
        const message = <h1>button.onClick.toString()</h1>;
        ReactDOM.render(<message />, div);
    });*/

    it('publishes clientMakeHtml event after button click with done', (done) => {
        const wrapper = shallow(<HomeButtons/>);
        $.subscribe('clientMakeHtml', (event, target) => {
            expect(target.message).toBe('The user wants to makeHtml.');
            done();
        });
        wrapper.find('#makeHtml').simulate('click');
    });
});
