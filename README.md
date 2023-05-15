Deployment guide
First time configuration:


Execute following commands locally
```sh
$ ssh-copy-id <YOUR_SERVER_LOGIN>@<DOMAIN>
$ cd <PATH_TO_REPO> && git remote add dokku dokku@<DOMAIN>:iot-frontend
```

Execute following command on a deployment server: 
```sh
$ cat ~/.ssh/authorized_keys | sudo dokku ssh-keys:add admin
```

For deployment: 
```sh
$ git push dokku main:master
```
