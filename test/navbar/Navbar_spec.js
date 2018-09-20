/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Navbar } from '../../src/component/Navbar'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import * as locationApi from '../../src/helper/LocationApi'

describe('Test Navbar component', () => {

    beforeEach(() => {
        sinon.stub(locationApi, 'getHost')
        sinon.stub(locationApi, 'replace')
    })

    afterEach(() => {
        locationApi.getHost.restore()
        locationApi.replace.restore()
    })

    xit('should display language drop down when user is logged in', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('Dropdown.languages').prop('value')).to.equal('en')
        expect(wrapper.find('Dropdown.languages').prop('options')).to.deep.equal([{key: 'en', text: 'English', value : 'en'}, {key: 'es', text: 'Español', value : 'es'}])
    })

    xit('should display language drop down on welcome page', () => {
        const wrapper = shallow(<Navbar language='en' />)
        expect(wrapper.find('Dropdown.languages').prop('value')).to.equal('en')
        expect(wrapper.find('Dropdown.languages').prop('options')).to.deep.equal([{key: 'en', text: 'English', value : 'en'}, {key: 'es', text: 'Español', value : 'es'}])
    })

    xit('should display selected language from drop down', () => {
        const selectLanguage = sinon.stub()
        const wrapper = shallow(<Navbar language='en' selectLanguage={selectLanguage} />)
        wrapper.find('Dropdown.languages').simulate('change', {}, { value: 'es'})
        expect(selectLanguage.calledWith('es')).to.be.true
    })
})