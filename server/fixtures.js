if (Heroes.find().count() === 0) {
    Heroes.insert({
        name: 'Figvan',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Heroes.insert({
        name: 'Meteor',
        url: 'http://meteor.com'
    });

    Heroes.insert({
        name: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}