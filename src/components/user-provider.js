import React, {Component, createContext} from 'react';
import {auth} from './firebase';
export const UserContext=createContext({user: null});

class UserProvider extends Component {
    state={user: null};
    unsubscribeFromAuth=null;
    componentDidMount= async ()=>{
        this.unsubscribeFromAuth=auth.onAuthStateChanged(
            user=>this.setState({user})
        );
        console.log(this.state.user);
    };
    componentWillUnmount=()=>{
        this.unsubscribeFromAuth();
    };
    render(){
        const {user}=this.state;
        console.log('in UserProvider ', user);
        const {children}=this.props;
        return (
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        )
    };
};

export default UserProvider;