/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router'
import Main from '../src/component/Main'
import ComponentAddForm from '../src/component/ComponentAddForm'
const expect = require('chai').expect
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { IntlProvider } from 'react-intl'
import enLocaleData from '../static/locale/en.json'
import Home from '../src/component/connect/Home';

const mockStore = configureMockStore([thunk])

describe('Main tests', () => {
    let store
    const localeData = {
        en: enLocaleData
    }

    before(() => {
        store = mockStore({
            message: { visible: false, negative: false, message: { header: '', items: [] }},
            componentAddForm: {},
            home: {
                templates: [], 
                templateSelected: {
                    card: {
                        description: 'mock',
                        projectStack: ['java 8'],
                        deployStack: [{content: 'accelerator v2', imgSrc: './default-logo.png'}]
                    }
                }
            }
        })
    })

    it('ComponentAddForm route is available', () => {
        const main = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <MemoryRouter initialEntries={[ '/components/add' ]}>
                    <IntlProvider locale='en' messages={localeData.en}>
                        <Main/>
                    </IntlProvider>
                </MemoryRouter>
            </Provider>
        )

        expect(TestUtils.findRenderedComponentWithType(main, ComponentAddForm)).to.exist
    })

    it('Home route is available', () => {
        const main = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <MemoryRouter initialEntries={[ '/' ]}>
                    <IntlProvider locale='en' messages={localeData.en}>
                        <Main/>
                    </IntlProvider>
                </MemoryRouter>
            </Provider>
        )

        expect(TestUtils.findRenderedComponentWithType(main, Home)).to.exist
    })
})