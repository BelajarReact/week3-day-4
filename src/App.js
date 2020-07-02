import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';


function App(){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const _OnSubstract = e =>{
        e.preventDefault();
        dispatch({
            type: 'KURANGI'

        })
    };
    const _OnAdd =  e =>{
        e.preventDefault();
        dispatch({
            type: 'TAMBAHKAN'

        })
    };

    return(
        <div className="App">
            <h1>Counter Buttons</h1>

            <div className="counter">
                <h3>Counter : {counter}</h3>
                <div className="buttons">
                    <button className="min" onClick={_OnSubstract}>Substract</button>
                    <div className="or"></div>
                    <button className="plus" onClick={_OnAdd}>Add</button>
                </div>
            </div>


        </div>
    )
}

export default App;