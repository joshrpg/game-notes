function (context, args) { // target:#s.user.script
    // checks if the user didn't enter args, or if they didn't enter a target
    if (!args || !args.target) {
        return {
            ok: false,
            msg: "usage: user.ez_21_crack {target:#s.user.script}",
        };
    }

    if (args.target.call({}).includes('hardline')) {
        return {
            ok: false,
            msg: "\n`EHardline Required`",
        };
    }

    var key = ["open", "unlock", "release"];
    let r = '';
    let i = 0, l1 = '';

    while (!r.includes("LOCK_UNLOCKED")) {
        r = args.target.call({ez_21:key[i]});
        l1 = key[i];
        i++;
    }

    return "`M" + l1 + "`\n\n" + r;
}


