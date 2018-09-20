/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { PageLoader } from '../src/component/PageLoader'

describe('Test PageLoader', () => {
    it('should render Loading', () => {
        const wrapper = shallow(<PageLoader/>)
        expect(wrapper.find('FormattedMessage').prop('id')).to.equal('app.pageLoader.loading')
    })
})