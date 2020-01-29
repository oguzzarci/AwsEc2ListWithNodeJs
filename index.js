var AWS = require('aws-sdk');

var ec2 = new AWS.EC2({apiVersion: '2016-11-15',region: 'eu-west-1'})
var instances = [];

getEc2List();

function getEc2List(){

    var params = {};
        ec2.describeInstances(params, function(err, response) {
            if (err){
                console.log(err, err.stack);
            } 
            else {
                ec2ListBuilder(response);  
            }        
        });
    }

function ec2ListBuilder(response){
    instances.push(response); 
    console.log(JSON.stringify(instances[0]['Reservations']));
}