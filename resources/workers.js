
/// Workers ///

OnFleetAPI.Workers = {

  "create": function(newWorker){
    check(newWorker, Object);

    if (!newWorker.name && !newWorker.phone && !newWorker.teams){
      throw new Meteor.Error("You must provide a name, phone, and team list for a new worker with OnFleet.");
    }

    var apiEndpoint = OnFleetAPI.API_URL+"workers";
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.post(apiEndpoint, {
        auth: apiKey,
        data: newWorker
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "list": function(filter){
    check(filter, Match.Optional([String]))
    if (filter){
      filter = "filter="+filter.join();
    }
    var apiEndpoint = OnFleetAPI.API_URL+"workers";
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.get(apiEndpoint, {
        auth: apiKey,
        query: filter
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "getSingleWorker": function(workerId, filter){
    check(workerId, String);
    check(filter, Match.Optional([String]));
    if (filter){
      filter = "filter="+filter.join();
    }
    var apiEndpoint = OnFleetAPI.API_URL+"workers/"+workerId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.get(apiEndpoint, {
        auth: apiKey,
        query: filter
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "update": function(workerId, updateWorker){
    check(workerId, String);
    check(updateWorker, Object);
    var apiEndpoint = OnFleetAPI.API_URL+"workers/"+workerId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.put(apiEndpoint, {
        auth: apiKey,
        data: updateWorker
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "delete": function(workerId){
    check(workerId, String);
    var apiEndpoint = OnFleetAPI.API_URL+"workers/"+workerId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.del(apiEndpoint, {
        auth: apiKey,
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },

}
