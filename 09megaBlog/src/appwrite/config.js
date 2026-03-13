import conf from '../conf/conf.js'
import {Client, Account, ID, TablesDB, Storage, Query} from "appwrite"


export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwritProjectId);
        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: { 
                    title: title, 
                    content: content,
                    featuredImage: featuredImage,
                    status: status,
                    userId: userId
                }
            })
        } catch (error) {
            throw error; 
        }
    }
    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title: title, content: content, featuredImage: featuredImage, status: status }
        );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            
        }
    }
    async delelePost(slug) {
        try {
            await this.databases.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            })
            return true
        } catch (error) {
            console.log("Appwrite service :: delete Post :: error", error);   
            return false   
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            })
            
        } catch (error) {
            console.log("Appwrite service :: get rows data:: error", error);
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries: [
                    queries
                ]
            })
        } catch (error) {
            console.log("Appwrite service :: get one row data:: error", error);
            return false
        }
    }

    // file upload servicre
    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file
            })
        } catch (error) {
            console.log("Appwrite service :: upload file:: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })
        } catch (error) {
            console.log("Appwrite service :: delete file:: error", error);
            return false
        }
    }
    async getFilePreview(fileId){
        return await this.databases.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId
        })
    }
}

const service = new Service()
export default service
