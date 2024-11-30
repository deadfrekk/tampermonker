<strike>StarTube and V3 allows to "use" "older" versions of Youtube.

Early, mid and late 2012 Cosmic Panda theme on Startube has some quirks i didnt like.
With tampermonkey you can fix this.
Just copy the userscript code and make a new tampermonkey script with that text inside it.</strike>¨

Script was not loading when browsing youtube.
Fixed by implementing fix directly into StarTube's Userscript.

Lines added (21881 to 21891):

#sb-wrapper{
z-index: 999 !important;
}
.oz-default-panel-content{
min-height: 300px !important; /*costmetic change*/
}
@media screen and (max-width: 1200px) {
.site-center-aligned #appbar-guide-menu::before {
background: transparent !important;
    }
}


Link to original project: https://greasyfork.org/en/scripts/485622-startube
