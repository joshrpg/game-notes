function (c, a) { // target:#s.user.script
    // checks if the user didn't enter a, or if they didn't enter a target
    let consts = (#db.f({ _id: 'consts' }).first()),
        key = consts.locket,
        r = "",
        i = 0,
        l1 = "",
        l2 = "";

    while (!r.includes("LOCK_UNLOCKED")) {
        r = a.target.call({ l0cket: key[i] });
        l1 = key[i];
        i++;
    }

    return "`M" + l1 + "`\n\n" + r;
}