import styled from '@emotion/styled';
import { FormControl, FormGroup, InputLabel,Input, Typography,Button } from '@mui/material';
import { useState , useEffect} from 'react';
import { getUser,editUser } from '../service/api.js';
import { useNavigate,useParams} from 'react-router-dom';

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

const EditUser = () => {

const [user , setUser] = useState(initialValues)

const navigate = useNavigate();

const {id}  = useParams();

useEffect(() => {
  getUserData();
},[])

const getUserData = async() =>
{
    let response =  await getUser(id)
    // console.log(response);
    setUser(response.data);
}




const onValueChange = (e) =>{
//    console.log(e.target.name,"  ",e.target.value)
setUser({...user,[e.target.name]:e.target.value})  //key-value pair key is static so i have used [key] or else it will give me error
console.log(user)
}

const addUserDetails = async() =>
{
  await  editUser(user,id);
  navigate('/all');
     
}
    return(

        <Container >

<Typography variant='h4'>Edit User</Typography>

            <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input  onChange={(e)=> onValueChange(e)} name="name" value={user.name} />
            </FormControl>

            <FormControl>
                 <InputLabel>UserName</InputLabel>
                 <Input onChange={(e)=> onValueChange(e)} name="username" value={user.username}/>
            </FormControl>


            <FormControl>
                 <InputLabel>E-mail</InputLabel>
                 <Input onChange={(e)=> onValueChange(e)} name="email" value={user.email}/>
            </FormControl>

            <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input onChange={(e)=> onValueChange(e)}  name="phone" value={user.phone}/>
            </FormControl>


            <FormControl >
                <Button variant='contained' onClick={()=>addUserDetails()}>Edit User</Button>
            </FormControl>

        </Container>
    )
}

export default EditUser;