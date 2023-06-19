import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card

                    style={{
                        cursor: 'pointer',
                        width: '120px',
                        textAlign: 'center'
                    }}
                    className='p-3 ml-4'
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id
                        ? 'danger'
                        : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row >
    )
})

export default BrandBar