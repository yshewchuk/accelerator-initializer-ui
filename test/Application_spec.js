/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { shallow } from 'enzyme'
import { Application } from '../src/component/Application'
import Navbar from '../src/component/connect/Navbar'
import Main from '../src/component/Main'
import PageLoader from '../src/component/connect/PageLoader'

import { expect } from 'chai'

describe('Application tests', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Application/>)
        expect(wrapper.find(Navbar).exists()).to.be.true
        expect(wrapper.find(Main).exists()).to.be.true
        expect(wrapper.find(PageLoader).exists()).to.be.true
    })
})