/* notes section

validated: false

*/
function (context, args) { // target:#s.user.script
    // checks if the user didn't enter args, or if they didn't enter a target
    if (!args || !args.target) {
        return {
            ok: false,
            msg: "usage: user.ez_40_crack {target:#s.user.script}",
        };
    }

    var key1 = ["open", "unlock", "release"];
    var key2 = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    let r = '';
    let i1 = 0;
    let i2 = 0;

    while (r.includes("LOCK_ERROR") || i1 < key1.length) {
        i2 = 0;

        while (r.includes("LOCK_ERROR") || i2 < key2.length) {
            r = args.target.call({ez_40:key1[i1], ez_prime:[i2]});
            i2++;
        }
        i1++;
    }

    if (r.includes("LOCK_ERROR")) {
        r = "couldn't crack"
    }

    return r;
}


