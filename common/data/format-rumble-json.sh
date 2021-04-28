#!/bin/sh

echo "Sorting units by id"
jq --sort-keys '.units |= sort_by(.id)' rumble.json > tmp2.json

echo "Reducing whitespace"
sed -i -E  -e ':a' -e 'N' -e '$!ba' \
-e 's/\n                / /g' \
-e 's/\n              (],?)/ \1/g' \
-e 's/\n              (},?)/ \1/g' \
tmp2.json
sed -i -E \
-e 's/([[,])  /\1/g' \
tmp2.json

echo "replacing old file"
mv tmp2.json rumble.json

echo "done!"
