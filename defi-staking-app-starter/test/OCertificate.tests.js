const {assert} = require('console')
const OCertificate = artifacts.require('OCertificate')
const IPFSStorage = artifacts.require('IPFSStorage')

require('chai')
.use(require('chai-as-promised'))
.should()

contract('OCertificate', (accounts) => {
    describe('Mock Certificate Deployment', async () => {
        it('matches name successfully', async () => {
            let ocertificate = await OCertificate.new()
            const certificatecount = await ocertificate.certificateCount()
            assert(certificatecount,'Mock Ocertificate Token')
        })
    })
})

contract('IPFSStorage', (accounts) => {
    describe('IPFS Push', async () => {
        it('matches name successfully', async () => {
            let ipfsstorage = await IPFSStorage.new()
            const filestored = await ipfsstorage.FileStored()
            assert(filestored,'Mock Ocertificate Token')
        })
    })
})