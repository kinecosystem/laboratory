#!/bin/sh
set -e

# Edit the network.js file to change the network used
sed -i "s@https://horizon-testnet.stellar.org@https://horizon-playground.kininfrastructure.com@g" ./app*.js
sed -i "s@r.Networks.TESTNET@'Kin Playground Network ; June 2018'@g" ./app*.js

sed -i "s@https://horizon-testnet.stellar.org@https://horizon-ecosystem.kininfrastructure.com@g" ./app*.js
sed -i "s@r.Networks.PUBLIC@'Public Global Kin Ecosystem Network ; June 2018'@g" ./app*.js

# Edit the accountCreator.js file to change the friendbot service used
sed -i "s@https://friendbot.stellar.org@https://friendbot-kik.kininfrastructure.com@g" ./app*.js

