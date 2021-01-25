import React from 'react';





const DropDown = (props) => {

    const [flag, setFlag] = React.useState(null)

    const handleCheck = (e) =>{
        if(e.target.checked){
            setFlag(e.target.value)
        }else{
            setFlag(null)
        }
    }

    return (
        <div className="acordeon">
            {props.items.map((item, i) =>{
                return(
                    <div key={i} className="acordeon__item">
                        <input  type="checkbox" id={`item${i}`}
                                checked={flag === item.title}
                                value={item.title}
                                onChange={handleCheck}
                                />
                        <label  htmlFor={`item${i}`}
                                className="acordeon__label"
                                >
                                <span>
                                    {item.title}
                                    <img    src={flag === item.title ? "/assets/img/drop-down-faq-selected.png" : "/assets/img/drop-down-faq.png"}
                                            alt="dropdown"/>
                                </span>
                        </label>


                        <div    className="acordeon__content"
                                style={{ maxHeight:flag === item.title ? '500px' : '0px'}}>
                            <div className="acordeon__content__inner">
                                <p>{item.texto}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default DropDown;