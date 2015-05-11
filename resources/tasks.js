/// Tasks ///

OnFleetAPI.Tasks = {

  "create": function(newTask){
    check(newTask, {
      merchant: String,
      executor: String,
      destination: String,
      recipients: [String],
      completeAfter: Match.Optional(Number),
      completeBefore: Match.Optional(Number),
      pickupTask: Match.Optional(Boolean),
      notes: Match.Optional(String),
      autoAssign: Match.Optional(Object),
    });

    if (newTask.autoAssign){
      check(newTask.autoAssign, {
        mode: String,
        team: Match.Optional(String)
      })
    }

    var apiEndpoint = OnFleetAPI.API_URL+"tasks";
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.post(apiEndpoint, {
        auth: apiKey,
        data: newTask
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "list": function(){
    var apiEndpoint = OnFleetAPI.API_URL+"tasks";
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
  "update": function(taskId, updateTask){
    check(taskId, String);
    check(updateTask, Object);

    var apiEndpoint = OnFleetAPI.API_URL+"tasks/"+taskId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.put(apiEndpoint, {
        auth: apiKey,
        data: updateTask
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "getSingleTask": function(taskId){
    check(taskId, String)

    var apiEndpoint = OnFleetAPI.API_URL+"tasks/"+taskId;
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
  "delete": function(taskId){
    check(taskId, String)

    var apiEndpoint = OnFleetAPI.API_URL+"tasks/"+taskId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.del(apiEndpoint, {
        auth: apiKey
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },

}
