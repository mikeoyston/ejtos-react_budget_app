import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { budget } = useContext(AppContext);

    const handleIncreaseBudget = () => {

    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input 
                step={10}
                type="number"
                value={budget}
                onClick={handleIncreaseBudget}
            />

        </div>
    );
};

export default Budget;
