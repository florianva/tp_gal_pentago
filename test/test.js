'use strict';

var PentagoTestCase = TestCase("PentagoTestCase");

var e = new Engine();

//A la création du jeu, le plateau est totalement vide. Le nombre de billes est zéro.
PentagoTestCase.prototype.testStory1 = function () {

    var b1 = e.get_nb_billes();
    assertEquals(b1,0);

    p1 = e.get_plateau()
    e.reset_plateau(p1)
    for(var i=0; i<2; i++){
        for(var j=0; j<2; j++){
            for(var k=0; k<3; k++){
                for(var l=0; l<3; l++){
                    var p1 = e.get_plateau()[i][j][k][l];
                    assertEquals(p1,0);
                }
            }
        }
    }
};

//Le joueur blanc commence.
PentagoTestCase.prototype.testStory2 = function () {

    var game = e.get_tour();
    assertEquals(game,1);
};


//Le joueur blanc place une bille blanche (marble) sur l’emplacement en haut à gauche. Cet emplacement est noté : ’a1’. ’a’ correspond à la colonne et ’1’ à la ligne.
PentagoTestCase.prototype.testStory3 = function () {

    e.add_bille("a1");
    console.log("Placement de la bille : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }
};

//Le nombre de billes sur le plateau est égal à 1.
PentagoTestCase.prototype.testStory4 = function () {

    var b1 = e.get_nb_billes();
    assertEquals(b1,1);
};

//Le joueur blanc réalise une rotation à 90◦ dans le sens des aiguilles d’une montre du plateau supérieur gauche. La bille placée en a1 est maintenant en c1.
PentagoTestCase.prototype.testStory5 = function () {

    e.rotate(1);
    console.log("Rotation : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }
};

//C’est au joueur noir de jouer.
PentagoTestCase.prototype.testStory6 = function () {

    var game2 = e.get_tour();
    assertEquals(game2,2);

};

//Le joueur noir place une bille en a1. Une bille noire est maintenant en a1 et deux billes sont sur le plateau.
PentagoTestCase.prototype.testStory7 = function () {

    e.add_bille("a1");
    var p = e.get_plateau()[0][0][0][0];
    assertEquals(p,2);
    var b = e.get_nb_billes();
    assertEquals(b,2);

    console.log("Deuxieme bille : ");
    for (var k = 0; k < 3; k++) {
            console.log(e.get_plateau()[0][0][k]);

    }

};

//Le joueur noir fait une rotation anti-horaire au plateau supérieur gauche. La bille blanche est de nouveau en a1 et la bille noire en a3.
PentagoTestCase.prototype.testStory8 = function () {

    e.rotate(2);
    console.log("Deuxieme rotation :");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }
    var plateau_blanc = e.get_plateau()[0][0][0][0];
    assertEquals(plateau_blanc,1);
    var plateau_noir = e.get_plateau()[0][0][2][0];
    assertEquals(plateau_noir,2);


};

PentagoTestCase.prototype.testStory9 = function () {

    try{
        e.add_bille("a3");
    }catch(e){
        assertTrue(true);
    }
    console.log("Troisieme bille : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }
};

PentagoTestCase.prototype.testStory10 = function (){
    e.add_bille("b1");
    e.rotate(1);
    console.log("Rotation : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }

    e.add_bille("a2");
    e.rotate(2);
    console.log("Rotation : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }
    e.add_bille("c1");
    e.rotate(1);
    console.log("Rotation : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }
    e.add_bille("a3");
    e.rotate(2);
    console.log("Rotation : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }
    e.add_bille("d1");
    e.rotate(2);
    console.log("Rotation : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[1][0][k]);

    }
    e.add_bille("f3");
    e.rotate(1);
    console.log("Rotation : ");
    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[1][0][k]);

    }


    var plateau_blanc_1 = e.get_plateau()[0][0][0][0];
    var plateau_blanc_2 = e.get_plateau()[0][0][0][1];
    var plateau_blanc_3 = e.get_plateau()[0][0][0][2];
    var plateau_blanc_4 = e.get_plateau()[1][0][0][0];

    var plateau_noir_1 = e.get_plateau()[0][0][2][0];
    var plateau_noir_2 = e.get_plateau()[0][0][2][1];
    var plateau_noir_3 = e.get_plateau()[0][0][2][2];
    var plateau_noir_4 = e.get_plateau()[1][0][2][0];

    for (var k = 0; k < 3; k++) {
        console.log(e.get_plateau()[0][0][k]);

    }

    assertEquals(plateau_blanc_1,1);
    assertEquals(plateau_blanc_2,1);
    assertEquals(plateau_blanc_3,1);
    assertEquals(plateau_blanc_4,1);

    assertEquals(plateau_noir_1,2);
    assertEquals(plateau_noir_2,2);
    assertEquals(plateau_noir_3,2);
    assertEquals(plateau_noir_4,2);



};