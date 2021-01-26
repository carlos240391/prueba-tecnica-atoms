import React from 'react';
import MediaQuery from '../../media_query/media_query';
import swal from '@sweetalert/with-react'


const dataLg = ['js', 'css', 'api']
const titles = ['Initializing JS', 'Configuration CSS', 'Security Levels API' ]

const ApiCode = (props) => {

    const [switchLg, setSwitchLg] = React.useState('js')
   
   const getAlert = () =>{
    swal({
        content:
            (<div>
                <h1>Thank you!</h1>
                <p>Run example</p>
            </div>),
        buttons:false
      });
   }
  
    return (
        <>
        <section className="content-toggle">
        {dataLg.map((item, i) =>{
            return(
                <div    key={i}
                        className="content-toggle__radios"
                        >
                    <input  type="radio" 
                            value={item}
                            name="lgname"
                            id={`lg${i}`}
                            checked={switchLg === item}
                            onChange={()=> setSwitchLg(item)}
                            />
                    <label  htmlFor={`lg${i}`}>

                        {/*<MeediaQuery/> ES UN COMPONENTE QUE EVALUA UN BREAKPOINT 
                        Y CUANDO SE CUMPLE MUESTRA U OCULTA EL COMPONENTE DENTRO DE EL */}

                        <MediaQuery query="(min-width:800px)">
                            <span>{titles[i]}</span>
                        </MediaQuery>

                        <MediaQuery query="(max-width:800px)">
                            <span>{item.toUpperCase()}</span>
                        </MediaQuery>
                    </label>
                </div>
            )
        })}
        </section>



        <section className="apicode-container">
        <section className="apicode-container__editor">
            <pre>
            <code data-lang="js">
                {switchLg === 'js' &&(
                    <>
                        <span>{`$('.modal-toggle).on('click', function(e)){`}</span><br/>
                        <span>{`e.preventDefault();`}</span><br/>
                        <span>{`var modalopen = $(this).data("openpopup");`}</span><br/>
                        <span>{`$('.modal--'+modalopen).toggleClass('modal--visible');`}</span><br/>
                        <span>{`var modalType = $(this).data("popup");`}</span><br/>
                        <span>{`$('.modal__content--'+modaltype).toggleClass('modal__content--visible');`}</span><br/>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {`$(.modal__switch).on('click', function(e){`}</span><br/>
                        
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {`$('.modal__content').removeClass('modal__content--visible');`}</span><br/>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {`var modalType = $(this).data("popup");`}</span><br/>


                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {`$('.modal__content--'+modaltypeb).toggleClass('modal__content--visible');`}</span><br/>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {`});`}</span><br/>

                        <span>{`});`}</span><br/>
                    </>
                )}


                {switchLg === 'css'&&(
                    <>
                        <span>Some text of css</span>
                    </>
                )}
                

                {switchLg === 'api'&&(
                    <>
                        <span>Security API levels</span>
                    </>
                )}
            </code>
            </pre>
        </section>
        <section className="apicode-container__buttons">
            <button id="copy">GET THE CODE</button>
            <button onClick={getAlert} id="run">RUN EXAMPLE</button>
        </section>
        </section>
        </>
    );
};

export default ApiCode;