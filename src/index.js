/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { NavbarReducer } from './reducer/NavbarReducer'
import { ComponentAddFormReducer } from './reducer/ComponentAddFormReducer'
import { Application }  from './component/Application'
import { MessageReducer } from './reducer/MessageReducer'
import { PageLoaderReducer } from './reducer/PageLoaderReducer'
import { HomeReducer } from './reducer/HomeReducer'
import 'semantic-ui-less/semantic.less'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import axios from 'axios'
import { addLocaleData, IntlProvider } from 'react-intl'
import es from 'react-intl/locale-data/es'
import en from 'react-intl/locale-data/en'
import enLocaleData from '../static/locale/en.json'
import esLocaleData from '../static/locale/es.json'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
    combineReducers({
        router: routerReducer,
        navbar: NavbarReducer,
        componentAddForm: ComponentAddFormReducer,
        home: HomeReducer,
        message: MessageReducer,
        pageLoader: PageLoaderReducer
    }),
    applyMiddleware(middleware, promiseMiddleware(), thunk)
)

axios.interceptors.request.use(
    (config) => {
        config.headers = {  'Accept-Language':  localStorage.getItem('language')}
        return config
    }
)

const localeData = {
  en: enLocaleData,
  es: esLocaleData
}
addLocaleData([...en, ...es])
const language = localStorage.getItem('language') || (navigator.languages && navigator.languages[0]) ||
                         navigator.language ||
                         navigator.userLanguage || 'en'
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
localStorage.setItem('language', languageWithoutRegionCode)
const messages = localeData[languageWithoutRegionCode]

if (!window.intl) {
    require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js',
        'intl/locale-data/jsonp/es.js',
    ], (require) => {
        require('intl')
        require('intl/locale-data/jsonp/en.js')
        require('intl/locale-data/jsonp/es.js')
        ReactDOM.render(
            <Provider store={store}>
                <IntlProvider locale={language} messages={messages}>
                    <ConnectedRouter history={history}>
                        <Application />
                    </ConnectedRouter>
                </IntlProvider>
            </Provider>, document.getElementById('root')
        )
    })
} else {
    ReactDOM.render(
        <Provider store={store}>
            <IntlProvider locale={language} messages={messages}>
                <ConnectedRouter history={history}>
                    <Application />
                </ConnectedRouter>
            </IntlProvider>
        </Provider>, document.getElementById('root')
    )
}

