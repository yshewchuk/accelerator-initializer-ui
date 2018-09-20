/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Card } from 'semantic-ui-react'
import { TemplateCard } from '../src/component/TemplateCard'


describe('Test TemplateCard component', () => {
    let intl = {}
    before(() => {
        intl.formatMessage = sinon.stub()
    })

    it('should call handleSelectTemplate when user clicks on it ', () => {
        const handleSelectTemplate = sinon.stub()
        const selectedTemplate = {
            card: {
                deployStack: [],
                projectStack: []
            }
        }
        const wrapper = shallow(<TemplateCard template={selectedTemplate}
                                            handleSelectTemplate={handleSelectTemplate}
                                            intl={intl} />)
        wrapper.find(Card).simulate('click')
        expect(handleSelectTemplate.called).to.be.true                                    
        
    })
})

