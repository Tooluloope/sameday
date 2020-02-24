import React, { useState } from 'react'
import './table.css'
import { Table, Button } from 'react-bootstrap'
import cloth from '../../assests/cloth.png'
import { Hover } from '../hover/hover'

export const Tables = () => {
    const [hover, setHover] = useState(false)
    return ( 
        <Table className='tabheight' responsive>

            
            
            <thead>
            
            <tr>
                <th>
                    <input type='checkbox' />
                </th>
                <th>Order #</th>
                <th>Item #</th>
                <th>Details</th>
                <th>Colors</th>
                <th>Qty</th>
                <th>Print Type</th>
                <th>Delivery Method</th>
                <th>Delivery time</th>
                <th>Production Status</th>
            </tr>
            
            
            </thead>

            <tbody>
            <tr>
                <td><input type='checkbox' /></td>
                <td>#232JODJSDKN2</td>
                <td>#232JODJSDKN2</td>
                <td className='row mb-0'>
                    <div onHo className='col-3 mb-0'>
                        <img onMouseEnter= {() => setHover(hover => true)} onMouseLeave= {() => setHover(hover => false)} width ='60' src={cloth} alt='cloth' className='mr-auto' /> 
                        
                    </div>
                    <div className='col-6 mb-0'>
                        <p className='span-img mb-0'>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</p>
                    </div>
                   
                </td>
                <td>
                    <Button variant='primary'>Royal</Button>
                </td>
                <td>L x 4</td>
                <td>DTG Print</td>
                <td>tab</td>
                <td>tab</td>
                <td>tab</td>
                {hover && <Hover  />}
            </tr>
            <tr>
                <td><input type='checkbox' /></td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            </tbody>
        </Table>
    )
}