function (context, args) { // target:#s.user.script
    if (args.target.call({}).includes("hardline")) {
        return {
            ok: false,
            msg: "\n`EHardline Required`",
        };
    }

    let key1 = ["open", "unlock", "release"]
        ,key2 = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
        ,r = ""
        ,i = 0
        ,l1 = ""
        ,l2 = "";

    while (!r.includes("ez_prime")) {
        r = args.target.call({ ez_40: key1[i] });
        l1 = key1[i];
        i++;
    }

    i = 0;
    while (!r.includes("LOCK_UNLOCKED")) {
        r = args.target.call({ ez_40: l1, ez_prime: key2[i] });
        l2 = key2[i];
        i++;
    }

    return "`M" + l1 + " " + l2 + "`\n\n" + r;
}