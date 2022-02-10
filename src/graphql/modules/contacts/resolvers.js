const db = require('../../../db/index');
const userRegistry = require('../../../services/userRegistryService');

module.exports = {
    Query: {
        contacts: async () => userRegistry.fetchAllContacts()
    },
    Mutation: {
        createContact: async (_, {data}) => userRegistry.createContact(data),
        updateContact: async (_, {id, data}) => userRegistry.updateContact(id, data),
        deleteContact: async (_, { id }) => userRegistry.deleteContact(id)
    }
} 