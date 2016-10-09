/*jslint browser: true */
/*global window*/
var Engine = function () {
    "use strict";

    var private_nb_billes = 0;
    var private_plateau = [];

    var private_iselect = 1;
    var private_jselect = 1;
    var private_kselect;
    var private_lselect;
    var console = window.console;
    var prompt = window.prompt;

    this.listeJoueurs = {
        VIDE: 0,
        BLANC: 1,
        NOIR: 2
    };

    this.reset_plateau = function (plateau) {
        var dimens_i;
        var dimens_j;
        for (dimens_i = 0; dimens_i < 2; dimens_i += 1) {
            plateau[dimens_i] = [];
            for (dimens_j = 0; dimens_j < 2; dimens_j += 1) {
                plateau[dimens_i][dimens_j] = [];
                this.reset_sous_plateau(plateau, dimens_i, dimens_j);
            }
        }
    };

    this.reset_sous_plateau = function (plateau, dimens_i, dimens_j) {
        var dimens_k;
        var dimens_l;
        for (dimens_k = 0; dimens_k < 3; dimens_k += 1) {
            plateau[dimens_i][dimens_j][dimens_k] = [];
            for (dimens_l = 0; dimens_l < 3; dimens_l += 1) {
                plateau[dimens_i][dimens_j][dimens_k][dimens_l] = this.listeJoueurs.VIDE;
            }
        }
    };


    this.abscisse = function (posascii) {
        if (posascii < 100) {
            this.set_iselect(0);
            this.set_lselect(posascii - 97);
        } else {
            this.set_iselect(1);
            this.set_lselect(posascii - 97 - 3);
        }
    };
    this.ordonnee = function (ord) {
        if (ord < 4) {
            this.set_jselect(0);
            this.set_kselect(ord - 1);
        } else {
            this.set_jselect(1);
            this.set_kselect(ord - 4);
        }
    };


    this.bille_here_exception = function (message) {
        this.message = message;
        console.log(this.message);
    };


    this.bille_placement = function (dimens_i, dimens_j, dimens_k, dimens_l) {

        console.log("i = " + dimens_i + " j = " + dimens_j);
        console.log("k = " + dimens_k + " l = " + dimens_l);

        if (this.get_plateau()[dimens_i][dimens_j][dimens_k][dimens_l] === this.listeJoueurs.VIDE) {
            private_plateau[dimens_i][dimens_j][dimens_k][dimens_l] = this.get_tour();
            this.set_plateau(private_plateau);
            this.set_nb_billes(private_nb_billes + 1);
        } else {
            throw new this.bille_here_exception("Une bille est deja placee");
        }
    };


    this.add_bille = function () {

        var position = prompt(this.get_tour() + " : quelle case ?");
        var posascii = position.charCodeAt(0);
        var ord = position.charAt(1);

        this.abscisse(posascii);
        this.ordonnee(ord);

        var dimens_i = this.get_iselect();
        var dimens_j = this.get_jselect();
        var dimens_k = this.get_kselect();
        var dimens_l = this.get_lselect();

        this.bille_placement(dimens_i, dimens_j, dimens_k, dimens_l);
    };





    //Fonction de récupération du numéro de joueur qui doit jouer
    this.get_tour = function () {

        if (this.get_nb_billes() === 0) {
            return this.listeJoueurs.BLANC;
        } else {
            if (this.get_nb_billes() % 2 === 0) {
                return this.listeJoueurs.BLANC;
            } else {
                return this.listeJoueurs.NOIR;
            }
        }
    };

    this.set_rotate = function (new_plateau, rotation, dimens_i, dimens_j, dimens_k, dimens_l) {
        var i = dimens_i;
        var j = dimens_j;
        var k = dimens_k;
        var l = dimens_l;

        if (rotation === 1) {
            new_plateau[i][j][k][l] = this.get_plateau()[i][j][2 - l][k];
        } else {
            new_plateau[i][j][k][l] = this.get_plateau()[i][j][l][2 - k];
        }
    };

    this.rotate = function (rotation) {
        var new_plateau = [];
        var dimens_i = this.get_iselect();
        var dimens_j = this.get_jselect();
        var dimens_k;
        var dimens_l;
        this.reset_plateau(new_plateau);
        for (dimens_k = 0; dimens_k < 3; dimens_k += 1) {
            for (dimens_l = 0; dimens_l < 3; dimens_l += 1) {
                this.set_rotate(new_plateau, rotation, dimens_i, dimens_j, dimens_k, dimens_l);
            }
        }
        this.set_plateau(new_plateau);
    };


    this.get_nb_billes = function () {
        return private_nb_billes;
    };
    this.set_nb_billes = function (new_nb_billes) {
        private_nb_billes = new_nb_billes;
    };

    this.get_plateau = function () {
        return private_plateau;
    };
    this.set_plateau = function (new_plateau) {
        private_plateau = new_plateau;
    };

    this.get_iselect = function () {
        return private_iselect;
    };
    this.set_iselect = function (new_iselect) {
        private_iselect = new_iselect;
    };

    this.get_jselect = function () {
        return private_jselect;
    };
    this.set_jselect = function (new_jselect) {
        private_jselect = new_jselect;
    };

    this.get_kselect = function () {
        return private_kselect;
    };
    this.set_kselect = function (new_kselect) {
        private_kselect = new_kselect;
    };

    this.get_lselect = function () {
        return private_lselect;
    };
    this.set_lselect = function (new_lselect) {
        private_lselect = new_lselect;
    };


};
