/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ComponentAddForm from './connect/ComponentAddForm'
import Home from './connect/Home'
import { messagify } from './connect/messagify'

const Main = () => (
        <main style={{marginTop: '55px'}}>
            <Switch>
                <Route exact path='/' component={messagify(Home)}/>
                <Route exact path='/components/add' component={messagify(ComponentAddForm)}/>
            </Switch>
        </main>
)

export default Main