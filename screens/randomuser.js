import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function RandomUser({navigation}) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setUserData(data.results[0]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoBack = () => {
        fetchUserData();
        console.log("Navigating back...");
    };

    const handleGoNext = () => {
        fetchUserData();
        console.log("Navigating next...");
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {userData && (
                    <>
                        <Image source={{ uri: userData.picture.large }} style={styles.profileImage} />
                        <Text style={styles.name}>{`${userData.name.first} ${userData.name.last}`}</Text>
                        <Text style={styles.detail}>{`Gender: ${userData.gender}`}</Text>
                        <Text style={styles.detail}>{`Email: ${userData.email}`}</Text>
                        <Text style={styles.detail}>{`Location: ${userData.location.city}, ${userData.location.state}, ${userData.location.country}`}</Text>
                        <Text style={styles.detail}>{`Timezone: ${userData.location.timezone.description}`}</Text>
                        <Text style={styles.detail}>{`Phone: ${userData.phone}`}</Text>
                        <Text style={styles.detail}>{`Cell: ${userData.cell}`}</Text>
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
}

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

export default RandomUser;
