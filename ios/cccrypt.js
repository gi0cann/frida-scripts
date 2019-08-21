//Interceptor.attach(Module.getExportByName('libcommonCrypto.dylib', 'CCCrypt'), {
Interceptor.attach(Module.getExportByName('libSystem.B.dylib', 'CCCrypt'), {
    onEnter: function (log, args, state) {
        log('CCCrypt(' +
            'op=' + args[0] +
            ', alg=' + args[1] +
            ', options=' + args[2] +
            ', key=' + args[3].readByteArray(16) +
            ', keyLength=' + args[4] +
            ', iv=' + args[5] +
            ', dataIn=' + args[6] +
            ', dataInLength=' + args[7] +
            ', dataOut=' + args[8] +
            ', dataOutAvailable=' + args[9] +
            ', dataOutMoved=' + args[10] +
            ')');
    },

    onLeave: function (log, retval, state) {
    }
});
