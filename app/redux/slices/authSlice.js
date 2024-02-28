import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    error: null,
    user: null
}

export const addAddressData = createAsyncThunk(
    'auth/addressAdd',
    async (data) => {
    
            await firestore()
                .collection('users')
                .doc(data.uid)
                .update({
                    address: firestore.FieldValue.arrayUnion(data.address)
                })
                .then(() => {
                    console.log('user data update successfully');
                });
            let userData;

            await firestore()
                .collection('users')
                .doc(data.uid)
                .get()
                .then(documentSnapshot => {
                    console.log('User exists:', documentSnapshot.exists);
                    if (documentSnapshot.exists) {
                        userData = documentSnapshot.data();
                    }
                })
            return { ...userData, id: data.uid }
    }

)

export const deleteAddressData = createAsyncThunk(
    'auth/addressDelete',
    async (data) => {
        console.log(data.id, 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
        try {
            await firestore()
                .collection('users')
                .doc(data.id)
                .update({
                    address: firestore.FieldValue.arrayRemove(data.data)
                })
                .then(() => {
                    console.log('user data update successfully');
                });
        } catch (err) {
            console.log(err);
            throw (err);
        }

    }
)

export const googleSingin = createAsyncThunk(
    'auth/googleSingin',
    async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const user = await GoogleSignin.signIn()
        console.log(user, 'userrrrrrrrrrrrrrrrrrrrrrrrrrr');

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
        console.log(googleCredential, 'tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }
)

export const singEmialPass = createAsyncThunk(
    'auth/singEmialPass',
    async (data) => {
        auth()
            .createUserWithEmailAndPassword(data.email, data.Password)
            .then(async (userCredential) => {

                await firestore()
                    .collection('users')
                    .doc(userCredential.user.uid)
                    .set({ name: data.username, email: data.email, emailVerified: false, createAt: new Date().toString(), updateAt: new Date().toString() })
                    .then(() => {
                        console.log('ok');
                    });
                await userCredential.user.sendEmailVerification()
                console.log('User account created & signed in!');
            })

            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
)

export const facebookauth = createAsyncThunk(
    'auth/facebookauth',
    async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccessToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            const userCredential = await auth().signInWithCredential(facebookCredential);

            // Sign-in the user with the credential
            return userCredential.user;;
        } catch (err) {
            console.log(err);
            throw err;
        }

    }
)

export const logingEmail = createAsyncThunk(
    'auth/logingEmail',
    async (data) => {
        const user = await auth()
            .signInWithEmailAndPassword(data.email, data.Password)
            .then(async (user) => {
                console.log('Account is Singin & Login!', user);
                if (user.user.emailVerified) {
                    console.log('User account login!!');

                    await firestore()
                        .collection('users')
                        .doc(user.user.uid)
                        .update({ emailVerified: true })
                        .then(() => {
                            console.log('User updated!');
                        });

                    return user.user
                } else {
                    console.log('Verify Your Email!',);
                }

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                if (error.code == 'auth/invalid-credential') {
                    console.log('email & password somthing wrong !!');
                }
            });
        return user;
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logingEmail.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.error = null
        })

        builder.addCase(googleSingin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(facebookauth.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(addAddressData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.user = action.payload;
        })

        builder.addCase(deleteAddressData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.user = action.payload;
        })

    }
})
export default authSlice.reducer;