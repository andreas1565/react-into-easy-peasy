import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
function Loading() {
    return (
        <React.Fragment>
            <Spinner animation="border" variant="primary" role="status" />
        </React.Fragment>
    )
}

export default Loading
