import React from 'react';
import Container from '../../layouts/containers';
import DropDown from '../../acordeon/dropdown'
import { itemsDropDown } from '../../../utils/items';
import { FaqContainer } from './faq-styles';

const Faq = (props) => {
    return (
        <>
        <div id="faq">
        <Container>
        <FaqContainer>

            <section className="faq-text">
                <h1>Frequently asked questions</h1>
                <p>
                    Have a presale question about our products and features? Or looking for a refound? We would love to hear what you concern is. 
                </p>
                <ul>
                    <li>Simple and Smarth HTML code.</li>
                    <li>Works reintegrated in any part of the layout.</li>
                    <li>Reuse the elements from one design to another.</li>
                </ul>
            </section>
            <section className="faq-dropdown">
                <DropDown items={itemsDropDown}/>
            </section>
        </FaqContainer>
        </Container> 
        </div> 
        </>
    );
};

export default Faq;