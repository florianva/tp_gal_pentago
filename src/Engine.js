'use strict';

var Engine = function () {

// private attributes and methods

    var private_nbBilles = 0;
    var private_Plateau = new Array;
    var new_Plateau = new Array;
    var private_iselect = 1;
    var private_jselect = 1;
    var private_kselect;
    var private_lselect;


// public methods

    //Initialisation de la liste des joueurs
    this.listeJoueurs = {
        VIDE : 0,
        BLANC : 1,
        NOIR : 2
    }

    //Initialisation des tableaux
    for(var i=0; i<2; i++){
        private_Plateau[i]=new Array();
        new_Plateau[i]=new Array();
        for(var j=0; j<2; j++){
            private_Plateau[i][j]= new Array();
            new_Plateau[i][j]=new Array();
            for(var k=0; k<3; k++){
                private_Plateau[i][j][k] = new Array();
                new_Plateau[i][j][k]=new Array();
                for(var l=0; l<3; l++){
                    private_Plateau[i][j][k][l] = this.listeJoueurs.VIDE;
                    new_Plateau[i][j][k][l] = this.listeJoueurs.VIDE;
                }
            }
        }
    }



    //Fonction d'ajoût d'une bille sur le plateau
    this.addBille = function () {

        var position = prompt(this.get_Tour()+" : quelle case ?");
        var posascii = position.charCodeAt(0);

        var ord = position.charAt(1);

        if (posascii < 100) {
            this.set_iselect(0);
            this.set_kselect(posascii - 97);
        } else {
            this.set_iselect(1);
            this.set_kselect(posascii - 97 - 3);
        }

        if (ord < 4) {
            this.set_jselect(0);
            this.set_lselect(ord - 1);
        } else {
            this.set_jselect(1);
            this.set_lselect(ord - 4);
        }

        console.log("i = " + this.get_iselect() + " j = " + this.get_jselect() + " k = " + this.get_kselect() + " l = " + this.get_lselect());
        private_Plateau[this.get_iselect()][this.get_jselect()][this.get_kselect()][this.get_lselect()]=this.get_Tour();
        this.set_Plateau(private_Plateau);
        this.set_nbBilles(private_nbBilles + 1);
    };


    //Fonction de récupération du numéro de joueur qui doit jouer
    this.get_Tour = function(){

        if(this.get_nbBilles() == 0) {
            return this.listeJoueurs.BLANC;
        }else{
            if(this.get_nbBilles() % 2 == 0) {
                return this.listeJoueurs.BLANC;
            }else {
                return this.listeJoueurs.NOIR;
            }
        }
    };


    //fonction de rotation du plateau selectionné
    this.rotate = function () {

        for(var i=0; i<2; i++) {
            for (var j = 0; j < 2; j++) {
                for (var k = 0; k < 3; k++) {
                    for (var l = 0; l < 3; l++) {
                        if (i == this.get_iselect() && j == this.get_jselect()) {
                            new_Plateau[i][j][k][l] = this.get_Plateau()[i][j][2 - l][k];
                        }else{
                            new_Plateau[i][j][k][l] = this.get_Plateau()[i][j][k][l];
                        }
                    }
                }
            }
        }
        this.set_Plateau(new_Plateau);
    };





//getters and setters

    //nbBIlles
    this.get_nbBilles = function() {
        return private_nbBilles;
    };
    this.set_nbBilles = function(new_nbBilles) {
        private_nbBilles = new_nbBilles;
    };

    //Plateau
    this.get_Plateau = function() {
        return private_Plateau;
    };
    this.set_Plateau = function(new_Plateau) {
        private_Plateau = new_Plateau;
    };

    //dimension i
    this.get_iselect = function() {
        return private_iselect;
    };
    this.set_iselect = function(new_iselect) {
        private_iselect = new_iselect;
    };

    //dimension j
    this.get_jselect = function() {
        return private_jselect;
    };
    this.set_jselect = function(new_jselect) {
        private_jselect = new_jselect;
    };

    //dimension k
    this.get_kselect = function() {
        return private_kselect;
    };
    this.set_kselect = function(new_kselect) {
        private_kselect = new_kselect;
    };

    //dimension l
    this.get_lselect = function() {
        return private_lselect;
    };
    this.set_lselect = function(new_lselect) {
        private_lselect = new_lselect;
    };


}
