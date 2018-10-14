var Report = require('../../models/report')
var moment = require('moment');

exports.create = function (req, res) {
  let report = new Report(req.body);

  report.save(function (err, savedReport) {
    if (err) {
      return next(err);
    }
    res.send({ 
      report: savedReport, 
      timestamp: moment(savedReport._id.getTimestamp()).format('LL')
    })
  })
};
