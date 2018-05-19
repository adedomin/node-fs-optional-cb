Optional FS Callbacks
=====================

I discovered some breakage with node v10.x on some of my legacy projects.
While I investigate how to work around them, I just punted this module as a temporary "fix".

Note this changes node fs methods. I've only tested it using the node commonjs module loader as well.

Building
--------

run bin/generate-module.sh to make the index.js for this project.
The script requires `curl` and `jq`.
