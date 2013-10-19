function updateDataTime(me) {
  // If the time direction isn't up (random map), check for timing
  if(me.dir != 1) {
    if(me.amount == 100) playCurrentThemeHurry(); 
    else if(me.amount <= 0) killMario(mario, true);
  }
  // If time is still enabled, change it by 1
  if(!notime) {
    map.time = me.amount += me.dir;
    updateDataElement(me);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> e5074206c4a02ca09431991f2cb883fd71fb2eac

//


function pushPreSectionPass(xloc, yloc, width, height, secnum) {
  var passer = pushPreThing(Collider, xloc, yloc, [width, height], [sectionPass, sectionColliderInit]).object,
      secnum = map.area.sections.current || 0,
      section = map.area.sections[secnum];
  
  if(section.numpass) ++section.numpass;
  else section.numpass = 1;
  
  if(!section.colliders) section.colliders = [passer];
  else section.colliders.push(passer);
}
