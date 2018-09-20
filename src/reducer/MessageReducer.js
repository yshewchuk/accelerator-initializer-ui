/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { SHOW_MESSAGE, HIDE_MESSAGE } from '../action/MessageAction'

const initialState = {
    visible: false,
    negative: false,
    message: {
        header: '',
        items: []
    },
    skipTranslation: false
}

export const MessageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_MESSAGE:
            return { ...state, visible: true, negative: action.negative, message: action.message, skipTranslation: action.skipTranslation }
        case HIDE_MESSAGE:
            return { ...state, visible: false }
        default:
            return state
    }
}