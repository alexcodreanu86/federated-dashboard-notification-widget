(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;b=require("./googleOauthWrapper"),a=require("./googleEmailWrapper"),i=require("googleapis"),c=i.auth.OAuth2,h=i.gmail("v1"),m=["https://www.googleapis.com/auth/gmail.readonly","https://www.googleapis.com/auth/gmail.modify","https://mail.google.com/mail/feed/atom"],d=process.env.GMAIL_API_KEY,e=process.env.GMAIL_CLIENT_ID,f=process.env.GMAIL_CLIENT_SECRET,l=process.env.GMAIL_REDIRECT_URIS,j=new c(e,f,l),k=new b(j,m),g=new a({auth:j,resource:h.users.messages,maxResults:10}),exports.getPermission=function(a,b){var c;return c=k.generateAuthUrl(),b.redirect(c)},exports.googleRedirect=function(a){return k.getUserToken(a)},exports.getEmails=function(a,b){var c;return c=a.query.from,g.getEmailsFrom(c,function(a){return b.json(a)})},exports.getEmail=function(a,b){var c;return c=a.params.id,g.getFormatedEmailById(c,function(a){return b.json(a)})}}).call(this);