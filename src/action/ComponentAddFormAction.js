/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as api from '../api/ComponentApi'
import { showMessage } from './MessageAction'

export const actions = {
    CHANGE_COMPONENT_NAME : 'CHANGE_COMPONENT_NAME',
    CHANGE_GROUP: 'CHANGE_GROUP',
    ADD_COMPONENT_REJECTED: 'ADD_COMPONENT_REJECTED',
    RESET_FORM: 'RESET_FORM'
}

export const changeGroup = (value) => (
    {
        type: actions.CHANGE_GROUP,
        group: value
    }
)

export const changeComponentName = (value) => (
    {
        type: actions.CHANGE_COMPONENT_NAME,
        name: value
    }
)

export const resetForm = () => (
    {
        type: actions.RESET_FORM
    }
)

export const download = (request) => {
    return (dispatch) => {
        return api.download(request)
            .then((response)=> {
                dispatch(
                    showMessage({
                        header: 'app.componentAddForm.download.success.message.header',
                        items: []
                    }, true))  
                    let blob = new Blob([response.data], {type: ''});
                    const blobHref = window.URL.createObjectURL(blob);
                    var tempLink = document.createElement('a');
                    tempLink.style.display = 'none';
                    tempLink.href = blobHref;
                    tempLink.setAttribute('download', request.name+".zip"); 
                    
                    if (typeof tempLink.download === 'undefined') {
                        tempLink.setAttribute('target', '_blank');
                    }
                    
                    document.body.appendChild(tempLink);
                    tempLink.click();
                    document.body.removeChild(tempLink);
                    window.URL.revokeObjectURL(blobHref);
        }).catch((error) => {
            handleError(error, dispatch);
        });
    }
}

export const handleError = (error, dispatch) => {
    dispatch ({ type: actions.ADD_COMPONENT_REJECTED })
    if(error.response.status === 400) {
        let jsonParsed, errorMsg, errorHeader;
        if (error.response.config.responseType=="blob"){
            let myReader = new FileReader();
            myReader.onload = () => {
                jsonParsed = JSON.parse(myReader.result);   
                errorHeader = jsonParsed.message;
                errorMsg = jsonParsed.errors.map((error) => (error.message))
                dispatch(showMessage({
                    header: errorHeader,
                    items: errorMsg
                }, false, true))
            }
            myReader.readAsText(error.response.data);
        } else {
            errorHeader = error.response.data.message;
            errorMsg = error.response.data.errors.map((error) => (error.message));
            dispatch(showMessage({
                header: errorHeader,
                items: errorMsg
            }, false, true))
        }

    } else if(error.response.status != 403) {
        dispatch(
            showMessage({
                header: 'app.componentAddForm.download.failure.message.header',
                items: []
            }, false))
    }
}
