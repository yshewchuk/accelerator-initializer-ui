/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

export class Navbar extends React.Component {
    render() {

        const options = [{
            key: 'en', text: 'English', value: 'en'
        }, {
            key: 'es', text: 'Español', value: 'es'
        }]

        return (
            <Menu fixed='top' inverted size='huge'>
                <Menu.Item className='start' link active href='/' name='Accelerator Initializer' />
                <Menu.Menu position='right'>
                    { false && ( <Menu.Item>
                        <Dropdown className='languages'
                            onChange={(e, { value }) => this.props.selectLanguage(value, this.props.language)}
                            options={options}
                            value={this.props.language}>
                        </Dropdown>
                    </Menu.Item>) }
                </Menu.Menu>
            </Menu>
        )

    }
}
