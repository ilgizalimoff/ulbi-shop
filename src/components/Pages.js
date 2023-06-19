import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '..'

const Pages = observer(() => {
    const { device } = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let index = 1; index <= pageCount; index++) {
        pages.push(index)
    }

    return (
        <Pagination className='mt-5'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    onClick={() => device.setPage(page)}
                    active={device.page === page}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages