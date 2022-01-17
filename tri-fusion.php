<?php

//On génére un tableau non trié avec un nombre pair d'éléments
$tab = [];
$sizeTab = rand(50, 100);
if ($sizeTab % 2 !== 0) {
    $sizeTab--;
}

for ($i = 0; $i <= $sizeTab; $i++) {
    $tab[] = rand(1, 100);  
}
triFusion($tab);

print_r($tab);

function triFusion(&$tab) {

    //On crée 2 sous tableaux
    //Si le tableaux possède plus de 2 éléments
    if (count($tab) > 2) {

        //On crée 2 sous tableaux
        $tab1 = [];
        $tab2 = [];
        
        //On parcours le tableau et place les éléments dans les 2 sous-tableaux
        for ($i = 0; $i < count($tab); $i++) {
            //De 0 à la moitié(-1) du tableau, on enregistre dans $tab1
            if ($i < count($tab) / 2) {
                $tab1[] = $tab[$i];
            //De la moitié à la fin du tableau, on enregistre dans $tab2
            } else {
                $tab2[] = $tab[$i];
            }
        }
        
        //On rappelle la fonction(en récursif) pour rediviser $tab1
        triFusion($tab1);
        //On rappelle la fonction(en récursif) pour rediviser $tab2
        triFusion($tab2);

        //On fusionne $tab1 et $tab2 en les triant
        $tab = fusion($tab1, $tab2, $tab);
    }
    
}

function fusion($tab1, $tab2, &$tab) {
    $i = 0;
    $i1 = 0;
    $i2 = 0;

    //Fusionne les petits tableaux $tab1 et $tab2 dans le plus grand $tab tant que les indices sont plus petits que les longueurs de tableaux
    while ($i1 < count($tab1) && $i2 < count($tab2)) {
        
        //On compare les entrées des tableaux 1 et 2 et on enregistre le plus petits éléments dans le grand tableau
        if ($tab1[$i1] < $tab2[$i2]) {
            $tab[$i] = $tab1[$i1];
            $i1++;
        } else {
            $tab[$i] = $tab2[$i2];
            $i2++;
        }
    }

    //Si il reste des éléments dans 1 des 2 tableaux
    while ($i1 < count($tab1)) {
        $tab[$i] = $tab1[$i1];
        $i1++;
        $i++;
    }
    while ($i2 < count($tab2)) {
	    $tab[$i] = $tab2[$i2];
        $i2++;
	    $i++;
    }
}
