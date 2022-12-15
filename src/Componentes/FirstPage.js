import logo from "../images/Group 8.png"
import styled from "styled-components"
export default function FirstPage(){
    return (<>
        <Logo src={logo} />
        <Form1>
            <Input1 placeholder="email" type="email"  required/>
            <Input1 placeholder="senha" type="password" required/>
            <Button1> Entrar </Button1>
        </Form1>
        <P1>Não tem uma conta? Cadastre-se!</P1>
        </>
    )
}

const Logo = styled.img`
margin-top:68PX;
margin-left: 97px;
margin-right: 98px;
`
const Form1 = styled.form`
display:flex;
flex-direction:column;
`
const Input1 = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 10px;
margin-left: 36px;
margin-right: 36px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
`
const Button1 = styled.button`
width: 309px;
height: 49px;
background: #52B6FF;
border-radius: 5 px;
margin-top: 10px;
margin-left: 36px;
margin-right: 36px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`
const P1 = styled.p`
width: 232px;
height: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
margin-top: 19px;
margin-left: 74px;
color: #52B6FF;
`