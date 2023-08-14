const { Events, Client, version } = require('discord.js');
const { dev } = require('../main');
const { currentversion, vernote } = require('../commands/misc/update');
const fs = require('fs');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        let currentchannel = '1140516802925957140'
		console.log(`logged as ${client.user.tag}`);
        
        if (dev) {
            currentchannel = '1140516802925957140'
            client.channels.fetch('1140516802925957140')
            .then(channel => {
                channel.send(`Bot running at version ${currentversion}.`)
                channel.send(`Warning! Running in testing mode.`)
            })
        } else {
            currentchannel = '1140249126508957778'
            client.channels.fetch('1140249126508957778')
            .then(channel => {
                channel.send(`Bot running at version ${currentversion}.`)
            })
        }
        
        
        let json = fs.readFileSync('./data.json', 'utf8')
        let persistent = JSON.parse(json)
        console.log(persistent)
        if (persistent.version != currentversion) {
            client.channels.fetch(currentchannel)
            .then(channel => {
                channel.send(`Version change detected, Version note: ${vernote}`)
            })
        }
    
        const jsonWrite = JSON.stringify({
            version: currentversion
        })

        fs.writeFile('./data.json', jsonWrite, err => {
            if (err) {
                console.error(err)
                client.channels.fetch(currentchannel)
                .then(channel => {
                    channel.send('Error writing to a critical file! (persistent.json)')
                })
            }
            console.log(jsonWrite)
        })
        
	},
};