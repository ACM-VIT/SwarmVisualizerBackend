if(!process.env.HEROKU)
    module.exports.keys=require('./keys')
else{
    module.exports.keys={
        
    }
}