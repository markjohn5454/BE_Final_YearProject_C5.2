import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
export default function LoginMain(){
    
    return(
        <div style={{ background:"black"}}>
            <Container1>
                    <Content1>
                        <div className="login-container1">  
                                <div className="LoginMain1">
                                    <Link to='/AgentLogin'>
                                        <button className="AgentLogin1" >
                                            Agent Login
                                         </button>
                                     </Link>
                                    <Link to='/StudentLogin'>
                                        <button className="StudentLogin1">
                                            Student Login
                                        </button>
                                    </Link>
                                </div>
                        </div>
                        <BgImage1/>
                    </Content1>
                </Container1>  
        </div>
    )
};
const Container1 = styled.section`
    overflow: hidden;
    display: display;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content1 = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height:100%;
`;

const BgImage1 = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/background-logo2.png");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA1 = styled.div`
   margin-bottom: 2vw;
   max-width: 650px;
   flex-wrap: wrap;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 0;
   align-items: center;
   text-align: center;
   margin-right: auto;
   margin-left: auto;
   transition-timing-function: ease-out;
   transition: opacity 0.2s;
   width: 100%;
`;

const CTALogoOne1 = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const StudentLogin1 = styled.a`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: 2px solid #4CAF50; /* Green border */
    color: #ffffff; /* White text */
    background-color: #4CAF50; /* Green background */
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.3s, color 0.3s;
    &:hover{
        background-color: #45a049;
    }
    &:active{
        background-color: #3e8e41;
    }
`;
const AgentLogin1 = styled.a`
    display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        border: 2px solid #4CAF50; /* Green border */
        color: #ffffff; /* White text */
        background-color: #4CAF50; /* Green background */
        border-radius: 5px; /* Rounded corners */
        transition: background-color 0.3s, color 0.3s;
    &:hover{
        background-color: #45a049;
    }
    &:active{
        background-color: #3e8e41;
    }
`;

const Description1 = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo1 = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

const LoginButton1 = styled.a`
    display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        border: 2px solid #4CAF50; /* Green border */
        color: #ffffff; /* White text */
        background-color: #4CAF50; /* Green background */
        border-radius: 5px; /* Rounded corners */
        transition: background-color 0.3s, color 0.3s;
    &:hover{
        background-color: #45a049;
    }
    &:active{
        background-color: #3e8e41;
    }
`;


 