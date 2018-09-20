/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Message } from '../src/component/Message'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { Message as MessageUI } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

describe('Message tests', () => {
    it('renders message and skips translation', () => {
        const wrapper = shallow(<Message skipTranslation={true} visible={true} negative={true} message={
            {
                header: 'failure',
                items: [
                    'failure message 1',
                    'failure message 2'
                ]
            }
        }/>);
        expect(wrapper.contains(<MessageUI.Header>failure</MessageUI.Header>)).to.be.true
        expect(wrapper.contains(<MessageUI.Item key={1}>failure message 1</MessageUI.Item>)).to.be.true
        expect(wrapper.contains(<MessageUI.Item key={2}>failure message 2</MessageUI.Item>)).to.be.true
    })

    it('renders message and does not skip translation', () => {
        const wrapper = shallow(<Message skipTranslation={false} visible={true} negative={true} message={
            {
                header: 'failure',
                items: [
                    'failure message 1',
                    'failure message 2'
                ]
            }
        }/>);
        expect(wrapper.contains(<MessageUI.Header><FormattedMessage id='failure'/></MessageUI.Header>)).to.be.true
        expect(wrapper.contains(<MessageUI.Item key={1}><FormattedMessage id='failure message 1'/></MessageUI.Item>)).to.be.true
        expect(wrapper.contains(<MessageUI.Item key={2}><FormattedMessage id='failure message 2'/></MessageUI.Item>)).to.be.true
    })
})