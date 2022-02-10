const db = require('../../../db/index')

module.exports = {
    Query: {
        contacts: async () => {
            const contacts = await db('contacts');
            return contacts;
        }
    },
    Mutation: {
        createContact: async (_, {data}) => {
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
        },
        updateContact: async (_, {id, data}) => {
            // interface IData {
            //     name?: string;
            //     email?: string;
            //     phone?: string;
            // }
            const [editedContact] = await db('contacts').where({id}).update(data).returning('*');

            return editedContact;
        },
        deleteContact: async (_, { id }) => {
            console.log({id})

            const [deletedContact] = await db('contacts').where({id}).del().returning('*');

            console.log({deletedContact})

            return deletedContact
        }
    }
} 