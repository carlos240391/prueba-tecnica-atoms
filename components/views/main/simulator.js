import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import { SimulatorContainer } from './credit-styles';
import Link from 'next/link'


const Simulator = (props) => {


    const [monto, setMonto] = React.useState(10000)
    const [tasa, setTasa] = React.useState(8.9)
    const [months, setMonths] = React.useState(12)
    const comision = 348.00


    const generateNumber = (number) =>{
        const num = number.toString().split('.')
        let spliter = num[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        if(num[1]){
            spliter += "." + num[1].substr(0,3);
        }
        return spliter
    }

    // React.useEffect(()=>{
    //     const number = 234560.60.toString().split('.')
    //     let spliter = number[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    //     if(number[1]){
    //         spliter += "." + number[1].substr(0,3);
    //     }
    //     console.log(spliter)
    // },[])
    return (
        
        <SimulatorContainer>

            <section className="simulator-title">
                <h1>simulador de crédito</h1>
            </section>

            {/*----> 🔲  INPUT RANGES-------------> */}
            <section className="simulator-field">
                <label>Monto deseado</label>
                <InputRange maxValue={20000}
                            minValue={10000}
                            value={monto}
                            onChange={value => setMonto( value)}
                            formatLabel={(value)=>{
                                let valor = generateNumber(value); 
                                return `$${valor}`
                             }}
                            />
            </section>

            {/*----> 🔲  INPUT RANGES-------------> */}
            <section className="simulator-field">
                <label>Tasa anual</label>
                <InputRange maxValue={100}
                            minValue={1}
                            value={tasa.toFixed(2)}
                            onChange={value => setTasa( value)}
                            step={0.1}
                            formatLabel={(value) =>{
                                let valor = generateNumber(value)
                                return `${valor} %`
                            }}
                            />
            </section>
          
            
            <section className="simulator-radios">
                <section className="simulator-radios__title">
                    <h2>Plazo en meses</h2>
                </section>

                <section className="simulator-radios__fields">

                    
                    <input  type="radio"
                            name="month"
                            checked={months === 12}
                            onChange={()=> setMonths(12)}
                            id="12"
                            />
                    <label htmlFor="12"><span>12</span></label>

                    <input  type="radio"
                            name="month"
                            checked={months === 24}
                            onChange={()=> setMonths(24)}
                            id="24"
                            />
                    <label htmlFor="24"><span>24</span></label>

                   
                    <input  type="radio"
                            name="month"
                            checked={months === 36}
                            onChange={()=> setMonths(36)}
                            id="36"
                            />
                    <label htmlFor="36"><span>36</span></label>


                </section>


            </section>
            <section className="simulator-radios__numbers">
                <div className="simulator-radios__numbers__counter">
                    Pago mensual:
                    {/* <span>${((monto/months) + (monto*(tasa/100))).toFixed(2)}</span> */}
                    <span>${generateNumber(((monto/months) + (tasa/100)).toFixed(2))}</span>
                </div>

                <div className="simulator-radios__numbers__counter">
                    Comisión de apertura:
                    <span>$348.00</span>
                </div>

                <div className="simulator-radios__numbers__counter">
                    Monto neto Depositado:
                    {/* <span>${(monto*months)-comision}</span> */}
                    <span>${generateNumber(((monto*months)-comision).toFixed(2))}</span>
                </div>

                <div className="simulator-radios__numbers__counter">
                    Total pagado:
                    {/* <span>${(monto + (comision*(tasa/100))).toFixed(2)}</span> */}
                    {/* <span>${generateNumber((monto + ((comision*(tasa/100)+comision))).toFixed(2))}</span> */}
                    {/*------> POSIBLES */}
                    {/* <span>${generateNumber((monto + comision) + ((tasa/100) * monto))}</span> */}
                    <span>${generateNumber(((monto + comision) + ((tasa/100)*(monto + comision))).toFixed(2))}</span>
                </div>

                <div className="simulator-radios__numbers__counter">
                    CAT:
                    <span>15.71%</span>
                </div>
            </section>
            <section className="simulator-radios__btn">
                <Link href="/started">SOLICITAR MI CREDITO</Link>
            </section>
        </SimulatorContainer>
 
    );
};

export default Simulator;