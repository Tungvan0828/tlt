import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - EPU_CNPM3`}</title>
        </Helmet>
    )
}

export default MetaData
