function (context, args) { // target:#s.user.script
    // checks if the user didn't enter args, or if they didn't enter a target
    let consts = (#db.f({ _id: 'consts' }).first()),
        key = consts.c,
        r = "",
        i = 0,
        l1 = "",
        l2 = "";

    while (!r.includes("LOCK_UNLOCKED")) {
        r = args.target.call({ c002: key[i], c002_complement: key[(i+4)%8] });
        l1 = key[i];
        l2 = key[(i+4)%8];
        i++;
    }

    return "`M" + l1 + " " + l2 + "`\n\n" + r;
}
