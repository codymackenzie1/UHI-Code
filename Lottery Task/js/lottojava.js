var lottoNumbers = []
    lottoNumbers[0] = [Math.floor((Math.random() * 100) + 1)]
    lottoNumbers[1] = [Math.floor((Math.random() * 100) + 1)]
    lottoNumbers[2] = [Math.floor((Math.random() * 100) + 1)]
    lottoNumbers[3] = [Math.floor((Math.random() * 100) + 1)]
    lottoNumbers[4] = [Math.floor((Math.random() * 100) + 1)]
    lottoNumbers[5] = [Math.floor((Math.random() * 100) + 1)]


    lottoNumbers.sort(function(a, b){return a-b});

    document.write("The six lotto numbers are ")

    for (i = 0; i <lottoNumbers.length; i++) {
        document.write(lottoNumbers[i] + ", ");
    }
    