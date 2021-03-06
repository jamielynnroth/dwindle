/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , lists = require('./routes/lists')
  , reports = require('./routes/reports')
  , http = require('http')
  , path = require('path')
  , mcapi = require('./node_modules/mailchimp-api/mailchimp');

var app = express();

// set MailChimp API key here
mc = new mcapi.Mailchimp('c766ea160ebc4bae0395211a25804b3a-us3');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.session({ secret: 'something'}));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(function(req, res, next){
    res.locals.error_flash = req.session.error_flash;
    req.session.error_flash = false;
    res.locals.success_flash = req.session.success_flash;
    req.session.success_flash = false;
    next();
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/lists', lists.list);
app.get('/lists/:id', lists.view);
app.post('/lists/:id/subscribe', lists.subscribe);
app.get('/reports', reports.list);
app.get('/reports/:id', reports.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
