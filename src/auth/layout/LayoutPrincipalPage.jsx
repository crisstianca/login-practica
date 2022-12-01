import React from 'react'

export const LayoutPrincipalPage = ( { children, title = '' } ) => {
    return (
    <>
        <div className="container w-75 mt-5 rounded shadow ">
            <div className="row align-items-stretch">
                <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded col-left">
                    <img src="https://images.pexels.com/photos/4969844/pexels-photo-4969844.jpeg?cs=srgb&dl=pexels-maria-orlova-4969844.jpg&fm=jpg&_gl=1*1blreh2*_ga*MTcyNDY3MzE2MC4xNjY3OTIzMjY2*_ga_8JE65Q40S6*MTY2NzkyMzI2OC4xLjEuMTY2NzkyMzMyNS4wLjAuMA.." alt="imagen" />
                </div>
                <div className="col bg-white p-5 rounded-end">
                    <h2 className="fw-bold text-center py-5"> { title } </h2>

                    { children }
                </div>
            </div>

        </div>

    </>
  )
}
