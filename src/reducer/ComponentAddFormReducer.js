/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import {actions} from '../action/ComponentAddFormAction'

const initialState = {
    name: '',
    group: ''
}

export const ComponentAddFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.CHANGE_COMPONENT_NAME:
            return  {...state, name: action.name }
        case actions.CHANGE_GROUP:
            return  {...state, group: action.group }
        case actions.ADD_COMPONENT_REJECTED:
            return  state
        case actions.RESET_FORM:
            return  {...state, name: '', group: ''}
        default:
            return state
    }
}