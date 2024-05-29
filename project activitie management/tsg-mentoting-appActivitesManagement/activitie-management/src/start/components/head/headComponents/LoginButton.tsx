import { useState } from 'react';
import Button from '@mui/material/Button';
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import { Drawer, Link } from '@mui/material';
import { Login } from './loginButtonComponents/Login';
import { Regist } from './loginButtonComponents/Regist';




export const LoginButton = () => {

  const [isShow, setIsShow] = useState(false)
  const [loginORregister, setloginORregister] = useState(<></>)
  const [textRegist, setTextRegist] = useState("")
  
  const onClickQuestion = () => {

    textRegist === "Don't have an account? Sign Up" ? setTextRegist("have an account? Sign In"): setTextRegist( "Don't have an account? Sign Up")
    
    textRegist === "have an account? Sign In" && setloginORregister(<Login/>)
    textRegist === "Don't have an account? Sign Up" && setloginORregister(<Regist/>)
  }
  
  return (
    <>
      <Button
        variant='contained'
        endIcon={<BadgeSharpIcon />}
        sx={{ overflow: "hidden" }}
        onClick={() => {
          setTextRegist("Don't have an account? Sign Up")
          setloginORregister(<Login />)
          setIsShow(true)}}
      >
        LOGIN
      </Button>

      <Drawer
        open={isShow}
        onClose={() => {
          setIsShow(false)
         
        }}
        anchor='right'
      >
        {loginORregister}

        
        <Button
          variant='text'
          onClick={ onClickQuestion }
        >
          <Link href="#" variant="body2" >
            {textRegist}
          </Link>

        </Button>


      </Drawer>
    </>
  )
}