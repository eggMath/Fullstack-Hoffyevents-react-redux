import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import  UserdetailedHeader from './userDetailedHeader'
import UserDetailedDescription from './userDetailedDescription'
import UserDetailedSideBar from './userdetailedSidebar'
import UserDetailedPhotos from './userDetailedPhotos'
import UserDetailedEvent from './userDetailedEvent'

class UserDetailedPage extends Component {

    render() {

        return (
            <Grid>
              <UserdetailedHeader/>
              <UserDetailedDescription/>
              <UserDetailedSideBar/>
              <UserDetailedPhotos/>
              <UserDetailedEvent/>
              
            </Grid>

        );
    }
}

export default UserDetailedPage;