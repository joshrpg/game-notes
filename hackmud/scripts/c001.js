function (context, args) { // target:#s.user.script
    let consts = (#db.f({ _id: 'consts' }).first()),
        key1 = consts.c,
        key2 = consts.d,
        r = "",
        i = 0,
        l1 = "",
        l2 = "";

    while (!r.includes("digit")) {
        r = args.target.call({ c001: key1[i] });
        l1 = key1[i];
        i++;
    }

    i = 0;
    while (!r.includes("LOCK_UNLOCKED")) {
        r = args.target.call({ c001: l1, color_digit: key2[i] });
        l2 = key2[i];
        i++;
    }

    return "`M" + l1 + " " + l2 + "`\n\n" + r;
}
