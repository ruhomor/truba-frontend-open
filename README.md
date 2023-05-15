Deployment guide
First time configuration:


Execute following commands locally 
$ ssh-copy-id <YOUR_SERVER_LOGIN>@<DOMAIN>
$ cd <PATH_TO_REPO> && git remote add dokku dokku@<DOMAIN>:iot-frontend


Execute following command on a deployment server: 
$ cat ~/.ssh/authorized_keys | sudo dokku ssh-keys:add admin


For deployment: 
$ git push dokku main:master