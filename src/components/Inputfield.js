import React, {useState, useEffect} from 'react'

export const Inputfield = ({
    type = "text",
    placeholder="",
    onBlurHandler,
    value
}) => {

    const [text, setText] = useState('');

    const onChangeHandler = event => setText(event.target.value);

    useEffect(()=> setText(value), [value])

    return (
        <div>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={text} 
                onChange={onChangeHandler} 
                onBlur={()=>onBlurHandler(text)} 
                style={{
                    width: 480,
                    height: 40,
                    position: 'relative',
                    top: 70,
                    paddingLeft: 20,
                    fontSize: 24,
                    color: '#696969',
                    outline:'none'
                }}
            />
        </div>
    )
}
