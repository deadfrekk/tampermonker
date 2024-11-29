var css = new function()
{
    function addStyleSheet()
    {
        let head = document.head;
        let style = document.createElement("style");

        head.appendChild(style);
    }

    this.insert = function(rule)
    {
        if(document.styleSheets.length == 0) { addStyleSheet(); }

        let sheet = document.styleSheets[document.styleSheets.length - 1];
        let rules = sheet.rules;

        sheet.insertRule(rule, rules.length);
    }
}

css.insert("@media screen and (max-width: 1200px) {.site-center-aligned #appbar-guidemenu:after {content: '';position: absolute;top: 0;right: 5px;width: 5px;height: 100%;background: transparent;box-shadow: 5px 0 15px 5px rgb(0 0 0 / 10%);z-index: -1;}.site-center-aligned #appbar-guide-menu:before {content: '';position: absolute;top: 0;right: 5px;width: 16px;height: 100%;background: rgba(0,0,0,0);}}");
