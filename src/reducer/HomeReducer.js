/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { actions } from '../action/HomeAction'
import { templates } from '../helper/templates'



const initialState = {
    templateSelected: {card: {projectStack: [], deployStack: [] }},
    templates: templates
}

export const HomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.SELECT_TEMPLATE:
             return  {...state, templateSelected: action.template }
        default:
            return state
    }
}
