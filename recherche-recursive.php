<?php

//On appelle aussi cet algo recherche dichotomique

$a = [1, 3, 5 ,7 ,9 ,12 ,18];

$e = recursif($a, 7, 0, count($a)-1);

printf($e);

function recursif($a, $number, $start, $end) {

    if ($start > $end) {
        return "le nombre n'existe pas";
    }

    $mid = floor(($start+ $end) / 2);

    if ($number === $a[$mid]) {
        return "trouvé !!!";
    }

    if ($number < $a[$mid]) {
        return recursif($a, $number, $start, $a[$mid-1]);

    } else {
        return recursif($a, $number, $a[$mid+1], $end);
    }
}

//On peut également faire cette recherche avec une boucle while

$start = 0;
$end = count($a)-1;
$msg = "le nombre n'existe pas";
$number = 21;

while ($end >= $start) {
    
    $mid = floor(($start+ $end) / 2);

    if ($number === $a[$mid]) {
        $msg = "trouvé !!!";
        break;
    }

    if ($number < $a[$mid]) {
        $end = $mid - 1;

    } else {
        $start = $mid + 1;
    }
}

echo $msg;