import React from 'react';
import Counter from './Counter';


function Counters(){


    return(

        <div>
                <Counter  initVal = {50}/>
                <Counter initVal = {0}/>
                <Counter initVal = {0}/>
                <Counter initVal = {0}/>
        </div>


    )

}


export default Counters;