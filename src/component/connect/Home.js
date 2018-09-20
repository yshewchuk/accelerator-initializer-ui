/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { connect } from 'react-redux'
import { Home } from '../Home'
import { selectTemplate } from '../../action/HomeAction'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
    return {
        templates: state.home.templates
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectTemplate : (templateSelected) => {
            dispatch(push(`/components/add?projectType=${templateSelected.type}`))
            dispatch(selectTemplate(templateSelected))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)