import { useKeycloak } from '@react-keycloak/web'
import axios from 'axios'
export default function Index()
{
  const { keycloak } = useKeycloak()
  const getTodo = async (token) => {
    console.log(keycloak.token)
    return axios.get(`/justificatives`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
      console.log(response.data);
    })
  }
  const get = async (id, token) => {
    return axios.get(`/justificatives/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
      console.log(response.data);
    })
  }
  const post = async (token) => {
    return axios.post(`/justificatives`,{
      "rut_employee": "20457671-9",
      "date": "2022-02-02"
    },
     {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
      console.log(response.data);
    })
  }
    return (
      <div>
      {
        keycloak.authenticated ?
        <div>
          <h4>
            El usuario esta authenticado
          </h4>
          <button  onClick={() => keycloak.logout()}>Logout</button>
        </div>
        :
        <button  onClick={() => keycloak.login()}>Login</button>
      }
      <button onClick={()=>get(1,keycloak.token)}>GET 1</button>
      <button onClick={()=>getTodo(keycloak.token)}>GET TODO</button>
      <button onClick={()=>post(keycloak.token)}>POST</button>
    </div>
    );
}