import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { fetchUserDataSuccess } from './actions';
import { connect } from 'react-redux';
function RandomUser({ userDataArray, fetchUserDataSuccess }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (userDataArray.length == 0) {
            fetchUserData();
        }
    }, [userDataArray]);

    const fetchUserData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                fetchUserDataSuccess(data.results[0]); // Диспатч действия для обновления состояния
            } else {
                console.error("Данные не найдены");
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleGoBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            fetchUserData();
        }
        console.log("Navigating back...");
    };

    const handleGoNext = () => {
        if (currentIndex < userDataArray.length - 1) {
            console.log("+1");
            setCurrentIndex(currentIndex + 1);
            
        } else {
            console.log("new");
            
            setCurrentIndex(currentIndex + 1);
            fetchUserData();
        }
        console.log("Navigating next...");
    };

    const currentUserData = userDataArray[currentIndex] || null;

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {currentUserData && (
                    <>
                        <Image source={{ uri: currentUserData.picture.large }} style={styles.profileImage} />
                        <Text style={styles.name}>{currentUserData && `${currentUserData.name.first} ${currentUserData.name.last}`}</Text>
                        <Text style={styles.detail}>{currentUserData && `Gender: ${currentUserData.gender}`}</Text>
                        <Text style={styles.detail}>{currentUserData && `Email: ${currentUserData.email}`}</Text>
                        <Text style={styles.detail}>{currentUserData && `Location: ${currentUserData.location.city}, ${currentUserData.location.state}, ${currentUserData.location.country}`}</Text>
                        <Text style={styles.detail}>{currentUserData && `Timezone: ${currentUserData.location.timezone.description}`}</Text>
                        <Text style={styles.detail}>{currentUserData && `Phone: ${currentUserData.phone}`}</Text>
                        <Text style={styles.detail}>{currentUserData && `Cell: ${currentUserData.cell}`}</Text>


                    </>
                )}
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={handleGoNext}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 75,
        marginBottom: 20,
        alignSelf: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    detail: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 20,
        textAlign: 'left',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
const mapStateToProps = (state) => ({
    userDataArray: state.root.userDataArray, 
  });
  
const mapDispatchToProps = (dispatch) => ({
    fetchUserDataSuccess: (userData) => dispatch(fetchUserDataSuccess(userData)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(RandomUser);
