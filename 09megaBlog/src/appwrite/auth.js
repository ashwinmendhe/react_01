import conf from '../conf/conf'
import {Client, Account, ID} from "appwrite"

export class AuthService {
    client = new Client();
    constructor() {
        // console.log("7...", conf.appwritProjectId, conf.appwriteBucketId, conf.appwriteCollectionId, conf.appwriteUrl);
        
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwritProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password, name}) {
            try {
                const userAccount = await this.account.create(
                    {
                        userId: '[USER_ID]',
                        email: email,
                        password: password,
                        name : name
                    });
                    
                if (userAccount) {
                    // class another method
                    return this.login({email, password})
                }
                else {
                    return userAccount;
                }
            } catch (error) {
                throw error;
                
                
            }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(
                {
                    email: email,
                    password: password
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
            
        } catch (error) {
            console.log("Appwrite service:: getCurrentUser :: error", error)
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            
        }
    }
}


const authService = new AuthService()
export default authService