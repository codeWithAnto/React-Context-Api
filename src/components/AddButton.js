import React from 'react'

export const AddButton = ({
    text,
    onClickHandler
}) => {
    return (
        <div>
            <button 
                onClick={onClickHandler} 
                style={{
                    width: 505,
                    height: 40,
                    position: 'relative',
                    top: 90,
                    backgroundColor: '#03bb85',
                    borderColor: 'none',
                    outline: 'none',
                    borderRadius: 5,
                    color: 'white',
                    fontSize: 18
                }}
            >
                {text || ''}
            </button>
        </div>
    )
}
