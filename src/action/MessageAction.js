/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const HIDE_MESSAGE = 'HIDE_MESSAGE'

export const showMessage = (message, positive, skipTranslation) => {
    return {
        type: SHOW_MESSAGE,
        negative: !positive,
        message: message,
        skipTranslation: skipTranslation
    }
}

export const hideMessage = () => {
    return {
        type: HIDE_MESSAGE
    }
}