import styled from '@emotion/styled';
import { FormControl, FormGroup, InputLabel,Input, Typography,Button } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../service/api.js';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)
`
width:50%;
text-align: center;
margin : 5% auto 0 auto;     // 5%-up right-auto bottom-0 left-auto
& > div {                      //css above child div
    margin-top:20px;
}
`

const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const AddUser = () => {

const [user , setUser] = useState(initialValues)

const navigate = useNavigate();

const onValueChange = (e) =>{
//    console.log(e.target.name,"  ",e.target.value)
setUser({...user,[e.target.name]:e.target.value})  //key-value pair key is static so i have used [key] or else it will give me error
console.log(user)
}

const addUserDetails = async() =>
{
  await  addUser(user);
  navigate('/all');
     
}
    return(

        <Container >

<Typography variant='h4'>Add User</Typography>

            <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input  onChange={(e)=> onValueChange(e)} name="name" />
            </FormControl>

            <FormControl>
                 <InputLabel>UserName</InputLabel>
                 <Input onChange={(e)=> onValueChange(e)} name="username" />
            </FormControl>


            <FormControl>
                 <InputLabel>E-mail</InputLabel>
                 <Input onChange={(e)=> onValueChange(e)} name="email" />
            </FormControl>

            <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input onChange={(e)=> onValueChange(e)}  name="phone" />
            </FormControl>


            <FormControl >
                <Button variant='contained' onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>

        </Container>
    )
}

export default AddUser;