chrome.webRequest.onAuthRequired.addListener(function (request) {
        var paramsRegexPattern = new RegExp(/authprx=(?<username>.+?):(?<password>.+?)$/g);
        if ((match = paramsRegexPattern.exec(request.url)) != null) {
            return {
                authCredentials: {
                    username: match.groups.username,
                    password: match.groups.password
                }
            }
        }
        return {};

    },
    {
        urls: ['<all_urls>']
    },
    ['blocking']
);
