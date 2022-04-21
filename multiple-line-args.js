
var prompt = require('prompt');

var prompt_attributes = [{ name: 'input1'},{ name: 'input2' },{ name: 'input3' }];
prompt.start();
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        
        console.log("o/p->1",result.input1)
        console.log("o/p->2",result.input2)
        console.log("o/p->3",result.input3)

    }
});