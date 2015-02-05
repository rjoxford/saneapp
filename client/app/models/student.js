import DS from 'ember-data';

export default DS.Model.extend({
    fullname: DS.attr('string'),
    score: DS.attr('number'),
    onField: DS.attr('boolean')
});
