<?php

for ($i = 0; $i < 10 ; $i++) {
    $a[] = rand(0, 20);
}

print_r($a);

for ($i = 0; $i < count($a); $i++ ) {
    
    for ($j = $i+1; $j < count($a); $j++) {
        if ($a[$j] < $a[$i]) {
            $key = $a[$i];
            $a[$i] = $a[$j];
            $a[$j] = $key;
        }
    }
}

print_r($a);

