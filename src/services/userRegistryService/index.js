const db = require('../../db/index');


class UserRegistryService {
    async fetchAllContacts() {
        const contacts = await db('contacts');
        return contacts;
    }
    async createContact(data){
        const {
            name,
            email,
            phone
        } = data;


        const [createdContact] = await db('contacts').insert({
            name,
            email,
            phone
        }).returning('*');

        return createdContact;
    }
    async updateContact(id, data){
        // interface IData {
        //     name?: string;
        //     email?: string;
        //     phone?: string;
        // }
        const [editedContact] = await db('contacts').where({id}).update(data).returning('*');
        return editedContact;
    }
    async deleteContact(id){
        const [deletedContact] = await db('contacts').where({id}).del().returning('*');
        return deletedContact
    }
}

module.exports = new UserRegistryService();