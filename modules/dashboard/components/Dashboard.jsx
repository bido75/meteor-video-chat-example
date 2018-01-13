import React from 'react';
import { Admin, User } from '../';

import { DashboardComponent }  from '../';
import { Roles } from 'meteor/alanning:roles';
import { withTracker } from 'meteor/react-meteor-data';
class Component extends React.Component{
    render(){
        if(this.props.isAdmin)
            return <Admin/>;
        else return <User/>;

    }
}



const Container =  withTracker(() => {
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP);
    return {
        isAdmin
    };
})(Component);
export {
    Container, Component
}