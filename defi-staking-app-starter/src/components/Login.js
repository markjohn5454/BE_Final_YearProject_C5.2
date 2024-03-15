import styled from "styled-components";
import "../index.css";

const Login = (props) => {
    return(
        <div style={{ background:"black"}}>
            <Container>
                <Content>
                    <CTA>
                        <CTALogoOne src="/images/Black Gold White Luxury Royal Crown Logo.png" alt=""/>
                        <SignUp>
                            Get All There
                        </SignUp>
                        <Description>
                        "Welcome to KryptoNica: Where Trust Meets Technology! Seamlessly generate and securely validate certificates with our cutting-edge platform powered by Hyperledger Fabric and IPFS. Revolutionize authenticity and accessibility in certification processes like never before!"
                        </Description>
                        <CTALogoTwo src="/images/LOGO FOR KRYPTONICA (13).png" alt=""/>
                    </CTA>
                    <BgImage/>
                </Content>
            </Container>
            </div>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: display;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
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

const BgImage = styled.div`
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

const CTA = styled.div`
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

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid Transparent;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;