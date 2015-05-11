/// Recipients ///

OnFleetAPI.Recipients = {

  "create": function(newRec){
    check(newRec, {
      name: String,
      phone: String,
      notes: Match.Optional(String),
      skipSMSNotifications: Match.Optional(Boolean)
    });


    var apiEndpoint = OnFleetAPI.API_URL+"recipients";
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.post(apiEndpoint, {
        auth: apiKey,
        data: newRec
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "update": function(recId, newRec){
    check(recId, String)
    check(newRec, {
      name: Match.Optional(String),
      phone: Match.Optional(String),
      notes: Match.Optional(String),
      skipSMSNotifications: Match.Optional(Boolean)
    });


    var apiEndpoint = OnFleetAPI.API_URL+"recipients/"+recId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.put(apiEndpoint, {
        auth: apiKey,
        data: newRec
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "find": function(recKey, recValue){
    check(recKey, String)
    check(recValue, String)

    var apiEndpoint = OnFleetAPI.API_URL+"recipients/"+recKey+"/"+encodeURIComponent(recValue);
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.get(apiEndpoint, {
        auth: apiKey
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "getSingleRecipient": function(recId){
    check(recId, String)

    var apiEndpoint = OnFleetAPI.API_URL+"recipients/"+recId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.get(apiEndpoint, {
        auth: apiKey,
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },

}
