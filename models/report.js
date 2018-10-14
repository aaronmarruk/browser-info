var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReportSchema = new Schema(
  {
    browserName: { type: String },
    browserVersion: { type: String },
    browserEngine: { type: String },
    operatingSystem: { type: String },
    operatingSystemVersion: { type: String },
    platform: { type: String },
    vendor: { type: String },
  }
);

// Virtual for author's URL
// AuthorSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/author/' + this._id;
// });

//Export model
module.exports = mongoose.model('Report', ReportSchema);