/* notes section

validated: false

*/
function (context, args) { // target:#s.user.script
    // checks if the user didn't enter args, or if they didn't enter a target
    if (!args || !args.target) {
        return {
            ok: false,
            msg: "usage: user.ez_35_crack {target:#s.user.script}",
        };
    }

    var key1 = ["open", "unlock", "release"];
    var key2 = [0,1,2,3,4,5,6,7,8,9];
    let r = '';
    let i1 = 0;
    let i2 = 0;

    while (r.includes("LOCK_ERROR") || i1 < key1.length) {
        i2 = 0;

        while (r.includes("LOCK_ERROR") || i2 < key2.length) {
            r = args.target.call({ez_40:key1[i1], digit:[i2]});
            i2++;
        }

        i1++;
    }

    return r;
}


