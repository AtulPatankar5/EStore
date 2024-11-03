import React from 'react'
import SideNav from '../SideNav/SideNav'
import Product from '../Products/Product'

export default function MainComponent() {
    return (
        <div>
            <div className='container-fliud'>
                <div className='row'>
                    <div className='col-lg-2 col-md-6 col-sm-4'>
                        <SideNav />
                    </div>
                    <div className='col-lg-10 col-md-9 col-sm-8'>
                        <Product />

                    </div>
                </div>
            </div>
        </div>
    )
}
