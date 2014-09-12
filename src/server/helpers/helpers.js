//////////////////////////////////////////////////
// Helpers
//////////////////////////////////////////////////

var sendBack = function (req, res, error, response, json) {
    if (error) {
        console.error(error);
    } else if (response === 200) {
        res.type('application/json');
        res.send(200, json);
    } else {
        console.log(response);
    }
};

module.exports = {
    sendBack: sendBack  
};
