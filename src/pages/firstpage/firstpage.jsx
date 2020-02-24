import React, { useEffect } from 'react'
import './firstpage.css';
import product from '../../assests/product (1).svg'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Notify } from '../../components/notify/notify';
import { Tables } from '../../components/table/table';
import { Hover } from '../../components/hover/hover';

export const FirstPage = ({open}) => {

    useEffect(() => {
      console.log(open)
    }, [open])

    return(
        
        <div className={`${!open ? 'small-nav': 'big-nav'} bg`}>
            <div className='container-fluid'>
                <div className='header-left mt-4'>
                    <img width={'30px'} className='mr-3' src = {product} alt='product' />
                    <p className='mb-0'>
                        Production House
                    </p>
                    
                </div>
                <div className='header-right mt-4'>

                    <Button variant='primary'>
                        Category <FontAwesomeIcon size="lg" className='ml-4' color='white' icon={faCaretDown} />
                    </Button>

                    <span>
                        <FontAwesomeIcon size="sm" className='fa-icon-head' color='#4B4B4B' icon={faSearch} />
                    </span>

                    <input type="search" className='mr-4 ml-4'/>
                </div>

                <div className='first-tab'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-transparent ">
                        <div class=" navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-items active bord">
                                    <a class="nav-link mr-3" href="/">All Production <span class="">192</span></a>
                                </li>
                                <li class="nav-items bord">
                                    <a class="nav-link mr-3" href="/">Awaiting Production  <Notify className='ml-0' color={'#D80B0B'} size={'bgg'}>19</Notify></a>
                                </li>
                                
                                <li class="nav-items">
                                    <a class="nav-link disabled mr-3" href="/" tabindex="-1" >Completed</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-items  ">
                                    <a class="mr-3 btn btn-outline-dark" href="/">Printed Worksheet <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-items">
                                    <a class="mr-3 nav-link diff" href="/">Mark as Complete <FontAwesomeIcon size="lg" className='ml-1' color='#7E7E7E' icon={faCaretDown} /></a>
                                </li>
                                
                                <li class="nav-items">
                                    <a class=" mr-3 btn btn-secondary disabled" href="/" tabindex="-1" aria-disabled="true">Save</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
<Tables />
                   
                </div>
            </div>
        </div>
    )
    
    
}