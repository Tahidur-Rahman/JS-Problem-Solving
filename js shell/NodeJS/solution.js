var input = parseInt(readline());
while (input--) {
    var n = parseInt(readline())
    var half = n / 2
    if (half % 2 == 1) print("NO")
    else {
        var evenarr = [], oddarr = []
        for (var i = 2; i <= n; i += 2) {
            evenarr.push(i)
            oddarr.push(i - 1)
        }
        oddarr[half - 1] = oddarr[half - 1] + half
        print("YES")
        print(evenarr.join(" ")+" "+oddarr.join(" "))
    }
}