/* notes section

validated: false

*/
function (context, args) { // target:#s.t1npc.corp
    // checks if the user didn't enter args, or if they didn't enter a target
    if (!args || !args.target) {
        return {
            ok: false,
            msg: "usage: user.page_crawler {target:#s.t1npc.corp}",
        };
    }

    // searches a page (response) looking for regex matches, and storing them in an array
    function search(regex, response) {
        let resultOfMatch = [];
        let matches = regex.exec(response);
        while (matches) {
            if (matches.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            resultOfMatch.push(matches[1] || matches[2] || matches[3]);
            matches = regex.exec(response);
        }
        return [...new Set(resultOfMatch)];
    }
    
    // main source of output, also used for development purposes
    function pageCrawler() {
        var page = {};
        var response = args.target.call();

        // regex for pub pages
        var pubPages = search(/\s(\w+)\s\|/g, response);

        // get the navigation arg
        response = args.target.call({});
        var navArg = search(/\s(\w+):/g, response);

        // add the nav arg to the public pages to get the full arg:value string
        page[navArg] = pubPages[0];

        // gets the wall of text on the news page
        response = args.target.call(page);

        // search the page for relevant info
        var usernames = search(
            /([A-Za-z0-9_-]+)\sof\sproject|-{2}\s(\w+)\s/g,
            response
        );
        var projects = search(
            /continues\son\s([A-Za-z0-9_()]+)|on\s([A-Za-z0-9_()]+)\sprogress/g,
            response
        );

        // searches for the password
        page[navArg] = pubPages[1];
        response = args.target.call(page);
        let password = search(/\sstrategy\s(\w+)\s/g, response);

        // displays all of the info
        return [
            ["`T*** username(s) ***`", usernames],
            ["`T*** project(s) ***`", projects],
            ["`T*** password(s) ***`", password],
        ];
    }
    return pageCrawler();
}
