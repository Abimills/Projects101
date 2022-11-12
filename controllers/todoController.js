let data = [
    {item:'get fish'},
    {item:'focus on your self'},
    {item:'do not give a shit'},

]
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){
    app.get('/todo',(req,res) => {
res.render('todo',{todos:data});


    })

    app.post('/todo',urlencodedParser, (req,res) => {

    data.push(req.body)
        res.json({data})
        


    })
    app.delete('/todo/:item', (req,res) => {
data = data.filter((todo) => {
    return todo.item.replace(/ /g, '-') !== req.params.item
})
res.json(data);
    })
}