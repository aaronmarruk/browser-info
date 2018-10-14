var Report = require('../models/report')
var moment = require('moment');

exports.index = function(req, res, next) {
  res.render('index', { 
    params: {
      title: 'Browser Info',
      report: '',
    }
  });
}

exports.report = function(req, res, next) {
  const { id } = req.params;

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Report.findById(id, function (error, report) {
      if (error) {
        console.log('error', error);
        res.render('error', { 
          message: 'Whoops, error.',
          error,
        });
      } else {
        if (report) {
          res.render('index', { 
            params: {
              title: 'Browser Info',
              savedReport: report,
              savedTimestamp: moment(report._id.getTimestamp()).format('LL')
            }
          });
        }
      }
    });
  } else {
    res.render('error', { 
      message: 'Not found.',
      error: 'Looks like you are looking for a report which doesn\'t exist!',
    });
  }
}

exports.create = function (req, res) {
  let report = new Report(req.body);

  report.save(function (err, savedReport) {
    if (err) {
      return next(err);
    }
    res.send({ report: savedReport })
  })
};