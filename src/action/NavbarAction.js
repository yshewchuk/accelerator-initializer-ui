/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { reload } from '../helper/LocationApi'

export const actions = {
    SELECT_LANGUAGE : 'SELECT_LANGUAGE'
}

export const selectLanguage = (language) => {
    return (dispatch) => {
        dispatch({ type: actions.SELECT_LANGUAGE, language: language })
        localStorage.setItem('language', language);
        reload()
    }
}

