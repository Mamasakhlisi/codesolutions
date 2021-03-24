import styled from 'styled-components'

export const StyledContainer = styled.div`
    box-shadow: 0px 0px 5px #F1F1F5;
`
export const StyledNav = styled.nav`
    width:1200px;
    max-width:100%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:7px;
    border-radius:3px;
    .first {
        display:flex;
        align-items:center;
    }
`
export const StyledUl = styled.ul`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-left:60px;
`

export const StyledLi = styled.li`
    list-style:none;
    padding:5px;
    display:flex;
        justify-content:center;
        align-items:center;
        margin-left:20px;
`

export const StyledIcon = styled.div`
            background-color:${p => p.bcolor};
        width:40px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:18px;
        margin-right:8px;
        img {
            width:23px;
            height:23px;
            background-color:#fff;
            border-radius:10px;
            padding:3px;
        }
`

export const StyledLogoContainer = styled.div`
    display:flex;
    align-items:center;
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight:100;
    }
    img {width:60px;}
`

export const StyledProfileLinks = styled.div`
    button{
        margin:5px;
        cursor:pointer;
    }
`

export const StyledSignIn = styled.button`
    padding:13px;
    border-radius:3px;
    border:1px solid ${p => p.theme.buttonBorderColor};
    background:#fff;
    transition:300ms;
    &:hover {
        background:#F1F1F5;
    }
`

export const StyledSignUp = styled.button`
    padding:13px;
    border-radius:3px;
    border:0;
    background: linear-gradient(rgb(255, 226, 159) 0%, rgb(255, 113, 154) 100%);
    color:#fff;
`