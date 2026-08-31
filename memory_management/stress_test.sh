#!/bin/bash
target=${1:-http://localhost:3000}
while true #loop forever, until ctrl+c pressed,
do
    for i in $(seq 100) #perform the inner command  100 times
    do
        curl $target > /dev/null & # send out a curl request, the & 
    done
    
    wait # after 100 requests are send out, wait for their processes to finished.
done