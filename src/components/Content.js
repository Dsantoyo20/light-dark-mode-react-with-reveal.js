import { render } from '@testing-library/react';
import React from 'react'
import Fade from 'react-reveal/Fade';

const Content = () => {
    render()
    return (
        <div>
          <Fade left>  <h1> Nostrud duis amet ea sunt. </h1> </Fade>
        <Fade right>   <p> Excepteur anim laborum minim laborum. Sint sunt id ea sit laborum do incididunt in ullamco.
                 Amet esse amet anim do duis voluptate laboris proident Lorem consequat reprehenderit labore. 
                 Mollit amet enim commodo proident aliquip reprehenderit 
                 reprehenderit commodo duis ex est et. </p> </Fade> 

                 <button className="btn-primary">Read more</button>
        </div>
    )
}

export default Content;