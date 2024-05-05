/* notes section

validated: false

*/
function (context, args) { // target:#s.user.script
    // checks if the user didn't enter args, or if they didn't enter a target
    if (!args || !args.target) {
        return {
            ok: false,
            msg: "usage: user.ez_21_crack {target:#s.user.script}",
        };
    }

    var key1 = ["open", "unlock", "release"];
    let r = '';
    let i = 0;

    while (r.includes("LOCK_ERROR") || i < key1.length) {
        r = args.target.call({ez_40:key1[i]});
        i++;
    }

    return r;
}


