import React, {useState} from 'react';

function Counter(props){

    const [counter, setCounter ] = useState(props.initVal);

    const handler = () => {
        setCounter(counter+1);
    }

    return(

        <div>
                {counter}

                <button onClick = {handler} >Click me</button>


        </div>


    )

}


export default Counter;