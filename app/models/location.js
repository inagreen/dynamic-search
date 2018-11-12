import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    name: DS.attr('string'),
    iata: DS.attr('string'),
    placeType: DS.attr('string'),
    city: DS.attr('string'),
    region: DS.attr('string'),
    country: DS.attr('string'),

    // computed property to display location name, and append airport code or iata if place type is an airport
    locationName: computed('name', 'iata', 'placeType', function() {
      return this.placeType == 'A' ? `${this.name} (${this.iata})` : this.name;
    }),

    // computed property of region name to append, city, region and country based on place type
    regionName: computed('placeType', 'city', 'region', 'country', function() {
      switch(this.placeType) {
        case 'A':
          return `${this.city}, ${this.country}`;
        case 'B':
          return `${this.region}, ${this.country}`;
        case 'C':
          return `${this.city}, ${this.region}, ${this.country}`;
      }
    })

});
