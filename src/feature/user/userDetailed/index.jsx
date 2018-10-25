import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import {connect} from 'react-redux'

import {firestoreConnect, isEmpty} from 'react-redux-firebase'
import {compose} from 'redux'
import  UserdetailedHeader from './userDetailedHeader'
import UserDetailedDescription from './userDetailedDescription'
import UserDetailedSideBar from './userdetailedSidebar'
import UserDetailedPhotos from './userDetailedPhotos'
import UserDetailedEvent from './userDetailedEvent'
import {UserDetailedQuery} from '../userQuery'




const  mapState =(state, ownProps)=> {
    let userUid = null;
    let profile= {};

            if(ownProps.match.params.id === state.auth.uid)
            {
            profile = state.firebase.profile 
            }
            else {
                profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0]
                userUid = ownProps.match.params.id;
            }

     return {
        profile,
        userUid, 
        auth:state.firebase.auth,
        photos:state.firestore.ordered.photos
     }
   
}

class UserDetailedPage extends Component {

    render() {
       const  {profile, auth, photos, match} = this.props;
       const isCurrentUser = auth.uid === match.params.id;
        return (
            <Grid>
              <UserdetailedHeader profile={profile}/>
              <UserDetailedDescription profile={profile}/>
              <UserDetailedSideBar isCurrentUser={isCurrentUser}/>
              <UserDetailedPhotos photos={photos}/>
              <UserDetailedEvent/>
              
            </Grid>

        );
    }
}

export default compose(
    connect(mapState),
  firestoreConnect((auth, userUid )=> UserDetailedQuery(auth, userUid))
)  (UserDetailedPage);