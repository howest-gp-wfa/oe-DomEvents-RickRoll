"use strict";

//declare global vars here
var divPicture;
//declare HTMl elements binding

//wait for document load
window.addEventListener("load",Initialize);

/**
 * initialiseer de nodige element(en)
 */
function Initialize()
{
    divPicture = document.getElementById("divPicture");
    let imgs = divPicture.getElementsByTagName("img");
    for(let i = 0;i < imgs.length;i++)
    {
        imgs[i].addEventListener("mouseover",ShowPieceOfRick);
        imgs[i].addEventListener("mouseout",HidePieceOfRick);
        imgs[i].addEventListener("click",FixPieceOfRick);
        imgs[i].addEventListener("dblclick",ReactivatePieceOfRick);
    }
    //document.getElementById("pos1").src = `img/${this.id}.jpg`;
}

/**
 * deze functie moet een stukje rick tonen
 * Wanneer we met de muisaanwijzer over een vakje gaan
 */
function ShowPieceOfRick()
{
    this.src = `img/${this.id}.jpg`;
}

/**
 * deze functie moet een stukje Rick weer doen verdwijnen
 * wanneer de muisaanwijzer het vakje verlaat
 */
function HidePieceOfRick()
{
    this.src = "";
}
/**
 * deze functie moet een stukje rick vastzetten
 * wanneer we 1 muislkik uitvoeren
 */
function FixPieceOfRick()
{
    this.removeEventListener("mouseover",ShowPieceOfRick);
    this.removeEventListener("mouseout",HidePieceOfRick);
}
/**
 * deze functie moet een stukje Rick weer losmaken
 * wanneer we een dubbelle muisklik uitvoeren
 */
function ReactivatePieceOfRick()
{
    this.src = "";
    this.addEventListener("mouseover",ShowPieceOfRick);
    this.addEventListener("mouseout",HidePieceOfRick);
}


