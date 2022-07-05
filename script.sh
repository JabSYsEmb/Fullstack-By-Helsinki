#!/bin/bash

run=true;

index=15
while $run;
do
  status=$(curl -I https://www.sahibinden.com/ | head -n 1| cut -d$' ' -f2);
  if [ $status = "200" ]
  then
    curl -H "Content-Type: application/json" -X GET "https://www.sahibinden.com/ajax/boundary/Quarter/$index?version=1631889873883" > response.tmp
    cityId=$(cat response.tmp | sed "s/.*cityId\"://" | sed "s/,.*//")
    townId=$(cat response.tmp | sed "s/.*townId\"://" | sed "s/,.*//")
    districtId=$(cat response.tmp | sed "s/.*districtId\"://" | sed "s/,.*//")
    quarterId=$(cat response.tmp | sed "s/.*quarterId\"://" | sed "s/,.*//")
    echo $cityId
    echo "city: ${cityId} - quarterId: ${quarterId} has been downloaded"
    cat response.tmp >> ./turkiye/polygons/${cityId}_${townId}_${districtId}_${quarterId}.json
    index=$(( $index + 1 ));
    sleep 30;
  else
    echo "I got blocked fuck sahibinden.com";
    echo "stopped at ${index} index";
    # rm ./mahalleles/mahalle_$(($index - 1)).txt;
    run=false;
  fi
done

# cityId=$(cat response | sed "s/.*cityId\"://" | sed "s/,.*//")
# townId=$(cat response| sed "s/.*townId\"://" | sed "s/,.*//")
# districtId=$(cat response| sed "s/.*districtId\"://" | sed "s/,.*//")
# quarterId=$(cat response| sed "s/.*quarterId\"://" | sed "s/,.*//")
