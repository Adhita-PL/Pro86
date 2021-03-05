import React from 'react';
import {View, Text} from 'react-native';
import db from '../config';

export default class RecieverDetailsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: firebase.auth().currentUser.email,
            recieverId : this.props.navigation.getParam('details')["user_id"],
            requestId  : this.props.navigation.getParam('details')["request_id"],
            itemName   : this.props.navigation.getParam('details')["item_name"],
            reason_for_requesting : this.props.navigation.getParam('details')["reason_to_request"],
            exchangerName : '',
            exchangerContact: '',
            exchangerAddress : '',
            exchangerRequestDocId : '',
        }
    }
    getUserDetails() {
        db.collection("users").where("email_id", "==", this.state.recieverId).get() 
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.setState({
                    exchangerName : doc.data().first_name,
                    recieverContact : doc.data().contact,
                    exchangerAddress: doc.data().address 
                })
            })
        })

        db.collection('exchange_requests').where('request_id','==',this.state.requestId).get()
            .then(snapshot=>{
                snapshot.forEach(doc => {
                this.setState({recieverRequestDocId:doc.id})
            })
        })
    }
    addBarters = () => {
        db.collection("my_barters").add({
            item_name : this.state.itemName,
            requestId : this.state.requestId,
            requested_by : this.state.exchangerName,
            donorId : this.state.userId,
            request_status: "Donor Interested"
        })
    }
    render() {
        return(
            <View>
                <View style={{flex: 0.3}}>
                    <Card
                        title={"Item Information"}
                        titleStyle={{fontSize: 20}}>
                        <Card>
                            <Text style={{fontWeight: 'bold'}}>Name : {this.state.itemName}</Text>
                        </Card>   
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Reason : {this.state.reason_for_requesting}</Text>
                        </Card>
                    </Card>
                </View>
                <View style={{flex: 0.3}}>
                    <Card
                        title={"Exchanger Information"}
                        titleStyle={{fontSize: 20}}>
                        <Card>
                            <Text style={{fontWeight: 'bold'}}>Name : {this.state.exchangerName}</Text>
                        </Card>   
                        <Card>
                            <Text style={{fontWeight: 'bold'}}>Contact :{this.state.exchangerContact}</Text>   
                        </Card>
                        <Card>
                            <Text style={{fontWeight: 'bold'}}>Address :{this.state.exchangerAddress}</Text>   
                        </Card>
                    </Card>  
                </View>
                <View style={styles.buttonContainer}>
                    {this.state.recieverId !== this.state.userId
                        ?(
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{
                                this.addBarters()
                                this.props.navigation.navigate('MyBarters') 
                            }}>
                            <Text>I want to Exchange</Text>
                        </TouchableOpacity>
                        )
                        : null
                    }
                </View>
            </View>
        )
    }
}