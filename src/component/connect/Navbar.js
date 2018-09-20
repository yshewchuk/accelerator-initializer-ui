/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { connect } from 'react-redux'
import { selectLanguage } from '../../action/NavbarAction'
import { Navbar } from '../Navbar'

const mapStateToProps = (state) => {
    return {
        language: state.navbar.language,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectLanguage: (newLanguage, oldLanguage) => {
            if (newLanguage !== oldLanguage) {
                dispatch(selectLanguage(newLanguage))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)