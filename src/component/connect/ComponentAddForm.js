/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { connect } from 'react-redux'
import { changeComponentName, resetForm, changeGroup, download} from '../../action/ComponentAddFormAction'
import ComponentAddForm from '../ComponentAddForm'
import { hideMessage } from '../../action/MessageAction'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
    return {
        templateSelected: state.home.templateSelected,
        component: {
            group: state.componentAddForm.group,
            name: state.componentAddForm.name
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNameChange: (e) => {
            dispatch(changeComponentName(e.target.value))
        },
        handleGroupChange: (e) => {
            dispatch(changeGroup(e.target.value))
        },
        onDownload: (component, templateSelected) => {
            component.type = templateSelected.type
            dispatch(download(component))
        },
        handleCancel: () => {
            dispatch(resetForm())
            dispatch(hideMessage())
            const previousUrl = localStorage.getItem('previous_url')
            const currentUrl = localStorage.getItem('current_url')
            dispatch(push(previousUrl && previousUrl !== currentUrl ? previousUrl : '/'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentAddForm)