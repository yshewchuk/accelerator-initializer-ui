/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { actions }  from '../action/NavbarAction'

const initialState = {
    language: localStorage.getItem('language') || 'en'
}

export const NavbarReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.SELECT_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default:
            return state
    }
}
