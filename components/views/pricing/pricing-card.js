import React from 'react';
import Link from 'next/link'

import { GridCardPrices, ItemList } from './pricing-styles';

const PricingCard = (props) => {

    const { item, switchPlan, i } = props
    

    return (
    
        <GridCardPrices>
            {item.popular &&(
                <div className="popular">POPULAR</div>
            )}

            <h2>{item.title}</h2>
            <h3>
                {switchPlan === 'month'
                    ?
                    <>
                        $ <span>{item.price}</span> /{switchPlan}
                    </>
                    :
                    <>
                        $ <span>{item.price*12}</span> /{switchPlan}
                    </>
                    
                }
            </h3>
            <ul>
                {item.list.map((item, i) =>{
                    return(
                        
                        <ItemList   key={i}
                                    disabled={item.disabled}
                                    >
                            {item.listItem}
                            {item.disabled ? null :
                                <img src="/assets/img/checked-pricing.png" alt="check" />
                            }
                        </ItemList>
                        
                    )
                })}
            </ul>

            <div className="btn">
                <Link href="/started">Sign up</Link>
            </div>
        </GridCardPrices>
        
    );
};

export default PricingCard;