import DS from 'ember-data';

// this set the adapter to hook to rental-cars api for the location model
export default DS.JSONAPIAdapter.extend({
    host: 'https://www.rentalcars.com',
    numberOfResults: 6,
    urlForQuery (query, modelName) {
        switch(modelName) {
          case 'location':
              return `${this.host}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${this.numberOfResults}&solrTerm=${query.searchTerm}`
          default:
              return this._super(...arguments);
        }
    }
});
