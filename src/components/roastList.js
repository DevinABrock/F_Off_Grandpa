import React from "react";

// ---------- Get Username -----------//

const save = localStorage.getItem('username');
const savedName = JSON.parse(save);


// ---------- Api URL and scores -----------//

const roasts = [
    {id: 0,
    key: `/asshole/from`,
    points: 32},
    {id: 1,
    key: `/bag/from`,
    points: 58},
    {id: 2,
    key: `/back/${savedName}/from`,
    points: 27},
    {id: 3,
    key: `/because/from`,
    points: 48},
    {id: 4,
    key: `/bday/${savedName}/from`,
    points: 10},
    {id: 5,
    key: `/blackadder/${savedName}/from`,
    points: 63},
    {id: 6,
    key: `/bye/from`,
    points: 17},
    {id: 7,
    key: `/cocksplat/${savedName}/from`,
    points: 79},
    {id: 8,
    key: `/cool/from`,
    points: 10},
    {id: 9,
    key: `/cup/from`,
    points: 57},
    {id: 10,
    key: `/deraadt/${savedName}/from`,
    points: 142},
    {id: 11,
    key: `/diabetes/from`,
    points: 78},
    {id: 12,
    key: `/donut/${savedName}/from`,
    points: 1},
    {id: 13,
    key: `/dosomething/Do/dougie/from`,
    points: 1},
    {id: 14,
    key: `/dumbledore/from`,
    points: 1},
    {id: 15,
    key: `/even/from`,
    points: 1},
    {id: 16,
    key: `/everyone/from`,
    points: 1},
    {id: 17,
    key: `/everything/from`,
    points: 1},
    {id: 18,
    key: `/family/from`,
    points: 1},
    {id: 19,
    key: `/fascinating/:from`,
    points: 1},
    {id: 20,
    key: `/fewer/${savedName}/from`,
    points: 1},
    {id: 21,
    key: `/field/${savedName}/the/reference`,
    points: 1},
    {id: 22,
    key: `/flying/from`,
    points: 1},
    {id: 23,
    key: `/ftfy/from`,
    points: 1},
    {id: 24,
    key: `/fts/${savedName}/from`,
    points: 1},
    {id: 25,
    key: `/fyyff/from`,
    points: 1},
    {id: 26,
    key: `/gfy/${savedName}/from`,
    points: 1},
    {id: 27,
    key: `/give/from`,
    points: 1},
    {id: 28,
    key: `/holygrail/from`,
    points: 1},
    {id: 29,
    key: `/horse/from`,
    points: 1},
    {id: 30,
    key: `/immensity/from`,
    points: 1},
    {id: 31,
    key: `/ing/${savedName}/from`,
    points: 1},
    {id: 32,
    key: `/jinglebells/from`,
    points: 1},
    {id: 33,
    key: `/keep/${savedName}/from`,
    points: 1},
    {id: 34,
    key: `/life/from`,
    points: 1},
    {id: 35,
    key: `/linus/${savedName}/from`,
    points: 1},
    {id: 36,
    key: `/logs/from`,
    points: 1},
    {id: 37,
    key: `/look/${savedName}/from`,
    points: 1},
    {id: 38,
    key: `/looking/from`,
    points: 1},
    {id: 39,
    key: `/lowpoly/from`,
    points: 1},
    {id: 40,
    key: `/madison/${savedName}/from`,
    points: 1},
    
]

export default roasts