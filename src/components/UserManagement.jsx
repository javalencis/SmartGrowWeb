import { useEffect, useState } from "react"
import { headersUsers } from "../libs/headersTables"
import { Table } from "./Table"
import api from "../api/api"
import { Row } from "./Row"
import { UserRow } from "./UserRow"
import '../styles/TableUsers.scss'
import { UserRowExpended } from "./UserRowExpended"
export const UserManagement = () => {
    const [users, setUsers] = useState([])
    const getUsers = async() =>{
        const token = sessionStorage.getItem('token')
        const res = await api.get('/users/all',{
            headers:{
                Authorization:token
            }
        })
        if(res.data.status){
            setUsers(res.data.users)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])


    return (
        <section className="UserManagement">
            <button>
                Agregar Usuario
            </button>
            <Table
                headers={headersUsers}
                name="TableUsers"
                
            >
                {
                    users.map((user)=>(
                        <Row
                            key={user._id}
                            data={user}
                            RowType={UserRow}
                            expand
                            >
                                <UserRowExpended data={user}/>
                            </Row>
                    ))
                }
            </Table>
        </section>
    )
}
