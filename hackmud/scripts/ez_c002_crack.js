/* notes section

validated: true

*/
function (context, args) { // target:#s.user.script
    // checks if the user didn't enter args, or if they didn't enter a target
    if (!args || !args.target) {
        return {
            ok: false,
            msg: "usage: user.ez_c002_crack {target:#s.user.script}",
        };
    }

    let keys = [
        ["red","green"],
        ["orange","cyan"],
        ["yellow","blue"],
        ["green","red"],
        ["lime","purple"],
        ["blue", "yellow"],
        ["cyan","orange"],
        ["purple","lime"]
    ];

    let r = "";
    let i = 0;

    while (r.includes("LOCK_ERROR") || i < keys.length) {
        r = args.target.call({c002:keys[i][0], c002_complement:keys[i][1]});
        i++;
    }

    if (r.includes("LOCK_ERROR")) {
        r = "`ECouldn't Crack";
    }

    return r;
}
