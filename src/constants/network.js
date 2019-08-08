const NETWORK = {
  available: {
    public: {
      horizonURL: 'https://horizon-block-explorer.kininfrastructure.com',
      networkPassphrase: 'Kin Mainnet ; December 2018',
      whitelistManager: 'GCPGMBNS42RQODVI7JCIRZDOO2PKS3BDNHEL45YMB7PLGJP65FS7U4UV'
    },
    test: {
      horizonURL: 'https://horizon-testnet.kininfrastructure.com',
      networkPassphrase: 'Kin Testnet ; December 2018',
      whitelistManager: 'GD7DQHW4C5BGKGBKD3HXTXX4QPUIRZXREIR5UIPSVI7EI6LEXHW7SZBT'
    }
  },
  defaultName: 'public',
};
export default NETWORK;
