const DecisionHandler = require('./classes/decision_handler.js');
//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get(['/decision_handler'], function (req, res) {
    var screen = req.session.data["screen"]
    var ret = new DecisionHandler(req, res, screen)
});
router.get(['/originate'], function (req, res) {
    res.render('originate', {
    });
});

router.get(['/country-picker'], function (req, res) {
    const fs = require('fs')
    var country_list = JSON.parse(fs.readFileSync('app/data/location-autocomplete-canonical-list.json', 'utf8'))
    res.render('country-picker', {
        'country_list': country_list
    });
});

router.get(['/search'], function (req, res) {
    res.render('search', {
    });
});

router.get(['/results-chapter'], function (req, res) {
    res.render('results-chapter', {
    });
});