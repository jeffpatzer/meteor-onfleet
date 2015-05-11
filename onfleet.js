// Write your package code here!

OnFleetAPI = {};

OnFleetAPI.Config = function(options){

  var self = this;

  if (!options) {
    throw new Error("OnFleetAPI options argument is required");
  }
  if (!options.key) {
    throw new Error("OnFleetAPI key in opotions argument is required");
  }

  var API_URL = "https://onfleet.com/api/v2/";
  OnFleetAPI.API_URL = API_URL;

  OnFleetAPI.key = options.key+":";

  return self;

};

OnFleetAPI.Auth = {
  "test": function(){
    var apiEndpoint = OnFleetAPI.API_URL+"auth/test";
    var apiKey = OnFleetAPI.key;
    try{
      var response = HTTP.get(apiEndpoint, {
        auth: apiKey
      });
      return response;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  }
}
