module.exports = function xmaslag(mod) {
    mod.hook('S_SPAWN_NPC', 11, (event) =>{
        if(event.huntingZoneId == 183 && (event.templateId == 9001 || event.templateId == 9002|| event.templateId == 9003)) return false;
    });
}


// 9001 xmas presents |  9002 xmas tree | 9003 idk | 


