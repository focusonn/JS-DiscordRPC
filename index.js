const RPC = require('discord-rpc');

const clientId = ''; // your bot client id and read readme.md
const client = new RPC.Client({ transport: 'ipc' });
const started = new Date();

const activity = {
    details: "Hey I'm Focus",
    state: "I love coding new Technologies",
    assets: {
        large_image: 'bindly',
        large_text: 'BindlySosicalAPP',
        small_image: 'bindlyv2',
        small_text: 'BindlySosicalAPP'
    },
    buttons: [
        { label: 'Bindly', url: 'https://discord.gg/D8KEd6UtYv' },
        { label: 'Demo Web', url: 'https://bindly-demo.vercel.app' }
    ],
    startTimestamp: started
};

client.on('ready', () => {
    client.request('SET_ACTIVITY', { pid: process.pid, activity });

    setInterval(() => {
        client.request('SET_ACTIVITY', { pid: process.pid, activity });
    }, 20000);

    console.log('Discord RPC connected and activity set.');
});

client.login({ clientId }).catch(console.error);

console.log('Starting Discord RPC...');
