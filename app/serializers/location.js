import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    // this serializes the json fetched from rental-cars api to conform to the expected JSON format for the model
    normalizeResponse (store, primaryModelClass, payload, id, requestType) {
        return {
            data: payload.results.docs.map((location) => {
                return {
                  id: location.bookingId,
                  type: 'location',
                  attributes: location
                }
            })
        }
    }
});
