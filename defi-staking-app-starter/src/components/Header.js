import React,{Component} from 'react'
import { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase"
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails , setSignOutState} from "../features/user/userSlice";
import { Link } from 'react-router-dom'

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);


    useEffect(() => {
        // If userName changes, perform actions based on its value
        if (userName) {
          signOut(auth)
            .then(() => {
              dispatch(setSignOutState());
              navigate('/');
            })
            .catch((err) => alert(err.message));
        }
      }, [userName]);
    
    //   const handleAuth = async () => {
    //     try {
    //       if (!userName) {
    //         const result = await signInWithPopup(auth, provider);
    //         setUser(result.user); // Set user state or perform other actions
    //       }
    //     } catch (error) {
    //       alert(error.message);
    //     }
    //   };
    
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({ 
                name : user.displayName,
                email : user.email,
                photo : user.photoURL,
            })
        );
    };

    return(
        <Nav>
            <Logo>
                <img src="/images/Black Gold White Luxury Royal Crown Logo.png" alt=""/>
            </Logo>

            
        {/* <LoginButton>Login</LoginButton> */}
        {/* <div><Accountno> Account No:{props.account}</Accountno></div> */}
        <Link to='/LoginMain'>
            <button className="LoginButton">
                Login
            </button>
        </Link>
        {/* <div className="account_number">{this.props.account}</div> */}
            {/* <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME"/>
                    <span>HOME</span>
                </a>
                <a href="/search">
                    <img src="/images/search-icon.svg" alt="SEARCH"/>
                    <span>SEARCH</span>
                </a>
                <a href="/certificategeneration">
                    <img src="/images/watchlist-icon.svg" alt="GENERATE"/>
                    <span>GENERATE</span>
                </a>
                <a href="/certificateverification">
                    <img src="/images/movie-icon.svg" alt="VERIFY"/>
                    <span>VERIFY</span>
                </a>
                <a href="/certificatemanagement">
                    <img src="/images/original-icon.svg" alt="MANAGE"/>
                    <span>MANAGE</span>
                </a>
                <a href="/evault">
                    <img src="/images/series-icon.svg" alt="EVAULT"/>
                    <span>E-VAULT</span>
                </a>
                <a href="/about">
                    <img src="/images/group-icon.png" alt="ABOUT"/>
                    <span>ABOUT</span>
                </a>
            </NavMenu> */}

                <SignOut>
                    <UserImg src={userPhoto} alt={userName} />
                    <DropDown>
                    <span>Sign out</span>
                    </DropDown>
                </SignOut>

    
        </Nav>
        
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 170px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img
    {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display:flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a
    {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img
        {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span
        {
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative; 

        &:before 
        { 
            display: block;
            background-color: rgb(249,249,249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }

    &:hover
    {
        span:before
        {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}
    @media (max-width: 768px)
    {
        display: none;
    }
`;

const LoginButton = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover
    {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const Accountno = styled.div`
position: relative;
  height: 50px;
  color:white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`
;

export default Header;
