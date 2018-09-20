/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { ENABLE, DISABLE } from '../action/PageLoaderAction'

const initialState = {
    loading: false
}

export const PageLoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE:
            return {
                ...state,
                loading: true
            }
        case DISABLE:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}