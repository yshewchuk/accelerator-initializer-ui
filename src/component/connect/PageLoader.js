/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { PageLoader } from '../PageLoader'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        loading: state.pageLoader.loading
    }
}

export default connect(mapStateToProps)(PageLoader)