#pdfyank 

for when you want to yank all the things into a bloated binary format
that just happens to look pretty nice most of the time!

pdf is the script that will grab a webpage and turn it into a pdf then store it accordingly. 

this relies on phantomjs, as it is in fact using the rasterize.js script included in the examples with the release

the js folder just contains that script.

yank is a web app that i am working on, powered by dancer (_dance dance_) that will allow someone to submit a series of urls and get fed back one conglomerate document. this will more than likely rely on poppler as it will use the pdfunite binary in order to join the pdfs together.

so yeah
