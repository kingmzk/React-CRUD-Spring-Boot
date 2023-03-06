// import axios from "axios";

// const API_URL="http://localhost:3002/users"

// export const addUser = async(data) => {
//     try{
//     return  await  axios.post(API_URL, data);
//     }
//    catch(error)
//    {
//     console.log("Error While calling addUser API : ", error.message);
//    }
// }

// export const getUsers = async () => 
// {
//     try
//     {
//          return await axios.get(API_URL);
//     }
//     catch(error)
//     {
//      console.log("Error While calling getUsers API : ",error.message)
//     }
// }


// export const getUser = async (data) => 
// {
//     try
//     {
//          return await axios.get(`${API_URL}/${data}`);
//     }
//     catch(error)
//     {
//      console.log("Error While calling getUser API : ",error.message)
//     }
// }

// export const editUser = async(data,id) =>
// {
//     try{
//         return await axios.put(`${API_URL}/${id}`, data);
//     }
//     catch(error)
//     {
//         console.log("Error While calling EditUser API : ",error.message)
//     }
// }

// export const deleteUser = async(id) =>
// {
// try{
// return await axios.delete(`${API_URL}/${id}`)
// }catch(error)
//     {
//         console.log("Error While calling DeleteUser API : ",error.message)
//     }
// }










import axios from 'axios';

const usersUrl = 'http://localhost:8080';

export const getUsers = async (id) => {
    const url = id ? `${usersUrl}/users/${id}` : `${usersUrl}/users`;
    try {
      return await axios.get(url, { 
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.log('Error while calling getUsers api ', error);
    }
  }
  

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}/user`, user, {
    headers: { 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
}

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/user/${id}`, {
    headers: { 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
}

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/user`, user, {
    headers: { 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
}

