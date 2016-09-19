'use strict';

var PentagoTestCase = TestCase("PentagoTestCase");

var e = new Engine();

//A la création du jeu, le plateau est totalement vide. Le nombre de billes est zéro.
PentagoTestCase.prototype.testStory1 = function () {

    var b1 = e.get_nbBilles();
    assertEquals(b1,0);

    for(var i=0; i<2; i++){
        for(var j=0; j<2; j++){
            for(var k=0; k<3; k++){
                for(var l=0; l<3; l++){
                    var p1 = e.get_Plateau()[i][j][k][l];
                    assertEquals(p1,0);
                }
            }
        }
    }
};

//Le joueur blanc commence.
PentagoTestCase.prototype.testStory2 = function () {

    var game = e.get_Tour();
    assertEquals(game,1);
};


//Le joueur blanc place une bille blanche (marble) sur l’emplacement en haut à gauche. Cet emplacement est noté : ’a1’. ’a’ correspond à la colonne et ’1’ à la ligne.
PentagoTestCase.prototype.testStory3 = function () {

    e.addBille();
    console.log("Placement de la bille : "+e.get_Plateau())
};

//Le nombre de billes sur le plateau est égal à 1.
PentagoTestCase.prototype.testStory4 = function () {

    var b1 = e.get_nbBilles();
    assertEquals(b1,1);
};

//Le joueur blanc réalise une rotation à 90◦ dans le sens des aiguilles d’une montre du plateau supérieur gauche. La bille placée en a1 est maintenant en c1.
PentagoTestCase.prototype.testStory5 = function () {

    e.rotate();
    console.log("Rotation : "+e.get_Plateau());
};

//C’est au joueur noir de jouer.
PentagoTestCase.prototype.testStory6 = function () {

    var game2 = e.get_Tour();
    assertEquals(game2,2);

};

//Le joueur noir place une bille en a1. Une bille noire est maintenant en a1 et deux billes sont sur le plateau.
PentagoTestCase.prototype.testStory7 = function () {

    e.addBille();
    var p = e.get_Plateau()[0][0][0][0];
    assertEquals(p,2);
    var b = e.get_nbBilles();
    assertEquals(b,2);

};

//Le joueur noir fait une rotation anti-horaire au plateau supérieur gauche. La bille blanche est de nouveau en a1 et la bille noire en a3.
PentagoTestCase.prototype.testStory8 = function () {

    e.rotate();
    var p = e.get_Plateau()[0][0][0][0];
    assertEquals(p,1);
    var p = e.get_Plateau()[0][0][0][3];
    assertEquals(p,2);


};