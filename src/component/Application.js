/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import Navbar from './connect/Navbar'
import Main from './Main'
import PageLoader from './connect/PageLoader'

export class Application extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
                <Main />
                <PageLoader/>
            </div>
        )
    }
}