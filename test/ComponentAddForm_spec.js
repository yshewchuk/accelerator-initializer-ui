/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { ComponentAddForm } from '../src/component/ComponentAddForm'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Form } from 'semantic-ui-react'

const projectTypeOptions = [
    { key: 'Java Spring', text: 'Java Spring Boot Application', value: 'JAVA_SPRING_BOOT_APP' }
]

describe('Test Component Add Form', () => {
    let intl = {}
    before(() => {
        intl.formatMessage = sinon.stub()
    })

    it('should call handleCancel when user clicks on cancel ', () => {
        const request = {group: "test-group", name: "test", type: "JAVA_SPRING_BOOT_APP",skipDeploymentEngineConfiguration: 'false'    }
        const onSubmit = sinon.stub()
        const wrapper = shallow(<ComponentAddForm handleCancel={onSubmit}
                                                    projectTypeOptions={projectTypeOptions}
                                                    component={request} intl={intl}/>)
        wrapper.find(Form).find('.cancelButton').simulate('click')
        expect(onSubmit.called).to.be.true
    })
})

