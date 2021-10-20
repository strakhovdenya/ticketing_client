import {useState} from "react";
import axios from "axios";
import useRequest from "../../hooks/use-requesr";

const Singup = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const {doRequest, errors} = useRequest({
            url: '/api/users/signup',
            method: 'post',
            body: {
                email, password
            }
        });

        const onSubmit = async (e) => {
            e.preventDefault();

            doRequest();

        }

        return (
            <form onSubmit={onSubmit}>
                <h1>SingUP</h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" type="password"/>
                </div>
                {errors}
                <button className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
;

export default Singup;