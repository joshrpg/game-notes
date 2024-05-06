function (context, args) { // target:#s.user.script
    // checks if the user didn't enter args, or if they didn't enter a target
    if (!args || !args.target) {
        return {
            ok: false,
            msg: "usage: user.ez_35_crack {target:#s.user.script}",
        };
    }

    if (args.target.call({}).includes('hardline')) {
        return {
            ok: false,
            msg: "\n`EHardline Required`",
        };
    }

    let key1 = ["open", "unlock", "release"]
    ,key2 = [0,1,2,3,4,5,6,7,8,9]
    ,r = ''
    ,i = 0
    ,l1 = ''
    ,l2 = '';

    while (!r.includes("digit")) {
        r = args.target.call({ez_35:key1[i]});
        l1 = key1[i];
        i++;
    }

    i = 0;
    while (r.includes("LOCK_ERROR")) {
        r = args.target.call({ez_35:l1, digit:key2[i]});
        l2 = key2[i];
        i++;
    }

    return "`M" + l1 + " " + l2 + "`\n\n" + r;
}