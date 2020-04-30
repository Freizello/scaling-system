const mongoose = require('mongoose'),
      shortid = require('shortid'),
      urlsSchema = new mongoose.Schema({
        url_id : {
          type: String,
          default: shortid.generate
        },
        original_url : {
          type : String,
          required: "original url is required",
          minlength: 1,
          maxlength: 255 
        }         
      });
// mongoose.model('Actor', schema, collectionName)
module.exports = mongoose.model('Url', urlsSchema, 'urlCollection')