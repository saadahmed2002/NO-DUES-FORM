import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { useGlobalContext } from '../context';

const HeroSection = () => {
    const { name, image } = useGlobalContext();
    return (
        <Wrapper>
          <div className="container grid grid-two-column">
            <div className="section-hero-data">
              <p className="hero-top-data">No Dues Portal</p>
              <h1 className="hero-heading">Final Year</h1>
              <p className="hero-para">
                We are Group 34 of Minor Project. And this is our website which basically targeted towards teachers and students related to their exams froms!! 
              </p>
              <Button className="btn hireme-btn">
                <NavLink to="/contact"> Fill NoDues </NavLink>
              </Button>
              
            </div>
    
            {/* for image  */}
            <div className="section-hero-image">
              <picture>
                <img src={image} alt="hero image" className="hero-image" />
              </picture>
            </div>
          </div>
        </Wrapper>
      );
    };

const Wrapper = styled.section`
    padding: 9rem 0;

    .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn {
        max-width: 17rem;

    }

    .hero-top-data {
        text-transform: uppercase;
        font-weight: 500;
        fonr-size: 1.5rem;
        
    }

    .hero-heading {
        text-transform: uppercase;
        font-size: 6.4rem;
    }


    .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }


    .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    picture {
        text-align: center;
    
    }

    .hero-img {
        max-width: 80%;
    }

`;



export default HeroSection;